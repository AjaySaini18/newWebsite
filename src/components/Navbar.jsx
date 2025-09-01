import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-gilroy fixed top-0 w-full bg-black bg-opacity-70 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Logo" className="h-8 w-8 mr-3" />
          <span className="text-white font-bold text-xl">SYNOPIX</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <div className="flex items-center text-white cursor-pointer">
            <span>What we do</span>
            <img src="/assets/arrow-down-s-line.svg" alt="Dropdown" className="h-4 w-4 ml-1" />
          </div>
          <div className="text-white cursor-pointer">What we think</div>
          <div className="flex items-center text-white cursor-pointer">
            <span>Who we are</span>
            <img src="/assets/arrow-down-s-line.svg" alt="Dropdown" className="h-4 w-4 ml-1" />
          </div>
          <div className="flex items-center text-white cursor-pointer">
            <span>Careers</span>
            <img src="/assets/arrow-down-s-line.svg" alt="Dropdown" className="h-4 w-4 ml-1" />
          </div>
        </div>

        {/* Right section */}
        <div className="hidden md:flex items-center space-x-6">
          <img src="/assets/search.svg" alt="Search" className="h-5 w-5 text-white cursor-pointer" />
          <div className="flex items-center text-white cursor-pointer">
            <img src="/assets/earth-line.svg" alt="Language" className="h-5 w-5 mr-1" />
            <span>India</span>
            <img src="/assets/arrow-down-s-line.svg" alt="Dropdown" className="h-4 w-4 ml-1" />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-white h-6 w-6" /> : <Menu className="text-white h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-6 py-4 space-y-4">
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
