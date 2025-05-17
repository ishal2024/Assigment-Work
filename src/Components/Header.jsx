import React, { useState } from 'react'
import Theme from './Theme'
import { useSelector } from 'react-redux'


function Header() {

    const [isMenuOpen , setIsMenuOpen] = useState(false)
    const data = useSelector( (state)=> state.theme)

  return (
       <nav className={`h-[70px]   w-[100vw] px-6 md:px-16 sticky top-0 left-0 lg:px-24 xl:px-32 flex items-center justify-between z-10 ${data.headerbgColor} transition-all`}>
      
     <p className='h-9 text-white font-bold text-3xl'>Soft Shell</p>

      <ul className="text-white md:flex hidden items-center gap-10">
        <li>
          <a className="hover:text-white/70 transition" href="#">Home</a>
        </li>
        <li>
          <a className="hover:text-white/70 transition" href="#">About Us</a>
        </li>
        <li>
          <a className="hover:text-white/70 transition" href="#">Review</a>
        </li>
        <li>
          <a className="hover:text-white/70 transition" href="#">Contact Us</a>
        </li>
      </ul>

    
      <Theme />

      <button
        aria-label="menu-btn"
        type="button"
        className="menu-btn inline-block md:hidden active:scale-90 transition"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="#fff"
        >
          <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
        </svg>
      </button>

      {isMenuOpen && (
        <div className={`mobile-menu absolute top-[70px] left-0 w-full ${data.headerbgColor} p-6 md:hidden`}>
          <ul className="flex flex-col space-y-4 text-white text-lg">
            <li><a href="#" className="text-sm">Home</a></li>
            <li><a href="#" className="text-sm">About Us</a></li>
            <li><a href="#" className="text-sm">Review</a></li>
            <li><a href="#" className="text-sm">Contact Us</a></li>
          </ul>
        
        </div>
      )}
    </nav>
  
  )
}

export default Header