
import { useNavigate } from 'react-router-dom'

function NavHeaderList({ className = '' }) {
  const navigate = useNavigate()
  
  const links = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/' },
    { label: 'Contact', path: '/' },
    { label: 'Blog', path: '/' }
  ]

  return (
    <nav className={`flex gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm md:text-base text-white ${className}`}>
      {links.map((link) => (
        <button 
          key={link.label} 
          onClick={() => navigate(link.path)}
          className='relative font-medium text-black transition-colors hover:text-amber-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full'
        >
          {link.label}
        </button>
      ))}
    </nav>
  )
}

export default NavHeaderList