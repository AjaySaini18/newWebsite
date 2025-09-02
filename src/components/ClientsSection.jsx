import React from "react";

const clients = [
  { id: 1, logo: "/assets/Meta-Logo.png", alt: "Meta" },
  { id: 2, logo: "/assets/tcs.png", alt: "TCS" },
  { id: 3, logo: "/assets/Amazon-Logo-61.png", alt: "Amazon" },
  { id: 4, logo: "/assets/Dominos-Logo.png", alt: "Domino's" },
  { id: 5, logo: "/assets/Microsoft-Logo.wine.png", alt: "Microsoft" },
  { id: 6, logo: "/assets/Accenture.svg1.png", alt: "Accenture" },
  { id: 7, logo: "/assets/Cognizant_Logo1.png", alt: "Cognizant" },
  { id: 8, logo: "/assets/Samsung-emblem.png", alt: "Samsung" },
  { id: 9, logo: "/assets/Adobe-logo1.png", alt: "Adobe" },
  { id: 10, logo: "/assets/NVIDIA_logo.svg.png", alt: "Nvidia" },
];

const ClientsSection = () => {
  return (
    <section className="w-full bg-white py-7 sm:py-11 md:py-15 px-6 lg:px-24 font-gilroy">
      <div className="max-w-[1421px] mx-auto">
        {/* Heading */}
        <div className="grid grid-cols-12 mb-9">
          <h2 className="col-span-12 text-left text-[20px] sm:text-[24px] md:text-[28px] font-bold leading-snug sm:leading-[32px] md:leading-[36px] text-black">
            Creating New Ways to Experience the World’s <br className="hidden sm:block" />
            Most Influential Brands
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center h-[72px] sm:h-[80px] md:h-[96px] border border-[#E3E3E3] rounded-lg bg-white"
            >
              <img
                src={client.logo}
                alt={client.alt}
                className="max-w-[90px] sm:max-w-[110px] md:max-w-[130px] lg:max-w-[140px] h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
