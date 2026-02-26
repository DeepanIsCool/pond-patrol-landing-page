'use client'

import { useEffect, useRef, useState } from 'react'

interface Feature {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

export default function CoreFeatures() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
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

  const features: Feature[] = [
    {
      id: 1,
      title: 'AI Vision Tracking',
      description: 'Advanced camera systems with real-time bird detection using machine learning algorithms.',
      icon: (
        <svg className="w-12 h-12 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2V5M12 19V22M22 12H19M5 12H2M19 5L17 7M7 17L5 19M19 19L17 17M7 7L5 5" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Autonomous Patrols',
      description: 'Self-navigating watercraft that continuously patrols entire pond areas without human intervention.',
      icon: (
        <svg className="w-12 h-12 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Dynamic Deterrence',
      description: 'Multi-sensory deterrence using visual lights and audio signals to prevent bird habituation.',
      icon: (
        <svg className="w-12 h-12 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path d="M6 12h12M12 6v12" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-[#0A2342] mb-4 text-balance">
            Intelligence that moves faster than wings.
          </h2>
          <p className="text-gray-600 text-lg">How Pond Patrol protects your yield, every second of every day.</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div
                className={`relative bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent group-hover:border-[#D4AF37]/30 ${
                  hoveredCard === feature.id ? '-translate-y-2' : ''
                }`}
              >
                {/* Icon Container */}
                <div className="mb-6 relative">
                  <div className="inline-block p-3 bg-[#F8F9FA] rounded-2xl group-hover:bg-[#D4AF37]/10 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#0A2342] mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center text-[#D4AF37] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works - Steps */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              number: '01',
              title: 'Vision',
              description: 'CCTV camera monitors entire pond. On-boat AI detects bird movement in real-time.',
            },
            {
              number: '02',
              title: 'Prediction',
              description: 'Smart analysis predicts bird flight path and landing zones before contact.',
            },
            {
              number: '03',
              title: 'Action',
              description: 'Autonomous interception deploys dynamic deterrence preventing habituation.',
            },
          ].map((step, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="text-5xl font-bold text-[#D4AF37] mb-4 opacity-60">{step.number}</div>
              <h4 className="text-2xl font-bold text-[#0A2342] mb-3">{step.title}</h4>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
