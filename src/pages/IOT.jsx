import React from 'react'
import AIHeroSection from '../components/AIHeroSection';
import AIServices from '../components/AIServices';
import IndustriesSection from '../components/IndustriesSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import CTASection from '../components/CTASection';
import ContactCTA from '../components/ContactCTA';
import { useScroll } from '../context/ScrollContext';

const IOT = () => {
const statsData = [
  { value: "93%", text: "Operational efficiency improvement with IoT solutions" },
  { value: "68%", text: "Reduction in maintenance costs through predictive analytics" },
  { value: "82%", text: "Faster decision-making with real-time data from connected devices" },
  { value: "99%", text: "Compliance with IoT security and privacy standards" },
];

const servicesData = [
  { title: "IoT Platform Development", content: "Design and deploy scalable platforms to manage connected devices." },
  { title: "Device Integration & Management", content: "Connect and monitor sensors, machines, and equipment in real time." },
  { title: "Predictive Maintenance Solutions", content: "Use IoT data to anticipate failures and reduce downtime." },
  { title: "Smart Home & Industrial Automation", content: "Enable intelligent control of consumer and industrial devices." },
  { title: "IoT Security & Compliance Services", content: "Protect networks and data from IoT-related threats." },
];

const faqData = [
  {
    question: "Is IoT only for smart homes?",
    answer: "No, IoT powers industries like manufacturing, logistics, healthcare, and agriculture.",
  },
  {
    question: "How expensive is IoT implementation?",
    answer: "It depends on device count and infrastructure, but modular rollouts reduce cost.",
  },
  {
    question: "Do IoT solutions work with existing systems?",
    answer: "Yes, they can integrate with current infrastructure and apps.",
  },
  {
    question: "How long does it take to deploy an IoT system?",
    answer: "Pilot projects can launch in weeks; large-scale deployments take longer.",
  },
  {
    question: "How does IoT improve efficiency?",
    answer: "It provides real-time insights, automates processes, and reduces downtime.",
  },
];

const {contactRef} = useScroll();




  return (
    <>
    <AIHeroSection
        title="IoT SOLUTIONS"
        description="A progressive IoT development & services company, trusted by manufacturers, logistics providers, healthcare organisations, and smart-city initiatives worldwide.
We provide a full suite of end-to-end IoT solutions that help organisations connect devices, gather real-time insights, automate operations, ensure data security, and reduce maintenance costs — leading to improved efficiency and customer satisfaction."
        buttonText="Consult Now"
        buttonLink="/contact"
        rightImage="/assets/iot-11.webp"
        backgroundImage="/assets/Rectangle 1.png"
        stats={statsData}
      />

    <AIServices
            heading="Delivering Cutting-Edge Healthcare Services"
            services={servicesData}
            rightImage="/assets/iot-22.webp"    
          />

    <IndustriesSection/>

    <FAQSection
    heading="FAQs Related to IoT Solutions"
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

export default IOT