import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Code, Devices, Brush, Psychology } from "@mui/icons-material";
import Tech from "./Tech";
import Experience from "./Experience";

const services = [
  {
    icon: <Code className="text-white text-[40px] drop-shadow-glow" />,
    title: "Web Development",
    description:
      "Creating responsive and dynamic web applications using React, Node.js, and modern JavaScript frameworks.",
  },
  {
    icon: <Devices className="text-white text-[40px] drop-shadow-glow" />,
    title: "Mobile Solutions",
    description:
      "Developing cross-platform mobile applications with React Native that work seamlessly across iOS and Android devices.",
  },
  {
    icon: <Brush className="text-white text-[40px] drop-shadow-glow" />,
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces with a focus on user experience, using tools like Figma and Adobe XD.",
  },
  {
    icon: <Psychology className="text-white text-[40px] drop-shadow-glow" />,
    title: "Problem Solving",
    description:
      "Approaching complex challenges with analytical thinking and creative solutions to deliver optimal results.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="text-center px-5 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* 🔥 Animated Gradient Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold uppercase text-center tracking-widest mb-16 bg-gradient-to-r from-[#ff6a00] to-[#ff00ff] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,102,255,1)] relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Introduction
          <span className="block h-1 w-32 bg-[#ff3cac] mx-auto mt-3 rounded-full" />
        </motion.h2>

        <motion.p
          className="text-white text-lg max-w-3xl mx-auto mb-10 font-inter leading-relaxed text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          I’m a passionate software developer with strong experience in TypeScript and JavaScript,
          specializing in frameworks like React, Node.js, and Express.js. I love turning ideas into real-world
          solutions that are scalable, user-friendly, and efficient. With a quick-learning mindset and a
          collaborative spirit, I'm always ready to tackle new challenges and bring projects to life. Let's
          build something great together!
        </motion.p>
    
      </motion.div>

      <div className="flex flex-wrap justify-center gap-5 pb-2 relative">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-[90%] sm:w-[45%] md:w-[320px] mt-8 transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <Tilt>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="bg-gradient-to-br from-[#2b1055] to-[#6e45e2] rounded-[20px] p-5 text-white min-h-[250px] text-center shadow-[0_0_10px_#6e45e2,0_0_20px_#915eff,0_0_30px_rgba(145,94,255,0.5)] hover:scale-110 hover:shadow-[0_0_15px_#6e45e2,0_0_25px_#915eff,0_0_35px_rgba(145,94,255,0.8)] transition-all duration-300 ease-in-out"
              >
                {service.icon}
                <h3 className="text-xl sm:text-2xl font-bold mt-3 drop-shadow-glow">
                  {service.title}
                </h3>
                <p className="text-base mt-2">{service.description}</p>
              </motion.div>
            </Tilt>
          </div>
        ))}
      </div>

      <Tech />
      <Experience />
    </section>
  );
};

export default AboutSection;
