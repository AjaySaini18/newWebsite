// components/StatsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    {
      value: "3000+",
      label: "Industries Mastered",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      value: "65+",
      label: "Industries Mastered",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      value: "200+",
      label: "Industries Mastered",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="pt-4 py-10 lg:pt-7 md:pb-10 lg:pb-20 bg-gray-50 font-gilroy">
      <div className="container max-w-full mx-auto px-4 md:px-12 lg:px-24">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 px-6 gap-10 lg:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.25 },
            },
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="text-5xl font-extrabold mb-2"
                style={{
                  background:
                    "linear-gradient(to bottom right, #06F7C4 1%, #4359FF 99%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 font-medium text-sm max-w-xs sm:max-w-sm mx-auto">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
