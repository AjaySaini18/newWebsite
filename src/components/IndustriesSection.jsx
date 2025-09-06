import React from 'react'
import IndustryCard from './IndustryCard';

// Main Section
const IndustriesSection = () => {
  const industries = [
    { title: "Logistics & Supply Chain", icon: "/assets/truck 1.svg" },
    { title: "Aviation", icon: "/assets/Vector.svg" },
    { title: "Telecommunications", icon: "/assets/radar 1.svg" },
    { title: "Media & Entertainment", icon: "/assets/social-media (5) 1.svg" },
    { title: "Travel", icon: "/assets/passport 1.svg" },
    { title: "Sports", icon: "/assets/sport-equipment 1.svg" },
    { title: "Retail & E-Commerce", icon: "/assets/online-store 1.svg" },
    { title: "Healthcare & Life Sciences", icon: "/assets/heartbeat 1.svg" },
    { title: "Real Estate", icon: "/assets/implementation 1.svg" },
    { title: "FinTech", icon: "/assets/fintech 1.svg" },
    { title: "Fitness", icon: "/assets/dumbbell 1.svg" },
    { title: "EV Industry", icon: "/assets/charger 1.svg" },
  ];

  return (
    <section
      className="relative py-12 px-4 sm:py-16 sm:px-12 lg:px-24 font-gilroy"
      style={{
        backgroundImage: "url('/assets/Rectangle19.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
          <h2 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-left text-white max-w-[700px]">
            A Unified Vision That Caters To Diverse Industry Demands
          </h2>
          <div>
            <button className="hover:bg-[linear-gradient(109.77deg,#06F7C4_-5.67%,#4359FF_26.82%)] hover:border-hidden px-4 py-2 border text-[12px] border-[#D6D6D6] text-[#D6D6D6] rounded-sm  transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 sm:gap-x-12 gap-y-6 sm:gap-y-8">
          {industries.map((industry, index) => (
            <IndustryCard key={index} icon={industry.icon} title={industry.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
