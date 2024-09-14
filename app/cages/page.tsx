import Image from 'next/image'
import React from 'react'
import Work from '../components/Work'
import Footer from '../components/Footer'
import conbg from '@/app/asset/conbg.webp'


const page = () => {
  return (
    <div>
         <main className='relative'>
                <Image className='w-full h-[450px]' width={1000} height={500} alt='img' src={conbg} />
                <span className='flex absolute top-56 left-10 md:left-48'>
                    <h2 className='md:text-5xl text-3xl text-white font-medium'>Apply Now</h2>
                </span>
            </main>
            <main className='flex my-10 mx-2 justify-center items-center'>
              <div className='flex border  border-gray-500 flex-col gap-3 px-5 py-10 md:p-10'>
              <h2 className='text-2xl text-center'>How much do you want?</h2>               
              <span className='text-sm text-gray-500 px-4 text-center'>We provide online instant cash loans with quick approval that suit your term length</span>
              <input className='border p-2' type='text' placeholder='Your Name' />
              <input className='border p-2' type='text' placeholder='Email' />
              <input className='border p-2' type='text' placeholder='Phone no' />
              <input className='border p-2' type='text' placeholder='Purpose' />
              <input className='border p-2' type='number' id='number' placeholder='Amount' />
              <input className='border p-2' type='number' id='number' placeholder='Month' />
              <span className='text-gray-500 py-1 md:py-3'>You have to pay: $0</span>
              <label className='flex w-full'><textarea rows={6} className='w-full border border-gray-300 p-3' placeholder='Enter Message' required ></textarea></label>
              <main className='flex justify-center py-2 md:py-3'>
                <button className='bg-custom-cyan w-full hover:bg-transparent duration-1000 hover:text-custom-cyan hover:border hover:border-custom-cyan text-lg text-white py-3 font-medium rounded-md'>Apply Now</button>
              </main>
              </div>
              </main>
            <Work />
            <Footer />
    </div>
  )
}

export default page