import React from 'react'
import mainbg from '@/app/asset/mainbg.webp'
import Image from 'next/image'

const Main = () => {
  return (
    <div>
      <main className='w-full'>
        <Image className='relative flex h-screen w-full' width={1000} height={1000} alt='img' src={mainbg} />
        <div className='flex md:flex-row flex-col absolute justify-between md:gap-32 top-24 md:top-44  md:left-48 items-center'>
          <div className='flex mmd:mx-0 mx-2 flex-col'>
            <span className='md:text-5xl text-3xl w-full md:w-[450px] md:pr-0 pr-3 leading-tight font-medium text-white'>
              Get Loan for your Business growth or startup
            </span>
            <main className='flex py-2 md:py-12'>
              <button className='bg-custom-cyan px-4 md:px-8 hover:bg-transparent duration-1000 hover:text-custom-cyan hover:border hover:border-custom-cyan md:text-lg text-white py-3 font-medium rounded-md'>How it Works</button>
            </main>
          </div>
          <div className='bg-white md:mx-0 mx-2 rounded-md'>
            <main className='flex flex-col p-6 md:p-12 md:pb-0 pb-4 gap-3 md:gap-5'>
              <h2 className='md:text-3xl text-2xl py-2'>How much do you want?</h2>
              <span className='text-gray-500 pb-1 md:pb-3 text-center'>We provide online instant cash loans with quick</span>
              <input className='p-2 border cursor-pointer' placeholder='Amount' type='number' name='number' />
              <input className='p-2 border cursor-pointer' placeholder='Month' type='nummber' name='number' />
              <span className='text-gray-500 py-1 md:py-3'>You have to pay: $0</span>
              <main className='flex justify-center py-2 md:py-3'>
                <button className='bg-custom-cyan w-full hover:bg-transparent duration-1000 hover:text-custom-cyan hover:border hover:border-custom-cyan text-lg text-white py-3 font-medium rounded-md'>Continue</button>
              </main>
            </main>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Main