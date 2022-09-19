import React, { useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { Footer, ProductCardContainer } from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => {
    addItemToCart(product);
  };
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
