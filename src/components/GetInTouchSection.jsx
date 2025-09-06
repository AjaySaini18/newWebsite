import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const GetInTouchSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-12 bg-white my-10 font-gilroy px-6 md:px-12 lg:px-24">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.div className="text-left mb-10" variants={fadeUp}>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Get in Touch with Our Team
          </h2>
          <p className="text-gray-600 text-sm sm:text-[14px] max-w-3xl mt-2">
            We’re here to answer your questions, discuss your project, and help
            you find the best solutions for your software needs. Reach out to
            us, and let’s start building something great together.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div className="bg-[#F9F9F9] border border-[#DDDDDD] p-6 rounded-lg" variants={fadeUp}>
            <h3 className="text-base sm:text-lg font-semibold text-[#282828] mb-4">
              Please fill the details
            </h3>
            <form className="space-y-3">
              <motion.input type="text" placeholder="First Name" className="w-full bg-white border border-[#DADADA] text-sm sm:text-[13px] placeholder-[#282828] rounded-md font-medium px-4 py-3 outline-none" variants={fadeUp} />
              <motion.input type="email" placeholder="Email ID" className="w-full bg-white border border-[#DADADA] text-sm sm:text-[13px] placeholder-[#282828] rounded-md font-medium px-4 py-3 outline-none" variants={fadeUp} />
              <motion.input type="text" placeholder="Contact Number" className="w-full bg-white border border-[#DADADA] text-sm sm:text-[13px] placeholder-[#282828] rounded-md font-medium px-4 py-3 outline-none" variants={fadeUp} />
              <motion.input type="text" placeholder="Company Name" className="w-full bg-white border border-[#DADADA] text-sm sm:text-[13px] placeholder-[#282828] rounded-md font-medium px-4 py-3 outline-none" variants={fadeUp} />
              <motion.textarea placeholder="Tell us more" rows="4" className="w-full bg-white border border-[#DADADA] text-sm sm:text-[13px] placeholder-[#282828] rounded-md font-medium px-4 py-3 outline-none" variants={fadeUp} />
              <motion.button type="submit" className="w-full sm:w-auto px-13 text-[15px] bg-[#4359FF] text-white py-3.5 rounded-md hover:bg-blue-700 transition" variants={fadeUp}>
                Submit
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-6 text-[#282828]" variants={fadeUp}>
            {/* Card 1 */}
            <motion.div className="flex flex-col sm:flex-row items-start justify-between p-4 border border-[#DDDDDD] rounded-lg" variants={fadeUp}>
              <div className="flex-1">
                <h4 className="text-base sm:text-lg font-semibold">Georgia, USA</h4>
                <p className="flex items-center text-xs sm:text-[13px] mt-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  6065 Roswell Road, Suite 450, Atlanta, GA 30328-4011
                </p>
                <p className="flex items-center text-xs sm:text-[13px] mt-2">
                  <Mail className="w-3 h-3 mr-2" />
                  info@synopix.com
                </p>
                <p className="flex items-center text-xs sm:text-[13px] mt-2">
                  <Phone className="w-3 h-3 mr-2" />
                  +1-234-109-2345
                </p>
              </div>

              <div className="mt-4 sm:mt-0 sm:ml-4 relative w-full sm:w-56 h-40 sm:h-32 rounded-md overflow-hidden">
                <img src="assets/Rectangle 7776.png" alt="Georgia Map" className="w-full h-full object-cover" />
                <button
                  className="absolute bottom-2 left-2 cursor-pointer bg-white font-semibold text-[11px] px-2 py-1 rounded-sm shadow hover:bg-gray-100"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps?q=6065+Roswell+Road,+Suite+450,+Atlanta,+GA+30328-4011",
                      "_blank"
                    )
                  }
                >
                  Get Direction →
                </button>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div className="flex flex-col sm:flex-row items-start justify-between p-4 border border-[#DDDDDD] rounded-lg" variants={fadeUp}>
              <div className="flex-1">
                <h4 className="text-base sm:text-lg font-semibold">Noida, India</h4>
                <p className="flex items-center text-xs sm:text-[13px] mt-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  51/2 The Corenthum, Sector 62, Noida Uttar Pradesh 201301
                </p>
                <p className="flex items-center text-xs sm:text-[13px] mt-2">
                  <Mail className="w-3 h-3 mr-2" />
                  info@synopix.com
                </p>
                <p className="flex items-center text-xs sm:text-[13px] mt-2">
                  <Phone className="w-3 h-3 mr-2" />
                  +1-234-109-2345
                </p>
              </div>

              <div className="mt-4 sm:mt-0 sm:ml-4 relative w-full sm:w-56 h-40 sm:h-32 rounded-md overflow-hidden">
                <img src="assets/Rectangle 7776.png" alt="Noida Map" className="w-full h-full object-cover" />
                <button
                  className="absolute bottom-2 left-2 cursor-pointer bg-white font-semibold text-[11px] px-2 py-1 rounded-sm shadow hover:bg-gray-100"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps?q=51/2+The+Corenthum,+Sector+62,+Noida,+Uttar+Pradesh+201301",
                      "_blank"
                    )
                  }
                >
                  Get Direction →
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default GetInTouchSection;
