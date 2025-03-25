import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  const [clickedNavBtn, setClickedNavBtn] = useState('home')
  const handleMenuClick = () => {
    setIsMenuClicked(!isMenuClicked)

  }
  return (
    <div>
      <header>
        <div className='flex items-center gap-2 py-2 px-3 justify-between'>
          <div className='flex items-center gap-2 py-2 px-3'>
            <div>
              <img src="/logo.png" alt="college-logo" className='rounded-full w-[70px]' />
            </div>
            <div>
              <h1 className='font-bold text-[16px] sm:text-2xl flex flex-col'>Shri Ganesh Rai Post Graduate College</h1>
              <p className='text-pink-600 text-[12px] sm:text-[16px]'>Dhobhi, Jaunpur, Uttar Pradesh, India</p>
            </div>
          </div>
          <div className='sm:hidden '>
            {
              isMenuClicked ? <X onClick={handleMenuClick} /> : <Menu onClick={handleMenuClick} />
            }


          </div>
        </div>
        <nav className={`sm:flex items-center xl:gap-6 lg:gap-3 md:gap-[15px] sm:gap-[15px] bg-purple-900 text-white p-3 md:p-[6px] sm:p-[5px] font-medium xl:text-xl lg:text-[12px] md:text-[8px] sm:text-[6px]  ${isMenuClicked ? 'flex' : 'hidden'} flex-wrap text-[12px] gap-3`}>
          <span onClick={() => setClickedNavBtn('home')} className={`cursor-pointer flex  items-center justify-center ${clickedNavBtn === 'home' ? 'text-pink-600 shadow-lg' : ''}`}>
            <Link to="/">Home</Link>
          </span>
          <span onClick={() => setClickedNavBtn('about')} className={`cursor-pointer flex  items-center justify-center ${clickedNavBtn === 'about' ? 'text-pink-600 shadow-lg' : ''}`}>
            <Link to="/about">About Us</Link>
          </span>
          <span onClick={() => setClickedNavBtn('principal-message')} className={`cursor-pointer flex  items-center justify-center ${clickedNavBtn === 'principal-message' ? 'text-pink-600 shadow-lg' : ''}`}>
            <Link to="/about/principal-message">Principal Message</Link>
          </span>
          <span onClick={() => setClickedNavBtn('courses')} className={`cursor-pointer flex  items-center justify-center ${clickedNavBtn === 'courses' ? 'text-pink-600 shadow-lg' : ''}`}>
            <Link to="/courses">Courses</Link>
          </span>
          <span onClick={() => setClickedNavBtn('faculties')} className={`cursor-pointer flex  items-center justify-center ${clickedNavBtn === 'faculties' ? 'text-pink-600 shadow-lg' : ''}`}>
            <Link to="/faculties">Faculties</Link>
          </span>
          <span onClick={() => setClickedNavBtn('infrastructure')} className={`cursor-pointer flex  items-center justify-center ${clickedNavBtn === 'infrastructure' ? 'text-pink-600 shadow-lg' : ''}`}>
            <Link to="/infrastructure">Infrastructure</Link>
          </span>
          <span onClick={() => setClickedNavBtn('sports')} className={`cursor-pointer flex  items-center justify-center ${clickedNavBtn === 'sports' ? 'text-pink-600 shadow-lg' : ''}`}>
            <Link to="/sports">Sports</Link>
          </span>
          <span onClick={() => setClickedNavBtn('gallery')} className={`cursor-pointer flex  items-center justify-center ${clickedNavBtn === 'gallery' ? 'text-pink-600 shadow-lg' : ''}`}>
            <Link to="/gallery">Gallery</Link>
            </span>
          <span className='cursor-pointer flex  items-center justify-center'>Contact Us </span>
        </nav>
      </header>
    </div>
  )
}

export default Navbar