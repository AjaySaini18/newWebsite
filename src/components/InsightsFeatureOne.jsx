import React from "react";

const InsightsFeatureOne = () => {
  return (
    <section className="w-full bg-[#F8F8F8] py-10 lg:py-16 px-6 md:px-12 lg:px-24 font-gilroy">
      <div className="flex flex-col md:flex-row items-start gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-6 lg:leading-snug">
            We Transform Businesses & Society 
            Through Our Data Science Service
          </h2>
          <p className="text-sm font-medium text-[#393939] leading-[1.5] mb-3 lg:mb-6">
            Phasellus vitae justo id sapien volutpat vulputate vitae sed eros. Aliquam ac felis nec velit fermentum suscipit a sit amet orci. Sed gravida, ex nec commodo bibendum, magna libero tristique mi, non varius nisl elit in libero. Etiam sit amet dapibus odio, nec ultrices magna. Ut tempor augue nec nisi fermentum, et feugiat nisi egestas. 
          </p>
          <p className="text-sm font-medium text-[#393939] leading-[1.5]">
            Fusce pretium porttitor nisi, eget volutpat odio facilisis et. Nam fermentum lectus a justo ultrices, non efficitur nunc sollicitudin. Quisque ut sapien vel felis bibendum porttitor. Duis sodales, magna ac vulputate suscipit, nisl turpis condimentum nunc, ac ultrices enim nulla a purus.
          </p>
        </div>

        {/* Right Content - Images */}
        <div className="flex-1 relative flex justify-center min-h-[360px] sm:min-h-[400px] md:min-h-[420px]">
          {/* Main App Image (absolute, but responsive sizes) */}
          <img
            src="/assets/appDevelopment.jpg"
            alt="App Development"
            className="absolute bottom-1/7 md:bottom-1/6 lg:bottom-0 md:left-2/5 lg:left-1/2 -translate-x-1/2 
                       rounded-xl shadow-lg 
                       w-[200px] sm:w-[160px] md:w-[220px] lg:w-[320px] 
                       h-[280px] sm:h-[330px] md:h-[300px] lg:h-[380px]
                       object-cover z-10"
          />

          {/* Rectangle Image (remains in flow, responsive) */}
          <img
            src="/assets/Rectangle-7772.png"
            alt="Data Science"
            className="rounded-xl shadow-md 
                       w-[100px] sm:w-[140px] md:w-[190px] lg:w-[240px] 
                       h-[200px] sm:h-[250px] md:h-[260px] lg:h-[290px]
                       ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default InsightsFeatureOne;
