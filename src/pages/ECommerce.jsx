import React from 'react'
import AIHeroSection from '../components/AIHeroSection';
import AIServices from '../components/AIServices';
import IndustriesSection from '../components/IndustriesSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import CTASection from '../components/CTASection';
import ContactCTA from '../components/ContactCTA';

const ECommerce = () => {
const statsData = [
  { value: "90%", text: "Increase in online sales achieved with our eCommerce solutions" },
  { value: "65%", text: "Reduction in cart abandonment with optimised checkout experiences" },
  { value: "80%", text: "Faster order fulfilment through integrated inventory & logistics" },
  { value: "99%", text: "Compliance with payment security (PCI-DSS) and data privacy standards" },
];

const servicesData = [
  { title: "Online Store & Marketplace Development", content: "Build high-performance, scalable online stores and multi-vendor marketplaces." },
  { title: "Product Information & Inventory Management", content: "Keep product data consistent and inventory accurate across channels." },
  { title: "Payment Gateway & Checkout Solutions", content: "Offer secure, seamless payment experiences to boost conversion rates." },
  { title: "Customer Engagement & Loyalty Platforms", content: "Drive repeat purchases with personalised marketing, reviews, and rewards." },
  { title: "eCommerce Compliance & Security Services", content: "Protect customer data and ensure your store meets all regulatory standards." },
];

const faqData = [
  {
    question: "Who can benefit from eCommerce solutions — only big brands or small retailers too?",
    answer: "eCommerce platforms work for small shops, D2C brands, and enterprise retailers alike.",
  },
  {
    question: "How much does it cost to build an eCommerce store or marketplace?",
    answer: "Costs depend on product range, design, and integrations, but scalable pricing works for any size business.",
  },
  {
    question: "What parts of retail can be digitised with eCommerce technology?",
    answer: "From catalogues and payments to order fulfilment, returns, and customer service — almost everything can go online.",
  },
  {
    question: "How long does it take to launch an eCommerce solution?",
    answer: "Standard stores can go live in weeks; large marketplaces or custom builds may take a few months.",
  },
  {
    question: "How do digital eCommerce solutions increase sales?",
    answer: "They offer seamless shopping, personalised experiences, and faster fulfilment, driving higher conversion and repeat purchases.",
  },
];





  return (
    <>
    <AIHeroSection
        title="E-COMMERCE SOLUTIONS"
        description="A progressive eCommerce technology & services company, trusted by retailers, brands, and marketplaces worldwide.
We provide a full suite of end-to-end eCommerce solutions that help businesses launch and scale online stores, improve operational efficiency, ensure compliance, and increase revenue — leading to better shopping experiences and sustainable growth."
        buttonText="Consult Now"
        buttonLink="/contact"
        rightImage="/assets/ecommerce-1.jpg"
        backgroundImage="/assets/Rectangle 1.png"
        stats={statsData}
      />

    <AIServices
            heading="Delivering Cutting-Edge Healthcare Services"
            services={servicesData}
            rightImage="/assets/ecommerce-2.jpg"
          />

    <IndustriesSection/>

    <FAQSection
    heading="FAQs Related to E-Commerce Solutions"
    faqs={faqData}
    />
    <ContactSection/>
    <CTASection/>
    <ContactCTA/>
    </>
  )
}

export default ECommerce