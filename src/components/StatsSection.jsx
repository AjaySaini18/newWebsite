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
    <section className="pt-4 lg:pt-7 md:pb-10 lg:pb-20 bg-gray-50 font-gilroy">
      <div className="container max-w-full mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
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
                className="text-5xl font-extrabold mb-4"
                style={{
                  background:
                    "linear-gradient(109.77deg, #06F7C4 -5.67%, #4359FF 26.82%)",
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

              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-md font-figtree">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
