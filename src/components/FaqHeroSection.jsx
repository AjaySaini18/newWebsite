import React from 'react';

const FaqHeroSection = () => {
  return (
    <section
      className="relative py-12 md:py-16 bg-cover bg-center font-gilroy"
      style={{ backgroundImage: "url('/assets/faq_Bg.jpg')" }}
    >
      <div className="relative pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 lg:px-24">
        
        {/* Left Side - Text (aligned to start) */}
        <div className="flex flex-col justify-center space-y-6 items-start">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Frequently <br /> Asked Questions
          </h1>
          <p className="font-semibold leading-tight max-w-lg text-sm">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi sint occaecati cupiditate non provident.
          </p>
        </div>
      </div>

      {/* Right Side - Illustration touching bottom */}
      <div className="absolute bottom-0 right-12 max-w-[400px] w-[70%] md:w-[400px]">
        <img
          src="/assets/faq_hero.svg"
          alt="FAQ Illustration"
          className="w-full h-60 md:h-70"
        />
      </div>
    </section>
  );
};

export default FaqHeroSection;
