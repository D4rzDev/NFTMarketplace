import React from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import { BiSolidPaperPlane} from 'react-icons/bi'

const Footer = () => {
  return (
    <div className=' flex flex-col items-center justify-center  bg-black bg-opacity-80 pt-10 pb-10 px-10 border-none'>
       <p className=' text-sm text-gray-500 text-center md:px-40 '>Discover NFTs by category, track the latest drop, and and follow the collections you love. Enjoy it!</p>
       <div className=' flex flex-row items-center justify-center gap-4 pt-6'>
        <AiFillFacebook size={30}/>
        <AiFillLinkedin size={30}/>
        <BiSolidPaperPlane  size={30}/>
        <AiFillYoutube size={30}/>
       </div>
       <div className=' flex flex-row items-center justify-center gap-4 pt-6'>
        <p className=' text-xs font-sans text-gray-500'>© Copyright 2023 - davixq</p>
        <p  className=' text-xs font-sans text-gray-500'>Privacy Policy</p>
        <p  className=' text-xs font-sans text-gray-500'>Terms & Conditions</p>
       </div>
    </div>
  )
}

export default Footer