import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import WhatWeDoModal from "../modals/WhatWeDoModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWhatWeDo, setShowWhatWeDo] = useState(false);

  return (
    <nav className="font-figtree fixed top-0 w-full bg-black/70 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-5 flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/logo.svg" alt="Logo" className="h-6 w-6 mr-2 sm:mr-3" />
          <span className="text-white font-bold font-figtree text-md sm:text-lg">SYNOPIX</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 font-opensans text-[12px] relative">
          {/* What we do (with modal) */}
          <div
            className="flex items-center text-white cursor-pointer relative"
            onMouseEnter={() => setShowWhatWeDo(true)}
            onMouseLeave={() => setShowWhatWeDo(false)}
          >
            <span>What we do</span>
            <img src="/assets/arrow-down-s-line.svg" alt="Dropdown" className="h-3 w-3 ml-1 mt-1" />

            {showWhatWeDo && <WhatWeDoModal />}
          </div>

          <div className="text-white cursor-pointer">What we think</div>

          <div className="flex items-center text-white cursor-pointer">
            <span>Who we are</span>
            <img src="/assets/arrow-down-s-line.svg" alt="Dropdown" className="h-3 w-3 ml-1 mt-1" />
          </div>

          <div className="flex items-center text-white cursor-pointer">
            <span>Careers</span>
            <img src="/assets/arrow-down-s-line.svg" alt="Dropdown" className="h-3 w-3 ml-1 mt-1" />
          </div>
        </div>

        {/* Right section */}
        <div className="hidden lg:flex items-center space-x-4">
          <img src="/assets/search.svg" alt="Search" className="h-4 w-4 cursor-pointer" />
          <div className="flex items-center text-white cursor-pointer text-[12px]">
            <img src="/assets/earth-line.svg" alt="Language" className="h-4 w-4 mr-1" />
            <span>India</span>
            <img src="/assets/arrow-down-s-line.svg" alt="Dropdown" className="h-3 w-3 ml-1 mt-1" />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-white h-6 w-6" /> : <Menu className="text-white h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-md px-6 py-4 space-y-4 text-sm">
          <div className="flex flex-col space-y-3 text-white">
            <div className="flex items-center cursor-pointer">
              <span>What we do</span>
              <img src="/assets/arrow-down-s-line.svg" alt="Dropdown" className="h-4 w-4 ml-1" />
            </div>
            <div className="cursor-pointer">What we think</div>
            <div className="flex items-center cursor-pointer">
              <span>Who we are</span>
              <img src="/assets/arrow-down-s-line.svg" alt="Dropdown" className="h-4 w-4 ml-1" />
            </div>
            <div className="flex items-center cursor-pointer">
              <span>Careers</span>
              <img src="/assets/arrow-down-s-line.svg" alt="Dropdown" className="h-4 w-4 ml-1" />
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 text-white">
            <img src="/assets/search.svg" alt="Search" className="h-5 w-5 cursor-pointer" />
            <div className="flex items-center cursor-pointer">
              <img src="/assets/earth-line.svg" alt="Language" className="h-5 w-5 mr-1" />
              <span>India</span>
              <img src="/assets/arrow-down-s-line.svg" alt="Dropdown" className="h-4 w-4 ml-1" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
