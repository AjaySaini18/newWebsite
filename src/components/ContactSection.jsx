// components/ContactSection.jsx
import React, { useState } from "react";

const ContactSection = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <section className="relative py-16 lg:px-24 sm:px-6 font-gilroy">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <img
          src="/assets/Rectangle 26.svg"
          alt="background gradient"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side Shapes */}
      <div className="absolute right-0 top-0 h-full">
        <img
          src="/assets/ContactFormShapes.png"
          alt="decorative shapes"
          className="h-full object-contain"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative max-w-3xl text-white 
        px-4 sm:px-0
        flex flex-col sm:block items-center sm:items-start">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-11 mb-2 text-center sm:text-left">
          Looking to build a digital product?
          <br />
          Let’s build it together.
        </h2>
        <p className="text-sm sm:text-base mb-8 text-center sm:text-left">
          Please fill the details
        </p>

        {/* Form */}
        <form className="space-y-6 w-full">
          {/* First Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-4 rounded-md text-[#282828] placeholder-[#282828] focus:outline-none bg-[#FFFF]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-4 rounded-md text-[#282828] placeholder-[#282828] focus:outline-none bg-[#FFFF]"
            />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email ID"
              className="w-full px-4 py-4 rounded-md text-[#282828] placeholder-[#282828] bg-[#FFFF] focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full px-4 py-4 rounded-md text-[#282828] placeholder-[#282828] bg-[#FFFF] focus:outline-none"
            />
          </div>

          {/* Message Box */}
          <textarea
            placeholder="Tell us more (optional)"
            rows="4"
            className="w-full px-4 py-3 rounded-md bg-[#FFFF] text-[#282828] placeholder-[#282828] focus:outline-none"
          ></textarea>

          {/* Toggle Switch */}
          <div className="flex items-center space-x-2 -mt-4">
            <button
            type="button"
            onClick={() => setEnabled(!enabled)}
            className={`relative inline-flex 
                h-2 w-4 sm:h-4 sm:w-7  /* smaller on mobile, normal on larger */
                items-center rounded-full transition 
                ${enabled ? "bg-green-600" : "bg-gray-300"}`}
            >
            <span
                className={`inline-block 
                h-1 w-1 sm:h-2 sm:w-2  /* adjust circle size */
                transform rounded-full bg-white transition 
                ${enabled ? "translate-x-2 sm:translate-x-4" : "translate-x-0.5 sm:translate-x-1"}`}
            />
            </button>

            <label className="text-xs sm:text-sm text-[#A8C2E7]">
              I consent to receive marketing communication from Synopix LLC
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-3 bg-white text-[#050505] font-semibold rounded-md hover:bg-gray-100 transition w-full sm:w-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
