// components/CaseStudySection.jsx
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const CaseStudySection = () => {
  const scrollRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollPercent(percent);
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden font-gilroy">
      {/* Main Container with Background */}
      <div
        className="w-full max-w-full px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-20 backdrop-blur-[52.9px]"
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
            <div className="mb-4">
              <img
                src="/assets/CaseStudy.svg"
                alt="Case Study Logo"
                className="h-[18px] w-auto inline-block align-middle"
              />
            </div>

            <h2 className="text-[20px] sm:text-[22px] md:text-[24px] leading-tight font-bold text-white mb-3">
              Microsoft
            </h2>

            <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed text-gray-200 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Metrics */}
            <div className="flex items-start sm:items-end">
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

              <div className="w-px bg-[#0E3F48] h-[50px] hidden sm:block"></div>

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

          {/* Right Image + Fake Scroller */}
          <motion.div
            className="flex-1 flex items-start justify-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative flex">
              {/* Scrollable Image Container */}
              <div
                ref={scrollRef}
                className="w-full max-w-[825px] h-[350px] md:h-[410px] overflow-y-scroll no-scrollbar rounded-[11px] shadow-xl"
              >
                {/* Repeat Image to Simulate Scroll */}
                {[...Array(4)].map((_, i) => (
                  <img
                    key={i}
                    src="/assets/Rectangle20.png"
                    alt="Microsoft Case Study"
                    className="w-full h-auto object-cover pb-5"
                  />
                ))}
              </div>

              {/* Fake Scroll Indicator */}
              <div className="absolute right-[-12px] sm:right-[-16px] top-0 h-full hidden sm:flex items-center">
                <div className="w-[3px] h-full bg-gray-600/50 rounded-full relative overflow-hidden">
                  <div
                    className="absolute left-0 w-full bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full transition-all duration-200"
                    style={{
                      top: `${scrollPercent}%`,
                      height: "30%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
