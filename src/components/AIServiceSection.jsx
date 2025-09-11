import React from "react";
import { motion } from "framer-motion";
import AiServiceCard from "./AiServiceCard";

const services = [
  {
    icon : "/assets/natural-language-processing 1.svg",
    title: "AI/ML App & Software Development",
    description:
      "Integrate the game-changing abilities of AI and machine learning into your applications through our AI/ML App & Software Development services. Whether you're creating a new app or improving existing ones, our expertise guarantees that your software is enriched with smart features.",
  },
  {
    icon: "/assets/natural-language-processing (1) 1.svg",
    title: "Custom AI Development",
    description:
      "Each business is special, and our Custom AI Development services are crafted to tackle your unique challenges. From idea to execution, our team works with you to grasp your goals and provides personalized AI solutions that perfectly match your business objectives.",
  },
  {
    icon: "/assets/ai-assistant 1.svg",
    title: "AI Consultation",
    description:
      "Our experts provide strategic guidance for integrating AI into your business processes. Whether you're exploring AI possibilities or refining existing implementations, our consultations empower you to make informed decisions for success.",
  },
  {
    icon: "/assets/data 1.svg",
    title: "Data Analysis",
    description:
      "Our AI-driven solutions don't just skim the surface; they dive deep into patterns and trends, giving you a thorough understanding. Whether you want to improve how things work, make customers happier, or use data for decisions, our services help you create smart strategies.",
  },
  {
    icon: "/assets/enterprise 1.svg",
    title: "Enterprise AI Development",
    description:
      "Boost your business with our Enterprise AI Development services. We're experts in creating AI solutions that work well for big organizations. Whether it's making work smoother or improving how you talk to customers.",
  },
  {
    icon: "/assets/analysis (2) 1.svg",
    title: "AI-as-a-Service (AIaaS)",
    description:
      "We transform businesses using the amazing powers of AI whenever they need it. Whether you're a startup wanting to make your apps smart or an enterprise looking for scalable AI solutions.",
  },
];

// Motion variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AiServiceSection = () => {
  return (
    <section className="py-20 bg-white font-gilroy">
      <div className="container max-w-full mx-auto px-6 sm:px-12 lg:px-24">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-semibold text-left text-gray-800 mb-12 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Providing Different Artificial Intelligence Development Services
        </motion.h2>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, i) => (
            <motion.div key={i} variants={cardVariants}>
              <AiServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AiServiceSection;
