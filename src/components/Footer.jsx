import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const socialLinks = {
  github: "https://github.com/SachiinVishwakarma",
  linkedin: "https://www.linkedin.com/in/sachinvishwakarma193",
  instagram: "https://www.instagram.com/sachin_vishw_"
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* About Me */}
        <div>
          <h2 className="text-2xl font-extrabold text-pink-500 mb-4">About Me</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            I am a passionate gamer & developer blending creativity and code to build high-impact, visually dynamic projects. Let's team up and conquer tech quests together!
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-extrabold text-pink-500 mb-4">Contact</h2>
          <a
            href="/contact"
            className="text-gray-300 text-sm hover:text-pink-400 transition duration-300"
          >
            Get in touch →
          </a>
        </div>

        {/* Follow Me */}
        <div>
          <h2 className="text-2xl font-extrabold text-pink-500 mb-4">Follow Me</h2>
          <div className="flex justify-center md:justify-start gap-6 mt-2">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition duration-300"
            >
              <FaGithub size={28} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition duration-300"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition duration-300"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 text-center border-t border-gray-700 pt-6">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} <span className="text-pink-400 font-bold">Sachin Vishwakarma</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
