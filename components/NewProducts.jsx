import styled from 'styled-components'
import Center from './Center'
import ProductBox from './ProductBox'

const ProductsGrids = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
`
const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 30px 0px 20px;
`
export default function NewProducts({ products }) {
  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductsGrids>
        {products.map((product) => {
          return <ProductBox key={product._id} {...product} />
        })}
      </ProductsGrids>
    </Center>
  )
}
