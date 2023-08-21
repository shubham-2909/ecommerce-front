import React from 'react'
import Center from './Center'
import styled from 'styled-components'
import Button from './Button'
import ButtonLink from './ButtonLink'
import CartIcon from './icons/CartIcon'

const Bg = styled.div`
  background-color: #222;
  padding: 50px 0;
  color: #fff;
`

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 2.5rem;
`

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`

const ColumnsWrapper = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: 1.1fr 0.9fr;
  img {
    max-width: 100%;
    display: block;
  }
`

const Column = styled.div`
  display: flex;
  align-items: center;
`
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`
export default function Featured({ product }) {
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>
              <ButtonsWrapper>
                <ButtonLink
                  href={`/products/${product._id}`}
                  white={1}
                  outline={1}
                >
                  Read more
                </ButtonLink>
                <Button white={1}>
                  <CartIcon />
                  Add to Cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <div>
              <img
                src='https://149426355.v2.pressablecdn.com/wp-content/uploads/2021/10/mbp-2021-bbedit-lede.png'
                alt=''
              />
            </div>
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  )
}
