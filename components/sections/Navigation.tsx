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

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50'
        : 'bg-white/60 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/pond_patrol_logo.png"
            alt="Pond Patrol Logo"
            className="h-20 w-auto"
          />
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Features', 'Specs', 'About'].map((link) => (
            <button
              key={link}
              className="text-sm font-medium text-gray-700 hover:text-[#D4AF37] transition-colors relative group"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>

        {/* Right: CTA Button */}
        <button className="px-6 py-2.5 rounded-full bg-[#D4AF37] text-[#0A2342] font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
          Pre-Order
        </button>
      </div>
    </nav>
  )
}
