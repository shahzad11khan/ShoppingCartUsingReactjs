import React, { useState } from 'react'
import './cart.css'
const ShoppingCart = ({ cartItems }) => {
  const remove =()=>{
    const re=document.getElementById('remove');
    re.remove();
  }
  return (
    <div>
      <h2>Shopping Cart </h2>
      <ul>
        {cartItems.map((item, index) => (
          <ul className='cart'  id='remove'>
          <li key={index}>{item.name}</li>
          <br />
          <li key={index}>{item.description}</li>
          <br/>
          <li><button onClick={remove}>Remove item</button></li>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart
