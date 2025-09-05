// components/ServicesSection.jsx
import React from "react";

const ServicesSection = () => {
  return (
    <section className="pt-10 pb-10 bg-gray-50 font-gilroy">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        {/* Heading */}
        <h2 className="text-[22px] sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-center text-gray-800 mb-12 leading-tight">
          We help you make smarter <br className="hidden sm:block" />
          business decisions
        </h2>

        {/* Services Grid */}
        {/* Services Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-4 lg:gap-5">
  {[...Array(6)].map((_, i) => (
    <div
      key={i}
      className="group bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center
                 min-h-[220px] w-full transition-all duration-500 ease-in-out 
                 hover:bg-[linear-gradient(109.77deg,#06F7C4_-5.67%,#4359FF_26.82%)] hover:shadow-lg hover:scale-[1.02]"
    >
      {/* Icon Swap */}
      <img
        src="/assets/code1.svg"
        alt="Service Icon"
        className="h-12 w-12 mb-3 block group-hover:hidden"
      />
      <img
        src="/assets/code1white.svg"
        alt="Service Icon"
        className="h-12 w-12 mb-3 hidden group-hover:block"
      />

      {/* Title */}
      <h3
        className="text-md font-bold text-gray-800 mb-3 transition-all duration-300 
                   group-hover:text-white"
      >
        AI ML Development
      </h3>

      {/* Description */}
      <p
        className="text-[12px] text-gray-600 leading-relaxed transition-all duration-300 
                   group-hover:text-white"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      </p>
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default ServicesSection;
