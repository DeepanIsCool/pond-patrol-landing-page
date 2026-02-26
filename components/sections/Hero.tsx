'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
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
    <section ref={sectionRef} className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Eyebrow */}
            <div
              className={`text-[#D4AF37] text-xs font-bold tracking-widest uppercase transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              Intelligent Aquaculture Protection
            </div>

            {/* H1 Headline */}
            <h1
              className={`text-5xl lg:text-6xl font-bold text-[#0A2342] leading-tight text-balance transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Built for Modern Fish Farming.
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg text-gray-700 leading-relaxed max-w-md transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Autonomous, AI-powered bird deterrence designed to secure your yield.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 pt-4 transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <button className="px-8 py-3.5 rounded-full bg-[#D4AF37] text-[#0A2342] font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                Discover Pond Patrol
              </button>
              <button className="px-8 py-3.5 rounded-full border-2 border-[#D4AF37] text-[#D4AF37] font-semibold hover:bg-[#D4AF37]/5 transition-all duration-300">
                Watch Video
              </button>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div
            className={`relative h-full min-h-96 flex items-center justify-center transform transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-[#0A2342] to-[#0A2342]/80 flex items-center justify-center">
              {/* Placeholder for catamaran image - blue and gold theme */}
              <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
                {/* Simulated boat shape with SVG */}
                <svg
                  className="w-48 h-32 text-[#D4AF37] animate-float"
                  viewBox="0 0 200 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Main hull */}
                  <ellipse cx="100" cy="80" rx="60" ry="20" fill="currentColor" opacity="0.8" />
                  {/* Sensor pod */}
                  <circle cx="100" cy="40" r="15" fill="#C8102E" opacity="0.9" />
                  {/* Catamaran pontoons */}
                  <path d="M 60 85 Q 50 70 55 50" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.7" />
                  <path d="M 140 85 Q 150 70 145 50" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.7" />
                </svg>
                <p className="text-[#D4AF37]/60 text-sm">AI-Powered Autonomous Catamaran</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
