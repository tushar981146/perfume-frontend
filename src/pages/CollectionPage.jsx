import React from 'react'
import Hero from '../components/HeroComponent'
import FilterBar from '../components/FilterBar'
import ProductGrid from '../components/ProductGrid'


function CollectionPage() {
  return (
    <div className='min-h-screen w-full  lg:w-full bg-white font-sans selection:bg-stone-200'>
        <Hero />
        <FilterBar />
        <ProductGrid />
    </div>
  )
}

export default CollectionPage