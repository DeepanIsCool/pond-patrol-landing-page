'use client'

import Image from 'next/image'
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
      { threshold: 0.2 }
    )

    const el = sectionRef.current
    if (el) observer.observe(el)
    return () => {
      if (el) observer.unobserve(el)
    }
  }, [])

  const problems = [
    {
      id: 1,
      impact: '15–30%',
      title: 'Annual Yield Loss',
      description: 'Stolen directly from ponds by cormorants, herons, and egrets daily.',
    },
    {
      id: 2,
      impact: '₹50k+',
      title: 'Labor Costs',
      description: 'Wasted annually on manual, unpredictable, and ineffective deterrence methods.',
    },
  ]

  return (
    <section ref={sectionRef} id="product" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" aria-hidden="true" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Image Collage */}
          <div
            className={`lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl transform transition-[opacity,transform] duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
          >
            <Image
              src="/birds_eating_fish.png"
              alt="Birds feeding on fish farm stock, causing significant financial losses"
              width={800}
              height={800}
              loading="lazy"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342]/80 via-transparent to-transparent flex items-end p-8" aria-hidden="true">
              <p className="text-white font-semibold text-xl tracking-wide">The Silent Threat to Your Aquaculture</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-5 space-y-8">
            <div className={`space-y-5 transform transition-[opacity,transform] duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}>
              <h2 className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm">The Real Cost</h2>
              <h3 className="font-unbounded text-4xl lg:text-5xl font-bold text-[#0A2342] leading-tight text-balance">
                Predatory Birds Are Devouring Your Profits
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed text-pretty">
                Traditional deterrence methods are labor-intensive, unreliable, and environmentally inconsistent. Every day without protection is money lost directly to the sky.
              </p>
            </div>

            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transform transition-[opacity,transform] duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              {problems.map((problem) => (
                <div
                  key={problem.id}
                  className="p-6 bg-gray-50/80 rounded-2xl border border-gray-100 hover:border-[#D4AF37]/50 hover:shadow-lg hover:-translate-y-0.5 transition-[border-color,box-shadow,transform] duration-300 group"
                >
                  <div className="text-3xl font-bold text-[#C8102E] mb-2 tabular-nums group-hover:scale-110 transform transition-transform duration-300 origin-left">{problem.impact}</div>
                  <div className="font-semibold text-[#0A2342] mb-1">{problem.title}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{problem.description}</p>
                </div>
              ))}
            </div>

            <blockquote
              className={`pt-6 border-t border-gray-200 transform transition-[opacity,transform] duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <p className="text-xl font-bold text-[#D4AF37] italic mb-2">
                &ldquo;In aquaculture, 24/7 protection isn&rsquo;t luxury. It&rsquo;s survival.&rdquo;
              </p>
              <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">&mdash; Industry Leading Fish Farm Operator</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
