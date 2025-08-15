import React, { useEffect, useState } from 'react'
import { getProduct } from './Api'
import { CiCircleRemove } from "react-icons/ci";

const CartRow = ({product,cartItems, updateCart , localCart,setlocalCart}) => {
    
    function handleRemove(event){
        const newCart ={...cartItems}
        delete newCart[event.target.getAttribute('productid')];
        console.log("product to be remoed" , event.target.getAttribute('productid'));
        updateCart(newCart);
    }
     function handleInputChange(event){
        const newValue = event.target.value;
        const productId=event.target.getAttribute('productid');
        console.log(newValue , productId)
        const newcart = {...localCart , [productId]:newValue};
        {newValue>0 && setlocalCart(newcart)};
    }
    
    
    
  return (
    <div >
        <div className=' flex max-w-6xl justify-evenly items-center h-20 bg-white border-[0.1px] border-gray-200 '>
            <button className='mt-2 -ml-10'  onClick={handleRemove}><CiCircleRemove className='text-2xl hover:text-red-500' productid={product.id} /></button>
            <div className='w-[10vw]'><img className='h-18' src={product.thumbnail || ""} alt="" /></div>
             <div className='w-[20vw]'><h1 className='self-center '>{product.title || "No Title"}</h1></div>
             <div className='w-[9vw]'><h1 className='self-center'>${product.price || "$0"}</h1></div>
             <div className='w-[8vw]' ><input value={localCart[product.id] || 1} productid={product.id} onChange={handleInputChange}   type='number' className='border rounded self-center w-12  bg-white pl-3 ml-5'></input></div>
             <div className='w-[3vw]'><h1 className='self-center'>{cartItems[product.id]*(product.price) || "0"}</h1></div>         
        </div>
 
    </div>
  )
}

export default CartRow
