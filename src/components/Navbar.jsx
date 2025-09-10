import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import WhatWeDoModal from "../modals/WhatWeDoModal";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWhatWeDo, setShowWhatWeDo] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("India");
  const navigate = useNavigate();

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setShowLanguageDropdown(false);
  };

  return (
    <nav className="font-gilroy fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-full container mx-auto px-6 md:px-12 lg:px-24 py-5 flex justify-between items-center relative">
        {/* Logo */}
        <Link to={"/"}>
          <div className="flex items-center">
            <img src="/assets/logo.svg" alt="Logo" className="h-6 w-6 mr-2 sm:mr-3" />
            <span className="text-white font-bold font-gilroy text-lg sm:text-lg">SYNOPIX</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 font-opensans text-[14px] relative">
          {/* What we do (with modal) */}
          <div
            className="flex items-center text-white cursor-pointer relative"
            onMouseEnter={() => setShowWhatWeDo(true)}
            onMouseLeave={() => setShowWhatWeDo(false)}
          >
            <span className="2xl:text-[17px] text-[14px]">What we do</span>
  
            {showWhatWeDo && <WhatWeDoModal />}
          </div>

          <Link to={"/insights"}>
            <div className="text-white cursor-pointer 2xl:text-[17px] text-[14px]">What we think</div>
          </Link>

          <Link to={"/team"}>
            <div className="flex items-center text-white cursor-pointer">
              <span className="2xl:text-[17px] text-[14px]">Who we are</span>
            </div>
          </Link>

          <div
            className="flex items-center text-white cursor-pointer"
            onClick={() => navigate("/careers")}
          >
            <span className="2xl:text-[17px] text-[14px]">Careers</span>
           
          </div>
        </div>

        {/* Right section */}
        <div className="hidden lg:flex items-center space-x-4 relative">
          {/* Search Toggle */}
          <div className="flex items-center -ml-45 w-55 justify-end">
            {!showSearch ? (
              <img
                src="/assets/search.svg"
                alt="Search"
                className="h-4 w-4 cursor-pointer"
                onClick={() => setShowSearch(true)}
              />
            ) : (
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/80 text-black px-2 py-1 rounded-xs text-sm outline-none w-full"
                autoFocus
                onBlur={() => setShowSearch(false)}
              />
            )}
          </div>


          {/* Language Dropdown */}
          <div
            className="flex items-center text-white cursor-pointer text-[14px] w-10 mr-6 relative"
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
          >
            <img src="/assets/earth-line.svg" alt="Language" className="h-5 w-5 mr-1" />
            <span className="text-md">{selectedLanguage}</span>
            <img src="/assets/arrow-down-s-line.svg" alt="Dropdown" className="h-4 w-4 ml-1 " />

            {showLanguageDropdown && (
              <div className="absolute top-full mt-2 bg-black text-white rounded-md shadow-lg text-md py-2 w-28">
                <div
                  className="px-4 py-2 hover:bg-white/10 cursor-pointer"
                  onClick={() => handleLanguageSelect("India")}
                >
                  India
                </div>
                <div
                  className="px-4 py-2 text-md hover:bg-white/10 cursor-pointer"
                  onClick={() => handleLanguageSelect("USA")}
                >
                  USA
                </div>
              </div>
            )}
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

          <div className="flex items-center justify-between mt-4 text-white relative">
            {/* Mobile Search */}
            {!showSearch ? (
              <img
                src="/assets/search.svg"
                alt="Search"
                className="h-5 w-5 cursor-pointer"
                onClick={() => setShowSearch(true)}
              />
            ) : (
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white text-black px-2 py-1 rounded-md text-sm outline-none flex-1"
                autoFocus
                onBlur={() => setShowSearch(false)}
              />
            )}

            {/* Mobile Language Dropdown */}
            <div
              className="flex items-center cursor-pointer ml-4 relative"
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            >
              <img src="/assets/earth-line.svg" alt="Language" className="h-5 w-5 mr-1" />
              <span>{selectedLanguage}</span>
              <img src="/assets/arrow-down-s-line.svg" alt="Dropdown" className="h-4 w-4 ml-1" />

              {showLanguageDropdown && (
                <div className="absolute top-full mt-2 right-0 bg-black text-white rounded-md shadow-lg text-sm py-2 w-28">
                  <div
                    className="px-4 py-2 hover:bg-white/10 cursor-pointer"
                    onClick={() => handleLanguageSelect("India")}
                  >
                    India
                  </div>
                  <div
                    className="px-4 py-2 hover:bg-white/10 cursor-pointer"
                    onClick={() => handleLanguageSelect("USA")}
                  >
                    USA
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
