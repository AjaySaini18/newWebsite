import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#F9F9F9] font-gilroy">
      {/* Top Section */}
      <div className="max-w-full mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8">
          {/* Logo + Address */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/assets/logo.svg" alt="Synopix Logo" className="w-6 h-6" />
              <span className="text-[18px] font-bold text-[#525252]">SYNOPIX</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/fb.svg" alt="Facebook" className="w-5 h-5 hover:opacity-80" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-5 h-5 hover:opacity-80" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/insta.svg" alt="Instagram" className="w-5 h-5 hover:opacity-80" />
              </a>
            </div>

            {/* Address */}
            <p className="text-[#525252] text-xs font-medium">
              6065 Roswell Road, Suite 450, <br />
              Atlanta, GA 30328-4011
            </p>
          </div>

          {/* About */}
          <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2">
            <h3 className="text-[16px] font-semibold mb-2 text-[#525252]">About</h3>
            <ul className="space-y-1 font-medium text-[12px] text-[#525252]">
              <li>Our Company</li>
              <li>Core Team</li>
              <li>Career</li>
              <li>CSR</li>
              <li>How We Work</li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3">
            <h3 className="text-[16px] font-semibold mb-2 text-[#525252]">Services</h3>
            <ul className="space-y-1 font-medium text-[12px] text-[#525252]">
              <li>iOS App Development</li>
              <li>Android App Development</li>
              <li>Software Development</li>
              <li>Ideation & Design</li>
              <li>Research & Innovation</li>
            </ul>
          </div>

          {/* Technology */}
          <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2">
            <h3 className="text-[16px] font-semibold mb-2 text-[#525252]">Technology</h3>
            <ul className="space-y-1 font-medium text-[12px] text-[#525252]">
              <li>Blockchain</li>
              <li>Artificial Intelligence</li>
              <li>AR & VR</li>
              <li>Cloud Computing</li>
              <li>Internet of Things</li>
            </ul>
          </div>

          {/* Industries */}
          <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-[16px] font-semibold mb-2 text-[#525252]">Industries</h3>
            <ul className="space-y-1 font-medium text-[12px] text-[#525252]">
              <li>Healthcare</li>
              <li>Education</li>
              <li>Logistics</li>
              <li>SaaS</li>
              <li>eCommerce</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-[#FAFAFA]">
        <div className="max-w-full mx-auto px-6 md:px-12 lg:px-24 text-[12px] py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[#525252]">
          <p>© 2022–2025 Synopix LLC</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-12">
            <span>Contact us</span>
            <span>Sustainability</span>
            <span>Accessibility</span>
            <span>Terms of use</span>
            <span>Privacy</span>
            <span>Cookie Policy</span>
            <span>Sitemap</span>
          </div>
        </div>
      </div>

      {/* Comment Box */}
      <div className="absolute bottom-3 right-3">
        <img
          src="/assets/comment.svg"
          alt="Comment"
          className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] cursor-pointer"
        />
      </div>
    </footer>
  );
};

export default Footer;
