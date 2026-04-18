import React from 'react'
import { useNavigate } from 'react-router-dom'

function PerfumeName() {
  const navigate = useNavigate()
  
  return (
    <button 
      onClick={() => navigate('/')}
      className='flex items-center gap-2 group hover:opacity-90 transition-opacity'
    >
      <div className='text-base sm:text-lg md:text-2xl font-bold tracking-[0.15em] text-black uppercase bg-white  '>
        Perfume
      </div>
      <span className='text-base sm:text-lg md:text-xl font-bold text-black'>Shop</span>
    </button>
  )
}

export default PerfumeName