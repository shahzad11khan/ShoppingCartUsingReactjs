import React,{useState} from 'react'
import Product from './Product';
import ShoppingCart from './ShoppingCart';
import pic1 from '../images/1.png'
import pic2 from '../images/2.png'
import pic3 from '../images/3.png'
import pic4 from '../images/4.png'


const Instruction = () => {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    { id: 1, name: 'Bag', description: 'Description', price:'200$',image:pic1},
    { id: 2, name: 'Laptop', description: 'Description', image:pic2, price:'100$',image:pic1 },
    // Add more products here
  ];

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };
  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
      <ShoppingCart cartItems={cartItems} />
    </div>
  )
}

export default Instruction
