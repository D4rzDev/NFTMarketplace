import React, { useState} from 'react'
import { RiMenu4Fill, RiCloseLine} from 'react-icons/ri'


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toogleMenu = () =>{
    setNav(!nav);
  }
  return (
    <nav className=' relative'>
        <div className=' flex flex-row items-center justify-between pt-6 bg-black bg-opacity-80 py-2 px-6 md:px-20 '>
            <div className=' hidden flex-row items-center justify-between gap-6 py-2 px-4 md:flex md:gap-20 lg:gap-[650px]'>
                <div className=' flex items-center justify-center gap-6'>
                  <a className=' text-sm hover:border-b-2 border-[#D6EF0E]' href="">Marketplace</a>
                  <a className=' text-sm hover:border-b-2 border-[#D6EF0E]' href="">Artists</a>
                  <a className=' text-sm hover:border-b-2 border-[#D6EF0E]' href="">Community</a>
                  <a className=' text-sm hover:border-b-2 border-[#D6EF0E]' href="">Collections</a>
                </div>
                <a href="" className=' no-underline bg-[#D6EF0E] text-white text-center  w-[150px] text-sm font-bold py-2 px-4 rounded-md'>Sign Up</a>
            </div>

            <div className=' md:hidden' onClick={toogleMenu}>
               { !nav ? <RiMenu4Fill className=' text-[#D6EF0E] ' size={25}/> : <RiCloseLine className=' text-[#D6EF0E] ' size={25}/>}
            </div>
            
            
        </div>

        <ul className={ !nav ? 'hidden' : ' absolute w-screen h-screen px-6 pt-6 bg-black bg-opacity-80 md:hidden'}>
            <div className=' flex flex-col items-center justify-center pt-20 '>
              <a className=' no-underline py-2 hover:border-b-2 border-[#D6EF0E]'>Marketplace</a>
              <a className=' no-underline py-2 hover:border-b-2 border-[#D6EF0E]'>Artits</a>
              <a className=' no-underline py-2 hover:border-b-2 border-[#D6EF0E]'>Community</a>
              <a className=' no-underline py-2 hover:border-b-2 border-[#D6EF0E] pb-10'>Collections</a>
              <a href="" className=' no-underline bg-[#D6EF0E] text-white text-center  w-[200px] text-sm font-bold py-2 px-4 rounded-md'>Sign Up</a>
            </div>
          </ul>
    </nav>
  )
}

export default Navbar