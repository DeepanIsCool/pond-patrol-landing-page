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
    { number: 'Zero', title: 'Harmful Emissions' },
    { number: '${counts.birds.toFixed(0)}%', title: 'Predation Prevention' },
  ]

  const pricingTiers: PricingTier[] = [
    {
      name: 'Starter',
      price: '₹20,00,000',
      description: 'Perfect for small to medium farms up to 50 hectares.',
      features: [
        '1x Pond Patrol Unit',
        '40k m² coverage area',
        'Cloud monitoring dashboard',
        'Email alerts & reports',
        '1 year warranty',
        'Email support',
      ],
    },
    {
      name: 'Professional',
      price: '₹45,00,000',
      description: 'Ideal for large-scale aquaculture operations 50-200 hectares.',
      features: [
        '2x Pond Patrol Units',
        '80k m² coverage area',
        'Real-time mobile app',
        'Advanced analytics & ML',
        '3 year warranty',
        '24/7 Phone support',
        'Custom deployment',
        'System optimization',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Scalable solutions for mega-farms and aquaculture networks.',
      features: [
        '4+ Pond Patrol Units',
        '160k+ m² coverage',
        'Dedicated account manager',
        'API & custom integration',
        '5 year warranty',
        'Premium 24/7 support',
        'Quarterly audits',
        'Advanced compliance',
      ],
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h2 className="text-lg font-semibold text-[#D4AF37] mb-4 tracking-widest uppercase">
              Performance Metrics
            </h2>
            <h3 className="text-5xl lg:text-6xl font-bold text-[#0A2342] text-balance leading-tight">
              Built for professional aquaculture.
            </h3>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {specs.map((spec, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-2xl bg-white border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-500 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-4xl lg:text-5xl font-bold text-[#0A2342] mb-2">
                {spec.number}
              </p>
              <p className="text-sm lg:text-base font-medium text-gray-600">{spec.title}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-[#0A2342] text-center mb-12">
            Human vs. AI Protection
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0A2342] text-white">
                  <th className="px-6 py-4 text-left font-semibold">Aspect</th>
                  <th className="px-6 py-4 text-left font-semibold">Human Deterrence</th>
                  <th className="px-6 py-4 text-left font-semibold">Pond Patrol AI</th>
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
                    human: '2-5 minutes',
                    ai: 'Milliseconds',
                  },
                  {
                    aspect: 'Cost per Year',
                    human: '$50,000-80,000',
                    ai: '$3,000-5,000',
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
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#0A2342]">{row.aspect}</td>
                    <td className="px-6 py-4 text-gray-600">{row.human}</td>
                    <td className="px-6 py-4 font-semibold text-[#0A2342] bg-[#D4AF37]/5">
                      {row.ai}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Section */}
        <div>
          <h3 className="text-3xl font-bold text-[#0A2342] text-center mb-4">
            Flexible Pricing Plans
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the tier that fits your farm size and budget. All plans include our industry-leading AI technology and support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative rounded-2xl transition-all duration-500 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                } ${
                  tier.highlighted
                    ? 'md:scale-105 bg-gradient-to-b from-[#0A2342] to-[#0A2342]/95 text-white shadow-2xl border-2 border-[#D4AF37]'
                    : 'bg-white border-2 border-gray-200 hover:border-[#D4AF37]/50'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-block px-4 py-1 rounded-full bg-[#D4AF37] text-[#0A2342] text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8 h-full flex flex-col">
                  <h4 className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-[#0A2342]'}`}>
                    {tier.name}
                  </h4>
                  <p className={`text-sm mb-6 ${tier.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                    {tier.description}
                  </p>

                  <div className="mb-8">
                    <p className={`text-4xl font-bold mb-1 ${tier.highlighted ? 'text-[#D4AF37]' : 'text-[#0A2342]'}`}>
                      {tier.price}
                    </p>
                    {tier.price !== 'Custom' && (
                      <p className={`text-sm ${tier.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                        One-time investment
                      </p>
                    )}
                  </div>

                  <button
                    className={`w-full py-3 rounded-full font-semibold mb-8 transition-all duration-300 ${
                      tier.highlighted
                        ? 'bg-[#D4AF37] text-[#0A2342] hover:shadow-lg hover:scale-105'
                        : 'border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/5'
                    }`}
                  >
                    {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </button>

                  <div className="space-y-4 flex-grow">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <svg
                          className={`flex-shrink-0 w-5 h-5 mt-0.5 ${
                            tier.highlighted ? 'text-[#D4AF37]' : 'text-[#0A2342]'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className={`text-sm ${tier.highlighted ? 'text-gray-300' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
