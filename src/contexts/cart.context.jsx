import React, { createContext, useState } from 'react'

export const CartContext = createContext({
    productsInCart: [],
    isCartDropdownOpen: false,
    toggleIsCartDropdownOpen: ()=>null
});

const CartProvider = ({children}) => {
const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
const toggleIsCartDropdownOpen =()=>{
    setIsCartDropdownOpen(prev=>!prev);
}
const value = {isCartDropdownOpen, toggleIsCartDropdownOpen}
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}

export default CartProvider