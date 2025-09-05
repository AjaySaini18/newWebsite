// components/StatsSection.jsx
import React from "react";

const StatsSection = () => {
  const stats = [
    {
      value: "3000+",
      label: "Industries Mastered",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      value: "65+",
      label: "Industries Mastered",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      value: "200+",
      label: "Industries Mastered",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className=" pt-4 lg:pt-7  md:pb-10 lg:pb-20 bg-gray-50 font-gilroy">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-5xl font-extrabold mb-4"
                style={{
                  background:
                    "linear-gradient(109.77deg, #06F7C4 -5.67%, #4359FF 26.82%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {stat.label}
              </h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
