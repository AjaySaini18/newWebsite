import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "../Context/ScrollContext";

const AIHeroSection = ({
  title,
  description,
  buttonText,
  leftImage,
  rightImage,
  stats = [],
  backgroundImage,
}) => {
  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const { scrollToContact } = useScroll();

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center text-white font-gilroy"
      style={{
        backgroundImage: `url("/assets/Rectangle 1.png")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container max-w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-24 pb-20 pt-28">
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug">
              {title}
            </h1>
            <p className="mt-3 text-lg font-medium text-[#D1D4E7] mb-3">
              {description}
            </p>
            {buttonText && (
              <motion.a
                onClick={scrollToContact} 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer hover:bg-[linear-gradient(109.77deg,#06F7C4_-5.67%,#4359FF_26.82%)] mt-5 inline-block px-5 py-2 hover:border-hidden border border-white rounded-md hover:bg-white transition-colors duration-500 ease-in-out text-sm sm:text-base"
              >
                {buttonText}
              </motion.a>
            )}
          </motion.div>

          {/* Right Image */}
          {rightImage && (
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src={rightImage}
                alt="Hero Illustration"
                className="rounded-xl shadow-lg max-w-full w-4/5 sm:w-3/4 lg:w-full"
              />
            </motion.div>
          )}
        </div>

        {/* Stats Section */}
        {stats.length > 0 && (
          <div className="mt-16 flex flex-wrap justify-center lg:justify-between gap-y-4 sm:gap-2 md:gap-2 lg:gap-4 2xl:gap-6">
            {stats.map((item, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={statsVariants}
                className="flex-1 min-w-[220px] sm:min-w-[250px] max-w-full border border-[#2B2B2B] bg-zinc-900/60 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
              >
                <div className="text-left">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">{item.value}</h3>
                  <div className="relative w-[48px] h-[3px] mb-3 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"></div>
                    <div className="absolute inset-0 shimmer"></div>
                  </div>
                </div>
                <p className="mt-3 text-[#A9A9A9] text-sm text-left leading-5">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AIHeroSection;
