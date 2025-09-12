import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = {
  0: [
    {
      question: "What payment solutions can I choose from?",
      answer:
        "Temporibus autem quibusdam et aut officiis debitis autem quibusdam et aut officiis debitis autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae..."
    },
    { question: "Invoice related question?", answer: "Answer for invoice." }
  ],
  1: [
    { question: "How do I find my faculty?", answer: "Faculty info here." },
    { question: "Course related FAQ?", answer: "Answer for course." }
  ],
  2: [
    { question: "How to request a refund?", answer: "Refund process info." },
    { question: "Credit adjustment?", answer: "Credit details here." }
  ],
  3: [
    { question: "How to reach helpdesk?", answer: "Helpdesk info here." },
    { question: "Support timings?", answer: "We are available 24/7." }
  ]
};

const FaqAccordion = ({ activeCategory }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = faqData[activeCategory] || [];

  return (
    <div className="bg-[#F5F6FE] shadow-xs rounded-2xl p-6 space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} onClick={() => setOpenIndex(isOpen ? null : idx)} className="border-b border-[#D0D2E7] last:border-none">
            <button
              className="flex justify-between items-center w-full py-3 text-left text-xl font-semibold cursor-pointer text-gray-900"
            >
              {faq.question}
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform  ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="pb-4 text-gray-600 text-md">{faq.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
