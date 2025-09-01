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
      <div className="relative z-10 container mx-auto px-24 pt-44">
        {/* Heading + Right Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start relative">
          {/* Headings */}
          <div className="relative w-full lg:w-auto">
            <h1
              className="absolute font-extrabold text-[clamp(24px,5vw,56px)] leading-tight"
              style={{ top: "0px", left: "0px", width: "876px", height: "98px" }}
            >
              CREATE. COLLABORATE.
            </h1>

            <h1
              className="absolute font-extrabold text-[clamp(24px,5vw,56px)] leading-tight bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              style={{
                top: "75px",
                left: "120px",
                width: "785px",
                height: "98px",
              }}
            >
              CHANGE THE WORLD.
            </h1>
          </div>

          {/* Right aligned text block */}
          <div className="relative max-w-[320px] mt-20 lg:mt-0 lg:ml-auto flex flex-col">
            {/* Grad strip */}
            <div className="w-[54px] h-[5px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mb-3"></div>

            {/* Text */}
            <p className="text-gray-200 mb-3 leading-relaxed text-[12px] font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-[9px] font-bold cursor-pointer hover:opacity-80 text-sm md:text-base lg:text-sm">
              <span>See what we do</span>
              <img src="/assets/arrow.svg" alt="Arrow" className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-32">
          <div
            className="relative h-[446px] w-full bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url('/assets/ai.png')" }}
          >
            <div className="absolute top-6 left-6 text-white font-extrabold text-l">
              AI DEVELOPMENT
            </div>
          </div>
          <div
            className="relative h-[446px] w-full bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url('/assets/appDevelopment.png')" }}
          >
            <div className="absolute top-6 left-6 text-white font-extrabold text-l">
              APP DEVELOPMENT
            </div>
          </div>
          <div
            className="relative h-[446px] w-full bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url('/assets/cloudService.png')" }}
          >
            <div className="absolute top-6 left-6 text-white font-extrabold text-l">
              CLOUD SERVICES
            </div>
          </div>
          <div
            className="relative h-[446px] w-full bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url('/assets/ideation&design.png')" }}
          >
            <div className="absolute top-6 left-6 text-white font-extrabold text-l">
              IDEATION & DESIGN
            </div>
          </div>
        </div>
      </div>

      {/* Black divider under cards */}
      <div className="bg-black h-[100px] w-full"></div>
    </section>
  );
};

export default HeroSection;
