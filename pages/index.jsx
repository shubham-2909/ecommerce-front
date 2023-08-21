import Featured from '@/components/Featured'
import Header from '@/components/Header'
import NewProducts from '@/components/NewProducts'
import { connectDB } from '@/lib/mongoose'
import { Product } from '@/models/Product'

export default function Home({ product, newProducts }) {
  return (
    <div>
      <Header />
      <Featured product={product} />
      <NewProducts products={newProducts} />
    </div>
  )
}

export async function getServerSideProps() {
  const featuredProductId = '64e0b590e09aa7d32173773e'
  await connectDB()
  const featuredProduct = await Product.findById(featuredProductId)
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  })
  return {
    props: {
      product: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  }
}
