import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-iitem.component";
import "./cart-dropdown.styles.js";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles.js";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
        <Button onClick={goToCheckoutHandler}>GO TO CHECK OUT</Button>
      </CartItems>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
