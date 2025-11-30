import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const experiences = [
  {
    company: "Eimple Labs",
    role: "Backend Developer Intern",
    duration: "2K24 - Present",
    description:
      "Designed and optimized RESTful APIs, implemented authentication, and enhanced database performance for scalable applications.",
    icon: <FaCode className="text-white" />,
    iconBg: "#915EFF",
  },
  {
    company: "Eimple Labs",
    role: "Frontend Developer Intern",
    duration: "2K25",
    description:
      "Created a fast, responsive React interface with clean design and smooth interactions.",
    icon: <FaCode className="text-white" />,
    iconBg: "#5308f5ff",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4  text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold uppercase text-center tracking-widest mb-16 bg-gradient-to-r from-[#ff6a00] to-[#ff00ff] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,102,255,1)] relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
          <span className="block h-1 w-32 bg-[#ff3cac] mx-auto mt-3 rounded-full" />
        </motion.h2>

        <VerticalTimeline lineColor="#ff00ff">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background:
                  "linear-gradient(135deg, #1b0036, #4a00e0)",
                color: "#fff",
                boxShadow:
                  "0 0 10px #4a00e0, 0 0 20px #ff00ff, 0 0 30px rgba(255, 0, 255, 0.5)",
                borderRadius: "15px",
              }}
              contentArrowStyle={{ borderRight: "7px solid #915EFF" }}
              date={
                <span className="block md:inline text-red-500 font-bold drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] text-base md:text-lg text-center md:text-left md:-ml-10">
                  {exp.duration}
                </span>
              }



              iconStyle={{
                background: exp.iconBg,
                color: "#fff",
                boxShadow: "0 0 10px #915EFF, 0 0 20px #ff00ff",
              }}
              icon={exp.icon}
            >
              <h3 className="text-2xl font-bold text-[#d7e910] drop-shadow-[0_0_10px_rgba(255,223,0,0.8)]">
                {exp.company}
              </h3>
              <h4 className="text-xl font-semibold mt-2 bg-gradient-to-r from-[#ff9f00] to-[#ff3cac] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,153,102,0.8)]">
                {exp.role}
              </h4>
              <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                {exp.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
