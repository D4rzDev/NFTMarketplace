import React from 'react'

const Section1 = () => {
  return (
    <div className=' flex flex-col items-center justify-center pt-10 pb-10 bg-black bg-opacity-80 md:flex-row-reverse md:px-20 md:pt-20 md:pb-20 md:gap-20'>
        <img className=' px-6 md:h-[250px] lg:h-[400px]' src="/img1.png" alt="" />

        <div className=' '>
            <h1 className=' text-center pt-4 text-4xl px-10 font-extrabold '>Discover and Collect The BestNFTs <span className='text-[#D6EF0E]'>Digital Art.</span> </h1>
            <p className=' text-xs font-sans font-normal text-center text-gray-600 px-10'>Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</p>
            <div className=' flex flex-row items-center justify-center py-10 gap-4'>
                <a className=' text-sm font-bold px-4 py-2 bg-[#D6EF0E] rounded-md' href="">Explore Now</a>
                <a className=' text-sm font-bold px-4 py-2 ' href="">Learn More</a>
            </div>

            <div className=' flex flex-row items-center justify-center gap-8'>
                <div className=' flex flex-col items-center justify-center'>
                    <h1 className=' text-xl text-[#D6EF0E] font-bold'>8.9 <span className=' text-white'>K</span></h1>
                    <p className=' text-xs font-normal'>Artwork</p>
                </div>
                <div className=' flex flex-col items-center justify-center'>
                    <h1 className=' text-xl text-[#D6EF0E] font-bold'>65 <span className=' text-white'>K</span></h1>
                    <p className=' text-xs font-normal'>Artist</p>
                </div>
                <div className=' flex flex-col items-center justify-center'>
                    <h1 className=' text-xl text-[#D6EF0E] font-bold'>87 <span className=' text-white'>K</span></h1>
                    <p className=' text-xs font-normal'>Collection</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Section1