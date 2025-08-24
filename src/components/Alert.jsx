import React from 'react'
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
const Alert = ({alert , setAlert}) => {
    
    if(!alert){
        return;
    }
    setTimeout(removeAlert,2*1000);
    const { type, message } =alert;
    const themeMap = {
        success: {
            classes: "border border-green-500 bg-green-50 text-green-900",
            
            Icon: <IoCheckmarkDoneCircleOutline className='ml-3' />
        },
        failure: {
            classes: "border border-red-500 bg-red-50 text-red-900",
            Icon: <RxCrossCircled className='ml-3' />
        }
    }
    function removeAlert(){
        setAlert(undefined);
    }
    return (
        <div className={'absolute flex items-center justify-between rounded-xl justify-self-center w-[30%] h-12 ' + themeMap[type].classes}>
            <div className='flex items-center'>
                {themeMap[type].Icon}
                <p className='ml-3'>{message}</p>
            </div>

            <button onClick={removeAlert} className='justify-self-end underline mr-6 cursor-pointer'>Dismiss</button>

        </div>
    )
}

export default Alert
