import React from 'react'
import AIHeroSection from '../components/AIHeroSection';
import AIServices from '../components/AIServices';
import IndustriesSection from '../components/IndustriesSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import CTASection from '../components/CTASection';
import ContactCTA from '../components/ContactCTA';


const Blockchain = () => {
  const statsData = [
  { value: "92%", text: "Improved transaction transparency and trust with blockchain solutions" },
  { value: "75%", text: "Reduction in fraud and data tampering through immutable ledgers" },
  { value: "80%", text: "Faster settlement times with decentralized processes" },
  { value: "99%", text: "Compliance with security and regulatory standards" },
];

const servicesData = [
  { title: "Blockchain Application Development", content: "Build decentralized apps (dApps) and smart contracts for various industries." },
  { title: "Supply Chain & Provenance Solutions", content: "Track and verify goods across the supply chain with tamper-proof records." },
  { title: "Crypto Wallet & Payment Integration", content: "Enable secure cryptocurrency transactions and digital payments." },
  { title: "Identity & Access Management", content: "Protect user identities and access rights using blockchain-based authentication." },
  { title: "Regulatory Compliance & Security Audits", content: "Ensure systems comply with data privacy and financial regulations." },
];

const faqData = [
  {
    question: "Is blockchain only useful for cryptocurrencies?",
    answer: "No, blockchain is used for supply chain tracking, identity management, voting systems, and many more areas.",
  },
  {
    question: "How much does it cost to implement a blockchain solution?",
    answer: "Costs depend on scope and complexity, but modular frameworks can lower the initial investment.",
  },
  {
    question: "Can small businesses adopt blockchain?",
    answer: "Yes, scalable blockchain platforms can be implemented even for small or mid-size enterprises.",
  },
  {
    question: "How long does it take to build a blockchain app?",
    answer: "MVPs can be built in a few weeks; complex networks take several months depending on integrations.",
  },
  {
    question: "How does blockchain improve trust?",
    answer: "It creates an immutable, transparent record of every transaction, reducing fraud and disputes.",
  },
];





  return (
    <>
    <AIHeroSection
        title="BLOCKCHAIN SOLUTIONS"
        description="A progressive blockchain development & services company, trusted by enterprises, startups, and government organisations worldwide.
We provide a full suite of end-to-end blockchain solutions that help organisations build secure decentralised applications, improve transparency, reduce fraud, ensure regulatory compliance, and cut costs — leading to greater trust and operational efficiency."
        buttonText="Consult Now"
        buttonLink="/contact"
        rightImage="/assets/blockchain-1.jpg"
        backgroundImage="/assets/Rectangle 1.png"
        stats={statsData}
      />

    <AIServices
            heading="Delivering Cutting-Edge Healthcare Services"
            services={servicesData}
            rightImage="/assets/blockchain-2.jpg"
          />

    <IndustriesSection/>

    <FAQSection
    heading="FAQs Related to BlockChain Solutions"
    faqs={faqData}
    />
    <ContactSection/>
    <CTASection/>
    <ContactCTA/>
    </>
  )
}

export default Blockchain