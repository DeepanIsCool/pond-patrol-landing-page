'use client'

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

    const el = sectionRef.current
    if (el) observer.observe(el)
    return () => {
      if (el) observer.unobserve(el)
    }
  }, [])

  return (
    <section ref={sectionRef} id="home" className="pt-36 pb-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div
              className={`transform transition-[opacity,transform] duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              style={{ transitionDelay: '0ms' }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold tracking-widest uppercase border border-[#D4AF37]/20">
                Intelligent Aquaculture Protection
              </span>
            </div>

            {/* H1 Headline */}
            <h1
              className={`font-unbounded text-5xl lg:text-6xl font-bold text-[#0A2342] leading-tight text-balance transform transition-[opacity,transform] duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              style={{ transitionDelay: '100ms' }}
            >
              Stop Birds Before They Land, Not After They Feed
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg text-gray-600 leading-relaxed max-w-md text-pretty transform transition-[opacity,transform] duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              style={{ transitionDelay: '200ms' }}
            >
              24/7 autonomous AI bird deterrence that prevents predation before it happens. Protect your biomass, maximize your profits, eliminate labor dependency.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 pt-2 transform transition-[opacity,transform] duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              style={{ transitionDelay: '300ms' }}
            >
              <a
                href="#product"
                className="group relative overflow-hidden px-8 py-3.5 rounded-full bg-[#D4AF37] text-[#0A2342] font-semibold hover:shadow-xl hover:scale-105 transition-[box-shadow,transform] duration-300 text-center"
              >
                <span className="relative z-10">Discover Pond Patrol</span>
                {/* Shimmer sweep effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" aria-hidden="true" />
              </a>
              <a
                href="#about"
                className="px-8 py-3.5 rounded-full border-2 border-[#D4AF37] text-[#D4AF37] font-semibold hover:bg-[#D4AF37]/5 hover:border-[#D4AF37] transition-[background-color,border-color] duration-300 text-center"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right: Product Image */}
          <div
            className={`relative h-full min-h-96 flex items-center justify-center transform transition-[opacity,transform] duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            <Image
              src="/pond_patrol_boat_image.png"
              alt="Pond Patrol autonomous AI bird deterrence catamaran on water"
              width={1600}
              height={1600}
              className="w-full h-auto scale-[1.4]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
