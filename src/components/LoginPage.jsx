import React from 'react'
import { PiShoppingCartThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { GiHouseKeys } from "react-icons/gi";
import { Link, Navigate } from 'react-router';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import axios from 'axios';
import withUser from './withUser';
import Alert from './Alert';
function callLoginApi(values, bag) {
    axios.post("https://myeasykart.codeyogi.io/login", { email: values.email, password: values.password }).then((response) => {
        const { user, token } = response.data;
        bag.props.setUser(user);
        console.log(user)
        localStorage.setItem("token", token);
        bag.props.setAlert({ type: "success", message: "Login successfull" })
    }).catch((error) => {
        bag.props.setAlert({ type: "failure", message: "Invalid Email or Password!" })
    })
}
const Schema = Yup.object().shape({
    email: Yup.string()
        .email()
        .min(5)
        .required(),
    password: Yup.string()
        .min(8)
        .required()
})
const initialValues = {
    email: "",
    password: ""
}
const LoginPage = ({ values, errors, touched, handleSubmit, handleChange, handleBlur, user, alert , setAlert }) => {
    if (user) {
        return <Navigate to="/" />
    }
    return (

        <div className='bg-gradient-to-t from-[#0e4cc7] to-white'>
        <Alert className="relative" alert={alert} setAlert={setAlert} />
            <div className='flex justify-center items-center w-screen h-screen '>
                
                <form onSubmit={handleSubmit}>
                    <div className='w-auto flex -mt-30 flex-col'>
                        <PiShoppingCartThin className='text-white text-[150px] ml-10 md:ml-18' />
                        <div >
                            <CiUser className='text-3xl mt-10 -mb-11 ml-2 text-white ' />
                            <Input name="email" type="text" placeholder="Email" classname="pl-10"
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
        </div>
    )
}
const myHoc = withFormik({ validationSchema: Schema, initialValues: initialValues, handleSubmit: callLoginApi })
const EasyLogin = myHoc(LoginPage);
export default withUser(EasyLogin);
