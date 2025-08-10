import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AllProducts from './components/AllProducts'
import { Route, Routes } from 'react-router'
import ProductDetails from "./components/ProductDetails"
import CartPage from './components/CartPage'


const App = () => {
  
  const [count, setcount] = useState(0);
  
  const [cart, setcart] = useState(JSON.parse(localStorage.getItem("my-cart") || "{}"));
  function HandleAddToCart(id, quantity) {
    const newQuantity = (cart[id]||0) + parseInt(quantity)
    const newCart = {...cart , [id]:newQuantity}
    const savedCartString= JSON.stringify(newCart);
    localStorage.setItem("my-cart",savedCartString);
    setcart(newCart)
  }
  
  useEffect(()=>{
    const sum = Object.keys(cart).reduce((prev,curr)=>{
      return prev+cart[curr];
    },0)
    setcount(parseInt(sum));
  },[cart])
  
  
  console.log(count);
  return (
    <div className='bg-gray-100 overflow-x-hidden h-screen flex flex-col overflow-y-visible'>
      <Navbar className="fixed" count={count} />
      <div className='grow'>
        <Routes>
          <Route path='/' element={<AllProducts />} />
          <Route path='/productDetails/:id' element={<ProductDetails onAddToCart={HandleAddToCart} />} />
          <Route path ='cart' element={<CartPage cartItems={cart}/>}/>
        </Routes>

      </div>
      <Footer />
    </div>
  )
}

export default App
