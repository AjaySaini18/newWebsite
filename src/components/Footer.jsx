import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Footer = () => {
  return (
    <footer className="relative w-full font-gilroy">
      {/* Top Section */}
      <div className="bg-[#F4F4F4] max-w-full px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Logo + Address */}
          <motion.div
            className="space-y-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/assets/logo.svg" alt="Synopix Logo" className="w-6 h-6" />
              <span className="text-[18px] font-bold text-[#525252]">SYNOPIX</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: "fb", link: "https://facebook.com" },
                { icon: "linkedin", link: "https://www.linkedin.com/company/synopix/posts/?feedView=all" },
                { icon: "insta", link: "https://instagram.com" },
              ].map(({ icon, link }, idx) => (
                <motion.a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={`/assets/${icon}.svg`}
                    alt={icon}
                    className="w-5 h-5"
                  />
                </motion.a>
              ))}
            </div>


            {/* Address */}
            <p className="text-[#525252] text-xs font-medium">
              6065 Roswell Road, Suite 450, <br />
              Atlanta, GA 30328-4011
            </p>
          </motion.div>

          {/* About */}
          <motion.div
            className="min-w-[120px] lg:pl-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-[14px] font-semibold mb-3 text-[#525252]">About</h3>
            <ul className="space-y-1 font-medium text-[12px] text-[#525252]">
              <li>Our Company</li>
              <li>Core Team</li>
              <li>Career</li>
              <li>CSR</li>
              <li>How We Work</li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="min-w-[120px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-[14px] font-semibold mb-3 text-[#525252]">Services</h3>
            <ul className="space-y-1 font-medium text-[12px] text-[#525252]">
              <li>iOS App Development</li>
              <li>Android App Development</li>
              <li>Software Development</li>
              <li>Ideation & Design</li>
              <li>Research & Innovation</li>
            </ul>
          </motion.div>

          {/* Technology */}
          <motion.div
            className="min-w-[120px] lg:pl-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-[14px] font-semibold mb-3 text-[#525252]">Technology</h3>
            <ul className="space-y-1 font-medium text-[12px] text-[#525252]">
              <li>Blockchain</li>
              <li>Artificial Intelligence</li>
              <li>AR & VR</li>
              <li>Cloud Computing</li>
              <li>Internet of Things</li>
            </ul>
          </motion.div>

          {/* Industries */}
          <motion.div
            className="min-w-[120px] lg:pl-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-[14px] font-semibold mb-3 text-[#525252]">Industries</h3>
            <ul className="space-y-1 font-medium text-[12px] text-[#525252]">
              <li>Healthcare</li>
              <li>Education</li>
              <li>Logistics</li>
              <li>SaaS</li>
              <li>eCommerce</li>
            </ul>
          </motion.div>
        </div>
      </div>

      <motion.div
  className="bg-[#FAFAFA]"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <div className="max-w-full mx-auto px-6 md:px-12 lg:px-24 text-[12px] py-6 flex flex-col md:flex-row items-start justify-start gap-6 text-[#525252]">
    <p>© 2022–2025 Synopix LLC</p>
    <div className=" lg:ml-50 flex flex-wrap justify-start gap-6 md:gap-10">
      <span>Contact us</span>
      <span>Sustainability</span>
      <span>Accessibility</span>
      <span>Terms of use</span>
      <span>Privacy</span>
      <span>Cookie Policy</span>
      <span>Sitemap</span>
    </div>
  </div>
</motion.div>


      {/* Comment Box */}
      <motion.div
        className="absolute bottom-3 right-3"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <img
          src="/assets/comment.svg"
          alt="Comment"
          className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] cursor-pointer"
        />
      </motion.div>
    </footer>
  );
};

export default Footer;
