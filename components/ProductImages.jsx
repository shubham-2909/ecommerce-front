import styled from 'styled-components'
import { useState } from 'react'
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`
const BigImage = styled.img`
  max-width: 100%;
  max-height: 200px;
`
const ImageButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-grow: 0;
  margin-top: 10px;
`
const ImageButton = styled.div`
  border: 2px solid #ccc;
  ${(props) =>
    props.active
      ? `
  border-color: #ccc
  `
      : `
   border-color:transparent;
  `}

  border-radius: 5px;
  height: 60px;
  padding: 2px;
  cursor: pointer;
`
const BigImageWrapper = styled.div`
  text-align: center;
`
export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0])
  return (
    <>
      <BigImageWrapper>
        <BigImage src={activeImage} alt='product image' />
      </BigImageWrapper>
      <ImageButtons>
        {images.map((image) => (
          <ImageButton
            key={image}
            onClick={() => setActiveImage(image)}
            active={image === activeImage}
          >
            <Image src={image} alt='product image' />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  )
}
