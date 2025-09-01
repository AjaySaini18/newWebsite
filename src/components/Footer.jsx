import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#F9F9F9] font-gilroy">
      {/* Top Section */}
      <div className="max-w-[1676px] mx-auto px-6 lg:px-28 py-20 grid grid-cols-12 gap-8">
        {/* Logo + Address */}
        <div className="col-span-12 md:col-span-4 space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="Synopix Logo" className="w-8 h-8" />
            <span className="text-[22px] font-bold text-[#525252]">SYNOPIX</span>
          </div>

          {/* Social Icons (with images) */}
          <div className="flex items-center gap-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/fb.svg" alt="Facebook" className="w-6 h-6 hover:opacity-80" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:opacity-80" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/insta.svg" alt="Instagram" className="w-6 h-6 hover:opacity-80" />
            </a>
          </div>

          {/* Address */}
          <p className="text-[#525252] text-sm leading-relaxed">
            6065 Roswell Road, Suite 450, <br />
            Atlanta, GA 30328-4011
          </p>
        </div>

        {/* About */}
        <div className="col-span-6 sm:col-span-4 md:col-span-2">
          <h3 className="text-[18px] font-semibold mb-6 text-[#525252]">About</h3>
          <ul className="space-y-4 text-sm text-[#525252]">
            <li>Our Company</li>
            <li>Core Team</li>
            <li>Career</li>
            <li>CSR</li>
            <li>How We Work</li>
          </ul>
        </div>

        {/* Services */}
        <div className="col-span-6 sm:col-span-4 md:col-span-3">
          <h3 className="text-[18px] font-semibold mb-6 text-[#525252]">Services</h3>
          <ul className="space-y-4 text-sm text-[#525252]">
            <li>iOS App Development</li>
            <li>Android App Development</li>
            <li>Software Development</li>
            <li>Ideation & Design</li>
            <li>Research & Innovation</li>
          </ul>
        </div>

        {/* Technology */}
        <div className="col-span-6 sm:col-span-4 md:col-span-2">
          <h3 className="text-[18px] font-semibold mb-6 text-[#525252]">Technology</h3>
          <ul className="space-y-4 text-sm text-[#525252]">
            <li>Blockchain</li>
            <li>Artificial Intelligence</li>
            <li>AR & VR</li>
            <li>Cloud Computing</li>
            <li>Internet of Things</li>
          </ul>
        </div>

        {/* Industries */}
        <div className="col-span-6 sm:col-span-4 md:col-span-1">
          <h3 className="text-[18px] font-semibold mb-6 text-[#525252]">Industries</h3>
          <ul className="space-y-4 text-sm text-[#525252]">
            <li>Healthcare</li>
            <li>Education</li>
            <li>Logistics</li>
            <li>SaaS</li>
            <li>eCommerce</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-[#FAFAFA]">
        <div className="max-w-[1676px] mx-auto px-6 lg:px-28 py-8 flex flex-col md:flex-row items-center gap-46 text-sm text-[#525252]">
          <p>© 2022–2025 Synopix LLC</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-18">
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

      {/* Comment Box (Bottom Right) */}
      <div className="absolute bottom-4 right-4">
        <img
          src="/assets/comment.svg"
          alt="Comment"
          className="w-[55px] h-[55px] md:w-[55px] md:h-[55px] cursor-pointer"
        />
      </div>
    </footer>
  );
};

export default Footer;
