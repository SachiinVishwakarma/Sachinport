import React from "react";
import Type from "./Type.jsx";
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
import DownloadIcon from "@mui/icons-material/Download";
import coding from '/me.jpg'
const socialLinks = {
  github: "https://github.com/SachiinVishwakarma",
  linkedin: "https://www.linkedin.com/in/sachinvishwakarma193",
  instagram: "https://www.instagram.com/sachin_vishw_"
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
    <section className="w-full min-h-screen flex items-center justify-center px-4 bg-fixed bg-cover bg-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl w-full gap-14">

        {/* Left Side */}
        <div className="text-white text-center md:text-left flex-1">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-[#915EFF]">Sachin</span>
          </h1>
          <p className="text-5xl md:text-5xl mb-6 text-blue-400">
            <Type />
          </p>


          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold uppercase tracking-wide rounded-lg shadow-lg hover:from-green-500 hover:to-green-700 transform hover:scale-105 transition-all duration-300"
          >
            <DownloadIcon className="mr-2" /> Resume
          </button>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-300 mb-2">Available On</h2>
            <div className="flex justify-center md:justify-start gap-4">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-800 hover:scale-110 transition">
                <GitHub className="text-white" />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-600 hover:scale-110 transition">
                <LinkedIn className="text-white" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-pink-600 hover:scale-110 transition">
                <Instagram className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center">
          <img
            src={coding}
            alt="Coding"
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>



      </div>
    </section>
  );
};

export default Home;
