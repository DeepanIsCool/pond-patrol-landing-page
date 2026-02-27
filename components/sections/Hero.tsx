'use client'

import Spline from '@splinetool/react-spline'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

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
              className={`text-[#D4AF37] text-xs font-bold tracking-widest uppercase transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              style={{ transitionDelay: '0ms' }}
            >
              Intelligent Aquaculture Protection
            </div>

            {/* H1 Headline */}
            <h1
              className={`font-unbounded text-5xl lg:text-6xl font-bold text-[#0A2342] leading-tight text-balance transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              style={{ transitionDelay: '100ms' }}
            >
              Stop Birds Before They Land, Not After They Feed
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg text-gray-700 leading-relaxed max-w-md transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              style={{ transitionDelay: '200ms' }}
            >
              24/7 autonomous AI bird deterrence that prevents predation before it happens. Protect your biomass, maximize your profits, eliminate labor dependency.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 pt-4 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
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

          {/* Right: Spline 3D Viewer */}
          <div
            className={`relative h-full min-h-96 flex items-center justify-center transform transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            <Image
              src="/pond_patrol_boat_image.png"
              alt="Hero"
              width={1600}
              height={1600}
              className="w-full h-auto scale-[1.4]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
