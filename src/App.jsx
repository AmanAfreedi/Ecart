import React, { createContext, useEffect, useState } from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AllProducts from './components/AllProducts'
import { Route, Routes } from 'react-router'
import ProductDetails from "./components/ProductDetails"
import CartPage from './components/CartPage'
import EasyLogin from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import ForgotPassword from './components/ForgotPassword'
import axios from 'axios'
import Loading from './components/Loading'
import CartList from './components/CartList'
import Alert from './components/Alert'

export const UserContext = createContext();
export const CartContext = createContext();

const App = () => {
  const [count, setcount] = useState(0);
  const [user, setUser] = useState();
  const [cart, setcart] = useState(JSON.parse(localStorage.getItem("my-cart"))|| {});
  const [userLoading , setUserLoading] = useState(false);
  const [alert , setAlert]=useState();
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!user && token) {
  //     console.log(token)
  //     axios.get("https://myeasykart.codeyogi.io/me", {
  //       headers: {
  //         Authorization: token
  //       }
  //     }).then((response) => {
  //       setUser(response.data);
        
  //       setUserLoading(false);
  //     })
  //   }else{
  //     setUserLoading(false);
  //   }
  // }, [])
  function HandleAddToCart(id, quantity) {
    const newQuantity = (cart[id] || 0) + parseInt(quantity)
    const newCart = { ...cart, [id]: newQuantity }
    updateCart(newCart)
  }
  
  function updateCart(newCart) {
    const savedCartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", savedCartString);
    setcart(newCart)
  }

  useEffect(() => {
    const sum = Object.keys(cart).reduce((prev, curr) => {
      return prev + cart[curr];
    }, 0)
    setcount(parseInt(sum));
  }, [cart])


  console.log(count);
  if(userLoading){
    return <Loading />
  }
  
  return (
    <CartContext.Provider value={{cart , setcart}}>
    <UserContext.Provider value={{user , setUser}}>
    <div className=' bg-gray-100 overflow-x-hidden h-screen flex flex-col overflow-y-visible'>
      <Navbar className="fixed" count={count} user={user} setUser={setUser} />
      
      <div className='grow'>
        <Alert className="relative" alert={alert} setAlert={setAlert} />
        <Routes>
          <Route path='/' element={<AllProducts  />} />
          <Route path='/productDetails/:id' element={<ProductDetails onAddToCart={HandleAddToCart} />} />
          <Route path='cart' element={<CartPage updateCart={updateCart}/>} />
          <Route path='/login' element={<EasyLogin setAlert={setAlert} alert={alert}  />} />
          <Route path='/signup' element={<SignUpPage  />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
    </UserContext.Provider>
    </CartContext.Provider>
  )
}

export default App
