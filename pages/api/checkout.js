import { connectDB } from '@/lib/mongoose'
import { Order } from '@/models/Order'
import { Product } from '@/models/Product'
const stripe = require('stripe')(process.env.STRIPE_SK)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.json('Should be a post request')
    return
  }
  const { name, email, city, postalCode, streetAddress, country, cartItems } =
    req.body
  await connectDB()
  const productsIds = cartItems
  const uniqueIds = [...new Set(productsIds)]
  const productInfos = await Product.find({ _id: uniqueIds })
  let line_items = []

  for (const productId of uniqueIds) {
    const productInfo = productInfos.find((p) => p._id.toString() === productId)
    const quantity = productsIds.filter((id) => id === productId).length

    if (quantity > 0 && productInfo) {
      line_items.push({
        quantity,
        price_data: {
          currency: 'USD',
          product_data: { name: productInfo.title },
          unit_amount: productInfo.price * 100,
        },
      })
    }
  }
  const orderDoc = await Order.create({
    line_items,
    name,
    email,
    city,
    postalCode,
    streetAddress,
    country,
    paid: false,
  })

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    customer_email: email,
    success_url: `${process.env.PUBLIC_URL}/cart?success=1`,
    cancel_url: `${process.env.PUBLIC_URL}/cart?canceled=1`,
    metadata: { orderId: orderDoc._id.toString() },
  })
  res.json({ url: session.url })
}
