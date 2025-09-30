import React from 'react'
import InsightsFeatureOne from '../components/InsightsFeatureOne'
import InsightsFeatureTwo from '../components/InsightsFeatureTwo'
import InsightsFeatureThree from '../components/InsightsFeatureThree'
import InsightsHero from '../components/InsightsHero'
import CTASection from '../components/CTASection'
import ContactCTA from '../components/ContactCTA'
import FAQSection from '../components/FAQSection'



const InsightsPage = () => {

  const faqData = [
    {
      question: "Is AI development only for large enterprises, or can small businesses benefit as well?",
      answer: "AI development can benefit businesses of all sizes. Small businesses can leverage AI to automate tasks, enhance customer experiences, and improve efficiency without requiring enterprise-level resources.",
    },
    {
      question: "How much does it cost to develop an AI app?",
      answer: "The cost varies based on complexity, features, and integrations. Small-scale AI solutions can be affordable, while enterprise-level applications may require larger investments.",
    },
    {
      question: "What industries can benefit from AI development services?",
      answer: "Industries like healthcare, finance, retail, logistics, real estate, manufacturing, and education can all benefit from AI applications.",
    },
    {
      question: "How long does the AI development process typically take?",
      answer: "Development timelines depend on project scope. Simple AI apps may take weeks, while more complex solutions could require several months.",
    },
    {
      question: "How does AI ML matter to modern business?",
      answer: "AI and ML help businesses make data-driven decisions, enhance customer personalization, reduce operational costs, and gain a competitive edge.",
    },
  ];

  return (
    <>
      <InsightsHero />
      <InsightsFeatureOne />
      <InsightsFeatureTwo />
      <InsightsFeatureThree />
      <FAQSection
        heading="FAQs Related to AI Application Development"
        faqs={faqData}
      />
      <CTASection />
      <ContactCTA />

    </>
  )
}

export default InsightsPage