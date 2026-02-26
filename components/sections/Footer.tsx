'use client'

import { useEffect, useRef, useState } from 'react'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <footer ref={sectionRef} className="bg-[#0A2342] text-white">
      {/* Top Border Accent */}
      <div className="h-1 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37] to-[#D4AF37]/0"></div>

      {/* Main Footer Content */}
      <div className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero CTA Section */}
          <div className="text-center mb-20">
            <div
              className={`transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
                No Sleep. No Breaks.
                <br />
                <span className="text-[#D4AF37]">No Bird Attacks.</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Stop Feeding Birds Your Profits. Professional Bird Deterrence for Professional Farmers.
              </p>
              <p className="text-sm text-gray-400 mb-10">
                Designed for Indian Conditions. Perfect for IMC farming, Pangasius cultivation, Tilapia production, Hatchery operations, and Large reservoir systems.
              </p>
            </div>
          </div>

          {/* Newsletter & Contact */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 transform transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            {/* Newsletter */}
            <div className="flex flex-col gap-4">
              <label className="text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
                Stay Updated
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
                <button className="px-6 py-3 rounded-full bg-[#D4AF37] text-[#0A2342] font-semibold hover:shadow-lg transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col gap-4">
              <label className="text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
                Get in Touch
              </label>
              <div className="flex gap-4">
                <button className="flex-1 px-6 py-3 rounded-full border-2 border-white/30 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all font-semibold text-sm">
                  📞 Call Us
                </button>
                <button className="flex-1 px-6 py-3 rounded-full border-2 border-white/30 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all font-semibold text-sm">
                  💬 WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-white/10 transform transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Column 1: Product */}
            <div>
              <h4 className="font-semibold text-[#D4AF37] mb-4 text-sm uppercase tracking-widest">Product</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">
                    Specifications
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div>
              <h4 className="font-semibold text-[#D4AF37] mb-4 text-sm uppercase tracking-widest">Company</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Support */}
            <div>
              <h4 className="font-semibold text-[#D4AF37] mb-4 text-sm uppercase tracking-widest">Support</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div>
              <h4 className="font-semibold text-[#D4AF37] mb-4 text-sm uppercase tracking-widest">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div
            className={`flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 transform transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#D4AF37]/60 flex items-center justify-center">
                <span className="text-[#0A2342] font-bold text-sm">P</span>
              </div>
              <div>
                <p className="font-semibold text-white">Pond Patrol by Brave Ventures</p>
                <p className="text-xs">Protecting Aquaculture, Sustainably</p>
              </div>
            </div>

            <p>
              © 2026 Brave Ventures. All rights reserved. | Made with{' '}
              <span className="text-[#D4AF37]">♦</span> for Fish Farmers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
