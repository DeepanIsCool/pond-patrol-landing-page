'use client'

import { useEffect, useRef, useState } from 'react'

interface Spec {
  number: string
  title: string
}

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}

export default function TechnicalSpecs() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ coverage: 0, detection: 0, birds: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && counts.coverage === 0) {
          const interval = setInterval(() => {
            setCounts((prev) => ({
              coverage: prev.coverage < 40 ? prev.coverage + 1 : 40,
              detection: prev.detection < 360 ? prev.detection + 18 : 360,
              birds: prev.birds < 99 ? prev.birds + 5 : 99,
            }))
          }, 20)

          setTimeout(() => clearInterval(interval), 1000)
        }
        setIsVisible(true)
      },
      { threshold: 0.3 }
    )

    const el = sectionRef.current
    if (el) observer.observe(el)
    return () => {
      if (el) observer.unobserve(el)
    }
  }, [])

  const specs: Spec[] = [
    { number: `${counts.coverage.toFixed(0)}k`, title: 'm² Coverage per Unit' },
    { number: '360°', title: 'Threat Detection' },
    { number: 'Zero', title: 'Harmful Emissions' },
    { number: `${counts.birds.toFixed(0)}%`, title: 'Predation Prevention' },
  ]

  return (
    <section ref={sectionRef} id="about" className="py-28 px-6 relative overflow-hidden">
      {/* Semi-opaque overlay for readability */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className={`transform transition-[opacity,transform] duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            <h2 className="text-sm font-bold text-[#D4AF37] mb-4 tracking-widest uppercase">
              Performance Metrics
            </h2>
            <h3 className="font-unbounded text-5xl lg:text-6xl font-bold text-[#0A2342] text-balance leading-tight">
              Built for professional aquaculture.
            </h3>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {specs.map((spec, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-2xl bg-white/90 backdrop-blur-md border border-[#D4AF37]/20 shadow-lg hover:border-[#D4AF37] hover:shadow-xl hover:-translate-y-1 transition-[border-color,box-shadow,transform] duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-4xl lg:text-5xl font-bold text-[#0A2342] mb-2 tabular-nums">
                {spec.number}
              </p>
              <p className="text-sm lg:text-base font-medium text-gray-500">{spec.title}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-24">
          <h3 className="font-unbounded text-3xl font-bold text-[#0A2342] text-center mb-12 text-balance">
            Human vs. AI Protection
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg bg-white/90 backdrop-blur-md">
            <table className="w-full">
              <caption className="sr-only">Comparison of human deterrence methods versus Pond Patrol AI protection</caption>
              <thead>
                <tr className="bg-[#0A2342] text-white">
                  <th scope="col" className="px-6 py-4 text-left font-semibold">Aspect</th>
                  <th scope="col" className="px-6 py-4 text-left font-semibold">Human Deterrence</th>
                  <th scope="col" className="px-6 py-4 text-left font-semibold">Pond Patrol AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    aspect: 'Coverage',
                    human: 'Limited to visible area',
                    ai: '360° autonomous perimeter',
                  },
                  {
                    aspect: 'Response Time',
                    human: '2–5 minutes',
                    ai: 'Milliseconds',
                  },
                  {
                    aspect: 'Cost per Year',
                    human: '₹50,000–80,000',
                    ai: '₹3,000–5,000',
                  },
                  {
                    aspect: 'Consistency',
                    human: 'Variable (fatigue)',
                    ai: '99.9% uptime',
                  },
                  {
                    aspect: 'Predictability',
                    human: 'Highly adaptable birds',
                    ai: 'ML-powered adaptation',
                  },
                  {
                    aspect: 'Environmental',
                    human: 'Potential harm',
                    ai: 'Zero emissions',
                  },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/80 transition-colors duration-200">
                    <td className="px-6 py-4 font-semibold text-[#0A2342]">{row.aspect}</td>
                    <td className="px-6 py-4 text-gray-600">{row.human}</td>
                    <td className="px-6 py-4 font-semibold text-[#0A2342] bg-[#D4AF37]/10">
                      {row.ai}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
