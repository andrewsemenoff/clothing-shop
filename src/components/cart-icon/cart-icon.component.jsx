import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const {toggleIsCartDropdownOpen} = useContext(CartContext)
  return (
    <div className="cart-icon-container" onClick={toggleIsCartDropdownOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
