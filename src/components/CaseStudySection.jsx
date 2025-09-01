// components/CaseStudySection.jsx
import React from "react";

const CaseStudySection = () => {
  return (
    <section className="relative w-full overflow-hidden ">
      {/* Main Container with Background Effect */}
      <div
        className="w-full max-w-[1676px] mx-auto px-4 lg:px-8 h-[685px] backdrop-blur-[52.9px] pt-20"
        style={{
          backgroundImage: "url('/assets/bg_casestudy.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Flex layout - items aligned to top */}
        <div className="flex flex-col lg:flex-row items-start justify-center px-20 gap-8 lg:gap-12 w-full">
          {/* Left Box - Case Study Content */}
          <div className="lg:w-[481px] flex flex-col">
            {/* Case Study Label */}
            <div className="mb-4">
              <img
                src="/assets/CaseStudy.svg"
                alt="Case Study Logo"
                className="h-[20px] w-auto inline-block align-middle"
              />
            </div>

            {/* Microsoft Title */}
            <h2 className="text-[28px] leading-[23px] font-bold text-white mb-6">
              Microsoft
            </h2>

            {/* Description Text */}
            <p className="text-[16px] leading-[21px] text-gray-200 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex
            </p>

            {/* Metrics Container */}
            <div className="flex items-end mb-8">
              {/* Left Metric */}
              <div className="pr-12">
                <div className="text-[16px] text-[#9F9F9F] mb-1">Result</div>
                <div className="text-[24px] font-semibold text-white">10M+</div>
                <div className="text-[16px] text-[#9F9F9F] mb-2">
                  App downloads
                </div>
              </div>
              {/* Divider */}
              <div className="w-px bg-[#0E3F48] h-[60px] self-center"></div>
              {/* Right Metric */}
              <div className="pl-12">
                <div className="text-[24px] font-semibold text-white">15M+</div>
                <div className="text-[16px] text-[#9F9F9F] mb-2">
                  Monthly Traffic
                </div>
              </div>
            </div>

            {/* View Case Study Button */}
            <button className="w-[154px] h-[45px] border border-gray-400 text-gray-200 rounded-[5px] flex items-center justify-center hover:bg-white/10 transition-colors">
              View Case Study
            </button>
          </div>

          {/* Right Box - Image with Scroll Indicator */}
          <div className="flex-1 flex items-start justify-center relative">
            <img
              src="/assets/Rectangle20.png"
              alt="Microsoft Case Study"
              className="w-full max-w-[825px] h-[510px] object-cover rounded-[11px] shadow-xl"
            />

            {/* Scroll Indicator inside right box */}
            <div className="absolute right-[-14px] top-0 h-full flex items-center">
              {/* Grey Track */}
              <div className="w-[3px] h-full bg-gray-600/50 rounded-full relative overflow-hidden">
                {/* Gradient Progress */}
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;