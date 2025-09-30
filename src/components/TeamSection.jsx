import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  { id: 1, name: "Nimesh Dutta", role: "Founder & CEO", desc: "Designing intuitive user experiences and collaborative UX, as co-founder/mentor", img: "/assets/profile-1.jpg" },
  { id: 2, name: "Nimesh Dutta", role: "Co-Founder & VP", desc: "Collaborating and co-leading multiple successful design and product projects", img: "/assets/profile-2.jpg" },
  { id: 3, name: "Nimesh Dutta", role: "Product Manager", desc: "Managing product roadmap and cross-functional teams, mentor & advisor", img: "/assets/profile-3.jpg" },
  { id: 4, name: "Nimesh Dutta", role: "ML Developer", desc: "Working on AI & ML development and mentoring junior developers", img: "/assets/profile-4.jpg" },
  { id: 5, name: "Ron Raymond", role: "Frontend Developer", desc: "Building responsive web applications with React & modern UI frameworks", img: "/assets/profile-5.jpg" },
  { id: 6, name: "Namya Sharma", role: "Backend Engineer", desc: "Developing scalable backend systems, database management, and APIs", img: "/assets/profile-6.jpg" },
  { id: 7, name: "S. Shubhanker", role: "UI/UX Designer", desc: "Creating engaging and accessible digital experiences across platforms", img: "/assets/profile-7.jpg" },
  { id: 8, name: "Sidney Mores", role: "Frontend Developer", desc: "Specializing in modern frontend development with React & TypeScript", img: "/assets/profile-8.jpg" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const TeamSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 font-gilroy">
      {/* Heading */}
      <motion.div 
        className="text-left  md:text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="text-left md:text-center 2xl:text-5xl text-2xl md:text-3xl lg:text-4xl font-bold mt-10 lg:mt-25 text-gray-900" variants={fadeUp}>
          Meet our great Team
        </motion.h2>
        <motion.p className="text-[#5C5C5C] mt-1 2xl:text-lg font-medium text-[14px] max-w-[600px] mx-auto" variants={fadeUp}>
          We’re here to answer your questions, discuss your project, and help you
          find the best solutions for your software needs.
        </motion.p>
      </motion.div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {teamMembers.map((member, index) => (
          <motion.div 
            key={member.id} 
            className="flex flex-col items-start w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-auto object-cover rounded-2xl mb-2"
            />
            <h3 className="text-xl font-bold text-[#282828]">{member.name}</h3>
            <p className="text-md font-semibold text-[#282828]">{member.role}</p>
            <p className="text-[14px] font-semibold text-gray-600 mt-1">{member.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div 
        className="text-center flex flex-col justify-center items-center mt-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className="text-3xl md:text-4xl 2xl:max-w-[750px] max-w-[700px] font-semibold text-[#282828] mb-6 leading-[1.2]">
          Be part of our outstanding team and help shape the future together.
        </h3>
        <button className="px-8 py-4 2xl:text-xl bg-[#4359FF] hover:bg-indigo-700 text-white rounded-md font-medium transition">
          Join our Team
        </button>
      </motion.div>
    </section>
  );
};

export default TeamSection;
