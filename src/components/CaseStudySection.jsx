import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TOTAL_ITEMS = 6;

const CaseStudySection = () => {
  const hScrollRef = useRef(null);
  const vScrollRef = useRef(null);
  const thumbRef = useRef(null);

  const [thumbTop, setThumbTop] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(30);

  const scrollHorizontal = (dir) => {
    const el = hScrollRef.current;
    if (!el) return;
    const width = el.clientWidth;
    el.scrollBy({ left: dir === "left" ? -width : width, behavior: "smooth" });
  };

  useEffect(() => {
    const container = vScrollRef.current;
    if (!container) return;
    let rafId = null;

    const isVisible = () => {
      try {
        const style = window.getComputedStyle(container);
        return style.display !== "none" && container.clientHeight > 0;
      } catch {
        return false;
      }
    };

    const updateThumb = () => {
      if (!isVisible()) return;
      const { scrollTop, scrollHeight, clientHeight } = container;

      if (scrollHeight <= clientHeight) {
        setThumbHeight(100);
        setThumbTop(0);
        return;
      }

      const newThumbHeight = Math.max((clientHeight / scrollHeight) * 100, 5);
      const maxThumbTop = 100 - newThumbHeight;
      const newThumbTop =
        (scrollTop / (scrollHeight - clientHeight)) * maxThumbTop;

      setThumbHeight(newThumbHeight);
      setThumbTop(newThumbTop);
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateThumb);
    };

    updateThumb();
    container.addEventListener("scroll", onScroll);
    window.addEventListener("resize", updateThumb);

    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateThumb);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const container = vScrollRef.current;
    const thumb = thumbRef.current;
    if (!container || !thumb) return;

    let isDragging = false;
    let startY = 0;
    let startTop = 0;

    const isVisible = () => {
      try {
        const style = window.getComputedStyle(container);
        return style.display !== "none" && container.clientHeight > 0;
      } catch {
        return false;
      }
    };

    const onMouseDown = (e) => {
      if (!isVisible()) return;
      isDragging = true;
      startY = e.clientY;
      startTop = thumbTop;
      document.body.style.userSelect = "none";
      e.preventDefault();
    };

    const onMouseMove = (e) => {
      if (!isDragging || !isVisible()) return;
      const { clientHeight, scrollHeight } = container;
      const maxThumbTop = 100 - thumbHeight;
      const deltaY = ((e.clientY - startY) / clientHeight) * 100;
      const newTop = Math.min(Math.max(startTop + deltaY, 0), maxThumbTop);

      setThumbTop(newTop);

      const newScrollTop =
        (newTop / maxThumbTop) * (scrollHeight - clientHeight) || 0;
      container.scrollTop = newScrollTop;
    };

    const onMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      document.body.style.userSelect = "auto";
    };

    const onTouchStart = (e) => {
      if (!isVisible()) return;
      isDragging = true;
      startY = e.touches[0].clientY;
      startTop = thumbTop;
    };

    const onTouchMove = (e) => {
      if (!isDragging || !isVisible()) return;
      const { clientHeight, scrollHeight } = container;
      const maxThumbTop = 100 - thumbHeight;
      const deltaY = ((e.touches[0].clientY - startY) / clientHeight) * 100;
      const newTop = Math.min(Math.max(startTop + deltaY, 0), maxThumbTop);

      setThumbTop(newTop);
      const newScrollTop =
        (newTop / maxThumbTop) * (scrollHeight - clientHeight) || 0;
      container.scrollTop = newScrollTop;
      e.preventDefault();
    };

    thumb.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    thumb.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onMouseUp);

    return () => {
      thumb.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);

      thumb.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, [thumbTop, thumbHeight]);

  const CaseStudyItem = ({ title, result, downloads, traffic }) => (
    <div className="flex-shrink-0 w-full sm:w-[320px] md:w-[360px] lg:w-full">
      <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-16 w-full mb-16">
        <div className="w-full lg:w-[380px] flex flex-col">
          <h2 className="text-[20px] sm:text-[22px] md:text-[28px] font-bold text-white mb-3">
            {title}
          </h2>

          <p className="text-[12px] sm:text-[13px] md:text-[16px] text-gray-200 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex items-center justify-between w-full mb-6">
            <div className="text-center flex-1">
              <div className="text-[14px] text-[#9F9F9F]">Result</div>
              <div className="text-[18px] sm:text-[20px] font-medium text-white mb-1">
                {result}
              </div>
              <div className="text-[14px] text-[#9F9F9F]">App downloads</div>
            </div>

            <div className="w-px bg-[#fff] h-[40px] hidden sm:block"></div>

            <div className="text-center flex-1">
              <div className="text-[18px] sm:text-[20px] font-medium text-white mb-1">
                {traffic}
              </div>
              <div className="text-[14px] text-[#9F9F9F]">Monthly Traffic</div>
            </div>
          </div>

          <button className="hidden sm:block w-[150px] h-[38px] text-[14px] hover:border-hidden border border-[#D6D6D6] text-[#D6D6D6] rounded-[5px]  items-center justify-center hover:bg-[linear-gradient(109.77deg,#06F7C4_-5.67%,#4359FF_26.82%)]">
            View Case Study
          </button>
        </div>

        

        <div className="w-full flex items-start justify-center">
          <div className="relative flex w-full">
            <div className="w-full max-w-full lg:max-w-[825px] h-[220px] sm:h-[280px] md:h-[350px] lg:h-[410px] overflow-hidden rounded-[11px] shadow-xl">
              <img
                src="/assets/Rectangle20.png"
                alt={`${title} Case Study`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <button className="md:hidden w-[150px] h-[38px] text-[14px] hover:border-hidden border border-[#D6D6D6] text-[#D6D6D6] rounded-[5px] flex items-center justify-center hover:bg-[linear-gradient(109.77deg,#06F7C4_-5.67%,#4359FF_26.82%)]">
            View Case Study
        </button>
      </div>
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden font-gilroy">
      <div
        className="w-full px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-20 
        bg-[url('/assets/Group_17.png')] 
        md:bg-[url('/assets/bg_casestudy.png')]
        "
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" flex items-center justify-between">
          <img
            src="/assets/CaseStudy.svg"
            alt="Case Study Logo"
            className="h-[20px] w-auto inline-block align-middle"
          />

          <div className="flex gap-2 lg:hidden">
            <button
              onClick={() => scrollHorizontal("left")}
              className="p-2 border-2 border-[#999999] "
            >
              <ChevronLeft className="w-4 h-4 text-[#999999]" />
            </button>
            <button
              onClick={() => scrollHorizontal("right")}
              className="p-2  border-[#999999] border-2"
            >
              <ChevronRight className="w-4 h-4 text-[#999999]" />
            </button>
          </div>
        </div>

        <div className="relative flex">
          <div
            ref={hScrollRef}
            className="flex lg:hidden gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
            aria-label="Case studies carousel"
          >
            {[...Array(TOTAL_ITEMS)].map((_, i) => (
              <div key={i} className="w-full flex-shrink-0 snap-start">
                <CaseStudyItem
                  title={`Microsoft ${i + 1}`}
                  result={`${10 + i}M+`}
                  downloads={`${5 + i}M+`}
                  traffic={`${15 + i}M+`}
                />
              </div>
            ))}
          </div>

          <div className="hidden lg:flex relative flex-1 items-start">
            <div
              ref={vScrollRef}
              className="max-h-[500px] overflow-y-scroll no-scrollbar pr-6 flex-1"
            >
              {[...Array(TOTAL_ITEMS)].map((_, i) => (
                <CaseStudyItem
                  key={i}
                  title={`Microsoft ${i + 1}`}
                  result={`${10 + i}M+`}
                  downloads={`${5 + i}M+`}
                  traffic={`${15 + i}M+`}
                />
              ))}
            </div>

            <div className="absolute right-0 top-0 h-full flex items-start">
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
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
