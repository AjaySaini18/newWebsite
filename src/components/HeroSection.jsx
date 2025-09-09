import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

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
      <div className="relative z-10 max-w-full container mx-auto px-6 md:px-12 lg:px-24 pt-20 sm:pt-36 lg:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-13 gap-8 lg:gap-10 2xl:gap-12 items-start">
          {/* Left Headings */}
          <motion.div
            className="w-full lg:col-span-9 2xl:col-span-9"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-extrabold text-[clamp(22px,6vw,60px)] lg:text-[clamp(22px,6vw,60px)] 2xl:text-[clamp(30px,10vw,80px)] 2xl:leading-[80px] sm:leading-[60px] text-left">
              CREATE. COLLABORATE.
            </h1>
            <h1 className="mt-2 sm:mt-4 font-extrabold text-[clamp(22px,6vw,60px)] lg:text-[clamp(22px,6vw,60px)] 2xl:text-[clamp(30px,10vw,80px)] 2xl:leading-[80px] sm:leading-[60px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-right">
              CHANGE THE WORLD.
            </h1>
          </motion.div>

          {/* Right aligned text block */}
          <motion.div
            className="lg:col-span-4 2xl:col-span- flex flex-col justify-start mt-4 lg:mt-3 max-w-[380px] xl:max-w-[420px] 2xl:max-w-[480px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Sparkling / Shimmer Strip */}
            <div className="relative w-[54px] h-[5px] mb-3 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"></div>
              <div className="absolute inset-0 shimmer"></div>
            </div>
            <p className="text-gray-200 mb-3 leading-relaxed text-[10px] sm:text-[11px] font-figtree lg:text-[12px] 2xl:text-[15px] font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <div className="flex items-center gap-2 font-semibold cursor-pointer hover:opacity-80 text-[12px] sm:text-[11px] 2xl:text-[16px]">
              <span>See what we do</span>
              <div className="relative inline-block p-[2px] rounded-sm overflow-hidden animate-border-shimmer">
                <img
                  src="/assets/arrow.svg"
                  alt="Arrow"
                  className="h-3 w-3 sm:h-4 sm:w-4 block bg-black rounded-sm"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Service Cards */}
        <motion.div
          className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-10 mt-14 sm:mt-20 lg:mt-26 cursor-pointer"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {cards.map((card, idx) => (
            <motion.div
              onClick={() => navigate("/ai")}
              key={idx}
              className="relative h-[350px] 2xl:h-[450px] w-full bg-cover bg-center overflow-hidden group"
              style={{ backgroundImage: `url(${card.img})` }}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 30 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Gradient overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-85 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(109.77deg, #06F7C4 -5.67%, #4359FF 26.82%)",
                }}
              ></div>

              {/* Title */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-white font-extrabold text-sm sm:text-base md:text-lg z-30">
                {card.title}
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <p className="text-[12px] leading-relaxed mb-4 mt-10">
                  {card.desc}
                </p>
                <div className="absolute bottom-4 right-4">
                  <span className="text-xs font-semibold cursor-pointer hover:underline">
                    Read More
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Black divider under cards */}
      <div className="bg-black h-[50px] sm:h-[70px] lg:h-[90px] w-full"></div>
    </section>
  );
};

export default HeroSection;
