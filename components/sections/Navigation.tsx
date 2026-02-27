'use client'

import { useEffect, useState } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const leftLinks = ['Home', 'Product']
  const rightLinks = ['About Us', 'Contact Us']

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl">
      {/* Wrapper */}
      <div className="relative flex items-start justify-center">

        {/* The thin pill bar — flush to top */}
        <div
          className={`absolute top-0 left-0 right-0 h-[44px] rounded-full border transition-all duration-500 ${scrolled
            ? 'bg-white/95 backdrop-blur-xl border-gray-200'
            : 'bg-white/85 backdrop-blur-md border-gray-200/60'
            }`}
        />

        {/* Left Navigation Links — vertically centered in the bar */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-end pr-14 relative z-10" style={{ height: '44px' }}>
          {leftLinks.map((link) => (
            <button
              key={link}
              className="text-xs font-semibold tracking-widest text-[#0A2342] uppercase hover:text-[#D4AF37] transition-colors duration-300 relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300 rounded-full" />
            </button>
          ))}
        </div>

        {/* Center: Logo flap — hangs down from the bar */}
        <div className="relative z-20 flex-shrink-0 -mt-6">
          <div
            className={`bg-white border border-gray-200 rounded-b-2xl p-3 transition-all duration-500`}
            style={{ borderTop: 'none' }}
          >
            <img
              src="/pond_patrol_logo.png"
              alt="Pond Patrol Logo"
              className="h-20 w-auto object-contain"
            />
          </div>
        </div>

        {/* Right Navigation Links — vertically centered in the bar */}
        <div className="hidden md:flex items-center gap-8 flex-1 pl-14 relative z-10" style={{ height: '44px' }}>
          {rightLinks.map((link) => (
            <button
              key={link}
              className="text-xs font-semibold tracking-widest text-[#0A2342] uppercase hover:text-[#D4AF37] transition-colors duration-300 relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300 rounded-full" />
            </button>
          ))}
        </div>

        {/* Mobile: hamburger fallback */}
        <button className="md:hidden absolute right-4 top-3 text-[#0A2342] z-10">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
