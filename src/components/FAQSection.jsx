import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ faq, isOpen, onClick }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <motion.div
      className="bg-[#EEEEEE] rounded-md shadow-sm overflow-hidden"
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
    >
      {/* Question */}
      <button
        className="w-full flex justify-between items-center text-left px-6 py-4 text-gray-800 font-medium focus:outline-none"
        onClick={onClick}
      >
        <span>{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" />
        )}
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div ref={ref} className="px-6 pb-4 text-gray-600 text-sm">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = ({ heading, faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-8 font-gilroy">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {heading}
        </motion.h2>

        {/* Accordion */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
