import React from "react";
import { Phone } from "lucide-react";

const ContactCTA = () => {
  return (
    <section
      className="w-full relative py-12 lg:py-15 px-6 lg:px-28 font-gilroy"
      style={{
        backgroundImage: "url('/assets/Rectangle35.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative max-w-[1676px] mx-auto grid grid-cols-12 justify-between items-end gap-8">
        {/* Left Box */}
        <div className="col-span-12 lg:col-span-7 space-y-6">
          <h2 className="text-white text-xl md:text-[24px] lg:text-[28px] leading-snug">
            Unlock smarter, faster, and more secure solutions—talk to our
            experts today and take your business to the next level.
          </h2>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-semibold shadow hover:shadow-lg transition">
            <Phone size={18} />
            Contact Us
          </button>
        </div>

        {/* Right Box */}
        <div className="col-span-12 lg:col-span-5 flex flex-wrap lg:flex-nowrap justify-end gap-x-16">
          {/* USA */}
          <div className="flex flex-col items-center text-center text-white">
            <div className="w-[80px] h-[80px] flex items-center justify-center mb-4">
              <img
                src="/assets/us.svg"
                alt="USA"
                className="w-[80px] h-[80px] object-contain"
              />
            </div>
            <h3 className="text-lg font-bold">United States of America</h3>
            <p className="text-sm text-[#E5E5E5] leading-[22px]">
              6065 Roswell Road, Suite 450,
              <br />
              Atlanta, GA 30328-4011
            </p>
          </div>

          {/* India */}
          <div className="flex flex-col items-center text-center text-white">
            <div className="w-[80px] h-[80px] flex items-center justify-center mb-4">
              <img
                src="/assets/india.svg"
                alt="India"
                className="w-[80px] h-[80px] object-contain"
              />
            </div>
            <h3 className="text-lg font-bold">India</h3>
            <p className="text-sm text-[#E5E5E5] leading-[22px]">
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
