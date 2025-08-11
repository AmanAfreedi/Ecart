import React from 'react'
import { PiShoppingCartThin } from 'react-icons/pi'
import { Link } from 'react-router'
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
function callForgotPasswordApi(values) {
    console.log(values.email)
}
const Schema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required()
})
const ForgotPassword = () => {
    const { handleChange, handleBlur , touched, handleSubmit, errors, values } = useFormik({
        initialValues: {
            email: ""
        },
        onSubmit: callForgotPasswordApi,
        validationSchema: Schema
    })
    return (
        <div className='flex justify-center items-center w-screen h-screen bg-gradient-to-t from-[#0e4cc7] to-white'>
            <form onSubmit={handleSubmit}>
                <div className='w-auto -mt-30 flex flex-col '>
                    <PiShoppingCartThin className='text-white text-[150px] ml-10 md:ml-18' />
                    <h1 className='md:text-3xl text-2xl self-center text-white font-semibold font-sans underline'>Reset your password</h1>
                    <span className='w-65 md:w-80 text-white/70 mt-5'><p>Enter the email associated with your accound and we'll send you password reset instructions </p></span>
                    <input onChange={handleChange} onBlur={handleBlur} name="email" type="email" placeholder='Email' className='border border-white mt-3 rounded text-white pl-3 h-13 w-65 md:w-80 ' >
                    </input>
                    {touched.email && errors.email && <div className='text-red-500 text-[13px]'>{errors.email}</div>}
                    <button className=' bg-white hover:shadow-2xl hover:transition-shadow shadow-red-500/50 mb-5 justify-self-center w-65 md:w-80 h-10 rounded text-blue-700 mt-3  hover:border-1'>Sign Up</button>
                    <div className='self-center text-white text-[13px] md:text-[15px]'><p>Go to Login ?  <Link to={"/login"} className='underline'>Login</Link></p></div>
                    <Link to={'/'} className='text-white underline self-center'>Back to store !</Link>
                </div>
            </form>
        </div>
    )
}

export default ForgotPassword
