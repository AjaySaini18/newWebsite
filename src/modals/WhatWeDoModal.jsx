import React from "react";

const WhatWeDoModal = () => {
  const items = [
    "Cloud",
    "Customer Service",
    "Cybersecurity",
    "Artificial Intelligence",
    "Digital Engineering",
    "Ecosystem Partners",
    "Emerging Technology",
    "Sustainability",
    "Learning",
    "Managed Services",
    "Marketing and Experience",
    "Metaverse",
    "Sales and Commerce",
    "Strategy",
    "Supply Chain",
    "Finance and Risk Management",
    "Talent and Organization",
    "Technology Transformation",
  ];

  return (
    <div className="absolute font-figtree left-0 top-full mt-2 w-[680px] bg-[#1C1C1C] text-white p-6 rounded-xl shadow-lg z-50">
      {/* Title */}
      <h3 className="text-lg font-semibold mb-4">
        What we Do?
        <div className="h-[3px] w-28 mt-1 bg-gradient-to-r from-purple-400 to-blue-400"></div>
      </h3>

      {/* 3 Column Grid with equal spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-2 leading-[1.8] text-xs">
        {items.map((item, idx) => (
          <p
            key={idx}
            className="hover:text-gray-300 cursor-pointer transition-colors"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDoModal;
