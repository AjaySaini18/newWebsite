// components/TestimonialsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "AI ML Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    icon: "/assets/code1.svg",
  },
  {
    id: 2,
    title: "Cloud Engineering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    icon: "/assets/code1.svg",
  },
  {
    id: 3,
    title: "Data Analytics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    icon: "/assets/code1.svg",
  },
  {
    id: 4,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    icon: "/assets/code1.svg",
  },
  {
    id: 5,
    title: "Mobile App Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    icon: "/assets/code1.svg",
  },
  {
    id: 6,
    title: "Cybersecurity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    icon: "/assets/code1.svg",
  },
  {
    id: 7,
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    icon: "/assets/code1.svg",
  },
  {
    id: 8,
    title: "DevOps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    icon: "/assets/code1.svg",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      className="w-full bg-cover bg-center text-white py-16 sm:py-20 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-gilroy"
      style={{ backgroundImage: "url('/assets/Rectangle19.png')" }}
    >
      <div className="max-w-[1676px] mx-auto">
        {/* Heading + Button */}
        <motion.div
          className="grid grid-cols-12 items-start mb-12 gap-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="col-span-12 md:col-span-9 text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            Pioneering Innovation Through <br /> World-Class Engineering
          </h2>

          <div className="col-span-12 md:col-span-3 flex md:justify-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:border-hidden px-4 sm:px-6 py-2 text-[11px] sm:text-[12px] border border-white rounded-sm hover:bg-[linear-gradient(109.77deg,#06F7C4_-5.67%,#4359FF_26.82%)] transition-colors duration-500 ease-in-out"
            >
              All Services
            </motion.button>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative rounded-2xl transition-all duration-500 ease-in-out"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Gradient Border Wrapper */}
              <div className="relative rounded-2xl p-[1px]">
                {/* Gradient Layer (hidden until hover) */}
                <span className="absolute inset-0 rounded-2xl bg-[linear-gradient(109.77deg,#06F7C4_-5.67%,#4359FF_26.82%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>

                {/* Card Content */}
                <div className="relative z-10 bg-[#171717] border border-[#2B2B2B] rounded-2xl p-4 sm:p-6 min-h-[200px] sm:min-h-[220px] shadow-md hover:shadow-lg transition">
                  {/* Icon */}
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-10 h-10 sm:w-[51px] sm:h-[51px] mb-4"
                  />

                  {/* Title */}
                  <h3 className="text-sm sm:text-base text-[#AFAFAF] font-semibold mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] sm:text-[12px] font-medium text-[#AFAFAF] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
