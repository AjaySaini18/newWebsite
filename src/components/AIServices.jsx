import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIServices({ heading, services = [], rightImage }) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Framer motion variants
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.1, duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="w-full bg-[#F8F8F8] py-20 px-4 sm:px-8 md:px-12 lg:px-24 font-gilroy">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-25 items-end">
        {/* Left Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="lg:text-4xl sm:text-lg md:text-2xl font-[700] text-gray-900 mb-6 leading-snug"
            variants={itemVariants}
          >
            {heading}
          </motion.h2>

          {/* Accordion */}
          <div className="space-y-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="rounded-lg bg-[#EEEEEE] w-full"
                variants={itemVariants}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-4 py-4 text-left text-[#282828]"
                >
                  <span className="text-sm sm:text-base">{service.title}</span>
                  <span className="ml-2 text-xl">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-700" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-700" />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-3 text-gray-600 text-xs sm:text-sm"
                    >
                      {service.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Section */}
        {rightImage && (
          <motion.div
            className="flex justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src={rightImage}
              alt="AI Services"
              className="rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-full"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
