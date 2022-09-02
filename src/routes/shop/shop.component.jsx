import './shop.styles.scss';
import React, { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import {ProductsContext } from "../../contexts/products.context";

const Shop =()=>{
  const {products} = useContext(ProductsContext);
    return (
      <div className="products-container">
        {products.map(p => <ProductCard product={p} key={p.id}/>)}
      </div>
    )
  }

export default Shop;