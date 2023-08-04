import React, {useEffect}  from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Section4 = () => {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <div className=' flex flex-col items-center justify-center  bg-black bg-opacity-80 pt-10 pb-10 px-10 border-none md:px-20 md:pb-20'>
        <div data-aos="zoom-in-right" className=' flex flex-col items-center justify-center md:flex-row lg:gap-[500px]'>
            <h1 className=' text-2xl text-center font-extrabold pb-4 md:pr-72 '> Popular <span className='text-[#D6EF0E]'>Artists</span> On This Week</h1>
            <a className=' no-underline text-white text-center text-sm w-20 bg-[#D6EF0E] py-1 px-2 rounded-md' href=""> See All</a>
        </div>
        <img data-aos="zoom-in-left" className=' pt-10' src="/popular.png" alt="" />

    </div>
  )
}

export default Section4
