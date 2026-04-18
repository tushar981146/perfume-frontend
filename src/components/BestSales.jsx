import React, { useEffect } from 'react'
import ImgMediaCard from './ImgMediaCard'
import useProductStore from '../store/product'

function BestSales() {
  const { fetchBestSellers, bestSellers } = useProductStore();

  useEffect(() => {
    fetchBestSellers();
  }, [])
  
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-black">
      <div className='mx-auto max-w-7xl'>
        <div className='mb-10 sm:mb-12 md:mb-16 text-center'>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-2 text-black tracking-wide">Our Best Sellers</h2>
          <div className='w-16 h-1 bg-amber-400 mx-auto mt-4' />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>

          {

            bestSellers && bestSellers.bestSellers.map((product) => (
              <ImgMediaCard key={product._id} product={product}  />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default BestSales