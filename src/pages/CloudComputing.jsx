import React from 'react'
import AIHeroSection from '../components/AIHeroSection';
import AIServices from '../components/AIServices';
import IndustriesSection from '../components/IndustriesSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import CTASection from '../components/CTASection';
import ContactCTA from '../components/ContactCTA';


const CloudComputing = () => {
const statsData = [
  { value: "96%", text: "Improved scalability and uptime with our cloud solutions" },
  { value: "70%", text: "Reduction in IT infrastructure costs through cloud migration" },
  { value: "85%", text: "Faster deployment of applications and services" },
  { value: "99%", text: "Compliance with top cloud security and privacy standards" },
];

const servicesData = [
  { title: "Cloud Strategy & Migration", content: "Move workloads securely to public, private, or hybrid cloud environments." },
  { title: "Infrastructure as a Service (IaaS)", content: "Leverage on-demand computing, storage, and networking resources." },
  { title: "Platform as a Service (PaaS)", content: "Develop and deploy apps faster with managed platforms." },
  { title: "Cloud Security & Compliance", content: "Protect your cloud infrastructure and ensure regulatory compliance." },
  { title: "DevOps & Continuous Integration Services", content: "Automate deployments and streamline cloud operations." },
];

const faqData = [
  {
    question: "Is cloud computing only for large enterprises?",
    answer: "No, businesses of all sizes can benefit from cloud scalability and cost savings.",
  },
  {
    question: "How much does cloud migration cost?",
    answer: "It varies with data volume and complexity, but pay-as-you-go models keep costs flexible.",
  },
  {
    question: "Which cloud is best—AWS, Azure, or GCP?",
    answer: "It depends on your needs; we help choose and optimize the right platform.",
  },
  {
    question: "How long does migration take?",
    answer: "Simple workloads can move in weeks; complex systems may take months.",
  },
  {
    question: "How does cloud improve business operations?",
    answer: "It boosts agility, reduces downtime, and lowers IT costs with on-demand scalability.",
  },
];

  return (
    <>
    <AIHeroSection
        title="CLOUD COMPUTING SOLUTIONS"
        description="A progressive cloud consulting & services company, trusted by startups, enterprises, and public sector organisations worldwide.
We provide a full suite of end-to-end cloud solutions that help organisations migrate, optimise, and scale securely on the cloud, improve agility, ensure compliance, and reduce infrastructure costs — leading to greater innovation and business resilience."
        buttonText="Consult Now"
        buttonLink="/contact"
        rightImage="/assets/cloudcomputing-11.webp"
        backgroundImage="/assets/Rectangle 1.png"
        stats={statsData}
      />

    <AIServices
            heading="Delivering Cutting-Edge Healthcare Services"
            services={servicesData}
            rightImage="/assets/cloudcomputing-22.webp"
          />

    <IndustriesSection/>

    <FAQSection
    heading="FAQs Related to Cloud Computing Solutions"
    faqs={faqData}
    />
    <ContactSection/>
    <CTASection/>
    <ContactCTA/>
    </>
  )
}

export default CloudComputing