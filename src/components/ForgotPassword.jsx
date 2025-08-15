import React from 'react'
import { PiShoppingCartThin } from 'react-icons/pi'
import { Link } from 'react-router'
import { Form, Formik, withFormik } from 'formik';
import * as Yup from 'yup';
import Input from './Input';
function callForgotPasswordApi(values) {
    console.log(values.email)
}
const Schema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required()
})
const initialValues = { email: "" }
const ForgotPassword = ({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => {


    return (
        <div className='flex justify-center items-center w-screen h-screen bg-gradient-to-t from-[#0e4cc7] to-white'>

            <form onSubmit={handleSubmit}>
                <div className='w-auto -mt-30 flex flex-col'>
                    <PiShoppingCartThin className='text-white text-[150px] ml-10 md:ml-18' />
                    <h1 className='md:text-3xl text-2xl self-center text-white font-semibold font-sans underline'>Reset your password</h1>
                    <span className='w-65 md:w-80 text-white/70 mt-5'><p>Enter the email associated with your accound and we'll send you password reset instructions </p></span>
                    <Input type="email" placeholder="Enter your email" name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched.email}
                        errors={errors.email}
                        values={values.email} 
                        />
                    <button className=' bg-white hover:shadow-2xl hover:transition-shadow shadow-red-500/50 mb-5 justify-self-center w-65 md:w-80 h-10 rounded text-blue-700 mt-3  hover:border-1'>Sign Up</button>
                    <div className='self-center text-white text-[13px] md:text-[15px]'><p>Go to Login ?  <Link to={"/login"} className='underline'>Login</Link></p></div>
                    <Link to={'/'} className='text-white underline self-center'>Back to store !</Link>
                </div>
            </form>

        </div>
    )
}
const myHoc = withFormik({ initialValues: initialValues, validationSchema: Schema, handleSubmit: callForgotPasswordApi })
const easyForgot = myHoc(ForgotPassword)
export default easyForgot;
