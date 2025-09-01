// components/ServicesSection.jsx
import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "AI ML Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "/assets/code-1.svg"
    },
    // Add more services as needed (6 total)
  ];

  return (
    <section className="pt-20 pb-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
          We help you make smarter<br />business decisions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-8">
              <img src="/assets/code1.svg" alt="Service Icon" className="h-15 w-15 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-800 text-center mb-4">AI ML Development</h3>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;