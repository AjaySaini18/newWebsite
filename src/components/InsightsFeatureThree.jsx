import React from "react";

const InsightsFeatureThree = () => {
  return (
    <section
      className="w-full relative py-10 lg:py-20 px-6 md:px-12 lg:px-24 font-figtree text-white"
      style={{
        backgroundImage: "url('/assets/Rectangle-19.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-16">
        
        {/* Left Content - Video/Image */}
        <div className="w-full md:w-7/12 flex justify-center md:justify-start">
          <img
            src="/assets/Rectangle-7774.jpg"
            alt="Artificial Intelligence Video"
            className="rounded-xl shadow-lg 
                       w-full 
                       h-[420px] lg:h-[360px] object-cover"
          />
        </div>

        {/* Right Content - Text */}
        <div className="w-full md:w-5/12 text-center md:text-left">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-[#CACACA]">
            Providing Different Artificial  
            Intelligence Development Services
          </h2>
          <p className="text-sm font-base text-[#B7B7B7] leading-[1.4] mb-4 lg:mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus eros 
            aliquet convallis ultricies. Morbi vitae ligula id nunc ullamcorper viverra. Sed 
            id urna sed leo hendrerit tincidunt sit amet at massa. Suspendisse potenti. Cras 
            sit amet aliquet lorem. Integer posuere ligula non sapien semper, in vulputate 
            risus commodo.
          </p>
          <p className="text-sm font-medium text-[#B7B7B7] leading-[1.4]">
            Nullam id felis a arcu maximus pretium. Sed euismod purus ac purus sollicitudin, 
            vel pulvinar orci viverra. Etiam sed dapibus sem, nec ultricies magna. Curabitur 
            auctor ligula eu dui dictum varius. Maecenas volutpat massa at lectus vestibulum 
            egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada 
            fames ac turpis egestas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsightsFeatureThree;
