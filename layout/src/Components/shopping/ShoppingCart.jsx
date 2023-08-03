import React from 'react'

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  return (
    <div style={{margin:'auto',alignItems:'center'}}>
    <h2>Shopping Cart</h2>
      {cartItems.map(item => (
     <ul style={{border:'2px solid green',float:'left', marginTop:'10px',marginLeft:'5px'}}>
        <li key={item.id}>
          <span>{item.name}</span>
        </li>
        <li> <button onClick={() => removeFromCart(item)}>Remove</button></li> 
    </ul>
      ))}
  </div>
  )
}

export default ShoppingCart
