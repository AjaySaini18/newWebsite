// AiServiceSection.jsx
import React from "react";
import { Cpu, Bot, MessageSquare, BarChart, Building2, Network } from "lucide-react"; 
// you can replace icons with your own or from another library
import AiServiceCard from "./AiServiceCard";

const services = [
  {
    icon : "/assets/natural-language-processing 1.svg",
    title: "AI/ML App & Software Development",
    description:
"Integrate the game-changing abilities of AI and machine learning into your applications through our AI/ML App & Software Development services. Whether you're creating a new app or improving existing ones, our expertise guarantees that your software is enriched with smart features, "  },
  {
    icon: "/assets/natural-language-processing (1) 1.svg",
    title: "Custom AI Development",
    description:
"Each business is special, and our Custom AI Development services are crafted to tackle your unique challenges. From idea to execution, our team works with you to grasp your goals and provides personalized AI solutions that perfectly match your business objectives."  },
  {
    icon: "/assets/ai-assistant 1.svg",
    title: "AI Consultation",
    description:
    "Our experts provide strategic guidance for integrating AI into your business processes. Whether you're exploring AI possibilities or refining existing implementations, our consultations empower you to make informed decisions for success."  },
  {
    icon: "/assets/data 1.svg",
    title: "Data Analysis",
    description:
"Our AI-driven solutions don't just skim the surface; they dive deep into patterns and trends, giving you a thorough understanding. Whether you want to improve how things work, make customers happier, or use data for decisions, our services help you create smart strategies."  },
  {
    icon: "/assets/enterprise 1.svg",
    title: "Enterprise AI Development",
    description:
"Boost your business with our Enterprise AI Development services. We're experts in creating AI solutions that work well for big organizations. Whether it's making work smoother or improving how you talk to customers"  },
  {
    icon: "/assets/analysis (2) 1.svg",
    title: "AI-as-a-Service (AIaaS)",
    description:
"We transform businesses using the amazing powers of AI whenever they need it. Whether you're a startup wanting to make your apps smart or an enterprise looking for scalable AI solutions"  }
];

const AiServiceSection = () => {
  return (

    <section className="pt-10 pb-10 bg-white font-figtree">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        {/* Heading */}
        <h2 className="text-[22px] sm:text-3xl md:text-4xl lg:text-[30px] font-bold text-left text-gray-800 mb-12 leading-tight">
          Providing Different Artificial Intelligence Development Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <AiServiceCard
              key={i}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>

  );
};



export default AiServiceSection;
