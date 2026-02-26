'use client'

import { useEffect, useRef, useState } from 'react'
import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import ProblemSpace from '@/components/sections/ProblemSpace'
import CoreFeatures from '@/components/sections/CoreFeatures'
import TechnicalSpecs from '@/components/sections/TechnicalSpecs'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navigation />
      <Hero />
      <ProblemSpace />
      <CoreFeatures />
      <TechnicalSpecs />
      <Footer />
    </main>
  )
}
