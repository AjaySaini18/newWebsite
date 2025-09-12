import React from 'react'
import AIHeroSection from '../components/AIHeroSection';
import AIServices from '../components/AIServices';
import IndustriesSection from '../components/IndustriesSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import CTASection from '../components/CTASection';
import ContactCTA from '../components/ContactCTA';
import { useScroll } from '../context/ScrollContext';

const HealthCare = () => {
    const statsData = [
    { value: "95%", text: "Patient satisfaction rate achieved with our digital health solutions" },
    { value: "70%", text: "Reduction in administrative overhead through streamlined processes" },
    { value: "80%", text: "Faster diagnosis and treatment coordination with integrated systems" },
    { value: "99%", text: "Compliance with healthcare regulations and data privacy standards" },
  ];

    const servicesData = [
        { title: "Hospital & Clinic Management Systems", content: "Streamline daily hospital and clinic operations with integrated scheduling, billing, and inventory tools." },
        { title: "Electronic Health Records (EHR) Implementation", content: "Digitize and securely manage patient records for faster, more accurate care delivery." },
        { title: "Telemedicine & Remote Care Platforms", content: "Enable patients to consult doctors and receive care anytime, anywhere through secure virtual channels." },
        { title: "Patient Engagement & Portal Solutions", content: "Improve patient satisfaction with self-service portals, appointment tracking, and real-time communication." },
        { title: "Healthcare Compliance & Security Services", content: "Safeguard sensitive health data and ensure full compliance with industry regulations and privacy standards." },
    ];

    const faqData = [
    {
      question: "Who can benefit from healthcare technology solutions — only big hospitals or small clinics too?",
      answer: "Healthcare technology solutions are designed for hospitals, clinics, and practices of all sizes to improve patient care and streamline operations.",
    },
    {
      question: "How much does it cost to implement a healthcare management system?",
      answer: "Costs vary depending on the scale, features, and compliance needs, but flexible plans exist for organizations of every size.",
    },
    {
      question: "What types of healthcare services can be digitized?",
      answer: "Almost every area — from patient scheduling and billing to telemedicine and electronic health records — can be digitized securely.",
    },
    {
      question: "How long does it take to deploy a healthcare solution?",
      answer: "Implementation timelines range from a few weeks to several months depending on system complexity and integration needs.",
    },
    {
      question: "How do digital healthcare solutions improve patient outcomes?",
      answer: "They reduce administrative burden, speed up diagnosis and treatment, and provide patients with easier access to care and information.",
    },
  ];

  const {contactRef} = useScroll();

  return (
    <>
    <AIHeroSection
        title="HEALTHCARE SOLUTIONS"
        description="A progressive healthcare technology & services company, trusted by hospitals, clinics, and healthcare organizations worldwide.
We provide a full suite of end-to-end healthcare solutions that help providers deliver superior patient care, improve operational efficiency, ensure regulatory compliance, and reduce costs — leading to better outcomes and sustainable growth."
        buttonText="Consult Now"
        buttonLink="/contact"
        rightImage="/assets/healthcare-11.webp"
        backgroundImage="/assets/Rectangle 1.png"
        stats={statsData}
      />

    <AIServices
            heading="Delivering Cutting-Edge Healthcare Services"
            services={servicesData}
            rightImage="/assets/healthcare-22.webp"
          />

    <IndustriesSection/>

    <FAQSection
    heading="FAQs Related to Healthcare Solutions"
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

export default HealthCare