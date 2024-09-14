import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { MdOutlineMapsHomeWork } from "react-icons/md";




const Footer = () => {
    return (
        <div className='mt-12'>
            <main className='flex flex-col md:flex-row mx-4 md:mx-40 md:gap-0 gap-10 justify-between pt-32'>
                <div className="md:gap-10 gap-3 text-sm flex flex-col">
                    <h2 className='md:text-xl text-2xl flex font-semibold text-black gap-2'><i className="bg-blue-400 rounded-full p-2 text-2xl  text-white"><MdOutlineMapsHomeWork /></i>Finloans</h2>
                    <span className="w-48 flex text-gray-400">
                        finloan@support.com <br/>
                        +10 873 672 6782<br />
                        600/D, Green road, NewYork</span>
                    <span className="flex gap-6 text-gray-400 text-2xl"> <FaFacebook />
                        <AiFillTwitterCircle />
                        <FaSquareInstagram /></span>
                </div>
                <div className='flex flex-col md:pl-10 text-sm gap-3 text-gray-400'>
                    <h2 className='text-xl font-semibold text-black md:mb-7'>Services</h2>
                    <span className="flex"><main className="pt-1"></main>SEO/SEM</span>
                    <span className="flex"><main className="pt-1"></main>Web design</span>
                    <span className="flex"><main className="pt-1"></main>Ecommerce</span>
                    <span className="flex"><main className="pt-1"></main>Digital marketing</span>
                </div>

                <div className='flex flex-col text-sm gap-3 text-gray-400'>
                    <h2 className='text-xl font-semibold text-black md:mb-7'>Useful Links</h2>
                    <span className="flex"><main className="pt-1"></main>About</span>
                    <span className="flex"><main className="pt-1"></main>Blog</span>
                    <span className="flex"><main className="pt-1"></main>Contact</span>
                    <span className="flex"><main className="pt-1"></main>Support</span>
                </div>

                <div className='flex flex-col gap-3 text-sm text-gray-400'>
                    <h2 className='text-xl font-semibold md:mb-7 text-black'>Subscribe</h2>
                    <span className="flex"><main className="pt-1"></main><input className="p-2 border border-2-black" placeholder="Enter your mail" /><button className="bg-blue-400 text-white p-2 flex">Subscribe</button></span>
                    <span className="flex"><main className="pt-1"></main>Esteem spirit temper too say adieus who direct esteem <br /> esteems luckily.</span>
                </div>

            </main>

            <main className='flex  justify-center mt-10 md:mt-40 pb-20'>
                <div className='text-gray-400 flex px-2'>Copyright © 2024 All rights reserved | This template is made with <span className="mx-2 pt-1"><FaHeart /></span>  by <a className="text-blue-400 ml-2" href="#">Colorlib</a> </div>
            </main>

        </div>
    )
}

export default Footer