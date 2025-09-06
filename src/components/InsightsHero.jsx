import React from "react";
import { motion } from "framer-motion";

const InsightsHero = () => {
  // Variants for staggered animation
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] font-gilroy flex pt-32 sm:pt-40 md:pt-50 justify-center text-center text-white px-4"
      style={{
        backgroundImage: "url('/assets/insightBg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-6 sm:mb-8 md:mb-10"
          variants={itemVariants}
        >
          WHAT WE THINK
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-xs sm:text-sm md:text-base leading-relaxed sm:leading-[1.4] md:leading-[1.3] text-[#D1D4E7]"
          variants={itemVariants}
        >
          A progressive AI ML development company, winning the trust of global
          <br className="hidden sm:block" />
          businesses across industries. We offer a suite of end-to-end AI ML
          development
          <br className="hidden sm:block" /> services that help businesses to
          achieve intelligent process automation, leading
          <br className="hidden sm:block" /> to better productivity and
          competitive growth.
        </motion.p>

        {/* Button */}
        <motion.button
          className="hover:border-hidden hover:bg-[linear-gradient(109.77deg,#06F7C4_-5.67%,#4359FF_26.82%)] mt-6 sm:mt-8 px-4 py-2 border border-white font-light rounded-md text-xs sm:text-sm transition-colors"
          variants={itemVariants}
        >
          Consult Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default InsightsHero;
