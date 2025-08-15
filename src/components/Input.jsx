
import React from 'react'

const Input = ({ name , placeholder ,classname ,value,onChange,onBlur,touched,errors , type}) => {
    return (
        <div>
            <input 
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                className={`border border-white mt-1 rounded text-white pl-3 h-13 w-65 md:w-80 ${classname}`}
            >
            </input>
            {touched && errors && <div className='text-red-500 text-[13px]'>{errors}</div>}
        </div>
    )
}

export default Input
