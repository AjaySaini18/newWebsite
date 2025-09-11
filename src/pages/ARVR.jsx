import React from 'react'
import AIHeroSection from '../components/AIHeroSection';
import AIServices from '../components/AIServices';
import IndustriesSection from '../components/IndustriesSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import CTASection from '../components/CTASection';
import ContactCTA from '../components/ContactCTA';

const ARVR = () => {
  const statsData = [
  { value: "90%", text: "Enhanced user engagement with immersive AR/VR experiences" },
  { value: "65%", text: "Reduction in training costs with VR-based simulations" },
  { value: "80%", text: "Faster product prototyping and visualization with AR tools" },
  { value: "99%", text: "Cross-platform compatibility and security for AR/VR applications" },
];

const servicesData = [
  { title: "AR/VR App Development", content: "Create interactive AR and VR experiences for multiple platforms." },
  { title: "Training & Simulation Platforms", content: "Use VR to deliver cost-effective, realistic training scenarios." },
  { title: "Virtual Showrooms & Product Demos", content: "Showcase products in immersive 3D environments for customers." },
  { title: "AR-Powered Field Services", content: "Assist on-site teams with real-time AR overlays and guidance." },
  { title: "AR/VR Content Security & Compliance", content: "Ensure privacy and security for immersive experiences." },
];

const faqData = [
  {
    question: "Are AR and VR only for gaming?",
    answer: "No, they are widely used in education, healthcare, real estate, manufacturing, and retail.",
  },
  {
    question: "How expensive is AR/VR development?",
    answer: "Costs depend on complexity and platform, but scalable solutions are available for all budgets.",
  },
  {
    question: "Do users need expensive hardware?",
    answer: "Not always—many AR/VR experiences work with standard smartphones or affordable headsets.",
  },
  {
    question: "How long does it take to build an AR/VR app?",
    answer: "Basic apps can be ready in weeks; immersive platforms may take months.",
  },
  {
    question: "How does AR/VR add business value?",
    answer: "It boosts engagement, reduces training costs, and provides lifelike product experiences.",
  },
];





  return (
    <>
    <AIHeroSection
        title="AR & VR SOLUTIONS"
        description="A progressive AR/VR development & services company, trusted by brands, training providers, and enterprises worldwide.
We provide a full suite of end-to-end AR/VR solutions that help organisations deliver immersive experiences, improve training outcomes, boost engagement, and ensure security — leading to higher customer satisfaction and operational efficiency."
        buttonText="Consult Now"
        buttonLink="/contact"
        rightImage="/assets/arvr-1.jpg"
        backgroundImage="/assets/Rectangle 1.png"
        stats={statsData}
      />

    <AIServices
            heading="Delivering Cutting-Edge Healthcare Services"
            services={servicesData}
            rightImage="/assets/arvr-2.jpg"
          />

    <IndustriesSection/>

    <FAQSection
    heading="FAQs Related to AR & VR Solutions"
    faqs={faqData}
    />
    <ContactSection/>
    <CTASection/>
    <ContactCTA/>
    </>
  )
}

export default ARVR