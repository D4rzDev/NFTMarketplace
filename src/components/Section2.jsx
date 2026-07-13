import { AiOutlineClockCircle } from 'react-icons/ai'
import useSectionAnimations from '../hooks/useSectionAnimations'

const nfts = [
  { img: '/nft1.png', name: 'Cyberpunk Cocomo', price: '490ETH', endsIn: '03:24:56' },
  { img: '/nft2.png', name: 'Charge, Qi tiao yu', price: '490ETH', endsIn: '03:24:56' },
  { img: '/nft3.png', name: 'Surgeon, Josh Rife', price: '490ETH', endsIn: '03:24:56' },
]

const Section2 = () => {
  const scope = useSectionAnimations()

  return (
    <section ref={scope} className='bg-black bg-opacity-80'>
      <div className='mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:px-20'>
        <div
          data-reveal='left'
          className='flex flex-col items-center gap-4 md:flex-row md:justify-between'
        >
          <h1 className='text-center text-2xl font-extrabold md:max-w-md md:text-left'>
            <span className='text-[#D6EF0E]'>Amazing</span> and Super Unique Art of This{' '}
            <span className='text-[#D6EF0E]'>Week</span>
          </h1>
          <a
            className='rounded-md bg-[#D6EF0E] px-4 py-2 text-center text-sm font-bold text-black no-underline'
            data-hover
            href=''
          >
            See All
          </a>
        </div>

        <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {nfts.map((nft) => (
            <div
              key={nft.name}
              data-reveal='up'
              data-lift
              className='flex flex-col rounded-xl bg-[#040d22] p-3'
            >
              <img className='w-full rounded-lg' src={nft.img} alt={nft.name} />
              <div className='flex flex-row items-center justify-between pt-3'>
                <p className='text-base font-bold lg:text-lg'>{nft.name}</p>
                <p className='text-xs font-normal'>{nft.price}</p>
              </div>

              <div className='flex flex-row items-center justify-between pt-4'>
                <div className='flex flex-col'>
                  <p className='text-[10px] text-gray-500'>Ending In</p>
                  <p className='flex flex-row items-center gap-1 text-[10px] text-gray-500'>
                    <AiOutlineClockCircle size={16} />
                    {nft.endsIn}
                  </p>
                </div>
                <a
                  className='rounded-md border-2 border-[#D6EF0E] px-3 py-1 text-xs text-[#D6EF0E] no-underline'
                  data-hover
                  href=''
                >
                  Place a Bid
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section2
