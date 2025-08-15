import React, { useEffect, useState } from 'react'
import CartRow from './CartRow'
import { getProduct } from './Api'
import { CiCircleRemove } from "react-icons/ci";

const CartList = ({ GetTotal, cartItems, updateCart }) => {
    const [Products, setProducts] = useState([]);
    const [totalPrice, settotalPrice] = useState(0);
    const [localCart, setlocalCart] = useState(cartItems);
    useEffect(() => {
        setlocalCart(cartItems);
    }, [cartItems])
    useEffect(() => {
        const promises = Object.keys(cartItems).map((ProductID) => {
            return getProduct(ProductID)
        })
        Promise.all(promises).then((products) => {
            setProducts(products)
        })
    }, [cartItems])

    useEffect(() => {
        let total = 0;
        for (let i = 0; i < Products.length; i++) {
            total += (Products[i].price * parseInt(cartItems[Products[i].id]));
        }
        settotalPrice(total.toFixed(2))
        GetTotal(total.toFixed(2))

    }, [Products])
    console.log(totalPrice)

    function updateMyCart() {
        updateCart(localCart);
    }
    return (
        <div className='m-auto gap-2 '>
            <div className='max-w-6xl h-auto border border-gray-300 mx-4 bg-gray-200 -mb-2 flex flex-col overflow-hidden'>
                <div className='flex justify-around h-10 items-center'>
                    <p className='ml-[4vw]'>Image</p>
                    <p className='ml-[5vw]'>Product</p>
                    <p className='ml-[10vw]'>Price</p>
                    <p className='ml-[3vw]'>Quantity</p>
                    <p>Subtotal</p>
                </div>
                {Products.map((product) => {

                    return <div> <CartRow localCart={localCart} setlocalCart={setlocalCart} product={product} cartItems={cartItems} updateCart={updateCart} /> </div>
                })}
                <div className='flex pl-7 h-14 items-center justify-between bg-white'>

                    <div>
                        <input type="text" placeholder='Coupon Code' className='bg-white border pl-4  h-7 rounded-md justify-self-start border-gray-400' />
                        <button className='bg-orange-500 px-2 py-1 mx-3 rounded text-white hover:bg-orange-600'>
                            Apply Coupon
                        </button>
                    </div>
                    <button onClick={updateMyCart} className='bg-orange-500 mr-10  px-2 py-1 mx-3 rounded text-white hover:bg-orange-600'>Update Cart</button>
                </div>


            </div>

        </div>
    )
}

export default CartList
