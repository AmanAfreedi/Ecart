import React, { useEffect, useState } from 'react'
import { getProduct } from './Api'


const CartRow = ({product}) => {
    const [cart,setcart] =useState({})
    
    useEffect(()=>{
        setcart(JSON.parse(localStorage.getItem("my-cart")))    
    },[])
    
    
    
  return (
    <div >
        <div className=' flex max-w-6xl justify-evenly items-center h-20 bg-white border-[0.1px] border-gray-200 '>
            <div className='w-[10vw]'><img className='h-18' src={product.thumbnail || ""} alt="" /></div>
             <div className='w-[20vw]'><h1 className='self-center '>{product.title || "No Title"}</h1></div>
             <div className='w-[9vw]'><h1 className='self-center'>${product.price || "$0"}</h1></div>
             <div className='w-[8vw]' ><input value={cart[product.id] || 1} readOnly type='number' className='self-center w-10  bg-white pl-3 ml-5'></input></div>
             <div className='w-[3vw]'><h1 className='self-center'>{cart[product.id]*(product.price) || "0"}</h1></div>

        </div>
 
    </div>
  )
}

export default CartRow
