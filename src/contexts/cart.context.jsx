import React, { createContext, useEffect, useState } from "react";

const addCardItem = (cartItems, productToAdd) => {
  const index = cartItems.findIndex((item) => item.id === productToAdd.id);
  if (index > -1) {
    const itemToUpdate = { ...cartItems[index] };
    itemToUpdate.quantity += 1;
    const updatedCardItems = [...cartItems];
    updatedCardItems[index] = itemToUpdate;
    return updatedCardItems;
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];

  // const existedItem = cartItems.find((item) => item.id === productToAdd.id);
  // if (existedItem) {
  //   return cartItems.map((item) =>
  //     item.id === productToAdd.id
  //       ? { ...item, quantity: item.quantity + 1 }
  //       : item
  //   );
  // }
  // return [...cartItems, {...productToAdd, quantity: 1}]
};

export const CartContext = createContext({
  isCartDropdownOpen: false,
  toggleIsCartDropdownOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  increaseCartCount: () => {},
});

const CartProvider = ({ children }) => {
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const toggleIsCartDropdownOpen = () => {
    setIsCartDropdownOpen((prev) => !prev);
  };
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCardItem(cartItems, productToAdd));
  };
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const count =cartItems.reduce((total, cartItem)=>total + cartItem.quantity, 0 )
    setCartCount(count);
  }, [cartItems])
   
  const value = {
    isCartDropdownOpen,
    toggleIsCartDropdownOpen,
    cartItems,
    addItemToCart,
    cartCount
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
