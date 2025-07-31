import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/tetratech white.png'

const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Left: Logo */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Tetratech Logo" className="h-10 mb-3" />
          <p className="text-sm">Tetratech Engineering LLP<br />
            Plot No. A130, Loni Deokar MIDC, Indapur,<br />
            Pune – 413132, Maharashtra, India
          </p>
        </div>

        {/* Center: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/service" className="hover:underline">Services</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Right: Contact / Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-sm mb-2">Email: <a href="mailto:tetratech.engg@gmail.com" className="underline">tetratech.engg@gmail.com</a></p>
          <p className="text-sm mb-4">Phone: <a href="https://wa.me/917378751788" className="underline">+91 73787 51788</a></p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://instagram.com/tetratechengineering" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://facebook.com/tetratechengineering" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://linkedin.com/company/tetratechengineering" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs mt-8 text-gray-300">
        © {new Date().getFullYear()} Tetratech Engineering LLP. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

