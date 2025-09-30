import React, { useState } from "react";
import TandCSidebar from "./TandCSidebar";
import TandCAccordion from "./TandCAccordian";

const TandCDataSelection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50 font-gilroy">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-24 pb-24">
        {/* Sidebar + T&C Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <TandCSidebar
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>

          {/* T&C Content */}
          <div className="md:col-span-3 space-y-8">
            <TandCAccordion activeCategory={activeCategory} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TandCDataSelection;
