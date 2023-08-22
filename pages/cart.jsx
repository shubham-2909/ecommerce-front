import Button from '@/components/Button'
import { CartContext } from '@/components/CartContext'
import Center from '@/components/Center'
import Header from '@/components/Header'
import { useContext } from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Table from '@/components/Table'
import Input from '@/components/Input'

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 40px;
  margin-top: 40px;
`

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`
const ProductInfoCell = styled.td`
  padding: 10px 0;
`

const ProductImageBox = styled.div`
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  img {
    max-width: 100px;
    max-height: 100px;
  }
`

const QuantityLabel = styled.span`
  padding: 0 5px;
`

const InputHolder = styled.div`
  display: flex;
  gap: 5px;
`
export default function CartPage() {
  const { cartItems, addProduct, removeProduct } = useContext(CartContext)
  const [products, setProducts] = useState([])
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [City, setCity] = useState('')
  const [PostalCode, setPostalCode] = useState('')
  const [StreetAddress, setStreetAddress] = useState('')
  const [Country, setCountry] = useState('')
  useEffect(() => {
    if (cartItems?.length > 0) {
      axios.post('/api/cart', { ids: cartItems }).then((response) => {
        setProducts(response.data)
      })
    } else {
      setProducts([])
    }
  }, [cartItems])

  function moreofThisProduct(id) {
    addProduct(id)
  }
  function lessOfThisProduct(id) {
    removeProduct(id)
  }
  let total = 0
  for (const productId of cartItems) {
    const price =
      products.find((product) => product._id === productId)?.price || 0
    total += price
  }
  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>
            <h2>Cart</h2>
            {!cartItems?.length && <div>Your Cart is Empty</div>}
            {products.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => {
                    return (
                      <tr key={product._id}>
                        <ProductInfoCell>
                          <ProductImageBox>
                            <img src={product.images[0]} alt='product image' />
                          </ProductImageBox>
                          {product.title}
                        </ProductInfoCell>
                        <td>
                          <Button
                            onClick={() => lessOfThisProduct(product._id)}
                          >
                            -
                          </Button>
                          <QuantityLabel>
                            {
                              cartItems.filter((item) => item === product._id)
                                .length
                            }
                          </QuantityLabel>
                          <Button
                            onClick={() => moreofThisProduct(product._id)}
                          >
                            +
                          </Button>
                        </td>
                        <td>
                          $
                          {cartItems.filter((item) => item === product._id)
                            .length * product.price}
                        </td>
                      </tr>
                    )
                  })}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>${total}</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Box>
          {cartItems?.length > 0 && (
            <Box>
              <h2>Order Information</h2>
              <form method='POST' action='/api/checkout'>
                <Input
                  type='text'
                  placeholder='Name'
                  name='Name'
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  type='text'
                  placeholder='Email'
                  name='Email'
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputHolder>
                  <Input
                    type='text'
                    placeholder='City'
                    name='City'
                    value={City}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <Input
                    type='text'
                    placeholder='PostalCode'
                    name='PostalCode'
                    value={PostalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </InputHolder>
                <Input
                  type='text'
                  placeholder='Street Address'
                  name='StreetAddress'
                  value={StreetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                />
                <Input
                  type='text'
                  placeholder='Country'
                  name='Country'
                  value={Country}
                  onChange={(e) => setCountry(e.target.value)}
                />
                <Button block={1} black={1} primary={1}>
                  Continue to Payment
                </Button>
              </form>
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
    </>
  )
}
