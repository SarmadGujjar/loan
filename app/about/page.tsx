import React from 'react'
import Image from 'next/image'
import Work from '../components/Work'
import Last from '../components/Last'
import Footer from '../components/Footer'
import offer from '@/app/asset/offer.webp'
import { GoDotFill } from "react-icons/go";
import conbg from '@/app/asset/conbg.webp'


const Page = () => {
    return (
        <div>
            <main className='relative'>
                <Image className='w-full h-[450px]' width={1000} height={500} alt='img' src={conbg} />
                <span className='flex absolute top-40 md:top-56 left-10 md:left-48'>
                    <h2 className='md:text-5xl text-3xl text-white font-medium'>ABOUT US</h2>
                </span>
            </main>
            <div className='flex flex-col items-center'>
            <main className='flex md:flex-row flex-col my-10 md:my-32 items-center gap-20'>
                <Image className='md:w-[500px] w-full' width={500} height={800} alt='img' src={offer} />
                <div className='flex flex-col gap-10 md:px-0 px-2'>
                    <h2 className='md:text-5xl text-3xl w-full md:w-[500px]'>We provide loan for any purpose</h2>
                    <p className='md:w-[500px] w-full text-gray-500'>Esteem spirit temper too say adieus who direct esteem.It esteems
                        luckily or picture placing drawing. Apartments frequently or motionless on reasonable.
                    </p>
                    <div className='gap-2 flex flex-col'>
                        <span className='flex gap-2'><i className='text-blue-400 pt-1'><GoDotFill /></i>Loans with quick approval</span>
                        <span className='flex gap-2'><i className='text-blue-400 pt-1'><GoDotFill /></i>Customize a loan based on the amount.</span>
                        <span className='flex gap-2'><i className='text-blue-400 pt-1'><GoDotFill /></i>Good credit profile and you have built your loan.</span>
                        <span className='flex gap-2'><i className='text-blue-400 pt-1'><GoDotFill /></i>We provide online instant cash loans.</span>
                    </div>
                    <main className='flex  py-5'>
                        <button className='bg-custom-cyan px-6 hover:bg-white duration-1000 hover:text-blue-300 hover:border hover:border-custom-cyan text-lg text-white py-2 font-medium rounded-md'>About Us</button>
                    </main>
                </div>
            </main>
            </div>
            <Work />
            <Last />
            <Footer />
        </div>
    )
}

export default Page