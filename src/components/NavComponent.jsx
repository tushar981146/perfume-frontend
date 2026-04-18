import { useState } from 'react'
import PerfumeName from './PerfumeName'
import NavHeaderList from './NavHeaderList'
import { Search, ShoppingBag, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function NavComponent() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  const navigate = useNavigate()

  return (
    // <header className='sticky top-0 z-50 bg-white text-black shadow-md'>
    //   <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4'>
    //     <div className='flex items-center justify-between gap-4'>
    //       <PerfumeName />

    //       <button
    //         type='button'
    //         aria-label='Toggle navigation menu'
    //         aria-expanded={menuOpen}
    //         onClick={() => setMenuOpen((prev) => !prev)}
    //         className='inline-flex h-10 w-10 items-center justify-center rounded-lg border border-amber-600 bg-amber-900/60 text-white hover:bg-amber-700 hover:border-amber-400 transition-colors duration-300 md:hidden'
    //       >
    //         <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
    //           <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
    //         </svg>
    //       </button>

    //       <div className='hidden items-center justify-between flex-1 md:flex md:gap-8'>
    //         <NavHeaderList />
    //         <div className='text-xs sm:text-sm text-amber-200 whitespace-nowrap'>Best perfume from around the world</div>
    //       </div>
    //     </div>

    //     {menuOpen && (
    //       <div className='mt-4 space-y-3 md:hidden pb-4 border-t border-amber-700 pt-4'>
    //         <NavHeaderList className='flex-col items-start gap-3 text-sm' />
    //         <div className='rounded-xl border border-amber-700 bg-amber-950/80 px-3 py-2 text-xs text-amber-200'>
    //           Best perfume from around the world
    //         </div>
    //       </div>
    //     )}
    //   </nav>
    // </header>

     <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex-shrink-0 flex flex-col items-center">
          <span className="text-2xl font-serif tracking-widest text-stone-800">PERFUME</span>
          <span className="text-[10px] tracking-[0.3em] text-stone-500 -mt-1 uppercase">Shop</span>
        </div>
        
        <div className="hidden md:flex space-x-10">
          {['HOME', 'COLLECTIONS', 'ABOUT', 'CONTACT'].map((item) => (
            <div 
              key={item} 
              onClick={() => navigate(item === 'HOME' ? '/' : `/${item.toLowerCase()}`)}
              className={`text-sm font-medium tracking-widest cursor-pointer transition-colors ${item === 'SHOP' ? 'text-stone-900 border-b-2 border-stone-800' : 'text-stone-500 hover:text-stone-900'}`}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <button className="text-stone-600 hover:text-stone-900"><Search size={20} /></button>
          <button className="text-stone-600 hover:text-stone-900"><User size={20} /></button>
          <button className="relative text-stone-600 hover:text-stone-900">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-amber-700 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default NavComponent