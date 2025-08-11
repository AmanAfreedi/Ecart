import { useFormik } from 'formik'
import React from 'react'
import { CiUser } from 'react-icons/ci'
import { PiShoppingCartThin } from 'react-icons/pi'
import { Link } from 'react-router'
import * as Yup from 'yup';
const SignUpPage = () => {
    function callSignUpApi(values){
        console.log("signed Api called with " ,values.username,values.email,values.password)
    }
    const Schema = Yup.object().shape({
        username : Yup.string()
        .min(5)
        .required(),
        email : Yup.string()
        .email()
        .required(),
        password : Yup.string()
        .min(8)
        .required(),
        
        
    })
    const {handleBlur,touched , handleChange , handleSubmit, handleReset , values , errors} = useFormik({
        initialValues: {
            email : "",
            username : "",
            password : "",
            ConfirmPassword : ""
        },
        onSubmit: callSignUpApi,
        validationSchema : Schema
    })
    
    return (
        <div className='flex justify-center items-center w-screen h-screen bg-gradient-to-t from-[#0e4cc7] to-white'>
            <form onSubmit={handleSubmit} >
                <div className='w-auto flex flex-col '>
                    <PiShoppingCartThin className='text-white text-[150px] ml-10 md:ml-18' />

                    <input onChange={handleChange} onBlur={handleBlur} name="email" type="email" placeholder='Email' className='border border-white mt-3 rounded text-white pl-3 h-13 w-65 md:w-80 ' >
                    </input>
                    {touched.email && errors.email && <div className='text-red-500 text-[13px]'>{errors.email}</div>}
                    <input onChange={handleChange} onBlur={handleBlur} name="username" type="text" placeholder='Username' className='border border-white mt-3 rounded text-white pl-3 h-13 w-65 md:w-80 ' >
                    </input>
                    {touched.username && errors.username && <div className='text-red-500 text-[13px]'>{errors.username}</div>}
                    <input onChange={handleChange} onBlur={handleBlur} name="password" type="password" placeholder='password' className='border border-white mt-3 rounded text-white pl-3 h-13 w-65 md:w-80 ' >
                    </input>
                    {touched.password && errors.password && <div className='text-red-500 text-[13px]'>{errors.password}</div>}
                    
                    <button className='bg-white hover:shadow-2xl hover:transition-shadow shadow-red-500/50 mb-5 justify-self-center w-65 md:w-80 h-10 rounded text-blue-700 mt-3hover:border-1'>Sign Up</button>
                    <div className='self-center text-white text-[13px] md:text-[15px]'><p>Already have an account ?  <Link to={"/login"} className='underline'>Login</Link></p></div>
                    <Link to={'/'} className='text-white underline self-center'>Back to store !</Link>
                </div>

            </form>

        </div>
    )
}

export default SignUpPage
