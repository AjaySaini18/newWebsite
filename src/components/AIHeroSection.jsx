import React from 'react'

const AIHeroSection = () => {
  const stats = [
    { value: "86%", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna" },
    { value: "35%", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna" },
    { value: "74%", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna" },
    { value: "92%", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna" },
  ]; 

  return (
    <section 
      className="relative min-h-screen flex flex-col justify-center text-white font-gilroy" 
      style={{
        backgroundImage:"url('/assets/Rectangle 1.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-24 pt-28 pb-20">
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug">
              AI ML DEVELOPMENT
            </h1>
            <p className="mt-3 text-sm sm:text-md font-medium text-[#D1D4E7] max-w-xl leading-6">
              A progressive AI ML development company, winning the trust of global businesses 
              across industries. We offer a suite of end-to-end AI ML development services that 
              help businesses to achieve intelligent process automation, leading to better 
              productivity and competitive growth.
            </p>
            <button className="mt-5 px-5 py-2 border border-white rounded-md hover:bg-white hover:text-black transition text-sm sm:text-base">
              Consult Now
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/assets/Rectangle 41.svg"
              alt="AI ML Development"
              className="rounded-xl shadow-lg max-w-full w-4/5 sm:w-3/4 lg:w-full"
            />
          </div>
        </div>

        {/* ✅ Stats Section with Flexbox */}
        <div className="mt-16 flex flex-wrap justify-center lg:justify-between gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-[220px] sm:min-w-[250px] max-w-[300px] border border-[#2B2B2B] bg-zinc-900/60 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              {/* Number + SVG */}
              <div className="text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">{item.value}</h3>
                <img 
                  src="/assets/Rectangle 23.svg" 
                  alt="gradient line" 
                  className="w-10 h-1"
                />
              </div>

              {/* Text */}
              <p className="mt-3 text-[#A9A9A9] text-xs sm:text-sm text-left leading-5">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AIHeroSection
