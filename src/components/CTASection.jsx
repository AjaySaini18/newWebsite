import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    title: "AI ML Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    profileImg: "/assets/Rectangle38.png",
    name: "Milan Anshuman",
    role: "Sr. UI UX Designer",
    company: "American Instant Food (Subway Group)",
    companyLogo: "/assets/image3.png",
  },
  {
    id: 2,
    title: "AI ML Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    profileImg: "/assets/Rectangle38.png",
    name: "Jane Doe",
    role: "Product Manager",
    company: "Global Tech Solutions",
    companyLogo: "/assets/image3.png",
  },
  {
    id: 3,
    title: "Cloud Migration",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    profileImg: "/assets/Rectangle38.png",
    name: "John Smith",
    role: "CTO",
    company: "Future Systems Ltd",
    companyLogo: "/assets/image3.png",
  },
];

const CTASection = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section
      className="relative w-full pt-10 pb-20  px-6 md:px-12 lg:px-24 bg-cover bg-center bg-[url('/assets/Group_1000004166.png')] md:bg-[url('/assets/bg_casestudy.png')]"
      
    >
      <div className="max-w-full mx-auto">
        {/* Heading + Arrows */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl lg:text-2xl lg:text-3xl font-gilroy font-medium leading-[28px] sm:leading-[36px] text-white">
            Partnership Success Stories, In Their Own Words
          </h2>

          <motion.div
            className="flex gap-2 self-end sm:self-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {[
              {
                onClick: prevSlide,
                icon: (
                  <ChevronLeft className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                ),
              },
              {
                onClick: nextSlide,
                icon: (
                  <ChevronRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                ),
              },
            ].map((btn, idx) => (
              <button
                key={idx}
                onClick={btn.onClick}
                className="group relative rounded-full p-[1px] transition-all duration-300"
              >
                <span className="absolute inset-0 rounded-full bg-[linear-gradient(109.77deg,#06F7C4_-5.67%,#4359FF_26.82%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative flex items-center justify-center w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#1E1E1E] group-hover:bg-[#1E1E1E]">
                  {btn.icon}
                </span>
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Slider */}
        <div className="overflow-hidden hidden sm:block">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6 sm:gap-8 md:gap-16"
            style={{
              transform: `translateX(-${current * (70)}%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <AnimatePresence key={item.id} mode="wait">
                <motion.div
                  key={item.id}
                  className={`group relative min-w-[90%] sm:min-w-[66.66%] md:min-w-[50%] lg:min-w-[70%] transition-opacity duration-500 ${
                    index === current ? "opacity-100" : "opacity-30"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative rounded-2xl p-[1px]">
                    <span className="absolute inset-0 rounded-2xl bg-[linear-gradient(109.77deg,#06F7C4_-5.67%,#4359FF_26.82%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>

                    <div className="relative z-10 bg-[#1E1E1E] rounded-2xl p-4 sm:p-6 md:p-8 text-white flex flex-col justify-between shadow-lg min-h-[240px] sm:min-h-[260px]">
                      <div>
                        <h3 className="text-lg font-bold text-[#AFAFAF] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-normal text-[#D4D4D4] line-clamp-3 sm:line-clamp-4">
                          {item.description}
                        </p>
                      </div>

                      <div className="border-t border-[#2B2B2B] my-3 sm:my-4"></div>

                      {/* Responsive Profile & Logo */}
                      <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 sm:gap-3">
                        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-2 sm:gap-3">
                          <img
                            src={item.profileImg}
                            alt={item.name}
                            className="w-20 h-20 rounded-md object-cover"
                          />
                          <div className="text-center sm:text-left">
                            <p className="2xl:text-[13px] text-[11px] sm:text-[12px] font-semibold text-[#D4D4D4]">
                              {item.name}
                            </p>
                            <p className="text-[11px] 2xl:text-md sm:text-[13px] text-[#D4D4D4]">
                              {item.role}
                            </p>
                            <p className="text-[11px] 2xl:text-md sm:text-[12px] text-[#D4D4D4]">
                              {item.company}
                            </p>
                          </div>
                        </div>

                        <img
                          src={item.companyLogo}
                          alt="Company Logo"
                          className="lg:w-40 lg:h-8 md:w-20 md:h-5 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        </div>
        {/* For Mobile: Partial Next Slide Preview */}
        <div className="overflow-hidden md:hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6 sm:gap-8 md:gap-16"
            style={{
              transform: `translateX(-${current * 107}%)`, // full width shift
            }}
          >
            {testimonials.map((item, index) => (
              <AnimatePresence key={item.id} mode="wait">
                <motion.div
                  key={item.id}
                  className={`group relative min-w-full sm:min-w-[66.66%] md:min-w-[50%] lg:min-w-[70%] transition-opacity duration-500 ${
                    index === current ? "opacity-100" : "opacity-30"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative rounded-2xl p-[1px]">
                    <span className="absolute inset-0 rounded-2xl bg-[linear-gradient(109.77deg,#06F7C4_-5.67%,#4359FF_26.82%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>

                    <div className="relative z-10 bg-[#1E1E1E] rounded-2xl p-4 sm:p-6 md:p-8 text-white flex flex-col justify-between shadow-lg min-h-[240px] sm:min-h-[260px]">
                      <div>
                        <h3 className="text-lg font-bold text-[#AFAFAF] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-normal text-[#D4D4D4] line-clamp-3 sm:line-clamp-4">
                          {item.description}
                        </p>
                      </div>

                      <div className="border-t border-[#2B2B2B] my-3 sm:my-4"></div>

                      {/* Responsive Profile & Logo */}
                      <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 sm:gap-3">
                        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-2 sm:gap-3">
                          <img
                            src={item.profileImg}
                            alt={item.name}
                            className="w-20 h-20 rounded-md object-cover"
                          />
                          <div className="text-center sm:text-left">
                            <p className="2xl:text-[13px] text-[11px] sm:text-[12px] font-semibold text-[#D4D4D4]">
                              {item.name}
                            </p>
                            <p className="text-[11px] 2xl:text-md sm:text-[13px] text-[#D4D4D4]">
                              {item.role}
                            </p>
                            <p className="text-[11px] 2xl:text-md sm:text-[12px] text-[#D4D4D4]">
                              {item.company}
                            </p>
                          </div>
                        </div>

                        <img
                          src={item.companyLogo}
                          alt="Company Logo"
                          className="lg:w-40 lg:h-8 md:w-20 md:h-5 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default CTASection;
