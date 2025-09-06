import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    title: "AI ML Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    profileImg: "/assets/Rectangle38.png",
    name: "Milan Anshuman",
    role: "Sr. UI UX Designer",
    company: "American Instant Food (Subway Group)",
    companyLogo: "/assets/image3.png",
  },
  {
    id: 2,
    title: "AI ML Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    profileImg: "/assets/Rectangle38.png",
    name: "Jane Doe",
    role: "Product Manager",
    company: "Global Tech Solutions",
    companyLogo: "/assets/image3.png",
  },
  {
    id: 3,
    title: "Cloud Migration",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profileImg: "/assets/Rectangle38.png",
    name: "John Smith",
    role: "CTO",
    company: "Future Systems Ltd",
    companyLogo: "/assets/image3.png",
  },
];

const CTASection = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section
      className="relative w-full pt-10 pb-20 px-4 sm:px-6 lg:px-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg_casestudy.png')" }}
    >
      <div className="max-w-[1676px] mx-auto">
        {/* Heading + Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-lg sm:text-xl md:text-[26px] font-gilroy font-semibold leading-[28px] sm:leading-[36px] text-white">
            Partnership Success Stories, In Their Own Words
          </h2>

          <div className="flex gap-2 self-end sm:self-auto">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#1E1E1E] hover:bg-[#333]"
            >
              <ChevronLeft className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#1E1E1E] hover:bg-[#333]"
            >
              <ChevronRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6 sm:gap-8 md:gap-16"
            style={{
              transform: `translateX(-${current * (100 / 1.5)}%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <div
                key={item.id}
                className={`min-w-[90%] sm:min-w-[66.66%] md:min-w-[50%] lg:min-w-[70%] transition-opacity duration-500 ${
                  index === current ? "opacity-100" : "opacity-30"
                }`}
              >
                <div className="bg-[#1E1E1E] rounded-2xl p-4 sm:p-6 md:p-8 text-white flex flex-col justify-between shadow-lg min-h-[240px] sm:min-h-[260px]">
                  {/* Title & Desc */}
                  <div>
                    <h3 className="text-[14px] sm:text-[16px] font-bold text-[#AFAFAF] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-[12px] leading-[16px] sm:leading-[18px] text-[#D4D4D4] line-clamp-3 sm:line-clamp-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-[#2B2B2B] my-3 sm:my-4"></div>

                  {/* Profile & Logo */}
                  <div className="flex items-center justify-between gap-3 sm:gap-6">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <img
                        src={item.profileImg}
                        alt={item.name}
                        className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-md object-cover"
                      />
                      <div>
                        <p className="text-[11px] sm:text-[12px] font-semibold text-[#D4D4D4]">
                          {item.name}
                        </p>
                        <p className="text-[11px] sm:text-[13px] text-[#D4D4D4]">
                          {item.role}
                        </p>
                        <p className="text-[11px] sm:text-[12px] text-[#D4D4D4]">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    <img
                      src={item.companyLogo}
                      alt="Company Logo"
                      className="w-[100px] sm:w-[80px] h-[20px] sm:h-[26px] object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
