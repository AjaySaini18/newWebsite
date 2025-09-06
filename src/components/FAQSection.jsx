import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // <-- added

const faqs = [
  {
    question:
      "Is AI development only for large enterprises, or can small businesses benefit as well?",
    answer:
      "AI development can benefit businesses of all sizes. Small businesses can leverage AI to automate tasks, enhance customer experiences, and improve efficiency without requiring enterprise-level resources.",
  },
  {
    question: "How much does it cost to develop an AI app?",
    answer:
      "The cost varies based on complexity, features, and integrations. Small-scale AI solutions can be affordable, while enterprise-level applications may require larger investments.",
  },
  {
    question: "What industries can benefit from AI development services?",
    answer:
      "Industries like healthcare, finance, retail, logistics, real estate, manufacturing, and education can all benefit from AI applications.",
  },
  {
    question: "How long does the AI development process typically take?",
    answer:
      "Development timelines depend on project scope. Simple AI apps may take weeks, while more complex solutions could require several months.",
  },
  {
    question: "How does AI ML matter to modern business?",
    answer:
      "AI and ML help businesses make data-driven decisions, enhance customer personalization, reduce operational costs, and gain a competitive edge.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-gilroy">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          FAQs Related to AI Application Development
        </motion.h2>

        {/* Accordion */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-[#EEEEEE] rounded-md shadow-sm overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <button
                className="w-full flex justify-between items-center text-left px-6 py-4 text-gray-800 font-medium focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" />
                )}
              </button>

              {/* AnimatePresence for smooth open/close */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    className="px-6 pb-4 text-gray-600 text-sm"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
