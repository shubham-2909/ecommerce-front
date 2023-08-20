import Link from 'next/link'
import styled from 'styled-components'
import Center from './Center'

const StyledHeader = styled.header`
  background-color: #222;
`
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`

const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
`

const StyledLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
`
export default function Header() {
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={`/`}>Ecommerce</Logo>
          <StyledNav>
            <StyledLink href={`/`}>Home</StyledLink>
            <StyledLink href={`/products`}>All products</StyledLink>
            <StyledLink href={`/categories`}>Categories</StyledLink>
            <StyledLink href={`/account`}>Accounts</StyledLink>
            <StyledLink href={`/cart`}>Cart (0)</StyledLink>
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  )
}
