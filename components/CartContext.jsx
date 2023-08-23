import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({})

export function CartContextProvider({ children }) {
  const ls = typeof window !== 'undefined' ? window.localStorage : null
  const [cartItems, setCartItems] = useState([])
  useEffect(() => {
    if (cartItems?.length > 0) {
      ls?.setItem('cart', JSON.stringify(cartItems))
    }
  }, [cartItems])
  useEffect(() => {
    if (ls && ls.getItem('cart')) {
      setCartItems(JSON.parse(ls?.getItem('cart')))
    }
  }, [])
  function addProduct(productId) {
    setCartItems((prev) => [...prev, productId])
  }
  function removeProduct(productId) {
    setCartItems((prev) => {
      const pos = cartItems.indexOf(productId)
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos)
      }
      return prev
    })
  }
  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addProduct, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  )
}
