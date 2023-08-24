import styled from 'styled-components'
import ProductBox from './ProductBox'

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
`
export default function ProductsGrid({ products }) {
  return (
    <StyledProductsGrid>
      {products.map((product) => {
        return <ProductBox key={product._id} {...product} />
      })}
    </StyledProductsGrid>
  )
}
