import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router'

import { FiArrowLeft } from "react-icons/fi";
import getProducts, { getProduct } from './Api';
import Relatedproducts from './Relatedproducts';
import Loading from './Loading';
import withUser from './withUser';
const ProductDetails = ({onAddToCart ,user}) => {
  const { id } = useParams()
  const [Product, setproduct] = useState({})
  const [LoadingAnimation , setLoadingAnimation] = useState(true);
  const [num, setnum] = useState(1);
  // if(!user){
  //   return <Navigate to="/login" />
  // }
  
  useEffect(function () {
    setLoadingAnimation(true);
    getProduct(id).then((item) => {
      setproduct(item);
     console.log(item);
    }).finally(()=>{
    
      setLoadingAnimation(false)
    })
  }, [id])
  if(LoadingAnimation){
    return <Loading/>
  }
  
  
  function handleNumChange(event) {
    setnum(event.target.value);
  }
  
  function onButtonClick() {
    onAddToCart(id, num);
    setnum(1);
  }
  return (
    <>
      <div className='flex flex-col mb-10 max-w-6xl md:m-auto mt-10 md:pt-20  md:p-10 shadow-2xl p-2 mx-5 '>
        <div className=' flex flex-col md:flex-row   '>
          <Link to={"/"}><FiArrowLeft className='hover:text-orange-500 hover:border-orange-500 w-7 h-7 p-1 -mt-10 md:mt-[-50px] border-1 rounded-[50%]' /></Link>
          <img className='md:w-[500pxpx] md:h-[500px] border-[0.1px] border-gray-300 object-contain' src={Product.thumbnail} alt="Image" />

          <div className='flex flex-col ml-1 gap-3 md:ml-10'>
            <h1 className='text-3xl not-[]:md:text-5xl font-bold'>{Product.title}</h1>
            <p className='text-2xl md:text-3xl font-bold'>${Product.price}</p>
            <p className='text-gray-600 md:text-xl'>{Product.description}</p>
            <div className=' flex justify-center md:justify-start'>
              <input className='shadow w-15 h-10 pl-3 text-center mr-5 ' type="number" value={num} onChange={handleNumChange} />
              <button onClick={onButtonClick} className='bg-orange-500  rounded w-35   text-white hover:bg-orange-00'>Add To Cart </button>
            </div>
            <div className='w-[100%] bg-gray-300 h-[1px]'></div>
            <p>Category: <span className='text-orange-500'>{Product.category}</span></p>
          </div>
        </div>
        <div className='flex flex-col gap-2 ml-7 mt-2'>
          <div className='flex gap-3'>
            <Link to={"/"} className='font-bold'> Description</Link>
          <Link to={"/"} className='font-bold'>Reviews(0)</Link>
          </div>
          
          <div><p>{Product.description}</p></div>
        </div>
        
        <Relatedproducts id={parseInt(id)} />
      </div>

    </>

  )
}

export default withUser(ProductDetails)
