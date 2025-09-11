import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Footer = () => {
  return (
    <footer className="relative w-full font-gilroy">
      {/* Top Section */}
      <div className="bg-[#F4F4F4] px-6 md:px-12 lg:px-24 py-16 pb-24">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-16">
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
              <img src="/assets/logo.svg" alt="Synopix Logo" className="w-6 h-6 2xl:w-7 2xl:h-7" />
              <span className="text-lg font-bold text-[#525252]">SYNOPIX</span>
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
                    className="w-6 h-6"
                  />
                </motion.a>
              ))}
            </div>


            {/* Address */}
            <p className="text-[#525252] text-sm">
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
            <h3 className="text-lg font-semibold mb-3 text-[#525252]">About</h3>
            <ul className="leading-7 text-sm text-[#525252]">
              <Link to={"/contact-us"}><li>Our Company</li></Link>
              <Link to={"/team"}><li>Core Team</li></Link>
              <Link to={"/careers"}><li>Career</li></Link>
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
            <h3 className="text-lg font-semibold mb-3 text-[#525252]">Services</h3>
            <ul className="leading-7 text-sm text-[#525252]">
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
            <h3 className="text-lg font-semibold mb-3 text-[#525252]">Technology</h3>
            <ul className="leading-7 text-sm text-[#525252]">
              <Link to={"/blockchain"}><li>Blockchain</li></Link>
              <Link to={"/ai"}><li>Artificial Intelligence</li></Link>
              <Link to={"/ar-vr"}><li>AR & VR</li></Link>
              <Link to={"/cloud-computing"}><li>Cloud Computing</li></Link>
              <Link to={"/iot"}><li>Internet of Things</li></Link>
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
            <h3 className="text-lg font-semibold mb-3 text-[#525252]">Industries</h3>
            <ul className="leading-7 text-sm text-[#525252]">
              <Link to={"/healthcare"}><li>Healthcare</li></Link>
              <Link to={"/education"}><li>Education</li></Link>
              <Link to={"/logistics"}><li>Logistics</li></Link>
              <Link to={"/saas"}><li>SaaS</li></Link>
              <Link to={"/e-commerce"}><li>eCommerce</li></Link>
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
  <div className="max-w-full mr-10 mx-auto px-6 md:px-12 lg:px-24 text-sm py-6 flex lg:flex-row items-start md:flex-col lg:justify-between gap-6 text-[#525252]">
    <p><span className="">©</span> 2022–2025 Synopix LLC</p>
    <div className=" flex flex-wrap justify-start gap-12">
      <Link to={"/contact-us"}><span>Contact us</span></Link>
      <span>Sustainability</span>
      <span>Accessibility</span>
      <Link to={"/terms-and-policy"}><span>Terms of use</span></Link>
      <span>Privacy</span>
      <span>Cookie Policy</span>
      <Link to={"/faq"} ><span>FAQ</span></Link>
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
