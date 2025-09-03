import React from 'react'
import InsightsFeatureOne from '../components/InsightsFeatureOne'
import InsightsFeatureTwo from '../components/InsightsFeatureTwo'
import InsightsFeatureThree from '../components/InsightsFeatureThree'
import InsightsHero from '../components/InsightsHero'

const InsightsPage = () => {
  return (
    <>
      <InsightsHero />
      <InsightsFeatureOne />
      <InsightsFeatureTwo />
      <InsightsFeatureThree />
    </>
  )
}

export default InsightsPage