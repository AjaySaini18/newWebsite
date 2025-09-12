import React from 'react'
import AIHeroSection from '../components/AIHeroSection'
import AIServices from '../components/AIServices'
import AiServiceSection from '../components/AIServiceSection'
import IndustriesSection from '../components/IndustriesSection'
import CTASection from '../components/CTASection'
import ContactCTA from '../components/ContactCTA'
import FAQSection from '../components/FAQSection'
import ContactSection from '../components/ContactSection'
import { useScroll } from '../context/ScrollContext'

const AIDevelopment = () => {
  const statsData = [
    { value: "86%", text: "Clients reported improved efficiency with our AI ML solutions." },
    { value: "35%", text: "Reduction in manual workload after AI integration." },
    { value: "74%", text: "Businesses gained better insights through predictive analytics." },
    { value: "92%", text: "Customer satisfaction rate across AI ML projects delivered." },
  ];

  const servicesData = [
    { title: "AI Chatbot Development", content: "We build intelligent chatbots for customer engagement and automation." },
    { title: "Machine Learning Solutions", content: "Custom ML models tailored to your business needs." },
    { title: "Computer Vision & OCR", content: "Image recognition, OCR, and video analytics solutions." },
    { title: "Natural Language Processing (NLP)", content: "Advanced NLP for sentiment analysis, text classification, and more." },
    { title: "Generative AI", content: "AI solutions powered by generative models for text, images, and beyond." },
  ];

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

  const { contactRef } = useScroll();

  return (
    <>
      <AIHeroSection
        title="AI ML DEVELOPMENT"
        description="A progressive AI ML development company, winning the trust of global businesses across industries. We offer a suite of end-to-end AI ML development services that help businesses to achieve intelligent process automation, leading to better productivity and competitive growth."
        buttonText="Consult Now"
        rightImage="/assets/Rectangle 41.svg"
        backgroundImage="/assets/Rectangle 1.png"
        stats={statsData}
      />

      <AIServices
        heading="Delivering Cutting-Edge AI & ML Development Services"
        services={servicesData}
        rightImage="/assets/image 4.svg"
      />

      <AiServiceSection/>
      <IndustriesSection/>

      <FAQSection
        heading="FAQs Related to AI Application Development"
        faqs={faqData}
      />

      <div ref={contactRef}>
        <ContactSection />
      </div>
      <CTASection/>
      <ContactCTA/>
    </>
  )
}

export default AIDevelopment
