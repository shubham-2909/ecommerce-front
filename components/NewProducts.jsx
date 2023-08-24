import styled from 'styled-components'
import Center from './Center'
import ProductBox from './ProductBox'
import ProductsGrid from './ProductsGrid'
const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 30px 0px 20px;
`
export default function NewProducts({ products }) {
  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductsGrid products={products} />
    </Center>
  )
}
