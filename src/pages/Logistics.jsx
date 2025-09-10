import React from 'react'

import AIHeroSection from '../components/AIHeroSection';
import AIServices from '../components/AIServices';
import IndustriesSection from '../components/IndustriesSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import CTASection from '../components/CTASection';
import ContactCTA from '../components/ContactCTA';


const Logistics = () => {

    const statsData = [
  { value: "92%", text: "On-time delivery rate achieved with our logistics solutions" },
  { value: "60%", text: "Reduction in operational overhead through automated processes" },
  { value: "80%", text: "Increased supply chain visibility and real-time tracking" },
  { value: "99%", text: "Compliance with transportation regulations and data security standards" },
];

const servicesData = [
  { title: "Fleet & Delivery Management Systems", content: "Track and optimise vehicle routes, deliveries, and driver performance in real time." },
  { title: "Warehouse & Inventory Management", content: "Automate stock control, picking, and dispatch to improve fulfilment speed and accuracy." },
  { title: "Supply Chain Visibility Platforms", content: "Gain end-to-end visibility of your supply chain to reduce delays and costs." },
  { title: "Customer & Carrier Portal Solutions", content: "Provide shippers and carriers with self-service portals for tracking and documentation." },
  { title: "Logistics Compliance & Security Services", content: "Ensure regulatory compliance and protect sensitive logistics and freight data." },
];

const faqData = [
  {
    question: "Who can benefit from logistics technology — only large carriers or small businesses too?",
    answer: "Logistics platforms are built for shippers, carriers, and freight brokers of all sizes to streamline operations and reduce costs.",
  },
  {
    question: "How much does it cost to implement a logistics management system?",
    answer: "Pricing depends on fleet size, features, and integrations, but flexible plans exist for companies of any scale.",
  },
  {
    question: "What logistics processes can be digitised?",
    answer: "Everything from fleet tracking and warehouse control to supply chain visibility and customer portals can be securely digitised.",
  },
  {
    question: "How long does it take to deploy a logistics solution?",
    answer: "Deployment can range from a few weeks for basic systems to several months for complex integrations.",
  },
  {
    question: "How do digital logistics solutions improve efficiency?",
    answer: "They optimise routes, reduce delays, cut paperwork, and provide real-time visibility across the supply chain.",
  },
];



  return (
    <>
    <AIHeroSection
        title="LOGISTICS SOLUTIONS"
        description="A progressive logistics technology & services company, trusted by freight forwarders, carriers, warehouses, and supply-chain organisations worldwide.
We provide a full suite of end-to-end logistics solutions that help businesses optimise routes, improve operational efficiency, ensure compliance with transport regulations, and reduce costs — leading to faster deliveries and sustainable growth."
        buttonText="Consult Now"
        buttonLink="/contact"
        rightImage="/assets/logistics-1.jpg"
        backgroundImage="/assets/Rectangle 1.png"
        stats={statsData}
      />

    <AIServices
            heading="Delivering Cutting-Edge Healthcare Services"
            services={servicesData}
            rightImage="/assets/logistics-2.jpg"
          />

    <IndustriesSection/>

    <FAQSection
    heading="FAQs Related to Logistics Solutions"
    faqs={faqData}
    />
    <ContactSection/>
    <CTASection/>
    <ContactCTA/>
    </>
  )
}

export default Logistics