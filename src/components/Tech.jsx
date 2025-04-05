import React from "react";
import { motion } from "framer-motion";
import javascript from "../assets/tech/javascript.png";
import typescript from "../assets/tech/typescript.png";
import html from "../assets/tech/html.png";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import tailwind from "../assets/tech/tailwind.png";
import css from "../assets/tech/css.png";
import mongodb from "../assets/tech/mongodb.png";
import threejs from "../assets/tech/threejs.svg";
import git from "../assets/tech/git.png";
import figma from "../assets/tech/figma.png";
import nodejs from "../assets/tech/nodejs.png";

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
];

const Tech = () => {
  return (
    <div className="mt-16 px-4">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold uppercase text-center tracking-widest mb-16 bg-gradient-to-r from-[#ff6a00] to-[#ff00ff] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,102,255,1)]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tech Stack
        <span className="block h-1 w-32 bg-[#ff3cac] mx-auto mt-3 rounded-full" />
      </motion.h2>

      <p className="text-center text-gray-300 max-w-xl mx-auto mb-10 text-xl md:text-2xl leading-relaxed">
        Here are the technologies I specialize in, from front-end development to back-end solutions.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 px-4">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="w-full h-[120px] md:h-[140px] flex flex-col justify-center items-center rounded-full bg-gradient-to-br from-[#1e1e2f] to-[#282841] shadow-[0_8px_16px_rgba(145,94,255,0.4),_0_0_10px_rgba(145,94,255,0.5)] hover:scale-110 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(145,94,255,0.8),_0_0_15px_rgba(145,94,255,0.7)] transition-all duration-300 relative cursor-pointer overflow-hidden"
          >
            <div className="w-[55px] h-[55px] md:w-[65px] md:h-[65px] rounded-full bg-gradient-to-br from-[#202040] to-[#373767] flex justify-center items-center mb-3 shadow-inner shadow-black/30 hover:rotate-12 transition-transform duration-300">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-contain"
              />
            </div>
            <div className="absolute bottom-2 px-3 py-1 bg-gradient-to-r from-[#915eff] to-[#6e45e2] text-white text-xs font-bold rounded-full shadow-md">
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
