import React from "react";
import { Search, ChevronDown } from "lucide-react";
import JobCard from "./JobCard";
import { motion } from "framer-motion";

const JobsSection = () => {
  const jobs = [
    {
      title: "Full-Stack Developer",
      posted: "2 days ago",
      openings: 1,
      description:
        "We’re looking for a talented Full-Stack Developer to join our team and help build scalable, high-quality web applications.",
      type: "Full-time position",
      salary: "90k – 120k",
      experience: "10 – 12 Years",
      location: "On-site, Atlanta",
      locationType: "onsite",
    },
    {
      title: "Digital Marketing Manager",
      posted: "2 days ago",
      openings: 1,
      description:
        "We’re looking for a talented Full-Stack Developer to join our team and help build scalable, high-quality web applications.",
      type: "Full-time position",
      salary: "90k – 120k",
      experience: "10 – 12 Years",
      location: "Remote, Asia",
      locationType: "remote",
    },
    {
      title: "Sr. Project Manager",
      posted: "2 days ago",
      openings: 1,
      description:
        "We’re looking for a talented Full-Stack Developer to join our team and help build scalable, high-quality web applications.",
      type: "Full-time position",
      salary: "90k – 120k",
      experience: "10 – 12 Years",
      location: "On-site, Atlanta",
      locationType: "onsite",
    },
    {
      title: "AI ML Developer",
      posted: "2 days ago",
      openings: 1,
      description:
        "We’re looking for a talented Full-Stack Developer to join our team and help build scalable, high-quality web applications.",
      type: "Full-time position",
      salary: "90k – 120k",
      experience: "10 – 12 Years",
      location: "On-site, Atlanta",
      locationType: "onsite",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative mt-16 bg-white py-12 px-6 md:px-12 lg:px-24 font-gilroy">
      {/* Circle vector at top right */}
      <img
        src="/assets/Ellipse 2.svg"
        alt="circle"
        className="absolute -mt-12 top-0 right-0 w-28 md:w-40 opacity-85 pointer-events-none"
      />

      {/* Heading */}
      <motion.div
        className="text-center md:text-left max-w-3xl mb-8 md:mb-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="sm:text-xl md:text-2xl lg:text-4xl font-semibold text-gray-900 leading-relaxed"
          variants={fadeUp}
          custom={1}
        >
          We are embarking on profound mission
        </motion.h2>
        <motion.p
          className="text-[#5C5C5C] text-sm lg:text-[15px] leading-normal tracking-tight max-w-lg  mx-auto md:mx-0 mt-2"
          variants={fadeUp}
          custom={2}
        >
          We’re here to answer your questions, discuss your project, and help
          you find the best solutions for your software needs.
        </motion.p>
      </motion.div>

      {/* Filters */}
      <motion.div
        className="flex flex-wrap gap-3 mb-8 md:mb-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="relative flex-1 min-w-[200px]" variants={fadeUp} custom={1}>
          <input
            type="text"
            placeholder="Search for a job"
            className="w-full placeholder-[#939393] pl-4 pr-8 py-3 text-sm md:text-sm bg-[#F6FAFD] border border-[#E5EEF5] rounded-full focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        </motion.div>

        <motion.div className="relative flex-1 min-w-[150px]" variants={fadeUp} custom={2}>
          <select className="appearance-none w-full text-sm text-[#939393] px-4 py-3 pr-10 bg-[#F6FAFD] border border-[#E5EEF5] rounded-full focus:outline-none focus:ring-1 focus:ring-gray-300">
            <option value="">Location</option>
          </select>
          <ChevronDown className="absolute text-[#939393] right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
        </motion.div>

        <motion.div className="relative flex-1 min-w-[150px]" variants={fadeUp} custom={3}>
          <select className="appearance-none w-full text-sm text-[#939393] px-4 py-3 pr-10 bg-[#F6FAFD] border border-[#E5EEF5] rounded-full focus:outline-none focus:ring-1 focus:ring-gray-300">
            <option value="">Budget Range</option>
          </select>
          <ChevronDown className="absolute text-[#939393] right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
        </motion.div>

        <motion.div className="flex items-center justify-center md:justify-start w-full md:w-auto mt-2 md:mt-0 bg-[#F6FAFD] border border-[#E5EEF5] rounded-full px-1.5 py-1" variants={fadeUp} custom={4}>
          {["All", "Finance", "Business", "Development", "Design"].map((filter, idx) => (
            <button
              key={idx}
              className={`px-3 md:px-5 py-2 md:py-3 text-xs md:text-sm font-medium rounded-full transition-all ${
                filter === "All"
                  ? "bg-white text-gray-900 shadow-xs"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>
      </motion.div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={idx + 1}
          >
            <JobCard {...job} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JobsSection;
