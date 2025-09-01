// components/InnovationSection.jsx
import React from "react";

const InnovationSection = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center px-28 py-20"
      style={{
        backgroundImage: "url('/assets/Rectangle-26.png')",
      }}
    >
      {/* Main Container */}
      <div className="max-w-[1676px] mx-auto h-full flex flex-col  items-left">
        {/* Heading */}
        <div className="w-full max-w-[1150px] text-left mb-12 lg:mb-16">
          <h2 className="text-white font-['Gilroy'] max-w-[950px] font-semibold text-2xl md:text-3xl lg:text-[40px] leading-[1.2] lg:leading-[60px]">
            Empowering Our Clients Like Heroes — Through Superior Products,
            Complete Training, and Exceptional Results.
          </h2>
        </div>

        {/* Client Logos Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6 lg:gap-8 mb-12 lg:mb-16">
          <div className="w-full max-w-[328px] h-[462px] rounded-[18px] overflow-hidden">
            <img
              src="/assets/Rectangle-27.png"
              className="w-full h-full object-cover"
              alt="Client"
            />
          </div>
          <div className="w-full max-w-[328px] h-[462px] rounded-[18px] overflow-hidden">
            <img
              src="/assets/Rectangle-28.png"
              className="w-full h-full object-cover"
              alt="Client"
            />
          </div>
          <div className="w-full max-w-[328px] h-[462px] rounded-[18px] overflow-hidden">
            <img
              src="/assets/Rectangle-29.png"
              className="w-full h-full object-cover"
              alt="Client"
            />
          </div>
          <div className="w-full max-w-[328px] h-[462px] rounded-[18px] overflow-hidden">
            <img
              src="/assets/Rectangle-30.png"
              className="w-full h-full object-cover"
              alt="Client"
            />
          </div>
        </div>

        {/* Button */}
        <div className="w-full flex justify-center">
          <button className="flex items-center justify-center gap-2 py-3 px-6 w-full max-w-[220px] rounded-lg border border-white text-white font-['Gilroy'] font-medium text-lg hover:bg-white/10 transition-all duration-300">
            See All Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;