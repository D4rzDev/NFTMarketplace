import useSectionAnimations from '../hooks/useSectionAnimations'

const Section3 = () => {
  const scope = useSectionAnimations()

  return (
    <section ref={scope} className='bg-black bg-opacity-80'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-12 md:flex-row md:px-12 md:py-16 lg:gap-20 lg:px-20'>
        <div data-reveal='left' className='flex flex-col items-center md:items-start'>
          <h1 className='text-center text-2xl font-extrabold md:text-left lg:text-3xl'>
            Create And Sell Your <span className='text-[#D6EF0E]'>Best NFTs</span>
          </h1>
          <p className='max-w-sm pt-2 text-center font-sans text-xs text-gray-500 md:text-left md:text-sm'>
            Start exploring the world of digital art and NFTs today and take control of your
            digital assets with confidence!
          </p>

          <div className='flex flex-row items-center gap-4 pt-6'>
            <a className='rounded-md bg-[#D6EF0E] px-4 py-2 text-sm font-bold text-black no-underline' data-hover href=''>
              Create Now
            </a>
            <a className='px-4 py-2 text-sm font-bold no-underline' data-hover href=''>
              Learn More
            </a>
          </div>
        </div>

        <img
          data-reveal='right'
          className='w-full max-w-[320px] md:max-w-[280px] lg:max-w-[360px]'
          src='/create.png'
          alt='Create and sell NFTs'
        />
      </div>
    </section>
  )
}

export default Section3
