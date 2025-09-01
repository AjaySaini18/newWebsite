import { useState } from "react";

const services = [
  { title: "AI Chatbot Development", content: "We build intelligent chatbots for customer engagement and automation." },
  { title: "Machine Learning Solutions", content: "Custom ML models tailored to your business needs." },
  { title: "Computer Vision & OCR", content: "Image recognition, OCR, and video analytics solutions." },
  { title: "Natural Language Processing (NLP)", content: "Advanced NLP for sentiment analysis, text classification, and more." },
  { title: "Generative AI", content: "AI solutions powered by generative models for text, images, and beyond." },
];

export default function AIServices() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F8F8F8] py-12 px-12 md:px-16 pt-18 pb-18">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-[700] text-gray-900 mb-6 pt-[-2]">
            Delivering Cutting-Edge AI & ML Development Services
          </h2>

          <div className="space-y-3">
            {services.map((service, index) => (
              <div
                key={index}
                className=" rounded-lg bg-[#EEEEEE]"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-700"
                >
                  {service.title}
                  <span className="ml-2 text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-3 text-gray-600 text-sm">
                    {service.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center ">
          <img
            src="/assets/image 4.svg" // replace with your image path
            alt="AI Services"
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
