'use client'

import { useEffect, useRef, useState } from 'react'

interface Spec {
  number: string
  title: string
}

export default function TechnicalSpecs() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ coverage: 0, detection: 0, emissions: 0, rating: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && counts.coverage === 0) {
          // Start counting animation
          const interval = setInterval(() => {
            setCounts((prev) => ({
              coverage: prev.coverage < 40 ? prev.coverage + 1 : 40,
              detection: prev.detection < 360 ? prev.detection + 18 : 360,
              emissions: 0,
              rating: prev.rating < 67 ? prev.rating + 3.35 : 67,
            }))
          }, 20)

          setTimeout(() => clearInterval(interval), 1000)
        }
        setIsVisible(true)
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

  const specs: Spec[] = [
    { number: `${counts.coverage.toFixed(0)}k`, title: 'm² Coverage per Unit' },
    { number: '360°', title: 'Threat Detection' },
    { number: 'Zero', title: 'Emissions' },
    { number: 'IP67', title: 'Marine-Grade Protection' },
  ]

  return (
    <section ref={sectionRef} className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Decorative blueprint background */}
      <div className="absolute inset-0 opacity-3">
        <svg className="w-full h-full" viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="dots" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="#0A2342" />
            </pattern>
          </defs>
          <rect width="1400" height="700" fill="url(#dots)" />
          <path d="M0 350 Q 350 200 700 350 T 1400 350" stroke="#0A2342" strokeWidth="0.5" fill="none" opacity="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-[#0A2342] mb-4 text-balance">
            Smart Birds Meet Smarter Technology.
          </h2>
          <p className="text-lg text-gray-600">Engineered for Indian aquaculture conditions and global reliability standards.</p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-[#D4AF37]/5 to-[#0A2342]/5 rounded-3xl p-12 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300">
                <div className="text-6xl font-bold text-[#D4AF37] mb-4 font-mono">
                  {spec.number}
                </div>
                <div className="text-[#0A2342] font-semibold text-sm uppercase tracking-widest">
                  {spec.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-[#0A2342] mb-8 text-balance">
            Humans Get Tired. AI Gets Results.
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#D4AF37]/30">
                  <th className="text-left py-6 px-6 font-semibold text-[#0A2342]">Feature</th>
                  <th className="text-left py-6 px-6 font-semibold text-gray-600">Human Labour</th>
                  <th className="text-left py-6 px-6 font-semibold text-[#D4AF37]">Pond Patrol AI</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Coverage Hours', human: '8-10 hours', ai: '24 hours' },
                  { feature: 'Response Time', human: 'Minutes', ai: 'Seconds' },
                  { feature: 'Pond Coverage', human: 'Partial', ai: 'Complete' },
                  { feature: 'Habituation Risk', human: 'High', ai: 'Zero' },
                  { feature: 'Weather Issues', human: 'Yes', ai: 'No' },
                  { feature: 'Consistency', human: 'Variable', ai: 'Constant' },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 hover:bg-[#F8F9FA] transition-colors ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transitionDelay: `${400 + index * 50}ms` }}
                  >
                    <td className="py-6 px-6 font-semibold text-[#0A2342]">{row.feature}</td>
                    <td className="py-6 px-6 text-gray-600">{row.human}</td>
                    <td className="py-6 px-6 font-semibold text-[#D4AF37]">{row.ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Preview */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-[#0A2342] mb-8 text-balance">
            Scalability & Pricing Options
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Smart Protection',
                price: 'Custom Quote',
                description: 'Wired power system with shore-based inverter battery.',
                features: ['Basic Coverage', 'Shore Power', 'Manual Control'],
                highlighted: false,
              },
              {
                name: 'Standard',
                price: '₹1,50,000',
                description: 'Covers 200m × 200m pond (≈10 acres).',
                features: ['Full Coverage', 'Solar Power', 'AI Auto-Response', 'Mobile App'],
                highlighted: true,
              },
              {
                name: 'Large Farms',
                price: 'Custom Quote',
                description: 'Dual autonomous boats with auto-charging dock.',
                features: ['24/7 Deployment', 'Dual Units', 'Premium Support', 'Advanced Analytics'],
                highlighted: false,
              },
            ].map((tier, index) => (
              <div
                key={index}
                className={`relative transform transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div
                  className={`rounded-3xl p-8 transition-all duration-300 border-2 ${
                    tier.highlighted
                      ? 'border-[#D4AF37] bg-gradient-to-br from-[#D4AF37]/5 to-transparent'
                      : 'border-gray-200 bg-white hover:border-[#D4AF37]/50'
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-6 bg-[#D4AF37] text-[#0A2342] px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  )}

                  <h4 className="text-2xl font-bold text-[#0A2342] mb-2">{tier.name}</h4>
                  <div className="text-4xl font-bold text-[#D4AF37] mb-4">{tier.price}</div>
                  <p className="text-gray-600 text-sm mb-6">{tier.description}</p>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                      tier.highlighted
                        ? 'bg-[#D4AF37] text-[#0A2342] hover:shadow-xl hover:scale-105'
                        : 'border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
