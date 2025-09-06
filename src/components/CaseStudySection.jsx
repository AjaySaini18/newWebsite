// components/CaseStudySection.jsx
import React from "react";
import { motion } from "framer-motion";

const CaseStudySection = () => {
  return (
    <section className="relative w-full overflow-hidden font-gilroy">
      {/* Main Container with Background */}
      <div
        className="w-full max-w-[1676px] px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-20 backdrop-blur-[52.9px]"
        style={{
          backgroundImage: "url('/assets/bg_casestudy.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-16 w-full">
          {/* Left Content */}
          <motion.div
            className="lg:w-[380px] flex flex-col"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Label */}
            <div className="mb-4">
              <img
                src="/assets/CaseStudy.svg"
                alt="Case Study Logo"
                className="h-[18px] w-auto inline-block align-middle"
              />
            </div>

            {/* Title */}
            <h2 className="text-[20px] sm:text-[22px] md:text-[24px] leading-tight font-bold text-white mb-3">
              Microsoft
            </h2>

            {/* Description */}
            <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed text-gray-200 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex
            </p>

            {/* Metrics */}
            <div className="flex items-start sm:items-end">
              {/* Left Metric */}
              <motion.div
                className="pr-8 sm:pr-10"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-[12px] sm:text-[13px] text-[#9F9F9F]">
                  Result
                </div>
                <div className="text-[18px] sm:text-[20px] font-medium text-white mb-1 sm:mb-2">
                  10M+
                </div>
                <div className="text-[12px] sm:text-[13px] text-[#9F9F9F]">
                  App downloads
                </div>
              </motion.div>

              {/* Divider */}
              <div className="w-px bg-[#0E3F48] h-[50px] hidden sm:block"></div>

              {/* Right Metric */}
              <motion.div
                className="pl-8 sm:pl-10"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-[18px] sm:text-[20px] font-medium text-white mb-1 sm:mb-2">
                  15M+
                </div>
                <div className="text-[12px] sm:text-[13px] text-[#9F9F9F]">
                  Monthly Traffic
                </div>
              </motion.div>
            </div>

            {/* Button */}
            <motion.button
              className="hover:border-hidden w-[134px] h-[35px] text-[12px] sm:text-[13px] border border-[#D6D6D6] text-[#D6D6D6] rounded-[5px] flex items-center justify-center hover:bg-[linear-gradient(109.77deg,#06F7C4_-5.67%,#4359FF_26.82%)] transition-colors mt-8"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 12px rgba(6, 247, 196, 0.5)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              View Case Study
            </motion.button>
          </motion.div>

          {/* Right Image Box */}
          <motion.div
            className="flex-1 flex items-start justify-center relative"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="/assets/Rectangle20.png"
              alt="Microsoft Case Study"
              className="w-full max-w-[825px] h-auto sm:h-[350px] md:h-[410px] object-cover rounded-[11px] shadow-xl"
            />

            {/* Scroll Indicator */}
            <div className="absolute right-[-10px] sm:right-[-14px] top-0 h-full hidden sm:flex items-center">
              <div className="w-[3px] h-full bg-gray-600/50 rounded-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
