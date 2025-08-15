import React from 'react'
import { PiShoppingCartThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { GiHouseKeys } from "react-icons/gi";
import { Link } from 'react-router';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import Input from './Input';
function callLoginApi(values) {
        console.log("sending data ", values.username, values.password)
    }
    const Schema = Yup.object().shape({
        username: Yup.string()
            .min(5)
            .required(),
        password: Yup.string()
            .min(8)
            .required()
    })
    const initialValues = {
        username: "",
        password: ""
    }
const LoginPage = ({values,errors,touched,handleSubmit,handleChange , handleBlur}) => {
    return (

        <div className='flex justify-center items-center w-screen h-screen bg-gradient-to-t from-[#0e4cc7] to-white'>
            
                <form onSubmit={handleSubmit}>
                    <div className='w-auto flex -mt-30 flex-col'>
                        <PiShoppingCartThin className='text-white text-[150px] ml-10 md:ml-18' />
                        <div >
                            <CiUser className='text-3xl mt-10 -mb-11 ml-2 text-white ' />
                            <Input name="username" type="text" placeholder="Username" classname="pl-10"
                            onChange={handleChange} onBlur={handleBlur} touched={touched.username} errors={errors.username} values={values.username} />
                        </div>
                        <div className='-mt-5' >
                            <GiHouseKeys className='text-3xl mt-10 -mb-11 text-white ml-2' />
                            <Input name="password" type="password" placeholder="Password" classname="pl-10 pb-1"
                            onChange={handleChange} onBlur={handleBlur} touched={touched.password} errors={errors.password} values={values.password} />
                        </div>
                        <button type='submit' className='bg-white hover:shadow-2xl hover:transition-shadow shadow-red-500/50 mb-5 justify-self-center w-65 md:w-80 h-10 rounded text-blue-700 mt-3 hover:border-1'> Login</button>
                        <Link to="/forgotpassword" className='text-white self-center hover:underline text-[13px] md:text-[15px] '>Forgot Password ?</Link>
                        <div className='self-center text-white text-[13px] md:text-[15px]'><p>Dont't have an account <Link to={'/signup'} className='underline'>Sign Up</Link></p></div>

                        <Link to={'/'} className='text-white underline self-center'>Back to store !</Link>
                    </div>
                </form>
            
        </div>
        
    )
}
const myHoc = withFormik({validationSchema:Schema, initialValues:initialValues , handleSubmit:callLoginApi})
const EasyLogin = myHoc(LoginPage);
export default EasyLogin;
