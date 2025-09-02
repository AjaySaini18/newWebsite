import React from 'react'
import Navbar from '../components/Navbar'
import AIHeroSection from '../components/AIHeroSection'
import AIServices from '../components/AIServices'
import AiServiceSection from '../components/AIServiceSection'
import IndustriesSection from '../components/IndustriesSection'

const AIDevelopment = () => {
  return (
    <>
    <Navbar/>
    <AIHeroSection/>
    <AIServices/>
    <AiServiceSection/>
    <IndustriesSection/>
    {/* <CTASection/>
    <ContactCTA/>
    <Footer /> */}
    </>
  )
}

export default AIDevelopment