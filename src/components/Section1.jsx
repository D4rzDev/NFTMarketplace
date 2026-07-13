import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import useSectionAnimations from '../hooks/useSectionAnimations'

const stats = [
  { value: 8.9, suffix: 'K', label: 'Artwork' },
  { value: 65, suffix: 'K', label: 'Artist' },
  { value: 87, suffix: 'K', label: 'Collection' },
]

const Section1 = () => {
  const scope = useSectionAnimations()

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } })
      tl.from('.hero-img', { autoAlpha: 0, scale: 0.92, duration: 1 })
        .from('.hero-title', { y: 40, autoAlpha: 0 }, '-=0.6')
        .from('.hero-text', { y: 30, autoAlpha: 0 }, '-=0.5')
        .from('.hero-cta', { y: 20, autoAlpha: 0, stagger: 0.1 }, '-=0.5')
        .from('.hero-stat', { y: 20, autoAlpha: 0, stagger: 0.12 }, '-=0.4')

      gsap.to('.hero-img', {
        y: -12,
        duration: 2.4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1,
      })

      gsap.utils.toArray('.stat-value', scope.current).forEach((el) => {
        const target = parseFloat(el.dataset.count)
        const decimals = el.dataset.count.includes('.') ? 1 : 0
        const counter = { val: 0 }
        gsap.to(counter, {
          val: target,
          duration: 1.6,
          ease: 'power1.out',
          delay: 0.8,
          onUpdate: () => {
            el.textContent = counter.val.toFixed(decimals)
          },
        })
      })
    },
    { scope }
  )

  return (
    <section ref={scope} className='bg-black bg-opacity-80'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-12 md:flex-row-reverse md:px-12 md:py-20 lg:gap-20 lg:px-20'>
        <img
          className='hero-img w-full max-w-[320px] md:max-w-[280px] lg:max-w-[400px]'
          src='/img1.png'
          alt='Featured NFT artwork'
        />

        <div className='flex flex-col items-center md:items-start'>
          <h1 className='hero-title text-center text-4xl font-extrabold md:text-left lg:text-5xl'>
            Discover and Collect The Best NFTs{' '}
            <span className='text-[#D6EF0E]'>Digital Art.</span>
          </h1>
          <p className='hero-text pt-4 text-center font-sans text-xs text-gray-500 md:text-left md:text-sm'>
            Get started with the easiest and most secure platform to buy and trade digital ART and
            NFT&rsquo;s. Start exploring the world of digital art and NFTs today and take control of
            your digital assets with confidence!
          </p>

          <div className='flex flex-row items-center gap-4 py-8 md:py-10'>
            <a className='hero-cta rounded-md bg-[#D6EF0E] px-4 py-2 text-sm font-bold text-black no-underline' data-hover href=''>
              Explore Now
            </a>
            <a className='hero-cta px-4 py-2 text-sm font-bold no-underline' data-hover href=''>
              Learn More
            </a>
          </div>

          <div className='flex flex-row items-center gap-8 md:gap-12'>
            {stats.map((stat) => (
              <div key={stat.label} className='hero-stat flex flex-col items-center'>
                <h2 className='text-xl font-bold text-[#D6EF0E] lg:text-2xl'>
                  <span className='stat-value' data-count={stat.value}>
                    {stat.value}
                  </span>{' '}
                  <span className='text-white'>{stat.suffix}</span>
                </h2>
                <p className='text-xs font-normal'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1
