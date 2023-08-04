import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Section5 = () => {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <div className=' flex flex-col items-center justify-center  bg-black bg-opacity-80 pt-10 pb-10 px-10 border-none md:flex-row md:px-20 md:gap-20 md:pb-20 md:pt-20'>
       <img data-aos="zoom-in-right" className=' md:h-[200px] lg:h-[300px]' src="/subscribe.png" alt="" />
       <div data-aos="zoom-in-left" className=' flex flex-col items-center justify-center'>
         <h1 className=' text-2xl text-center font-extrabold pb-4 pt-6'>Subscribe And <span className='text-[#D6EF0E]'>get our Updates</span> Every Week</h1>
         <p className=' text-xs font-sans text-gray-500 text-center'>We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly</p>
         <div className=' flex flex-row items-center mt-6 px-2 py-2 rounded-md bg-[#040d22]'>
            <input className=' bg-transparent text-xs px-2 py-2' type="text" placeholder='Enter your Email' />
             <a className=' no-underline text-white text-sm bg-[#D6EF0E] w-full py-1 px-2 rounded-md' href=""> Subscribe</a>
         </div>
       </div>
    </div>
  )
}

export default Section5