import React from "react";
import { motion } from "framer-motion";

const InsightsFeatureTwo = () => {
  // Animation Variants
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  return (
    <section className="w-full bg-white py-10 lg:py-16 px-6 md:px-12 lg:px-24 font-gilroy">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 lg:gap-8">

        {/* Left Content - Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-start w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          <img
            src="/assets/appDevelopment.jpg"
            alt="Artificial Intelligence Development"
            className="rounded-xl shadow-lg 
                       w-full max-w-[470px] 
                       h-auto md:h-full md:max-h-[420px] 
                       object-cover"
          />
        </motion.div>

        {/* Right Content - Text */}
        <motion.div
          className="flex-1 text-center md:text-left w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          <h2 className="2xl:text-4xl  text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6">
            Providing Different Artificial <br className="hidden md:block"/>
            Intelligence Development Services
          </h2>
          <p className="2xl:text-lg text-sm font-medium text-[#393939] leading-[1.4] mb-4 lg:mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus eros 
            aliquet convallis ultricies. Morbi vitae ligula id nunc ullamcorper viverra. Sed 
            id urna sed leo hendrerit tincidunt sit amet at massa. Suspendisse potenti. Cras 
            sit amet aliquet lorem. Integer posuere ligula non sapien semper, in vulputate 
            risus commodo.
          </p>
          <p className="2xl:text-lg text-sm font-medium text-[#393939] leading-[1.4]">
            Nullam id felis a arcu maximus pretium. Sed euismod purus ac purus sollicitudin, 
            vel pulvinar orci viverra. Etiam sed dapibus sem, nec ultricies magna. Curabitur 
            auctor ligula eu dui dictum varius. Maecenas volutpat massa at lectus vestibulum 
            egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada 
            fames ac turpis egestas.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default InsightsFeatureTwo;
