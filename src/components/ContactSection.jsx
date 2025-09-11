import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [enabled, setEnabled] = useState(false);

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative py-16 px-6 md:px-12 lg:px-24 font-gilroy">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <img
          src="/assets/Rectangle 26.svg"
          alt="background gradient"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side Shapes */}
      <div className="absolute right-0 top-0 h-full">
        <img
          src="/assets/ContactFormShapes.png"
          alt="decorative shapes"
          className="h-full object-contain"
        />
      </div>

      {/* Content Wrapper */}
      <motion.div
        className="relative max-w-4xl text-white px-4 sm:px-0 flex flex-col sm:block items-center sm:items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight mb-2 text-center sm:text-left"
          variants={itemVariants}
        >
          Looking to build a digital product?
          <br />
          Let’s build it together.
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-sm sm:text-base mb-8 text-center sm:text-left"
          variants={itemVariants}
        >
          Please fill the details
        </motion.p>

        {/* Form */}
        <motion.form className="space-y-6 max-w-3xl" variants={containerVariants}>
          {/* First Row */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={itemVariants}
          >
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-4 rounded-md text-[#282828] placeholder-[#282828] focus:outline-none bg-[#FFFF]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-4 rounded-md text-[#282828] placeholder-[#282828] focus:outline-none bg-[#FFFF]"
            />
          </motion.div>

          {/* Second Row */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={itemVariants}
          >
            <input
              type="email"
              placeholder="Email ID"
              className="w-full px-4 py-4 rounded-md text-[#282828] placeholder-[#282828] bg-[#FFFF] focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full px-4 py-4 rounded-md text-[#282828] placeholder-[#282828] bg-[#FFFF] focus:outline-none"
            />
          </motion.div>

          {/* Message Box */}
          <motion.textarea
            placeholder="Tell us more (optional)"
            rows="4"
            className="w-full px-4 py-3 rounded-md bg-[#FFFF] text-[#282828] placeholder-[#282828] focus:outline-none"
            variants={itemVariants}
          />

          {/* Toggle Switch */}
          <motion.div
            className="flex items-center space-x-2 -mt-4"
            variants={itemVariants}
          >
            <button
              type="button"
              onClick={() => setEnabled(!enabled)}
              className={`relative inline-flex 
                h-2 w-4 sm:h-4 sm:w-7
                items-center rounded-full transition 
                ${enabled ? "bg-green-600" : "bg-gray-300"}`}
            >
              <span
                className={`inline-block 
                h-1 w-1 sm:h-2 sm:w-2
                transform rounded-full bg-white transition 
                ${enabled ? "translate-x-2 sm:translate-x-4" : "translate-x-0.5 sm:translate-x-1"}`}
              />
            </button>

            <label className="text-sm text-[#A8C2E7]">
              I consent to receive marketing communication from Synopix LLC
            </label>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="px-10 py-4 bg-white text-[#050505] font-semibold rounded-md hover:bg-gray-100 transition w-full sm:w-auto"
            variants={itemVariants}
          >
            Submit
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
