import "./cart-icon.styles.js";


import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles.js";

const CartIcon = () => {
  const {toggleIsCartDropdownOpen, cartCount} = useContext(CartContext)
  return (
    <CartIconContainer onClick={toggleIsCartDropdownOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
