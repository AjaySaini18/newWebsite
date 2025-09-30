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
      className="relative w-full font-gilroy flex md:items-center md:justify-center text-white md:text-center pb-20 pt-25 md:pb-35 md:pt-60 px-6 md:px-12 lg:px-24"
      style={{
        backgroundImage: "url('/assets/insightBg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h1
          className="text-[40px] md:text-5xl 2xl:text-6xl  font-extrabold mb-2 md:mb-10"
          variants={itemVariants}
        >
          WHAT WE THINK
        </motion.h1>

        <div className="relative w-[58px] h-[5px] mb-3 overflow-hidden md:hidden">
              <div className="absolute inset-0 bg-gradient-to-r rounded-sm from-green-100 via-blue-300 to-purple-400"></div>
              <div className="absolute inset-0 shimmer"></div>
        </div>

        {/* Paragraph */}
        <motion.p
          className="2xl:text-lg font-medium text-sm md:text-base leading-relaxed sm:leading-[1.4] md:leading-[1.5] text-[#D1D4E7]"
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
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="hover:border-hidden hover:bg-[linear-gradient(109.77deg,#06F7C4_-5.67%,#4359FF_26.82%)] mt-6 sm:mt-8 px-5 py-2 border border-white font-light rounded-md text-lg transition-colors"
          variants={itemVariants}
        >
          Consult Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default InsightsHero;
