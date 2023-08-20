import Featured from '@/components/Featured'
import Header from '@/components/Header'
import { connectDB } from '@/lib/mongoose'
import { Product } from '@/models/Product'

export default function Home({ product }) {
  return (
    <div>
      <Header />
      <Featured product={product} />
    </div>
  )
}

export async function getServerSideProps() {
  const featuredProductId = '64e0b590e09aa7d32173773e'
  await connectDB()
  const featuredProduct = await Product.findById(featuredProductId)
  return { props: { product: JSON.parse(JSON.stringify(featuredProduct)) } }
}
