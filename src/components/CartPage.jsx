import React, { useState } from 'react'
import CartList from './CartList'
import { Link } from 'react-router'
import { FiArrowLeft } from 'react-icons/fi'
import CartTotal from './CartTotal'

const CartPage = (props) => {
  const [TotalPrice ,setTotalPrice] = useState(0);
  function GetTotal(Price){
    setTotalPrice(Price)
  }
  return (
    <div className='max-w-6xl m-auto flex flex-col'>
      <Link to={"/"}><FiArrowLeft className='hover:text-orange-500 hover:border-orange-500 w-7 h-7 p-1 mb-5 mt-5 border-1 rounded-[50%]' /></Link>
      <div>
          <CartList cartItems={props.cartItems} updateCart={props.updateCart} GetTotal={GetTotal} />
      </div>
      <div className='border-[0.1px] border-gray-500 w-[80%] md:w-[35vw] self-center md:self-end mt-10 mr-4'>

        <CartTotal totalPrice={TotalPrice}/>
      </div>
          
      
    </div>
  )
}

export default CartPage
