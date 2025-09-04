import React from 'react'
import InsightsFeatureOne from '../components/InsightsFeatureOne'
import InsightsFeatureTwo from '../components/InsightsFeatureTwo'
import InsightsFeatureThree from '../components/InsightsFeatureThree'
import InsightsHero from '../components/InsightsHero'
import CTASection from '../components/CTASection'
import ContactCTA from '../components/ContactCTA'


const InsightsPage = () => {
  return (
    <>
      <InsightsHero />
      <InsightsFeatureOne />
      <InsightsFeatureTwo />
      <InsightsFeatureThree />
      <CTASection />
      <ContactCTA />

    </>
  )
}

export default InsightsPage