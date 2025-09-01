// components/InnovationSection.jsx
import React from "react";

const InnovationSection = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center px-6 sm:px-10 md:px-16 lg:px-24 py-12 md:py-16 lg:py-20"
      style={{
        backgroundImage: "url('/assets/Rectangle-26.png')",
      }}
    >
      {/* Main Container */}
      <div className="max-w-[1676px] mx-auto h-full flex flex-col items-start">
        {/* Heading */}
        <div className="w-full text-left mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-white font-heading font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-snug lg:leading-[50px] max-w-[950px]">
            Empowering Our Clients Like Heroes — Through Superior Products,
            Complete Training, and Exceptional Results.
          </h2>
        </div>

        {/* Client Logos Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {["27", "28", "29", "30"].map((num) => (
            <div
              key={num}
              className="w-full max-w-[300px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[328px] h-[250px] sm:h-[280px] md:h-[320px] lg:h-[362px] rounded-[18px] overflow-hidden"
            >
              <img
                src={`/assets/Rectangle-${num}.png`}
                className="w-full h-full object-cover"
                alt="Client"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="w-full flex justify-center">
          <button className="flex items-center justify-center gap-2 py-2.5 sm:py-3 px-5 sm:px-6 w-full max-w-[200px] sm:max-w-[220px] rounded-lg border border-white text-white font-heading font-medium text-base sm:text-lg hover:bg-white/10 transition-all duration-300">
            See All Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
