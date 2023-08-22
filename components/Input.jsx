import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  box-sizing: border-box;
  padding: 7px;
  margin-bottom: 10px;
  border-radius: 5px;
`
export default function Input(props) {
  return <StyledInput {...props} />
}
