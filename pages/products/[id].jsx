import Button from '@/components/Button'
import { CartContext } from '@/components/CartContext'
import Center from '@/components/Center'
import Header from '@/components/Header'
import ProductImages from '@/components/ProductImages'
import CartIcon from '@/components/icons/CartIcon'
import { connectDB } from '@/lib/mongoose'
import { Product } from '@/models/Product'
import { useContext } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
`
const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  margin-top: 40px;
`
const WhiteBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`
const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`
export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext)
  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product.images} />
          </WhiteBox>
          <div>
            <Title>{product.title}</Title>
            <p>{product.description}</p>
            <PriceRow>
              <Price>${product.price}</Price>
              <div>
                <Button primary onClick={() => addProduct(product._id)}>
                  <CartIcon /> Add to Cart
                </Button>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
    </>
  )
}

export async function getServerSideProps(ctx) {
  await connectDB()
  const { id } = ctx.query
  const product = await Product.findById(id)
  return { props: { product: JSON.parse(JSON.stringify(product)) } }
}
