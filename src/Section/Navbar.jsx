import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/tetratech.png' 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-white shadow-md py-2 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-50">
      
      {/* Left: Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Tetratech Logo" className="h-10" /> 
        <span className="text-lg sm:text-xl font-bold text-[#003366]"></span> 
      </div>

      {/* Center: Navigation (Desktop) */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li><Link to="/" className="hover:text-[#DB1A13] transition-colors">Home</Link></li>
        <li><Link to="/about" className="hover:text-[#DB1A13] transition-colors">About</Link></li>
        <li><Link to="/service" className="hover:text-[#DB1A13] transition-colors">Service</Link></li>
        <li><Link to="/contact" className="hover:text-[#DB1A13] transition-colors">Contact</Link></li>
      </ul>

      {/* Right: Mobile Menu Button + CTA */}
      <div className="flex items-center gap-3">
        {/* CTA Button */}
        <a
          href="https://wa.me/917378751788"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#DB1A13] hidden md:block text-white text-sm sm:text-lg px-2 sm:px-3 py-1.5 sm:py-2 rounded-full font-semibold shadow hover:bg-[#b91610] transition-colors"
        >
          <span className="hidden sm:inline">Chat Now</span>
          <span className="sm:hidden">Chat</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-lg font-bold text-[#003366]">Menu</span>
          <button
            onClick={closeMenu}
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <ul className="flex flex-col p-4 space-y-4">
          <li>
            <Link 
              to="/" 
              className="block text-gray-700 font-medium py-2 hover:text-[#DB1A13] transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="block text-gray-700 font-medium py-2 hover:text-[#DB1A13] transition-colors"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/service" 
              className="block text-gray-700 font-medium py-2 hover:text-[#DB1A13] transition-colors"
              onClick={closeMenu}
            >
              Service
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="block text-gray-700 font-medium py-2 hover:text-[#DB1A13] transition-colors"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile CTA Button */}
        <div className="p-4 border-t mt-auto">
          <a
            href="https://wa.me/917378751788"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#DB1A13] text-white text-center py-3 rounded-full font-semibold shadow hover:bg-[#b91610] transition-colors"
            onClick={closeMenu}
          >
            Chat Now on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
