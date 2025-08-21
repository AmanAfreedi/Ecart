import { Form, Formik, withFormik, } from 'formik'
import React from 'react'
import { PiShoppingCartThin } from 'react-icons/pi'
import { Link, Navigate } from 'react-router'
import * as Yup from 'yup';
import Input from './Input'
import axios from 'axios';
import withUser from './withUser';
function callSignUpApi(values , bag) {
     axios.post("https://myeasykart.codeyogi.io/signup",{fullName:values.username , email:values.email , password:values.password}).then((response)=>{
        const {user , token} =response.data;
        bag.props.setUser(user);
        localStorage.setItem("token" , token);
        
    })
   
}

const Schema = Yup.object().shape({
    username: Yup.string()
        .min(5)
        .required(),
    email: Yup.string()
        .email()
        .required(),
    password: Yup.string()
        .min(8)
        .required(),


})
const initialValues = {
    email: "",
    username: "",
    password: "",
   
}
const SignUpPage = ({ values, errors, touched, handleSubmit, handleChange, handleBlur,setUser,user}) => {
    if(user){
        return <Navigate to="/" />
    }

    return (
        <div className='flex justify-center items-center w-screen h-screen bg-gradient-to-t from-[#0e4cc7] to-white'>

            <form onSubmit={handleSubmit} >
                <div className='w-auto -mt-30 flex flex-col '>
                    <PiShoppingCartThin className='text-white text-[150px] ml-10 md:ml-18' />
                    <Input
                        name="email"
                        type="email"
                        placeholder='Email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched.email}
                        errors={errors.email}
                        values={values.email}
                    />

                    <Input type="text" name="username" placeholder='Username'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched.username}
                        errors={errors.username}
                        values={values.username}
                    />
                    <Input type="password" name="password" placeholder='password' classname="mb-1"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched.password}
                        errors={errors.password}
                        values={values.password}
                    />

                    <button className='bg-white hover:shadow-2xl hover:transition-shadow shadow-red-500/50 mb-5 justify-self-center w-65 md:w-80 h-10 rounded text-blue-700 mt-3hover:border-1'>Sign Up</button>
                    <div className='self-center text-white text-[13px] md:text-[15px]'><p>Already have an account ?  <Link to={"/login"} className='underline'>Login</Link></p></div>
                    <Link to={'/'} className='text-white underline self-center'>Back to store !</Link>
                </div>
            </form>


        </div>
    )
}
const myHoc = withFormik({ initialvalues: initialValues, validationSchema: Schema, handleSubmit: callSignUpApi })
const easySignUp = myHoc(SignUpPage);
export default withUser(easySignUp);
