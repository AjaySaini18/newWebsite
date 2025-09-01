// components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-70 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Logo" className="h-8 w-8 mr-3" />
          <span className="text-white font-bold text-xl">SYNOPIX</span>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <div className="flex items-center text-white">
            <span>What we do</span>
            <img src="/assets/arrow-down-s-line.svg" alt="Dropdown" className="h-4 w-4 ml-1" />
          </div>
          <div className="text-white">What we think</div>
          <div className="flex items-center text-white">
            <span>Who we are</span>
            <img src="/assets/arrow-down-s-line.svg" alt="Dropdown" className="h-4 w-4 ml-1" />
          </div>
          <div className="flex items-center text-white">
            <span>Careers</span>
            <img src="/assets/arrow-down-s-line.svg" alt="Dropdown" className="h-4 w-4 ml-1" />
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <img src="/assets/search.svg" alt="Search" className="h-5 w-5 text-white" />
          <div className="flex items-center text-white">
            <img src="/assets/earth-line.svg" alt="Language" className="h-5 w-5 mr-1" />
            <span>India</span>
            <img src="/assets/arrow-down-s-line.svg" alt="Dropdown" className="h-4 w-4 ml-1" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;