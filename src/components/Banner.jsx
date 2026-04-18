import bannerImg from '../assets/banner.png'

function Banner() {
  return (
    <section className='relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] min-h-[280px] overflow-hidden bg-amber-50'>
      <img 
        src={bannerImg} 
        alt="Luxury perfume banner" 
        className='absolute inset-0 w-full h-full object-cover object-center md:object-right' 
        loading="lazy"
      />

      <div className='absolute inset-0 bg-gradient-to-r from-amber-50/90 via-amber-50/50 md:via-amber-50/30 to-transparent' />
      
      <div className='relative z-10 h-[80%] w-full flex items-center justify-start px-4 sm:px-6 md:px-8 lg:px-12'>
        <div className='max-w-xl md:max-w-2xl'>
          <span className='block text-xs sm:text-sm md:text-base uppercase tracking-[0.15em] text-amber-900 font-semibold mb-2 md:mb-4'>
            Discover your signature scent
          </span>
          
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-gray-900 leading-tight font-bold'>
            Luxury Fragrances For Every Moment
          </h1>
          
          <p className='mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed'>
            Explore our exclusive collection of premium perfumes, crafted for elegance and sophistication.
          </p>
          
          <div className='mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4'>
            <button className='bg-amber-900 hover:bg-amber-950 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-widest transition-colors duration-300 rounded hover:shadow-lg'>
              EXPLORE COLLECTION
            </button>
            <button className='border-2 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-widest transition-colors duration-300 rounded'>
              VIEW OFFERS
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner