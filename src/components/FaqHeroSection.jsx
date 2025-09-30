import React from 'react';

const FaqHeroSection = () => {
  return (
    <section
      className="relative py-12 lg:py-16 bg-cover bg-center font-gilroy"
      style={{ backgroundImage: "url('/assets/faq_Bg.jpg')" }}
    >
      <div className="relative pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 lg:px-24 items-center">
        
        {/* Left Side - Text */}
        <div className="flex flex-col justify-left md:space-y-3 lg:space-y-6 items-start text-left md:text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Frequently <br className="hidden sm:block" /> Asked Questions
          </h1>
          <p className="font-medium leading-relaxed max-w-xl text-sm sm:text-base md:text-lg text-gray-700">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi sint occaecati cupiditate non provident.
          </p>
        </div>

        {/* Right Side - Illustration */}
        <div className="flex justify-center md:justify-end relative">
          <img
            src="/assets/faq_hero.svg"
            alt="FAQ Illustration"
            className="w-[70%] sm:w-[60%] md:w-[350px] lg:w-[400px] 
                       h-auto object-contain
                       md:-mb-35 lg:-mb-28"
          />
        </div>
      </div>
    </section>
  );
};

export default FaqHeroSection;
