import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Read from './Components/Read';
import Update from './Components/Update';
import { ToastContainer } from 'react-toastify';
import Instruction from './Components/Instruction';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Arry from './Components/Arry';
import PostApi from './Components/PostApi';
// import ProductList from './Components/shopping/ProductList';
import ShoppingCart from './Components/shopping/ShoppingCart';
import ProductItem from './Components/shopping/ProductItem';
function App() {
  //
  const [cartItems, setCartItems] = useState([]);
  
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
    { id: 5, name: 'Product 5' },
    { id: 6, name: 'Product 6' },
    { id: 7, name: 'Product 7' },

  ];


  const addToCart = product => {
    setCartItems(prevCartItems => [...prevCartItems, product]);
    
  };

  const removeFromCart = product => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== product.id));
  };
  //

    return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer position='top-right' />
        <Header />
        <Routes>
          <Route path='/read' element={<Read />} />
          <Route path='/' element={<Instruction />} />
          <Route path='/insert' element={<Home />} />
          <Route path='/read/update/:id' element={<Update />} />
        <Route path='/pro' element={  <ProductItem key={products.id} product={products} addToCart={addToCart} /> }/>
        <Route path='/shop' element={  <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />}/>
        </Routes>
      </BrowserRouter> 
{/* <PostApi/>      
{/* <Arry/> */}

    </div>
  );
}

export default App;
