import React from 'react'
import InsightsFeatureOne from '../components/InsightsFeatureOne'
import InsightsFeatureTwo from '../components/InsightsFeatureTwo'
import InsightsFeatureThree from '../components/InsightsFeatureThree'
import InsightsHero from '../components/InsightsHero'
import CTASection from '../components/CTASection'
import ContactCTA from '../components/ContactCTA'
import FAQSection from '../components/FAQSection'


const InsightsPage = () => {
  return (
    <>
      <InsightsHero />
      <InsightsFeatureOne />
      <InsightsFeatureTwo />
      <InsightsFeatureThree />
      <FAQSection/>
      <CTASection />
      <ContactCTA />

    </>
  )
}

export default InsightsPage