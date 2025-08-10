import React, { memo } from 'react'
import { Link } from 'react-router'
const Product = (info) => {
  console.log("Product Running")
  return (
      <Link to={`/productDetails/${info.id}`} className='font-semibold'>
      <div className=' overflow-hidden h-[450px] -mb-18  md:max-w-[380px] md:h-auto w-auto md:my-3 mx-1 flex flex-col p-2'>
        <img className='aspect-square md:object-contain border-[0.1px] border-gray-300' src={info.img} alt="" />
        <p className='text-gray-400 text-xs'>{info.category}</p>
        <h1 className='font-bold'>{info.title}</h1>
        <p>${info.price}</p>
      </div>
      </Link>
  )
}


export default memo(Product)
