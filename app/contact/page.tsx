import Image from 'next/image'
import React from 'react'
import conbg from '@/app/asset/conbg.webp'
import { MdErrorOutline } from "react-icons/md";
import Footer from '../components/Footer';
import { IoHomeOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";
import { CiMobile4 } from "react-icons/ci";



const page = () => {
    return (
        <div>
            <main className='relative'>
                <Image className='w-full h-[450px]' width={1000} height={500} alt='img' src={conbg} />
                <span className='flex absolute top-56 left-10 md:left-48'>
                    <h2 className='md:text-5xl text-3xl text-white font-medium'>CONTACT US</h2>
                </span>
            </main>
            <main className='bg-gray-200 my-20 md:my-40 mx-2 md:mx-72'>
                <div className='flex flex-col gap-5 px-3 md:px-32 py-40 justify-center items-center'>
                    <i className='text-white bg-gray-700 rounded-full p-3 text-2xl'><MdErrorOutline /></i>
                    <h2 className='text-2xl'>Sorry! Something went wrong.</h2>
                    <span className='text-gray-500 text-sm text-center'>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</span>
                </div>
            </main>
            <div className='flex items-start md:items-center justify-start md:justify-center '>
                <main className='flex md:flex-row flex-col justify-between gap-10'>
                    <div className='flex flex-col gap-5 md:px-0 px-3 items-start'>
                        <h2 className='text-2xl font-semibold'>Get in Touch</h2>
                        <label className='flex w-full'><textarea rows={6} className='w-full border border-gray-300 p-3' placeholder='Enter Message' required ></textarea></label>
                        <div className='flex md:flex-row flex-col gap-5'>
                            <input className='p-3 border border-gray-300' placeholder='Enter Your Name' type='text' required/>
                            <input className='p-3 border border-gray-300' placeholder='Enter email address' type='text' required />
                        </div>
                        <input className='p-2 w-full border border-gray-300' placeholder='Subject' type='text' required />
                        <main className='flex '>
                            <button className='hover:bg-custom-cyan px-12 py- w-full bg-transparent duration-1000 hover:text-white hover:border hover:border-custom-cyan text-xl text-custom-cyan py-2 font-medium  border'>
                                Send Message
                            </button>
                        </main>
                    </div>
                    <div className='flex md:px-0 px-3 flex-col gap-7 pt-14' >
                        <main className='flex gap-3'>
                            <i className='text-3xl text-gray-500'><IoHomeOutline /></i>
                            <div className='flex flex-col gap-1'>
                                <span className='font-semibold'>Buttonwood, California.</span>
                                <span className='text-gray-500'>Rosemead, CA 91770</span>
                            </div>
                        </main>

                        <main className='flex gap-3'>
                            <i className='text-3xl text-gray-500'><CiMobile4 /></i>
                            <div className='flex flex-col gap-1'>
                                <span className='font-semibold'>00 (440) 9865 562</span>
                                <span className='text-gray-500'>Mon to Fri 9am to 6pm</span>
                            </div>
                        </main>

                        <main className='flex gap-3'>
                            <i className='text-3xl text-gray-500'><IoMailOpenOutline /></i>
                            <div className='flex flex-col gap-1'>
                                <span className='font-semibold'>support@colorlib.com</span>
                                <span className='text-gray-500'>Send us your query anytime!</span>
                            </div>
                        </main>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default page