import React from "react";

const services = [
  {
    id: 1,
    title: "AI ML Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    icon: "/assets/code1.svg",
  },
  {
    id: 2,
    title: "Cloud Engineering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    icon: "/assets/code1.svg",
  },
  {
    id: 3,
    title: "Data Analytics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    icon: "/assets/code1.svg",
  },
  {
    id: 4,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    icon: "/assets/code1.svg",
  },
  {
    id: 5,
    title: "Mobile App Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    icon: "/assets/code1.svg",
  },
  {
    id: 6,
    title: "Cybersecurity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    icon: "/assets/code1.svg",
  },
  {
    id: 7,
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    icon: "/assets/code1.svg",
  },
  {
    id: 8,
    title: "DevOps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    icon: "/assets/code1.svg",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      className="w-full bg-cover bg-center text-white py-16 sm:py-20 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-gilroy"
      style={{ backgroundImage: "url('/assets/Rectangle19.png')" }}
    >
      <div className="max-w-[1676px] mx-auto">
        {/* Heading + Button */}
        <div className="grid grid-cols-12 items-start mb-12 gap-6">
          <h2 className="col-span-12 md:col-span-9 text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            Pioneering Innovation Through <br /> World-Class Engineering
          </h2>

          <div className="col-span-12 md:col-span-3 flex md:justify-end">
            <button className="px-4 sm:px-6 py-2 text-[11px] sm:text-[12px] border border-gray-400 rounded-md hover:bg-white hover:text-black transition">
              All Services
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#171717] border border-[#2B2B2B] rounded-2xl p-4 sm:p-6 min-h-[200px] sm:min-h-[220px] shadow-md hover:shadow-lg transition"
            >
              {/* Icon */}
              <img
                src={service.icon}
                alt={service.title}
                className="w-10 h-10 sm:w-[51px] sm:h-[51px] mb-4"
              />

              {/* Title */}
              <h3 className="text-sm sm:text-base text-[#AFAFAF] font-semibold mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[11px] sm:text-[12px] font-medium text-[#AFAFAF] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
