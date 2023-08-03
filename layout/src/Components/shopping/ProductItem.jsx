import React from 'react'

const ProductItem = ({ product, addToCart }) => {
    return (
        <div>    
            <h1>Product List</h1> 
               <ul style={{display:'inline-block'}}>
            {
                product.map((product) => {
                    return(
                    <>
                    <ul style={{border:'2px solid green',float:'left', marginTop:'10px'}}>
               <li >
                {product.name}
               </li>
               <li>
               <button onClick={() => addToCart(product)}>Add to Cart</button>
               </li>
               </ul>
               </>

                 ) })
            }
        </ul>

        </div>
    )
}

export default ProductItem
