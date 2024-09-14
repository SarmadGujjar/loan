import React from 'react'
import { MdErrorOutline } from "react-icons/md";


const page = () => {
  return (
    <div>
           <main className='bg-gray-200 my-20 md:my-40 mx-2 md:mx-72'>
                <div className='flex flex-col gap-5 px-3 md:px-32 py-40 justify-center items-center'>
                    <i className='text-white bg-gray-700 rounded-full p-3 text-2xl'><MdErrorOutline /></i>
                    <h2 className='text-2xl'>Sorry! Something went wrong.</h2>
                    <span className='text-gray-500 text-sm text-center'>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</span>
                </div>
            </main>
    </div>
  )
}

export default page