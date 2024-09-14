import Image from 'next/image'
import React from 'react'
import faq from '@/app/asset/faq.webp'

const Work = () => {
    return (
        <div>

            <div className='flex flex-col items-center bg-custom-cyan-200'>
                <main className='flex flex-col gap-4 md:px-0 px-2 items-center pt-1 md:pt-32'>
                    <h2 className='md:text-5xl text-3xl'>How it Works</h2>
                    <span className='text-gray-500 text-lg text-center'>We provide online instant cash loans with quick approval that suit your term</span>
                </main>
                <main className='flex md:flex-row flex-col justify-between gap-12 my-12 md:my-28 pb-4'>
                    <div className='flex flex-col gap-4 items-start'>
                        <span className='flex rounded-full  px-5 py-4 bg-blue-100 text-blue-500'>01</span>
                        <span className='text-xl'>Apply for loan</span>
                        <span className='text-gray-500 w-[300px]'>We will customize a loan based on the amount of cash your company need term</span>
                    </div>

                    <div className='flex flex-col gap-4 items-start'>
                        <span className='flex rounded-full px-5 py-4 bg-blue-100 text-blue-500'>02</span>
                        <span className='text-xl'>Application review</span>
                        <span className='text-gray-500 w-[300px]'>We will customize a loan based on the amount of cash your company need term</span>
                    </div>

                    <div className='flex flex-col gap-4 items-start'>
                        <span className='flex rounded-full px-5 py-4 bg-blue-100 text-blue-500'>03</span>
                        <span className='text-xl'>Grt funding fast</span>
                        <span className='text-gray-500 w-[300px]'>We will customize a loan based on the amount of cash your company need term</span>
                    </div>
                </main>

            </div>
            <main className='flex md:flex-row flex-col'>
                <Image className='h-[100vh]' width={700} height={1000} alt='img' src={faq} />
                <div className='flex flex-col pt-12 md:pt-32 px-4 md:pl-20'>
                    <h2 className='md:text-5xl text-3xl'>Frequently ask</h2>
                </div>
            </main>
        </div>
    )
}

export default Work