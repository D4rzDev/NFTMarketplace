import { AiFillFacebook, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { BiSolidPaperPlane } from 'react-icons/bi'
import useSectionAnimations from '../hooks/useSectionAnimations'

const socials = [
  { icon: AiFillFacebook, label: 'Facebook' },
  { icon: AiFillLinkedin, label: 'LinkedIn' },
  { icon: BiSolidPaperPlane, label: 'Telegram' },
  { icon: AiFillYoutube, label: 'YouTube' },
]

const Footer = () => {
  const scope = useSectionAnimations()

  return (
    <footer ref={scope} className='bg-black bg-opacity-80'>
      <div className='mx-auto flex max-w-7xl flex-col items-center px-6 py-12 md:px-12 lg:px-20'>
        <p data-reveal='up' className='max-w-xl text-center text-sm text-gray-500'>
          Discover NFTs by category, track the latest drop, and follow the collections you love.
          Enjoy it!
        </p>
        <div data-reveal='up' className='flex flex-row items-center gap-4 pt-6'>
          {socials.map(({ icon: Icon, label }) => (
            <a key={label} aria-label={label} className='text-white hover:text-[#D6EF0E]' data-hover href=''>
              <Icon size={30} />
            </a>
          ))}
        </div>
        <div className='flex flex-row flex-wrap items-center justify-center gap-4 pt-6'>
          <p className='font-sans text-xs text-gray-500'>© Copyright 2023 - davixq</p>
          <p className='font-sans text-xs text-gray-500'>Privacy Policy</p>
          <p className='font-sans text-xs text-gray-500'>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
