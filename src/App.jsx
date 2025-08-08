import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AllProducts from './components/AllProducts'
import { Route, Routes } from 'react-router'
import ProductDetails from "./components/ProductDetails"


const App = () => {
  const [count, setcount] = useState(0);
  const [cart, setcart] = useState({});
  function HandleAddToCart(id, quantity) {
    setcart(function (prevCart) {
      const oldQuantity = prevCart[id] || 0;
      return { ...prevCart, [id]: oldQuantity + parseInt(quantity) };
    });
  }
  useEffect(()=>{
    const sum = Object.keys(cart).reduce((prev,curr)=>{
      return prev+cart[curr];
    },0)
    setcount(sum);
  },[cart])
  
  console.log("Cart updated:", cart);
  console.log(count);
  return (
    <div className='bg-gray-100 overflow-x-hidden h-screen flex flex-col overflow-y-visible'>
      <Navbar className="fixed" count={count} />
      <div className='grow'>
        <Routes>
          <Route path='/' element={<AllProducts />} />
          <Route path='/productDetails/:id' element={<ProductDetails onAddToCart={HandleAddToCart} />} />
        </Routes>

      </div>
      <Footer />
    </div>
  )
}

export default App
