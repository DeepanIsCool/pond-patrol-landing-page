import ContactForm from '@/components/sections/ContactForm'
import CoreFeatures from '@/components/sections/CoreFeatures'
import Footer from '@/components/sections/Footer'
import Hero from '@/components/sections/Hero'
import Navigation from '@/components/sections/Navigation'
import ProblemSpace from '@/components/sections/ProblemSpace'
import TechnicalSpecs from '@/components/sections/TechnicalSpecs'

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navigation />
      <Hero />
      <ProblemSpace />
      <CoreFeatures />
      <TechnicalSpecs />
      <ContactForm />
      <Footer />
    </main>
  )
}
