import { useRef, useState } from 'react'
import { RiMenu4Fill, RiCloseLine } from 'react-icons/ri'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const links = ['Marketplace', 'Artists', 'Community', 'Collections']

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const scope = useRef(null)

  const toggleMenu = () => setNav((prev) => !prev)

  useGSAP(
    (context, contextSafe) => {
      gsap.from('.nav-item', {
        y: -24,
        autoAlpha: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power3.out',
      })

      const cta = scope.current.querySelector('.nav-cta')
      const enter = contextSafe(() => gsap.to(cta, { scale: 1.06, duration: 0.25, ease: 'power2.out' }))
      const leave = contextSafe(() => gsap.to(cta, { scale: 1, duration: 0.3, ease: 'power2.out' }))
      cta.addEventListener('mouseenter', enter)
      cta.addEventListener('mouseleave', leave)
      return () => {
        cta.removeEventListener('mouseenter', enter)
        cta.removeEventListener('mouseleave', leave)
      }
    },
    { scope }
  )

  useGSAP(
    () => {
      if (nav) {
        gsap.from('.mobile-link', {
          x: -32,
          autoAlpha: 0,
          stagger: 0.07,
          duration: 0.4,
          ease: 'power2.out',
        })
      }
    },
    { scope, dependencies: [nav] }
  )

  return (
    <nav ref={scope} className='sticky top-0 z-50 bg-black/90 backdrop-blur-sm'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 lg:px-20'>
        <a href='' className='nav-item text-lg font-extrabold no-underline'>
          NFT<span className='text-[#D6EF0E]'>Market</span>
        </a>

        <div className='hidden items-center gap-8 md:flex'>
          {links.map((link) => (
            <a
              key={link}
              className='nav-item border-b-2 border-transparent text-sm transition-colors duration-200 hover:border-[#D6EF0E] hover:text-[#D6EF0E]'
              href=''
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href=''
          className='nav-item nav-cta hidden rounded-md bg-[#D6EF0E] px-6 py-2 text-center text-sm font-bold text-black no-underline md:block'
        >
          Sign Up
        </a>

        <button
          type='button'
          aria-label='Toggle menu'
          className='bg-transparent border-none cursor-pointer md:hidden'
          onClick={toggleMenu}
        >
          {!nav ? (
            <RiMenu4Fill className='text-[#D6EF0E]' size={28} />
          ) : (
            <RiCloseLine className='text-[#D6EF0E]' size={28} />
          )}
        </button>
      </div>

      {nav && (
        <div className='fixed inset-x-0 top-[58px] h-screen bg-black/95 md:hidden'>
          <div className='flex flex-col items-center gap-2 pt-16'>
            {links.map((link) => (
              <a
                key={link}
                className='mobile-link border-b-2 border-transparent py-3 text-base no-underline hover:border-[#D6EF0E] hover:text-[#D6EF0E]'
                href=''
              >
                {link}
              </a>
            ))}
            <a
              href=''
              className='mobile-link mt-8 w-[200px] rounded-md bg-[#D6EF0E] px-4 py-3 text-center text-sm font-bold text-black no-underline'
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
