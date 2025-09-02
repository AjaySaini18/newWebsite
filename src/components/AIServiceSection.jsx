// AiServiceSection.jsx
import React from "react";
import { Cpu, Bot, MessageSquare, BarChart, Building2, Network } from "lucide-react"; 
// you can replace icons with your own or from another library
import AiServiceCard from "./AiServiceCard";

const services = [
  {
    icon : "/assets/Amazon-Logo-61",
    title: "AI/ML App & Software Development",
    description:
      "Integrate AI and ML into your apps with our development services. From new apps to improving existing ones, we ensure quality results."
  },
  {
    icon: Bot,
    title: "Custom AI Development",
    description:
"Each business is special, and our Custom AI Development services are crafted to tackle your unique challenges. From idea to execution, our team works with you to grasp your goals and provides personalized AI solutions that perfectly match your business objectives."  },
  {
    icon: MessageSquare,
    title: "AI Consultation",
    description:
    "Our experts provide strategic guidance for integrating AI into your business processes. Whether you're exploring AI possibilities or refining existing implementations, our consultations empower you to make informed decisions for success."  },
  {
    icon: BarChart,
    title: "Data Analysis",
    description:
"Our AI-driven solutions don't just skim the surface; they dive deep into patterns and trends, giving you a thorough understanding. Whether you want to improve how things work, make customers happier, or use data for decisions, our services help you create smart strategies."  },
  {
    icon: Building2,
    title: "Enterprise AI Development",
    description:
"Boost your business with our Enterprise AI Development services. We're experts in creating AI solutions that work well for big organizations. Whether it's making work smoother or improving how you talk to customers"  },
  {
    icon: Network,
    title: "AI-as-a-Service (AIaaS)",
    description:
"We transform businesses using the amazing powers of AI whenever they need it. Whether you're a startup wanting to make your apps smart or an enterprise looking for scalable AI solutions"  }
];

const AiServiceSection = () => {
  return (

    <section className="pt-20 pb-10 bg-gray-50 px-24">
      <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-left mb-12">
           Providing Different Artificial Intelligence Development Services
          </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AiServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

        </div>
        
      </div>
    </section>


    // <section className="py-16 px-24 bg-gray-50 font-gilroy">
    //   <div className="max-w-6xl mx-auto ">
    //     <h2 className="text-2xl md:text-3xl font-bold text-left mb-12">
    //       Providing Different Artificial Intelligence Development Services
    //     </h2>
        
          
        
    //   </div>
    // </section>
  );
};

export default AiServiceSection;
