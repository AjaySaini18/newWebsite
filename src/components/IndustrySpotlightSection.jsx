// components/IndustrySpotlightSection.jsx
import React from "react";
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
    <section className="w-full font-gilroy lg:px-24 md:px-12 sm:px-6 px-6 py-12 bg-[#F8F8F8]">
      <div className="text-center mb-12">
        <p className=" text-[#2E2E2E] font-medium text-lg 2xl:text-xl  font-figtree">
          Industry Spotlights
        </p>
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-gray-900 mt-2">
          Our CX Teams are ready to serve
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, idx) => (
          <IndustrySpotlightCard
            key={idx}
            image={industry.image}
            title={industry.title}
            items={industry.items}
          />
        ))}
      </div>
    </section>
  );
};

export default IndustrySpotlightSection;
