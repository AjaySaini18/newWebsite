// components/IndustrySpotlightSection.jsx
import React from "react";
import { motion } from "framer-motion";
import IndustrySpotlightCard from "./IndustrySpotlightCard";

import bankingImg from "../../public/assets/IndustryBanking.jpg";
import insuranceImg from "../../public/assets/IndustryInsurance.jpg";
import consumerImg from "../../public/assets/IndustryConsumer.jpg";
import travelImg from "../../public/assets/IndustryTravel.jpg";
import fintechImg from "../../public/assets/IndustryFintech.jpg";
import retailImg from "../../public/assets/IndustryRetail.jpg";

const IndustrySpotlightSection = () => {
  const industries = [
    {
      image: bankingImg,
      title: "Financial Services & Banking",
      items: [
        "New account creation and acquisition",
        "Customer acquisition",
        "Technical support",
        "Sales",
        "Payment support",
      ],
    },
    {
      image: insuranceImg,
      title: "Insurance & Employee Benefits",
      items: [
        "Call center support",
        "Policy servicing",
        "FMLA, Medicare, Medicare",
        "Annual Enrollment period",
        "Sales",
      ],
    },
    {
      image: consumerImg,
      title: "Consumer Services",
      items: [
        "Outbound sales",
        "24/7 customer support",
        "Customer service",
        "Data & analytics",
        "CRM",
      ],
    },
    {
      image: travelImg,
      title: "Travel and Hospitality",
      items: [
        "Technical support",
        "IT consulting",
        "System integration",
        "Software development",
        "DevOps",
      ],
    },
    {
      image: fintechImg,
      title: "Fintech",
      items: [
        "Collections",
        "Customer service",
        "Compliance",
        "Mobile banking support",
        "Technical support",
      ],
    },
    {
      image: retailImg,
      title: "Retail & E-Commerce",
      items: [
        "24/7 customer support",
        "Order fulfillment",
        "Product indexing",
        "Invoice and payment processing",
        "Lead generation",
      ],
    },
  ];

  return (
    <motion.section
      className="w-full font-gilroy lg:px-24 md:px-12 sm:px-6 px-6 py-12 bg-[#F8F8F8]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className=" text-[#2E2E2E] font-medium text-lg 2xl:text-xl  font-figtree">
          Industry Spotlights
        </p>
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-gray-900 mt-2">
          Our CX Teams are ready to serve
        </h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {industries.map((industry, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <IndustrySpotlightCard
              image={industry.image}
              title={industry.title}
              items={industry.items}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default IndustrySpotlightSection;
