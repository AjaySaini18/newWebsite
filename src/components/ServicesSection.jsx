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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center
                         min-h-[220px] w-full"
            >
              <img
                src="/assets/code1.svg"
                alt="Service Icon"
                className="h-12 w-12 mb-3"
              />
              <h3 className="text-md font-bold text-gray-800 mb-3">
                AI ML Development
              </h3>
              <p className="text-[12px] text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
