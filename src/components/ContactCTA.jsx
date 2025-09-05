import React from "react";
import { Phone } from "lucide-react";

const ContactCTA = () => {
  return (
    <section
      className="w-full relative py-8 sm:py-12 px-6 sm:px-12 lg:px-24 font-figtree"
      style={{
        backgroundImage: "url('/assets/Rectangle35.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative max-w-full mx-auto grid grid-cols-1 lg:grid-cols-12 items-end gap-8">
        {/* Left Box */}
        <div className="col-span-12 lg:col-span-7 space-y-4 sm:space-y-6">
          <h2 className="text-white text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[24px] font-semibold leading-snug">
            Unlock smarter, faster, and more secure solutions— talk to our
            experts today and take your business to the next level.
          </h2>

          <button className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 bg-white text-black rounded-lg text-sm sm:text-base font-semibold shadow hover:shadow-lg transition">
            <Phone size={16} />
            Contact Us
          </button>
        </div>

        {/* Right Box */}
        <div className="col-span-12 lg:col-span-5 flex flex-row flex-wrap justify-center lg:justify-end gap-6">
          {/* USA */}
          <div className="min-w-[160px] sm:min-w-[180px] flex flex-col items-center text-center text-white">
            <div className="w-[70px] sm:w-[80px] h-[70px] sm:h-[80px] flex items-center justify-center mb-1">
              <img
                src="/assets/us.svg"
                alt="USA"
                className="w-[55px] sm:w-[65px] h-[55px] sm:h-[65px] object-contain"
              />
            </div>
            <h3 className="text-[13px] sm:text-[14px] font-bold mb-1">
              United States of America
            </h3>
            <p className="text-[10px] sm:text-[11px] font-semibold text-[#E5E5E5]">
              6065 Roswell Road, Suite 450,
              <br />
              Atlanta, GA 30328-4011
            </p>
          </div>

          {/* India */}
          <div className="min-w-[160px] sm:min-w-[180px] flex flex-col items-center text-center text-white">
            <div className="w-[70px] sm:w-[80px] h-[70px] sm:h-[80px] flex items-center justify-center mb-1">
              <img
                src="/assets/india.svg"
                alt="India"
                className="w-[55px] sm:w-[65px] h-[55px] sm:h-[65px] object-contain"
              />
            </div>
            <h3 className="text-[13px] sm:text-[14px] font-bold mb-1">India</h3>
            <p className="text-[10px] sm:text-[11px] font-semibold text-[#E5E5E5]">
              6065 Roswell Road, Suite 450,
              <br />
              Atlanta, GA 30328-4011
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
