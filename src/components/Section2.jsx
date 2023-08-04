import React, { useEffect} from 'react'
import { AiOutlineClockCircle} from 'react-icons/ai'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Section2 = () => {
    useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <div className=' flex flex-col items-center justify-center px-10 pt-10 bg-black bg-opacity-80 pb-10 md:px-20 md:pb-20'>
        <div data-aos="zoom-in-left" className=' flex flex-col items-center justify-between md:flex-row lg:gap-[500px]'>
            <h1 className=' text-2xl text-center font-extrabold pb-4 mt-0 mb-0 md:pr-48 lg:w-[500px]'><span className='text-[#D6EF0E]'>Amazing</span>  and Super Unique Art of This<span className='text-[#D6EF0E]'>Week</span></h1>
            <a className=' no-underline text-center text-white w-20 text-sm mt-0 mb-0 bg-[#D6EF0E] py-1 px-2 rounded-md' href=""> See All</a>
        </div>

        <div className=' flex flex-col items-center justify-center md:flex-row md:gap-4'>
            <div data-aos="zoom-in-right" className=' flex flex-col items-center justify-center mt-10 rounded-lg gap-4 bg-[#040d22] px-2 py-2'>
            <div className=' flex flex-col items-center justify-center'>
                <img src="/nft1.png" alt="" />
                <div className=' flex flex-row items-cente justify-center gap-14'>
                    <p className=' text-lg font-bold'>Cyberpunk Cocomo</p>
                    <p className=' flex pt-2 text-xs font-normal'>490ETH</p>
                </div>

                 <div className=' flex flex-row items-center justify-center pt-4 gap-28'>
                    <div className=' flex flex-col'>
                        <p className=' text-start text-[10px] text-gray-500'> Ending In</p>
                        <p className=' flex flex-row items-center text-[10px] text-gray-500'><AiOutlineClockCircle size={20}/>03:24:56</p>
                    </div>
                    <p className=' text-[#D6EF0E] border-2 border-[#D6EF0E] rounded-md px-2 py-1 text-xs'>Place a Bid</p>
                </div>
            </div>
        </div>

        <div data-aos="zoom-in-right" className=' flex flex-col items-center justify-center mt-10 rounded-lg gap-4 bg-[#040d22] px-2 py-2'>
            <div className=' flex flex-col items-center justify-center'>
                <img src="/nft2.png" alt="" />
                <div className=' flex flex-row items-cente justify-center gap-14'>
                    <p className=' text-lg font-bold'>Charge, Qi tiao yu</p>
                    <p className=' flex pt-2 text-xs font-normal'>490ETH</p>
                </div>

                 <div className=' flex flex-row items-center justify-center pt-4 gap-28'>
                    <div className=' flex flex-col'>
                        <p className=' text-start text-[10px] text-gray-500'> Ending In</p>
                        <p className=' flex flex-row items-center text-[10px] text-gray-500'><AiOutlineClockCircle size={20}/>03:24:56</p>
                    </div>
                    <p className=' text-[#D6EF0E] border-2 border-[#D6EF0E] rounded-md px-2 py-1 text-xs'>Place a Bid</p>
                </div>
            </div>
        </div>

        <div data-aos="zoom-in-right" className=' flex flex-col items-center justify-center mt-10 rounded-lg gap-4 bg-[#040d22] px-2 py-2'>
            <div className=' flex flex-col items-center justify-center'>
                <img src="/nft3.png" alt="" />
                <div className=' flex flex-row items-cente justify-center gap-14'>
                    <p className=' text-lg font-bold'>Surgeon, Josh Rife</p>
                    <p className=' flex pt-2 text-xs font-normal'>490ETH</p>
                </div>

                 <div className=' flex flex-row items-center justify-center pt-4 gap-28'>
                    <div className=' flex flex-col'>
                        <p className=' text-start text-[10px] text-gray-500'> Ending In</p>
                        <p className=' flex flex-row items-center text-[10px] text-gray-500'><AiOutlineClockCircle size={20}/>03:24:56</p>
                    </div>
                    <p className=' text-[#D6EF0E] border-2 border-[#D6EF0E] rounded-md px-2 py-1 text-xs'>Place a Bid</p>
                </div>
            </div>
        </div>

        </div>

    </div>
  )
}

export default Section2