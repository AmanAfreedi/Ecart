import React from 'react'
import { PiShoppingCartThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { GiHouseKeys } from "react-icons/gi";
import { Link } from 'react-router';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
const LoginPage = () => {
    function callLoginApi(values){
        console.log("sending data ",values.username , values.password)
    }
    const Schema = Yup.object().shape({
        username: Yup.string()
        .min(5)
        .required(),
        password: Yup.string()
        .min(8)
        .required()
    })
    const {values,handleSubmit ,handleChange , errors , handleBlur ,touched} = useFormik({
        initialValues:{
            username:"",
            password:""
        },
        onSubmit:callLoginApi,
        validationSchema:Schema,
    })
  return (
    
    <div className='flex justify-center items-center w-screen h-screen bg-gradient-to-t from-[#0e4cc7] to-white'>
        <form onSubmit={handleSubmit}>
        <div className='w-auto flex flex-col'>
                <PiShoppingCartThin className='text-white text-[150px] ml-10 md:ml-18' />
                <div >
                <CiUser className='text-3xl mt-10 -mb-10 ml-2 text-white '/>
                <input onBlur={handleBlur} name="username" onChange={handleChange} type="text" placeholder='Username' className='border border-white rounded text-white pl-10 h-13 w-65 md:w-80 ' >
                </input>
                {touched.username && errors.username && <div className='text-red-500'>{errors.username}</div>}
                 </div>
                <div className='-mt-5' >
                <GiHouseKeys className='text-3xl mt-10 -mb-10 text-white ml-2'/>
                <input onBlur={handleBlur}  name="password" onChange={handleChange} type="password" placeholder='Password' className='border border-white rounded text-white pl-10 h-13 w-65 md:w-80 ' >
                </input>
                {touched.password && errors.password && <div className='text-red-500'>{errors.password}</div>}
                 </div>
                <button className='bg-white hover:shadow-2xl hover:transition-shadow shadow-red-500/50 mb-5 justify-self-center w-65 md:w-80 h-10 rounded text-blue-700 mt-3 hover:border-1'> Login</button>
                <Link to="/forgotpassword" className='text-white self-center hover:underline text-[13px] md:text-[15px] '>Forgot Password ?</Link>
                   <div className='self-center text-white text-[13px] md:text-[15px]'><p>Dont't have an account <Link to={'/signup'} className='underline'>Sign Up</Link></p></div>

                   <Link to={'/'} className='text-white underline self-center'>Back to store !</Link>
        </div>
        </form>
    </div>
  )
}

export default LoginPage
