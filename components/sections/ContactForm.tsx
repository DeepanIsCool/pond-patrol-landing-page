'use client'

import { useEffect, useRef, useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  farmSize: string
  message: string
}

interface Errors {
  [key: string]: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    farmSize: '',
    message: '',
  })

  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const validateForm = (): boolean => {
    const newErrors: Errors = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }
    if (!formData.farmSize.trim()) newErrors.farmSize = 'Farm size is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (validateForm()) {
      console.log('Form submitted:', formData)
      setSubmitted(true)

      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          farmSize: '',
          message: '',
        })
        setSubmitted(false)
      }, 5000)
    }
  }

  return (
    <section ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      {/* Semi-opaque overlay for readability */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`mb-16 text-center transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="font-unbounded text-4xl md:text-5xl font-bold text-[#0A2342] mb-4 text-balance">
            Ready to Protect Your Profits?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule your free consultation and see how Pond Patrol can revolutionize your fish farming operation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div
            className={`transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            <div className="bg-gradient-to-br from-[#0A2342] to-[#0A2342]/90 rounded-2xl p-8 text-white h-full shadow-2xl">
              <h3 className="font-unbounded text-2xl font-bold mb-8">Get in Touch</h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#D4AF37] text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Call Us</h4>
                    <p className="text-white/80">+91-XXXX-XXXX-XX</p>
                    <p className="text-white/60 text-sm">Available 9 AM - 6 PM IST</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#D4AF37] text-xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p className="text-white/80">contact@pondpatrol.in</p>
                    <p className="text-white/60 text-sm">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#D4AF37] text-xl">🌍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Live Demo</h4>
                    <p className="text-white/80">AquaEx Lucknow 2026</p>
                    <p className="text-white/60 text-sm">See it in action</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-[#D4AF37] font-semibold italic text-lg">
                  "Stop Feeding Birds Your Profits"
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            {submitted ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center shadow-lg">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-700">
                  Your message has been received. We'll contact you within 24 hours to schedule your free consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-lg">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#0A2342] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${errors.name
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-300 bg-white focus:border-[#D4AF37] focus:outline-none'
                      }`}
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#0A2342] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${errors.email
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-300 bg-white focus:border-[#D4AF37] focus:outline-none'
                      }`}
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#0A2342] mb-2">
                    Phone Number (10 digits)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="98765 43210"
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${errors.phone
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-300 bg-white focus:border-[#D4AF37] focus:outline-none'
                      }`}
                  />
                  {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Farm Size */}
                <div>
                  <label htmlFor="farmSize" className="block text-sm font-semibold text-[#0A2342] mb-2">
                    Pond/Farm Size
                  </label>
                  <select
                    id="farmSize"
                    name="farmSize"
                    value={formData.farmSize}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${errors.farmSize
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-300 bg-white focus:border-[#D4AF37] focus:outline-none'
                      }`}
                  >
                    <option value="">Select your farm size</option>
                    <option value="1-5">1-5 acres</option>
                    <option value="5-10">5-10 acres</option>
                    <option value="10-25">10-25 acres</option>
                    <option value="25-50">25-50 acres</option>
                    <option value="50+">50+ acres</option>
                  </select>
                  {errors.farmSize && <p className="text-red-600 text-sm mt-1">{errors.farmSize}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#0A2342] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your farm and any questions..."
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors resize-none ${errors.message
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-300 bg-white focus:border-[#D4AF37] focus:outline-none'
                      }`}
                  />
                  {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0A2342] to-[#0A2342]/80 text-white py-3 rounded-lg font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Schedule Free Consultation
                </button>

                <p className="text-center text-gray-600 text-sm">
                  We'll contact you within 24 hours to confirm your consultation slot
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
