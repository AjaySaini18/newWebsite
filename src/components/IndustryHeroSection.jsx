// components/IndustryHeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../public/assets/IndustryHeroBG.svg"; // adjust path to your svg
import heroImg from "../../public/assets/IndustryHero-img.jpg"; // replace with your actual image

const IndustryHeroSection = () => {
  return (
    <motion.section
      className="relative w-full font-gilroy bg-cover bg-center lg:px-24 md:px-12 px-6 py-16"
      style={{ backgroundImage: `url(${bgImage})` }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-full">
        {/* Heading */}
        <motion.h1
          className="mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-tight text-gray-900 max-w-full text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At <span className="text-black">Synopix</span>, our innovative Tech
          solutions redefine your customer experience teams.
        </motion.h1>

        {/* Content Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Image */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src={heroImg}
              alt="Industry Hero"
              className="rounded-lg shadow-lg w-full sm:max-w-md md:max-w-full"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg sm:text-md md:text-lg lg:text-3xl 2xl:text-4xl font-bold text-gray-900 pb-4 text-center md:text-left">
              We Transform Businesses & Society Through Our Data Science Service
            </h2>
            <p className="text-[#393939] font-medium mb-4 leading-relaxed sm:leading-tight text-sm sm:text-base md:text-sm lg:text-md xl:text-lg 2xl:text-xl text-center md:text-left">
              Phasellus vitae justo id sapien volutpat vulputate vitae sed eros.
              Aliquam ac felis nec velit fermentum suscipit a sit amet orci. Sed
              gravida, ex nec commodo bibendum, magna libero tristique mi, non
              varius nisl elit in libero. Etiam sit amet dapibus odio, nec
              ultrices magna. Ut tempor augue nec nisl fermentum, et feugiat
              nisi egestas. Praesent nec arcu quis nunc lacinia vestibulum. Nam
              dignissim libero quis dui bibendum, eget egestas justo gravida.
            </p>
            <br/>
            <p className="text-[#393939] font-medium leading-relaxed sm:leading-tight text-sm sm:text-base md:text-md lg:text-md xl:text-lg 2xl:text-xl text-center md:text-left">
              Fusce pretium porttitor nisi, eget volutpat odio facilisis et. Nam
              fermentum lectus a justo ultrices, non efficitur nunc
              sollicitudin. Quisque ut sapien vel felis bibendum porttitor. Duis
              sodales, magna ac vulputate suscipit, nisl turpis condimentum
              nunc, ac ultrices enim nulla a purus.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default IndustryHeroSection;
