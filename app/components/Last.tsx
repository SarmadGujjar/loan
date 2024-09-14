import Image from 'next/image'
import React from 'react'
import lastbg from '@/app/asset/lastbg.webp'
import lastp from '@/app/asset/lastp.webp'
import { PiLessThan } from "react-icons/pi";
import { PiGreaterThan } from "react-icons/pi";



const Last = () => {
  return (
    <div className='flex flex-col w-full items-center'>
      <main className='flex  md:flex-row flex-col justify-between gap-4 md:gap-12 my-16 md:my-32 md:px-0 px-3'>
        <Image className='h-[200px] w-[200px] rounded-full' width={500} height={500} alt='img' src={lastp} />
        <div className='flex flex-col gap-6'>
          <p className='md:w-[600px] w-full font-medium pt-8'>Working in conjunction with humanitarian aid agencies, we have
            supported programmes to help alleviate human suffering through animal welfare
            when people might depend on livestock as their only source of income or food.</p>
          <span className='text-gray-400 text-xl'>__Micky Mouse</span>
        </div>
        <div className='md:flex flex-col hidden gap-4 pt-12'>
          <button className='bg-blue-100 text-blue-500 p-3 rounded-full hover:bg-blue-500 hover:text-white text-xl'><PiGreaterThan /></button>
          <button className='bg-blue-100 text-blue-500 p-3 rounded-full hover:bg-blue-500 hover:text-white text-xl'><PiLessThan /></button>
        </div>
      </main>
      <main className='flex md:flex-row flex-col gap-8 md:gap-20 text-4xl pb-16 md:pb-28 pt-8 justify-center text-gray-300'>
        <span><i></i>Diggo</span>
        <span><i></i>Next</span>
        <span><i></i>Dopkin</span>
        <span><i></i>Verticle</span>
        <span><i></i>Shallow</span>
      </main>
      <main className='flex relative'>
        <Image className='w-full h-[350px] md:h-[400px]' width={1900} height={800} alt='img' src={lastbg} />
        <div className='flex md:flex-row flex-col absolute gap-5 md:gap-40'>
          <span className='md:text-5xl text-3xl text-white pl-4 md:pl-40 pt-10 md:pt-36 w-full md:w-[900px]'>Apply for a Loan for your startup, education or company</span>
          <span className='flex md:justify-center justify-start md:px-0 px-4 items-center  md:pl-10 pt-6 md:pt-36'>
            <button className='bg-custom-cyan px-8 hover:bg-transparent duration-1000 hover:text-custom-cyan hover:border hover:border-custom-cyan text-lg text-white py-2 font-medium rounded-md'>Apply Now</button>
          </span>
        </div>
      </main>
    </div>
  )
}

export default Last