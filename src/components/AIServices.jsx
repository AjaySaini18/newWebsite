import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // <-- install lucide-react

const services = [
  { title: "AI Chatbot Development", content: "We build intelligent chatbots for customer engagement and automation." },
  { title: "Machine Learning Solutions", content: "Custom ML models tailored to your business needs." },
  { title: "Computer Vision & OCR", content: "Image recognition, OCR, and video analytics solutions." },
  { title: "Natural Language Processing (NLP)", content: "Advanced NLP for sentiment analysis, text classification, and more." },
  { title: "Generative AI", content: "AI solutions powered by generative models for text, images, and beyond." },
  { title: "Generative AI", content: "AI solutions powered by generative models for text, images, and beyond." },
  { title: "Generative AI", content: "AI solutions powered by generative models for text, images, and beyond." },
  { title: "Generative AI", content: "AI solutions powered by generative models for text, images, and beyond." },
  { title: "Generative AI", content: "AI solutions powered by generative models for text, images, and beyond." },
  { title: "Generative AI", content: "AI solutions powered by generative models for text, images, and beyond." },
  { title: "Generative AI", content: "AI solutions powered by generative models for text, images, and beyond." },
  { title: "Generative AI", content: "AI solutions powered by generative models for text, images, and beyond." },
];

export default function AIServices() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F8F8F8] py-10 px-4 sm:px-8 md:px-12 lg:px-24 font-figtree">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <h2 className="lg:text-3xl sm:text-lg md:text-2xl font-[700] text-gray-900 mb-6 leading-snug">
            Delivering Cutting-Edge AI & ML Development Services
          </h2>

          {/* Scrollable Accordion */}
<div
  className="space-y-3 overflow-y-auto pr-2 custom-scroll
             max-h-[300px]       /* fallback for very small screens */
             sm:max-h-[300px]
             md:max-h-[224px]    /* iPad mini → 4 items */
             lg:max-h-[280px]"   /* Full screen → 5 items */
>
  {services.map((service, index) => (
    <div
      key={index}
      className="rounded-lg bg-[#EEEEEE] w-full md:max-w-[480px]"
    >
      <button
        onClick={() => toggleAccordion(index)}
        className="w-full flex justify-between items-center px-4 py-3 text-left text-[#282828]"
      >
        <span className="text-sm sm:text-base">{service.title}</span>
        <span className="ml-2 text-xl">
          {openIndex === index ? (
            <ChevronUp className="w-5 h-5 text-gray-700" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-700" />
          )}
        </span>
      </button>
      {openIndex === index && (
        <div className="px-4 pb-3 text-gray-600 text-xs sm:text-sm">
          {service.content}
        </div>
      )}
    </div>
  ))}
</div>

        </div>

        {/* Right Section */}
        <div className="flex justify-center mt-8 md:mt-0">
          <img
            src="/assets/image 4.svg" // replace with your image path
            alt="AI Services"
            className="rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
