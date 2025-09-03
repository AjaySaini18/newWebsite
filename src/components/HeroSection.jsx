import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center text-white font-gilroy"
      style={{
        backgroundImage: "url('/assets/herosection_background.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-24 pt-24 sm:pt-36 lg:pt-40">
        {/* Row: Headings (left) + Right block */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-10">
          {/* Left Headings */}
          <div className="w-full lg:w-[720px]">
            <h1 className="font-extrabold text-[clamp(22px,6vw,60px)] leading-tight sm:leading-[60px] text-left">
              CREATE. COLLABORATE.
            </h1>
            <h1 className="mt-2 sm:mt-4 font-extrabold text-[clamp(22px,6vw,60px)] leading-tight sm:leading-[60px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-right">
              CHANGE THE WORLD.
            </h1>
          </div>

          {/* Right aligned text block */}
          <div className="max-w-full sm:max-w-[300px] flex flex-col justify-start mt-4 lg:mt-3">
            {/* Grad strip */}
            <div className="w-[54px] h-[5px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mb-3"></div>

            {/* Text */}
            <p className="text-gray-200 mb-3 leading-relaxed text-[10px] sm:text-[11px] font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-2 font-semibold cursor-pointer hover:opacity-80 text-[12px] sm:text-[14px]">
              <span>See what we do</span>
              <img
                src="/assets/arrow.svg"
                alt="Arrow"
                className="h-3 w-3 sm:h-4 sm:w-4"
              />
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16 sm:mt-24 lg:mt-32">
          <div
            className="relative h-[350px] w-full bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url('/assets/ai.png')" }}
          >
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-white font-extrabold text-sm sm:text-base md:text-lg">
              AI DEVELOPMENT
            </div>
          </div>
          <div
            className="relative h-[350px] w-full bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url('/assets/appDevelopment.jpg')" }}
          >
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-white font-extrabold text-sm sm:text-base md:text-lg">
              APP DEVELOPMENT
            </div>
          </div>
          <div
            className="relative h-[350px] w-full bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url('/assets/cloudService.png')" }}
          >
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-white font-extrabold text-sm sm:text-base md:text-lg">
              CLOUD SERVICES
            </div>
          </div>
          <div
            className="relative h-[350px] w-full bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url('/assets/ideation&design.png')" }}
          >
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-white font-extrabold text-sm sm:text-base md:text-lg">
              IDEATION & DESIGN
            </div>
          </div>
        </div>
      </div>

      {/* Black divider under cards */}
      <div className="bg-black h-[50px] sm:h-[70px] lg:h-[90px] w-full"></div>
    </section>
  );
};

export default HeroSection;
