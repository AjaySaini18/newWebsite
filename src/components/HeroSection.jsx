import React from "react";

const HeroSection = () => {
  const cards = [
    {
      title: "AI DEVELOPMENT",
      img: "/assets/ai.png",
      desc: "We provide cutting-edge AI solutions that enhance automation, improve decision-making, and deliver real-world impact.",
    },
    {
      title: "APP DEVELOPMENT",
      img: "/assets/appDevelopment.jpg",
      desc: "Our team builds scalable and high-performing mobile apps for iOS and Android, tailored to your business needs.",
    },
    {
      title: "CLOUD SERVICES",
      img: "/assets/cloudService.png",
      desc: "Leverage secure and flexible cloud solutions to scale your business and optimize IT infrastructure.",
    },
    {
      title: "IDEATION & DESIGN",
      img: "/assets/ideation&design.png",
      desc: "We craft user-focused designs and prototypes that turn innovative ideas into impactful digital products.",
    },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center text-white font-figtree"
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
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 pt-20 sm:pt-36 lg:pt-40">
        {/* Row: Headings (left) + Right block */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-10">
          {/* Left Headings */}
          <div className="w-full lg:w-[730px]">
            <h1 className="font-bold text-[clamp(22px,6vw,60px)] leading-tight sm:leading-[60px] text-left">
              CREATE. COLLABORATE.
            </h1>
            <h1 className="mt-2 sm:mt-4 font-bold text-[clamp(22px,6vw,60px)] leading-tight sm:leading-[60px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-right">
              CHANGE THE WORLD.
            </h1>
          </div>

          {/* Right aligned text block */}
          <div className="max-w-full sm:max-w-[300px] flex flex-col justify-start mt-4 lg:mt-3">
            {/* Grad strip */}
            <div className="w-[54px] h-[5px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mb-3"></div>

            {/* Text */}
            <p className="text-gray-200 mb-3 leading-relaxed text-[10px] sm:text-[11px] font-semibold">
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
        <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-10 mt-14 sm:mt-20 lg:mt-26 cursor-pointer">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative h-[350px] w-full bg-cover bg-center overflow-hidden group"
              style={{ backgroundImage: `url(${card.img})` }}
            >
              {/* Gradient overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-85 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(109.77deg, #06F7C4 -5.67%, #4359FF 26.82%)",
                }}
              ></div>

              {/* Title (always visible, above everything) */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-white font-extrabold text-sm sm:text-base md:text-lg z-30">
                {card.title}
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <p className="text-[12px] leading-relaxed mb-4 mt-10">
                  {card.desc}
                </p>

                {/* Read More bottom-right */}
                <div className="absolute bottom-4 right-4">
                  <span className="text-xs font-semibold cursor-pointer hover:underline">
                    Read More
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Black divider under cards */}
      <div className="bg-black h-[50px] sm:h-[70px] lg:h-[90px] w-full"></div>
    </section>
  );
};

export default HeroSection;
