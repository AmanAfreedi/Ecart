import React from 'react'
import { AiOutlineLoading } from "react-icons/ai";
const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen mt-[-13vh]'>
      <AiOutlineLoading className='text-5xl animate-spin'/>
      <p>Loading...</p>
    </div>
  )
}

export default Loading
