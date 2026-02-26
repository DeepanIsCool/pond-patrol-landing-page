'use client'

import { useEffect, useRef, useState } from 'react'

interface ProblemCard {
  id: number
  title: string
  description: string
  impact: string
}

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

  const problems: ProblemCard[] = [
    {
      id: 1,
      title: 'Bird Predation Losses',
      description: 'Cormorants, herons, and egrets consume up to 2kg of fish per bird daily',
      impact: '15-30% annual yield loss',
    },
    {
      id: 2,
      title: 'Labor-Intensive Control',
      description: 'Manual deterrence requires 24/7 monitoring and constant vigilance',
      impact: '$50k+ annual labor costs',
    },
    {
      id: 3,
      title: 'Environmental Inconsistency',
      description: 'Weather variations and bird adaptation reduce traditional method effectiveness',
      impact: 'Unpredictable protection levels',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 bg-gradient-to-b from-[#0A2342] to-[#0A2342]/95 overflow-hidden"
    >
      {/* Decorative background grid */}
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h2 className="text-lg font-semibold text-[#D4AF37] mb-4 tracking-widest uppercase">
              The Real Cost
            </h2>
            <h3 className="text-5xl lg:text-6xl font-bold text-white text-balance leading-tight mb-6">
              Bird predation costs fish farms millions annually.
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Traditional deterrence methods are labor-intensive, unreliable, and environmentally inconsistent. Pond Patrol changes everything.
            </p>
          </div>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div
              key={problem.id}
              className={`group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#D4AF37]/30 hover:bg-white/10 transition-all duration-500 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37]/0 to-[#C8102E]/0 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              <div className="relative">
                <h4 className="text-xl font-bold text-white mb-3">{problem.title}</h4>
                <p className="text-gray-300 mb-6">{problem.description}</p>
                <div className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50">
                  <p className="text-sm font-semibold text-[#D4AF37]">{problem.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="text-center">
          <blockquote
            className={`transform transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <p className="text-3xl lg:text-4xl font-bold text-[#D4AF37] italic mb-4 text-balance">
              "In aquaculture, 24/7 protection isn't luxury. It's survival."
            </p>
            <p className="text-lg text-gray-400">— Industry Leading Fish Farm Operator</p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
