import React, { useEffect, useState } from "react";
import logo from "/logo.png";

const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-20 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
        <a
          href="#home"
          className="flex items-center space-x-2 text-white"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" width={30} height={30} />
          <p className="text-lg font-bold">Sachin Vishwakarma</p>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                onClick={() => setActive(nav.title)}
                className={`group relative text-white text-lg font-medium transition-all duration-300 ${active === nav.title ? "text-[#915EFF]" : ""
                  }`}
              >
                {nav.title}
                <span className="absolute left-0 -bottom-1 h-[5px] w-0 bg-[#915EFF] transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-white text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-transform duration-500 transform ${toggle ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        {navLinks.map((nav) => (
          <a
            key={nav.id}
            href={`#${nav.id}`}
            onClick={() => {
              setToggle(false);
              setActive(nav.title);
            }}
            className={`group relative text-white text-2xl font-semibold hover:text-[#915EFF] transition-all duration-300 ${active === nav.title ? "text-[#915EFF]" : ""
              }`}
          >
            {nav.title}
            <span className="absolute left-0 -bottom-1 h-[5px] w-full bg-[#915EFF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out rounded-full"></span>
          </a>

        ))}
      </div>
    </nav>
  );
};

export default Navbar;
