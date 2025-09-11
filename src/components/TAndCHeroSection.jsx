import React from 'react'

const TAndCHeroSection = () => {
  return (
    <section
      className="relative py-12 md:py-16 bg-cover bg-center font-gilroy"
      style={{ backgroundImage: "url('/assets/faq_Bg.jpg')" }}
    >
      <div className="relative pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 lg:px-24">
        
        {/* Left Side - Text (aligned to start) */}
        <div className="flex flex-col justify-center space-y-6 items-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Terms <br /> and Policy
          </h1>
          <p className="font-medium leading-normal max-w-xl text-md">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi sint occaecati cupiditate non provident.
          </p>
        </div>
      </div>

      {/* Right Side - Illustration touching bottom */}
      <div className="absolute bottom-0 sm:right-8 md:right-12 lg:right-20 max-w-[400px] w-[70%] md:w-[400px]">
        <img
          src="/assets/OBJECTS.svg"
          alt="FAQ Illustration"
          className="w-full h-60 md:h-75 "
        />
      </div>
    </section>
  );
}

export default TAndCHeroSection