import React from "react";
import { motion } from "framer-motion";

const InsightsFeatureOne = () => {
  // Variants for staggered text animation
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-[#F8F8F8] py-10 lg:py-16 px-6 md:px-12 lg:px-24 font-gilroy">
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          <h2 className="text-3xl md:text-2xl lg:text-4xl font-semibold md:font-bold text-gray-900 mb-3 lg:mb-6 leading-tight">
            We Transform Businesses & Society Through Our Data Science Service
          </h2>
          <p className="text-lg text-[#393939] leading-[1.4] mb-3 lg:mb-6">
            Phasellus vitae justo id sapien volutpat vulputate vitae sed eros.
            Aliquam ac felis nec velit fermentum suscipit a sit amet orci. Sed
            gravida, ex nec commodo bibendum, magna libero tristique mi, non
            varius nisl elit in libero. Etiam sit amet dapibus odio, nec
            ultrices magna. Ut tempor augue nec nisi fermentum, et feugiat nisi
            egestas.
          </p>
          <p className="text-lg text-[#393939] leading-[1.4]">
            Fusce pretium porttitor nisi, eget volutpat odio facilisis et. Nam
            fermentum lectus a justo ultrices, non efficitur nunc sollicitudin.
            Quisque ut sapien vel felis bibendum porttitor. Duis sodales, magna
            ac vulputate suscipit, nisl turpis condimentum nunc, ac ultrices
            enim nulla a purus.
          </p>
        </motion.div>

        {/* Right Content - Images */}
        <motion.div
          className="flex-1 relative flex justify-center items-end min-h-[360px] sm:min-h-[400px] md:min-h-[420px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          <div className="relative flex items-end gap-6">

            {/* Main App Image (overlaps slightly to the left) */}
            <img
              src="/assets/appDevelopment.jpg"
              alt="App Development"
              className="rounded-xl shadow-lg 
                 -mr-65 md:-mr-40
                 mb-8 md:mb-8 lg:-mb-0
                 w-[270px] md:w-[250px] lg:w-[360px]
                 h-[300px] md:h-[300px] lg:h-[380px]
                 object-cover z-10"
            />

            {/* Rectangle Image */}
            <img
              src="/assets/Rectangle-7772.png"
              alt="Data Science"
              className="rounded-xl shadow-md 
                md:-mr-10 lg:-mr-20
                md:mb-50
                 w-[280px] md:w-[180px] lg:w-[200px]
                 h-[380px] md:h-[200px] lg:h-[260px]"
            />

            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InsightsFeatureOne;
