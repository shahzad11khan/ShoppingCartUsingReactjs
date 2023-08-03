import React from "react";
import './cart.css'
const Product = ({ product, onAddToCart }) => {
  return (
    <div className="cart">
      <h3>{product.name}</h3>
      <image src={product.image}/>
    <h5>{product.price}</h5>
      <p style={{margin:'20px'}}>{product.description}</p>
      <button onClick={() => onAddToCart(product)} style={{margin:'20px'}}>Add to Cart</button>
    </div>
  );
};
export default Product;