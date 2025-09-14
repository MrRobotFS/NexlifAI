'use client'

import { Navbar } from './_components/navbar'
import { HeroSection } from './_components/sections/hero-section'
import { BrandSection } from './_components/sections/brand-section'
import { ServicesSection } from './_components/sections/services-section'
import { CTASection } from './_components/sections/cta-section'
import { Footer } from './_components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BrandSection />
      <ServicesSection />
      <CTASection />
      <Footer />
    </main>
  )
}