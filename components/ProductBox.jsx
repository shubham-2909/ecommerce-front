import styled from 'styled-components'
import Button from './Button'
import CartIcon from './icons/CartIcon'
import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from './CartContext'

const ProductWrapper = styled.div``
const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    height: 120px;
    object-fit: contain;
  }
`
const Title = styled(Link)`
  font-weight: normal;
  font-size: 1rem;
  color: inherit;
  font-weight: 600;
  text-decoration: none;
  margin: 0;
`
const ProductInfoBox = styled.div`
  margin-top: 5px;
`
const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`
const Price = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
`
export default function ProductBox({ _id, title, description, price, images }) {
  const { addProduct } = useContext(CartContext)
  const url = `/products/${_id}`
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={images[0]} />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>${price}</Price>
          <Button primary={1} onClick={() => addProduct(_id)}>
            <CartIcon />
            Add to Cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  )
}
