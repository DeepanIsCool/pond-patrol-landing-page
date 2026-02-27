'use client'

import { useEffect, useRef, useState } from 'react'

interface LinkColumn {
  title: string
  links: string[]
}

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
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

  const linkColumns: LinkColumn[] = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Security', 'Updates'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Blog', 'Careers', 'Contact'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'API Docs', 'Support', 'Community'],
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms of Service', 'Cookie Policy', 'Compliance'],
    },
  ]

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setEmail('')
  }

  return (
    <footer ref={sectionRef} className="bg-[#0A2342] text-white">
      {/* Top Border Accent */}
      <div className="h-1 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37] to-[#D4AF37]/0"></div>

      {/* Main Footer Content */}
      <div className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* CTA Section */}
          <div className="text-center mb-20">
            <div
              className={`transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
              <h2 className="font-unbounded text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
                No Sleep. No Breaks.
                <br />
                <span className="text-[#D4AF37]">No Bird Attacks.</span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Join leading aquaculture operators who trust Pond Patrol to protect their yield 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 rounded-full bg-[#D4AF37] text-[#0A2342] font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Start Your Free Trial
                </button>
                <button className="px-8 py-4 rounded-full border-2 border-[#D4AF37] text-[#D4AF37] font-bold text-lg hover:bg-[#D4AF37]/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16 py-12 border-t border-b border-white/10">
            {/* Newsletter Column */}
            <div
              className={`lg:col-span-2 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="flex items-center gap-2 mb-6">
                <img
                  src="/pond_patrol_logo.png"
                  alt="Pond Patrol Logo"
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-6">
                Advanced autonomous AI-powered bird deterrence for modern aquaculture.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
                <button className="w-full px-4 py-3 rounded-full bg-[#D4AF37] text-[#0A2342] font-semibold hover:shadow-lg transition-all duration-300">
                  Subscribe
                </button>
              </form>
            </div>

            {/* Links Columns */}
            {linkColumns.map((column, colIndex) => (
              <div
                key={colIndex}
                className={`transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                style={{ transitionDelay: `${(colIndex + 2) * 100}ms` }}
              >
                <h4 className="font-bold text-white mb-6">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12">
            {/* Left: Copyright */}
            <div className="text-gray-400 text-sm">
              <p>© 2024 Pond Patrol by Brave Ventures. All rights reserved.</p>
            </div>

            {/* Right: Social Links */}
            <div className="flex items-center gap-6">
              {[
                { icon: 'LinkedIn', href: '#' },
                { icon: 'Twitter', href: '#' },
                { icon: 'Facebook', href: '#' },
                { icon: 'Instagram', href: '#' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
                  aria-label={social.icon}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
