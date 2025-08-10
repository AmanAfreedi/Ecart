import React from 'react'

const CartTotal = ({totalPrice}) => {
   
    return (
        <div className='flex flex-col'>
            <h1 className='text-gray-700 bg-gray-200 text-2xl pl-5 font-semibold py-2 px-2'>Cart Total</h1>
            <div className='flex justify-between mx-10 mt-10'>
                <p className='text-xl'>SubTotal</p>
                <p className='text-xl '>${totalPrice}</p>
            </div>
            <div className='bg-gray-300 w-[75%] mt-5 h-[1px] self-center'></div>
            <div className='flex justify-between mx-10 mt-2'>
                <p className='text-xl'>Total</p>
                <p className='text-xl'>${totalPrice}</p>
            </div>
            <button className='w-[80%] h-13 bg-orange-500 rounded text-center text-white text-2xl self-center my-5'>Proceed To CheckOut</button>
            
        </div>
    )
}

export default CartTotal
