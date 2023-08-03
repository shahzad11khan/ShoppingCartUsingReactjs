import React from 'react'
import ProductItem from './ProductItem';
const ProductList = ({ products, addToCart }) => {
  return (
    <div>
       <h2>Product List </h2>
      <ul>
        {products.map(product => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  )
}

export default ProductList
