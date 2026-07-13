import useSectionAnimations from '../hooks/useSectionAnimations'

const Section5 = () => {
  const scope = useSectionAnimations()

  return (
    <section ref={scope} className='bg-black bg-opacity-80'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-12 md:flex-row md:px-12 md:py-20 lg:gap-20 lg:px-20'>
        <img
          data-reveal='left'
          className='w-full max-w-[300px] lg:max-w-[360px]'
          src='/subscribe.png'
          alt='Subscribe illustration'
        />
        <div data-reveal='right' className='flex w-full flex-col items-center md:items-start'>
          <h1 className='text-center text-2xl font-extrabold md:text-left lg:text-3xl'>
            Subscribe And <span className='text-[#D6EF0E]'>get our Updates</span> Every Week
          </h1>
          <p className='max-w-md pt-2 text-center font-sans text-xs text-gray-500 md:text-left md:text-sm'>
            We have a blog related to NFT so we can share thoughts and routines on our blog which
            is updated weekly
          </p>
          <form
            className='mt-6 flex w-full max-w-md flex-row items-center gap-2 rounded-md bg-[#040d22] p-2'
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className='min-w-0 flex-1 border-none bg-transparent px-2 py-2 text-xs text-white outline-none'
              type='email'
              placeholder='Enter your Email'
            />
            <button
              type='submit'
              className='cursor-pointer whitespace-nowrap rounded-md border-none bg-[#D6EF0E] px-4 py-2 text-sm font-bold text-black'
              data-hover
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Section5
