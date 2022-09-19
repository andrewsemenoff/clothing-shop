import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CheckoutItemContainer, ImageContainer, Quantity, RemoveButton, StyledSpan } from "./checkoutItem.styles.js";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const { addItemToCart, deleteCartItem, decreaseCartItem } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const clearItemHandler = () => deleteCartItem(cartItem);
  const removeItemHandler = () => decreaseCartItem(cartItem);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <StyledSpan>{name}</StyledSpan>
      <Quantity>
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </Quantity>
      <StyledSpan className="price">{price}</StyledSpan>
      <RemoveButton onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
