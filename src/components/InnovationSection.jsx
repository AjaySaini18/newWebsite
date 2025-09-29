import React, { useState } from "react";
import { motion } from "framer-motion";

const InnovationSection = () => {
  // Track which image is hovered
  const [hovered, setHovered] = useState(null);

  return (
    <section
      className="relative w-full bg-cover bg-center px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-18 font-gilroy"
      style={{
        backgroundImage: "url('/assets/Rectangle-26.png')",
      }}
    >
      {/* Main Container */}
      <div className="max-w-full mx-auto h-full flex flex-col items-start">
        {/* Heading */}
        <motion.div
          className="w-full text-left mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white font-heading font-semibold text-2xl md:text-3xl lg:text-[40px] leading-snug lg:leading-[50px] max-w-[950px]">
            Empowering Our Clients Like Heroes — Through Superior Products,
            Complete Training, and Exceptional Results.
          </h2>
        </motion.div>

        {/* Client Logos Grid */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-13">
          {["27", "28", "29", "30"].map((num, index) => (
            <motion.div
              key={num}
              className="w-full h-50 md:h-100 lg:h-100 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={
                  hovered === index
                    ? `/assets/gif${index + 1}.gif`
                    : `/assets/Rectangle-${num}.png`
                }
                className="w-full h-full object-cover"
                alt="Client"
              />
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <button className="hover:text-black hover:bg-white text-md flex items-center justify-center gap-2 py-2 w-full max-w-45 rounded-md border border-white text-white transition-all duration-300">
            See All Testimonials
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovationSection;
