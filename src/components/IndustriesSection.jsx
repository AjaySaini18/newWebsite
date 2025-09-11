import React from "react";
import { motion } from "framer-motion";
import IndustryCard from "./IndustryCard";

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

// Motion variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const IndustriesSection = () => {
  return (
    <section
      className="relative py-20 px-4 sm:px-12 lg:px-24 font-gilroy"
      style={{
        backgroundImage: "url('/assets/Rectangle19.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-full mx-auto text-center">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 lg:mb-14 gap-4">
          <motion.h2
            className="md:text-3xl lg:text-5xl font-semibold text-left text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            A Unified Vision That Caters To Diverse<br />Industry Demands
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            viewport={{ once: true }}
          >
            <button className="hover:text-white hover:bg-[linear-gradient(109.77deg,#06F7C4_-5.67%,#4359FF_26.82%)] hover:border-hidden px-5 py-2 border text-sm border-[#D6D6D6] text-[#D6D6D6] rounded-sm transition">
              Learn More
            </button>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 sm:gap-x-12 gap-y-6 sm:gap-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {industries.map((industry, index) => (
            <motion.div key={index} variants={cardVariants}>
              <IndustryCard icon={industry.icon} title={industry.title} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
