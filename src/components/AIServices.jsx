import { useState, useRef, useEffect } from "react";
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
    <section className="w-full bg-[#F8F8F8] py-10 md:py-20 px-6 sm:px-8 md:px-12 lg:px-24 font-gilroy">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-25">
        {/* Heading (mobile) */}
        <motion.h2
          className="text-[1.7rem] md:hidden lg:text-4xl sm:text-xl md:text-2xl font-[700] text-gray-900 leading-snug order-1 col-span-1 md:col-span-2"
          variants={itemVariants}
        >
          {heading}
        </motion.h2>

        {/* Right Section (Image) */}
        {rightImage && (
          <motion.div
            className="flex justify-center md:mt-0 order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src={rightImage}
              alt="AI Services"
              className="rounded-lg shadow-lg object-cover w-full max-w-sm sm:max-w-md md:max-w-full"
            />
          </motion.div>
        )}

        {/* Left Section (Accordion) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          {/* Heading (desktop/tablet) */}
          <motion.h2
            className="text-[1.7rem] hidden sm:block lg:text-4xl sm:text-xl md:text-2xl font-[700] text-gray-900 mb-6 leading-snug"
            variants={itemVariants}
          >
            {heading}
          </motion.h2>

          {/* Accordion */}
          <div className="space-y-3">
            {services.map((service, index) => {
              const ref = useRef(null);
              const [height, setHeight] = useState(0);

              useEffect(() => {
                if (ref.current) {
                  setHeight(ref.current.scrollHeight);
                }
              }, [openIndex]);

              return (
                <motion.div
                  key={index}
                  className="rounded-lg bg-[#EEEEEE] w-full"
                  variants={itemVariants}
                >
                  {/* Accordion Header */}
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

                  {/* Accordion Content */}
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div
                          ref={ref}
                          className="px-4 pb-3 text-gray-600 text-xs sm:text-sm"
                        >
                          {service.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
