import React from 'react'
import IndustryHeroSection from '../components/IndustryHeroSection'
import IndustriesSection from '../components/IndustriesSection'
import AiServiceSection from '../components/AIServiceSection'
import IndustrySpotlightSection from '../components/IndustrySpotlightSection'
import ContactCTA from '../components/ContactCTA'

const IndustriesPage = () => {
  return (
    <div>
        <IndustryHeroSection/>
        <AiServiceSection/>
        <IndustrySpotlightSection/>
        <ContactCTA/>
    </div>
  )
}

export default IndustriesPage