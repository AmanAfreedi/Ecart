import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router'
const Navbar = ({count}) => {
  return (
    <div className=' w-screen h-[100px] shadow bg-white'>
      <div className='flex items-center max-w-6xl justify-between mx-auto px-5'>
        <img className='h-[80px] ml-2' src="https://logolook.net/wp-content/uploads/2021/03/Amazon-Logo-2000.png" alt="" />
        <div className='flex items-center'>
          <Link to={"/login"} className='font-semibold text-xl rounded border border-[#ff5151] px-3 text-center pb-1 mr-5 text-[#ff5151]  ' >Login</Link>
          <Link to={'/cart'} ><CiShoppingCart className='w-13 h-13 hover:text-[#ff5151] mr-5' /></Link>
          <span className='-ml-9 -mt-6 text-[13px] px-1 bg-orange-200 rounded-[50%] font-extrabold text-[#ff5151] b'>{count}</span>
        </div>
        
      </div>

    </div>
  )
}

export default Navbar
