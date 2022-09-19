import React, { createContext, useEffect, useState } from "react";

const addCardItem = (cartItems, productToAdd) => {
  const index = cartItems.findIndex((item) => item.id === productToAdd.id);
  if (index > -1) {
    const itemToUpdate = { ...cartItems[index] };
    itemToUpdate.quantity += 1;
    const updatedCartItems = [...cartItems];
    updatedCartItems[index] = itemToUpdate;
    return updatedCartItems;
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
  deleteCartItem: () => {},
  decreaseCartItem: () => null,
  totalPrice: 0,
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
  const decreaseCartItem = (productToUpdate) => {
    const updatedCartItems = cartItems.map((product) => {
      return product.id === productToUpdate.id && product.quantity > 0
        ? { ...product, quantity: product.quantity - 1 }
        : product;
    });
    setCartItems(updatedCartItems);
  };
  const deleteCartItem = (productToDelete) => {
    const updatedCartItems = cartItems.filter(
      (product) => product.id !== productToDelete.id
    );
    setCartItems(updatedCartItems);
  };
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(count);
  }, [cartItems]);
  useEffect(() => {
    const totalPrice = cartItems.reduce((total, cartItem) => {
      return total + cartItem.price * cartItem.quantity;
    }, 0);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const value = {
    isCartDropdownOpen,
    toggleIsCartDropdownOpen,
    cartItems,
    addItemToCart,
    cartCount,
    deleteCartItem,
    decreaseCartItem,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
