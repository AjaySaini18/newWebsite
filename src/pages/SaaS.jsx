import React from 'react'

import AIHeroSection from '../components/AIHeroSection';
import AIServices from '../components/AIServices';
import IndustriesSection from '../components/IndustriesSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import CTASection from '../components/CTASection';
import ContactCTA from '../components/ContactCTA';

const SaaS = () => {

    const statsData = [
  { value: "95%", text: "Customer satisfaction rate achieved with our SaaS solutions" },
  { value: "70%", text: "Faster product launches through agile SaaS development" },
  { value: "85%", text: "Increased user engagement with integrated analytics & automation" },
  { value: "99%", text: "Compliance with global standards (GDPR, HIPAA, SOC2)" },
];

const servicesData = [
  { title: "SaaS Product Development", content: "Design, build, and scale secure cloud-based applications for any business domain." },
  { title: "Subscription & Billing Management Systems", content: "Automate user sign-ups, payments, and renewals with integrated billing tools." },
  { title: "Multi-Tenant Architecture Implementation", content: "Deliver cost-efficient, scalable solutions that support multiple customers on one platform." },
  { title: "User Engagement & Analytics Platforms", content: "Monitor usage, gather feedback, and improve retention with in-app analytics." },
  { title: "Compliance & Data Security Services", content: "Safeguard customer data and meet global standards like GDPR or HIPAA." },
];

const faqData = [
  {
    question: "Are SaaS solutions only for tech startups or can traditional businesses use them too?",
    answer: "SaaS platforms are designed for any organisation that wants to deliver or consume software online without heavy infrastructure.",
  },
  {
    question: "How much does it cost to develop a SaaS product?",
    answer: "Costs vary with scope, features, and hosting needs, but modular development makes it affordable for most budgets.",
  },
  {
    question: "What parts of a business can be turned into SaaS?",
    answer: "Everything from CRM and HR to billing, analytics, and niche vertical apps can be offered as Software-as-a-Service.",
  },
  {
    question: "How long does it take to launch a SaaS application?",
    answer: "Basic MVPs can be launched in weeks; full-featured platforms may take several months depending on complexity.",
  },
  {
    question: "How do SaaS solutions benefit customers?",
    answer: "They provide instant access, lower upfront costs, automatic updates, and secure, scalable performance.",
  },
];




  return (
    <>
    <AIHeroSection
        title="SAAS SOLUTIONS"
        description="A progressive SaaS development & services company, trusted by startups, enterprises, and ISVs worldwide.
We provide a full suite of end-to-end SaaS solutions that help organisations build, deploy, and scale secure cloud-based products, improve operational efficiency, ensure compliance, and reduce costs — leading to better customer retention and sustainable growth."
        buttonText="Consult Now"
        buttonLink="/contact"
        rightImage="/assets/saas-1.webp"
        backgroundImage="/assets/Rectangle 1.png"
        stats={statsData}
      />

    <AIServices
            heading="Delivering Cutting-Edge Healthcare Services"
            services={servicesData}
            rightImage="/assets/saas-2.webp"
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

export default SaaS