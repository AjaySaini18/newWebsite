// components/ContactCTA.jsx
import React from "react";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section
      className="w-full relative py-8 sm:py-12 px-6 md:px-12 lg:px-24 font-gilroy"
      style={{
        backgroundImage: "url('/assets/Rectangle35.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main container with proper max-width and centered alignment */}
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-6 sm:gap-8">
          {/* Left Box */}
          <motion.div
            className="text-center lg:text-left col-span-12 lg:col-span-7 space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-white text-xl sm:text-2xl lg:text-2xl font-medium leading-relaxed sm:leading-snug"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Unlock smarter, faster, and more secure solutions— talk to our
              experts today and take your business to the next level.
            </motion.h2>
            <Link to={"/contact-us"}>
              <motion.button
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 bg-white text-black rounded-lg text-sm sm:text-base font-semibold shadow hover:shadow-lg transition hover:bg-gray-50"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Phone size={16} />
                Contact Us
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Box */}
          <motion.div
            className="col-span-12 lg:col-span-5 flex flex-col sm:flex-row justify-center lg:justify-end gap-6 sm:gap-8 lg:gap-10 xl:gap-12"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            viewport={{ once: true }}
          >
            {/* USA */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center text-white min-w-[140px] sm:min-w-[160px]"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center mb-2 sm:mb-3">
                <img
                  src="/assets/us.svg"
                  alt="USA"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">
                United States of America
              </h3>
              <p className="text-xs sm:text-sm text-[#E5E5E5] leading-relaxed">
                6065 Roswell Road, Suite 450,
                <br />
                Atlanta, GA 30328-4011
              </p>
            </motion.div>

            {/* India */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center text-white min-w-[140px] sm:min-w-[160px]"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center mb-2 sm:mb-3">
                <img
                  src="/assets/india.svg"
                  alt="India"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">India</h3>
              <p className="text-xs sm:text-sm text-[#E5E5E5] leading-relaxed">
                6065 Roswell Road, Suite 450,
                <br />
                Atlanta, GA 30328-4011
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;