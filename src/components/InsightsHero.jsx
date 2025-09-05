import React from "react";

const InsightsHero = () => {
  return (
    <section
      className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] font-figtree flex pt-32 sm:pt-40 md:pt-50 justify-center text-center text-white px-4"
      style={{
        backgroundImage: "url('/assets/insightBg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-6 sm:mb-8 md:mb-10">
          WHAT WE THINK
        </h1>
        <p className="text-xs sm:text-sm md:text-base leading-relaxed sm:leading-[1.4] md:leading-[1.3] text-[#D1D4E7]">
          A progressive AI ML development company, winning the trust of global
          <br className="hidden sm:block" />
          businesses across industries. We offer a suite of end-to-end AI ML
          development
          <br className="hidden sm:block" /> services that help businesses to
          achieve intelligent process automation, leading
          <br className="hidden sm:block" /> to better productivity and
          competitive growth.
        </p>
        <button className="mt-6 sm:mt-8 px-4 py-2 border border-white font-medium rounded-md text-xs sm:text-sm md:text-base hover:bg-white/10 transition-colors">
          Consult Now
        </button>
      </div>
    </section>
  );
};

export default InsightsHero;
