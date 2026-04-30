import React from "react";
import Type from "./Type.jsx";
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
import DownloadIcon from "@mui/icons-material/Download";
import coding from "/me.png";
import SegmentedCircle from "./RotatingArc.jsx";

const socialLinks = {
  github: "https://github.com/SachiinVishwakarma",
  linkedin: "https://www.linkedin.com/in/sachinvishwakarma193",
  instagram: "https://www.instagram.com/imsachiiin",
};

const Home = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Sachin_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden md:py-20">

      {/* 🔥 Smooth Glow Background */}
      <div className="absolute w-[300px] sm:w-[400px] md:w-[550px] h-[300px] sm:h-[400px] md:h-[550px] bg-purple-500/20 blur-[120px] rounded-full" />

      <div className="relative z-10 flex flex-col items-center">

        {/* 🔹 Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Sachin</span>
        </h1>

        <p className="text-2xl sm:text-3xl md:text-4xl italic font-light text-blue-300 mt-2">
          <Type />
        </p>

        {/* 🔹 Image + Arc Section */}
        <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] mx-auto mt-10">

          <div className="relative flex justify-center items-center">
            <SegmentedCircle imageUrl={coding} />
          </div>


          <div className="absolute top-[25%] left-[-10%] hidden md:block animate-float [animation-delay:0s]">
            <span className="
  px-4 py-2 text-sm
  bg-white/10 backdrop-blur-md
  rounded-full border border-white/20
  text-white cursor-pointer

  transition-all duration-300 ease-out
  hover:scale-110
  hover:-translate-y-1
  hover:bg-purple-500/20
  hover:border-purple-400
  hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]
">UI/UX Design</span>
          </div>

          <div className="absolute top-[25%] right-[-10%] hidden md:block animate-float [animation-delay:0s]">
            <span className="
  px-4 py-2 text-sm
  bg-white/10 backdrop-blur-md
  rounded-full border border-white/20
  text-white cursor-pointer

  transition-all duration-300 ease-out
  hover:scale-110
  hover:-translate-y-1
  hover:bg-purple-500/20
  hover:border-purple-400
  hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]
">React Native</span>
          </div>

          <div className="absolute top-[50%] right-[-20%] hidden md:block animate-float [animation-delay:1.5s]">
            <span className="
  px-4 py-2 text-sm
  bg-white/10 backdrop-blur-md
  rounded-full border border-white/20
  text-white cursor-pointer

  transition-all duration-300 ease-out
  hover:scale-110
  hover:-translate-y-1
  hover:bg-purple-500/20
  hover:border-purple-400
  hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]
">Development</span>
          </div>

          <div className="absolute bottom-[45%] left-[-10%] hidden md:block animate-float [animation-delay:3s]">
            <span className="
  px-4 py-2 text-sm
  bg-white/10 backdrop-blur-md
  rounded-full border border-white/20
  text-white cursor-pointer

  transition-all duration-300 ease-out
  hover:scale-110
  hover:-translate-y-1
  hover:bg-purple-500/20
  hover:border-purple-400
  hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]
">React</span>
          </div>

          <div className="absolute bottom-[25%] left-[-20%] hidden md:block animate-float [animation-delay:4.5s]">
            <span className="
  px-4 py-2 text-sm
  bg-white/10 backdrop-blur-md
  rounded-full border border-white/20
  text-white cursor-pointer

  transition-all duration-300 ease-out
  hover:scale-110
  hover:-translate-y-1
  hover:bg-purple-500/20
  hover:border-purple-400
  hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]
">Node.js</span>
          </div>

          <div className="absolute bottom-[25%] right-[-20%] hidden md:block animate-float [animation-delay:6s]">
            <span className="
  px-4 py-2 text-sm
  bg-white/10 backdrop-blur-md
  rounded-full border border-white/20
  text-white cursor-pointer

  transition-all duration-300 ease-out
  hover:scale-110
  hover:-translate-y-1
  hover:bg-purple-500/20
  hover:border-purple-400
  hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]
">DevOps</span>
          </div>
        </div>

        <div className="mt-0 flex flex-wrap gap-4 justify-center z-10  ">
          <button
            onClick={handleDownloadResume}
            className="px-6 py-2 bg-gradient-to-r from-purple-400 to-green-500 text-white rounded-full shadow-lg hover:scale-105 transition"
          >
            <DownloadIcon className="mr-2" /> Get My Resume
          </button>

          <button
            onClick={() => {
              const element = document.getElementById("projects");
              if (element) {
                const yOffset = -80; // adjust based on navbar height
                const y =
                  element.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;

                window.scrollTo({
                  top: y,
                  behavior: "smooth",
                });
              }
            }}
            className="px-6 py-3 bg-white text-black rounded-full shadow-lg hover:scale-105 transition"
          >
            Discover My Work
          </button>
        </div>

        {/* 🔹 Social Icons */}
        <div className="
  absolute bottom-[0%]
  left-[50%] -translate-x-[50%]

  sm:left-[-20%]
  md:left-[30%]
  lg:left-[-90%]

  flex gap-4 justify-center z-10
">          <a href={socialLinks.github} target="_blank" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition">
            <GitHub />
          </a>
          <a href={socialLinks.linkedin} target="_blank" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition">
            <LinkedIn />
          </a>
          <a href={socialLinks.instagram} target="_blank" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition">
            <Instagram />
          </a>
        </div>


        <div className="
absolute bottom-[0%]
  right-[50%] -translate-x-[-100%]

  sm:right-[-20%]
  md:left-[-60%]
  lg:right-[-70%]

  flex justify-center z-10
  hidden lg:flex flex-col gap-6 text-left z-10
">
          <div>
            <h3 className="text-3xl font-bold text-white">2+</h3>
            <p className="text-gray-400 text-sm">Years Intern Experience</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">10+</h3>
            <p className="text-gray-400 text-sm">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">10+</h3>
            <p className="text-gray-400 text-sm">Technologies</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;