import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Section3 = () => {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <div className=' flex flex-col items-center justify-center  bg-black bg-opacity-80 pt-10 pb-10 px-10 border-none md:flex-row md:px-20 md:pb-20 md:gap-20'>
      <div data-aos="zoom-in-right" className=' flex flex-col items-center justify-between'>
        <div className=' flex flex-col items-center justify-center'>
            <h1 className=' text-center text-2xl font-extrabold'>Create And Sell Your  <span className='text-[#D6EF0E]'>Best NFTs</span></h1>
            <p className=' text-xs font-sans text-gray-500 text-center lg:w-[300px]'>Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</p>
        </div>

        <div className=' flex flex-row items-center justify-center pt-6'>
            <a className=' text-sm font-bold px-4 py-2 bg-[#D6EF0E] rounded-md' href="">Create Now</a>
            <a className=' text-sm font-bold px-4 py-2 ' href="">Learn More</a>
        </div>
      </div>
        
      <img data-aos="zoom-in-left" className=' pt-8 md:h-[250px] lg:h-[300px]' src="/create.png" alt="" />

    </div>
  )
}

export default Section3