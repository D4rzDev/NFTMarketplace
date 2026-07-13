import useSectionAnimations from '../hooks/useSectionAnimations'

const Section4 = () => {
  const scope = useSectionAnimations()

  return (
    <section ref={scope} className='bg-black bg-opacity-80'>
      <div className='mx-auto flex max-w-7xl flex-col items-center px-6 py-12 md:px-12 md:py-16 lg:px-20'>
        <div
          data-reveal='left'
          className='flex w-full flex-col items-center gap-4 md:flex-row md:justify-between'
        >
          <h1 className='text-center text-2xl font-extrabold md:text-left'>
            Popular <span className='text-[#D6EF0E]'>Artists</span> On This Week
          </h1>
          <a
            className='rounded-md bg-[#D6EF0E] px-4 py-2 text-center text-sm font-bold text-black no-underline'
            data-hover
            href=''
          >
            See All
          </a>
        </div>
        <img
          data-reveal='zoom'
          className='w-full max-w-4xl pt-10'
          src='/popular.png'
          alt='Popular artists of the week'
        />
      </div>
    </section>
  )
}

export default Section4
