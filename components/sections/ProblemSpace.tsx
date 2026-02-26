'use client'

import { useEffect, useRef, useState } from 'react'

export default function ProblemSpace() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
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
    <section
      ref={sectionRef}
      className="relative py-24 px-6 bg-gradient-to-b from-[#0A2342] to-[#0A2342]/95 overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Headline */}
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-5xl font-bold text-white text-balance mb-8">
            Defend Your Harvest, Automatically.
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Predatory birds pose a constant threat to your aquaculture yield. Traditional methods are inconsistent, expensive, and exhausting. Pond Patrol changes everything.
          </p>
        </div>

        {/* Data Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Card 1 */}
          <div
            className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform transition-all duration-700 hover:border-[#D4AF37]/50 hover:bg-white/15 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="text-[#D4AF37] text-sm font-semibold uppercase tracking-wider mb-3">The Baseline</div>
            <div className="text-white text-sm leading-relaxed">
              Without dedicated bird labour, face a minimum loss of <span className="text-[#C8102E] font-bold">30%</span> of your yield per crop.
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform transition-all duration-700 hover:border-[#D4AF37]/50 hover:bg-white/15 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="text-[#D4AF37] text-sm font-semibold uppercase tracking-wider mb-3">The Financial Drain</div>
            <div className="text-white text-sm leading-relaxed">
              That equates to a <span className="text-[#C8102E] font-bold">₹1,80,000 loss</span> per acre per crop cycle.
            </div>
          </div>

          {/* Card 3 */}
          <div
            className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform transition-all duration-700 hover:border-[#D4AF37]/50 hover:bg-white/15 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="text-[#D4AF37] text-sm font-semibold uppercase tracking-wider mb-3">The Ineffective Solution</div>
            <div className="text-white text-sm leading-relaxed">
              Even with dedicated labour, a <span className="text-[#C8102E] font-bold">10% loss</span> still costs ₹60,000 per acre.
            </div>
          </div>
        </div>

        {/* Quote */}
        <div
          className={`mt-16 text-center transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="text-2xl font-semibold text-[#D4AF37] italic text-balance">
            "Birds don't steal one fish. They steal your margins."
          </p>
        </div>
      </div>
    </section>
  )
}
