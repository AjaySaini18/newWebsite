import React, { useState } from "react";
import FaqSidebar from "./FaqSidebar";
import FaqAccordion from "./FaqAccordion";
import FaqHelpCard from "./FaqHelpCard";

const FaqDataSection = () => {
  // track which category is active
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-16 bg-gray-50 font-gilroy">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-24 pb-24">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Explore some of common issues
        </h2>

        {/* Sidebar + FAQ */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <FaqSidebar
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>

          {/* Accordion + HelpCard */}
          <div className="md:col-span-3 space-y-8">
            <FaqAccordion activeCategory={activeCategory} />
            <FaqHelpCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqDataSection;
