'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const leftLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Product', href: '#product' },
  ]
  const rightLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
  ]

  const allLinks = [...leftLinks, ...rightLinks]

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl" role="navigation" aria-label="Main navigation">
        {/* Wrapper */}
        <div className="relative flex items-start justify-center">

          {/* The thin pill bar */}
          <div
            className={`absolute top-0 left-0 right-0 h-[44px] rounded-full border transition-[background-color,border-color,backdrop-filter] duration-500 ${scrolled
              ? 'bg-white/95 backdrop-blur-xl border-gray-200 shadow-sm'
              : 'bg-white/85 backdrop-blur-md border-gray-200/60'
              }`}
          />

          {/* Left Navigation Links */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-end pr-14 relative z-10" style={{ height: '44px' }}>
            {leftLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold tracking-widest text-[#0A2342] uppercase hover:text-[#D4AF37] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* Center: Logo flap */}
          <div className="relative z-20 flex-shrink-0 -mt-6">
            <a
              href="#home"
              className={`block bg-white border border-gray-200 rounded-b-2xl p-3 transition-[box-shadow] duration-500 ${scrolled ? 'shadow-md' : ''}`}
              style={{ borderTop: 'none' }}
              aria-label="Pond Patrol — back to top"
            >
              <Image
                src="/pond_patrol_logo.png"
                alt="Pond Patrol Logo"
                width={80}
                height={80}
                className="h-20 w-auto object-contain"
                priority
              />
            </a>
          </div>

          {/* Right Navigation Links */}
          <div className="hidden md:flex items-center gap-8 flex-1 pl-14 relative z-10" style={{ height: '44px' }}>
            {rightLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold tracking-widest text-[#0A2342] uppercase hover:text-[#D4AF37] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* Mobile: hamburger button */}
          <button
            className="md:hidden absolute right-4 top-2.5 text-[#0A2342] z-10 p-1 rounded-md"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile slide-in drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          {/* Drawer panel */}
          <div
            className="absolute top-0 right-0 h-full w-72 bg-white shadow-2xl p-8 flex flex-col animate-slide-in-right"
            style={{ overscrollBehavior: 'contain' }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="self-end mb-8 p-1 text-gray-500 hover:text-[#0A2342] rounded-md transition-colors duration-200"
              aria-label="Close navigation menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Mobile nav links */}
            <nav className="flex flex-col gap-6">
              {allLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-semibold text-[#0A2342] hover:text-[#D4AF37] transition-colors duration-300 tracking-wide uppercase opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 80}ms`, animationFillMode: 'forwards' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-auto pt-8 border-t border-gray-100">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full py-3 rounded-full bg-[#D4AF37] text-[#0A2342] font-semibold text-center hover:shadow-lg transition-[box-shadow] duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
