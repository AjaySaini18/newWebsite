import React from 'react'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import StatsSection from '../components/StatsSection'
import CaseStudySection from '../components/CaseStudySection'
import InnovationSection from '../components/InnovationSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ClientsSection from '../components/ClientsSection'
import CTASection from '../components/CTASection'
import ContactCTA from '../components/ContactCTA'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <CaseStudySection />
      <InnovationSection />
      <TestimonialsSection />
      <ClientsSection />
      <CTASection/>
      <ContactCTA/>
    </div>
  )
}

export default Home