import React from 'react'
import AIHeroSection from '../components/AIHeroSection';
import AIServices from '../components/AIServices';
import IndustriesSection from '../components/IndustriesSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import CTASection from '../components/CTASection';
import ContactCTA from '../components/ContactCTA';


const Education = () => {

    const statsData = [
    { value: "93%", text: "Student satisfaction rate achieved with our digital learning solutions" },
    { value: "65%", text: "Reduction in administrative workload through streamlined processes" },
    { value: "85%", text: "Faster course delivery and student engagement with integrated systems" },
    { value: "99%", text: "Compliance with education regulations and data privacy standards" },
  ];

    const servicesData = [
        { title: "School & College Management Systems", content: "Centralize and automate admissions, attendance, fees, and administration to simplify day-to-day operations." },
        { title: "Learning Management System (LMS) Implementation", content: "Deliver, track, and manage courses online with secure, scalable LMS platforms tailored to your institution." },
        { title: "Online Classes & Virtual Learning Platforms", content: "Enable interactive, real-time teaching and learning from anywhere through robust virtual classroom tools." },
        { title: "Student Engagement & Parent Portal Solutions", content: "Strengthen communication and involvement with dashboards, progress tracking, and instant notifications for students and parents." },
        { title: "Education Compliance & Security Services", content: "Protect sensitive data and ensure your institution meets all educational and privacy regulations." },
    ];

    const faqData = [
    {
      question: "Who can benefit from education technology solutions — only big universities or small schools too?",
      answer: "Education technology solutions are designed for schools, colleges, universities, and training centres of all sizes to enhance teaching and learning.",
    },
    {
      question: "How much does it cost to implement an education management system?",
      answer: "Costs vary depending on the scale, features, and integration needs, but flexible plans exist for institutions of every size.",
    },
    {
      question: "What types of educational processes can be digitized?",
      answer: "Almost every area — from admissions and attendance to online classes, assessments, and parent communication — can be securely digitized.",
    },
    {
      question: "How long does it take to deploy an education solution?",
      answer: "Implementation timelines range from a few weeks to several months depending on system complexity and integration needs.",
    },
    {
      question: "How do digital education solutions improve learning outcomes?",
      answer: "They reduce administrative burden, personalise learning, and provide students and parents with easier access to educational resources and updates.",
    },
  ];



  return (
    <>
    <AIHeroSection
        title="EDUCATION SOLUTIONS"
        description="A progressive education technology & services company, trusted by schools, colleges, universities, and training institutes worldwide.
We provide a full suite of end-to-end education solutions that help institutions deliver high-quality learning experiences, improve operational efficiency, ensure compliance with education standards, and reduce costs — leading to better learning outcomes and sustainable growth."
        buttonText="Consult Now"
        buttonLink="/contact"
        rightImage="/assets/education-1.jpg"
        backgroundImage="/assets/Rectangle 1.png"
        stats={statsData}
      />

    <AIServices
            heading="Delivering Cutting-Edge Healthcare Services"
            services={servicesData}
            rightImage="/assets/education-2.jpg"
          />

    <IndustriesSection/>

    <FAQSection
    heading="FAQs Related to Education Solutions"
    faqs={faqData}
    />
    <ContactSection/>
    <CTASection/>
    <ContactCTA/>
    </>
  )
}

export default Education