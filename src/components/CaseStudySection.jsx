import React, { useRef, useState, useEffect } from "react";

const CaseStudySection = () => {
  const scrollRef = useRef(null);
  const thumbRef = useRef(null);

  const [thumbTop, setThumbTop] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(30); // default %
  const [visibleItems, setVisibleItems] = useState(1); // Start with first item visible

  useEffect(() => {
    const container = scrollRef.current;

    const handleScroll = () => {
      if (!container) return;
      const { scrollTop, scrollHeight, clientHeight } = container;

      const newThumbHeight = (clientHeight / scrollHeight) * 100;
      const newThumbTop =
        (scrollTop / (scrollHeight - clientHeight)) * (100 - newThumbHeight);

      setThumbHeight(newThumbHeight);
      setThumbTop(newThumbTop);

      // Reveal next item instantly when user scrolls at all
      const totalItems = 6;
      if (scrollTop > 0 && visibleItems < totalItems) {
        setVisibleItems((prev) => Math.min(prev + 1, totalItems));
      }
    };

    handleScroll(); // initial sync
    container?.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [visibleItems]);

  // Drag logic for scrollbar thumb
  useEffect(() => {
    const container = scrollRef.current;
    const thumb = thumbRef.current;
    let isDragging = false;
    let startY = 0;
    let startTop = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      startY = e.clientY;
      startTop = thumbTop;
      document.body.style.userSelect = "none"; // prevent text select
    };

    const onMouseMove = (e) => {
      if (!isDragging || !container) return;

      const { clientHeight, scrollHeight } = container;
      const maxThumbTop = 100 - thumbHeight;
      const deltaY = ((e.clientY - startY) / clientHeight) * 100;
      const newTop = Math.min(Math.max(startTop + deltaY, 0), maxThumbTop);

      setThumbTop(newTop);

      const newScrollTop =
        (newTop / maxThumbTop) * (scrollHeight - clientHeight);
      container.scrollTop = newScrollTop;
    };

    const onMouseUp = () => {
      isDragging = false;
      document.body.style.userSelect = "auto";
    };

    thumb?.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      thumb?.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [thumbTop, thumbHeight]);

  // Single Case Study Item
  const CaseStudyItem = ({ title, result, downloads, traffic }) => (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-16 w-full mb-16">
      {/* Left Content */}
      <div className="lg:w-[380px] flex flex-col">
        <h2 className="text-[20px] sm:text-[22px] md:text-[28px] font-bold text-white mb-3">
          {title}
        </h2>

        <p className="text-[12px] sm:text-[13px] md:text-[18px] text-gray-200 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Metrics */}
        <div className="flex items-start sm:items-end">
          <div className="pr-8 sm:pr-10">
            <div className="text-[14px] text-[#9F9F9F]">Result</div>
            <div className="text-[18px] sm:text-[20px] font-medium text-white mb-1">
              {result}
            </div>
            <div className="text-[14px] text-[#9F9F9F]">App downloads</div>
          </div>

          <div className="w-px bg-[#0E3F48] h-[50px] hidden sm:block"></div>

          <div className="pl-8 sm:pl-10">
            <div className="text-[18px] sm:text-[20px] font-medium text-white mb-1">
              {traffic}
            </div>
            <div className="text-[14px] text-[#9F9F9F]">Monthly Traffic</div>
          </div>
        </div>

        <button className="w-[150px] h-[38px] text-[14px] hover:border-hidden border border-[#D6D6D6] text-[#D6D6D6] rounded-[5px] flex items-center justify-center hover:bg-[linear-gradient(109.77deg,#06F7C4_-5.67%,#4359FF_26.82%)] mt-8">
          View Case Study
        </button>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex items-start justify-center">
        <div className="relative flex">
          <div className="w-full max-w-[825px] h-[350px] md:h-[410px] overflow-hidden rounded-[11px] shadow-xl">
            <img
              src="/assets/Rectangle20.png"
              alt={`${title} Case Study`}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden font-gilroy">
      {/* Background */}
      <div
        className="w-full px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-20 backdrop-blur-[52.9px]"
        style={{
          backgroundImage: "url('/assets/bg_casestudy.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Heading */}
        <div className="mb-6">
          <img
            src="/assets/CaseStudy.svg"
            alt="Case Study Logo"
            className="h-[18px] w-auto inline-block align-middle"
          />
        </div>

        {/* Wrapper */}
        <div className="relative flex">
          {/* Scrollable Content */}
          <div
            ref={scrollRef}
            className="max-h-[500px] overflow-y-scroll no-scrollbar pr-6 flex-1"
          >
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`transition-opacity duration-500 ${
                  i < visibleItems ? "opacity-100" : "opacity-30"
                }`}
              >
                <CaseStudyItem
                  title={`Microsoft Case ${i + 1}`}
                  result={`${10 + i}M+`}
                  downloads={`${5 + i}M+`}
                  traffic={`${15 + i}M+`}
                />
              </div>
            ))}
          </div>

          {/* Custom Gradient Scrollbar */}
          <div className="absolute right-0 top-0 h-full hidden sm:flex items-start">
            <div className="w-[3px] h-full bg-gray-600/50 rounded-full relative">
              <div
                ref={thumbRef}
                className="absolute left-0 w-full cursor-pointer rounded-full"
                style={{
                  top: `${thumbTop}%`,
                  height: `${thumbHeight}%`,
                  background:
                    "linear-gradient(180deg, #06F7C4 0%, #4359FF 100%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
