import Image from 'next/image';
import React from 'react'
import offer from '@/app/asset/offer.webp'
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { FaCarSide } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";



const Offer = () => {
    return (
        <div className='flex flex-col w-full items-center'>
            <main className='flex flex-col gap-4 my-20 items-center'>
                <h2 className='md:text-5xl text-3xl'>What we offer for you</h2>
                <span className='text-gray-500 text-lg text-center'>We provide online instant cash loans with quick approval that suit your term</span>
            </main>
            <main className='flex md:flex-row flex-col justify-between  gap-10'>
                <div className='bg-custom-blue rounded-md'>
                    <main className='flex flex-col items-center gap-3'>
                        <i className='text-6xl text-white pb-2 pt-8'><MdOutlineMapsHomeWork /></i>
                        <span className='text-lg text-white'>Home Loan</span>
                        <span className='text-2xl text-blue-200'>$3000-$10000</span>
                    </main>
                    <div className=' h-[1px] mx-1 my-8 flex bg-white'></div>
                    <main className='flex flex-col gap-3 text-white px-10'>
                        <span className='flex gap-2'><i className='text-blue-400 pt-1'><GoDotFill /></i>Borrow - $350 over 3 months</span>
                        <span className='flex gap-2'><i className='text-blue-400 pt-1'><GoDotFill /></i>Interest rate - 292% pa fixed</span>
                        <span className='flex gap-2'><i className='text-blue-400 pt-1'><GoDotFill /></i>Total amount payable - $525.12</span>
                        <span className='flex gap-2'><i className='text-blue-400 pt-1'><GoDotFill /></i>Representative - 1,286% APR</span>
                    </main>
                    <main className='flex justify-center py-12'>
                        <button className='bg-custom-cyan px-16 hover:bg-custom-blue duration-1000 hover:text-blue-300 hover:border hover:border-custom-cyan text-lg text-white py-3 font-medium rounded-md'>Apply Now</button>
                    </main>
                </div>

                <div className='bg-custom-blue rounded-md'>
                    <main className='flex flex-col items-center gap-3'>
                        <i className='text-6xl text-white pb-2 pt-8'><FaCarSide /></i>
                        <span className='text-lg text-white'>Car Loan</span>
                        <span className='text-2xl text-blue-200'>$3000-$10000</span>
                    </main>
                    <div className=' h-[1px] mx-1 my-8 flex bg-white'></div>
                    <main className='flex flex-col gap-3 text-white px-10'>
                        <span className='flex gap-2'><i className='text-blue-400 pt-1'><GoDotFill /></i>Borrow - $350 over 3 months</span>
                        <span className='flex gap-2'><i className='text-blue-400 pt-1'><GoDotFill /></i>Interest rate - 292% pa fixed</span>
                        <span className='flex gap-2'><i className='text-blue-400 pt-1'><GoDotFill /></i>Total amount payable - $525.12</span>
                        <span className='flex gap-2'><i className='text-blue-400 pt-1'><GoDotFill /></i>Representative - 1,286% APR</span>
                    </main>
                    <main className='flex justify-center py-12'>
                        <button className='bg-custom-cyan px-16 hover:bg-custom-blue duration-1000 hover:text-blue-300 hover:border hover:border-custom-cyan text-lg text-white py-3 font-medium rounded-md'>Apply Now</button>
                    </main>
                </div>

                <div className='bg-custom-blue rounded-md'>
                    <main className='flex flex-col items-center gap-3'>
                        <i className='text-6xl text-white pb-2 pt-8'><FaUniversity /></i>
                        <span className='text-lg text-white'>Education Loan</span>
                        <span className='text-2xl text-blue-200'>$3000-$10000</span>
                    </main>
                    <div className=' h-[1px] mx-1 my-8 flex bg-white'></div>
                    <main className='flex flex-col gap-3 text-white px-10'>
                        <span className='flex gap-2'><i className='text-blue-400 pt-1'><GoDotFill /></i>Borrow - $350 over 3 months</span>
                        <span className='flex gap-2'><i className='text-blue-400 pt-1'><GoDotFill /></i>Interest rate - 292% pa fixed</span>
                        <span className='flex gap-2'><i className='text-blue-400 pt-1'><GoDotFill /></i>Total amount payable - $525.12</span>
                        <span className='flex gap-2'><i className='text-blue-400 pt-1'><GoDotFill /></i>Representative - 1,286% APR</span>
                    </main>
                    <main className='flex justify-center py-12'>
                        <button className='bg-custom-cyan px-16 hover:bg-custom-blue duration-1000 hover:text-blue-300 hover:border hover:border-custom-cyan text-lg text-white py-3 font-medium rounded-md'>Apply Now</button>
                    </main>
                </div>
            </main>

            <main className='flex md:flex-row flex-col my-32 items-center gap-10 md:gap-20'>
                <Image width={500} height={800} alt='img' src={offer} />
                <div className='flex flex-col gap-5 md:gap-10 md:px-0 px-2'>
                    <h2 className='md:text-5xl text-3xl'>Why Choose Us?</h2>
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
    )
}

export default Offer