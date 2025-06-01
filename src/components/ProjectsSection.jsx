import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaGamepad } from 'react-icons/fa';

const TabsComponent = ({ tab, setTab }) => {
  const tabs = [
    { label: 'All Quests', id: 0 },
    { label: 'Web Campaigns', id: 1 },
    { label: 'Mobile Adventures', id: 2 },
    { label: 'Research', id: 3 },
  ];

  return (
    <div className="w-full overflow-x-auto no-scrollbar">
      <div className="flex gap-3 p-2 bg-white/5 rounded-xl shadow-inner backdrop-blur-md justify-center flex-wrap">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 
              ${tab === t.id
                ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                : 'text-gray-300 hover:bg-white/10'}`}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 * index }}
    className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/10 hover:-translate-y-2 transition duration-300 flex flex-col"
  >
    <div className="relative">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover brightness-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#14142b]" />
      <span
        className="absolute top-4 right-4 px-2 py-1 text-xs font-bold rounded border text-white"
        style={{ borderColor: project.gradient.start, color: project.gradient.start }}
      >
        {project.category.toUpperCase()}
      </span>
    </div>
    <div className="p-4 flex-1">
      <h3
        className="text-xl font-bold mb-2 bg-clip-text text-transparent"
        style={{ backgroundImage: `linear-gradient(45deg, ${project.gradient.start}, ${project.gradient.end})` }}
      >
        {project.title}
      </h3>
      <p className="text-sm text-gray-300 mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="text-xs px-2 py-1 border rounded border-white/10 text-pink-400 bg-white/5">
            {tech}
          </span>
        ))}
      </div>
    </div>
    <div className="p-4 pt-0 flex gap-40">
      {project.sourceCodeLink && (
        <motion.a
          href={project.sourceCodeLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md relative overflow-hidden"
        >
          <FaGithub /> View
        </motion.a>
      )}

      {project.liveLink && (
        <motion.a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-md relative overflow-hidden"
        >
          🚀 Visit
        </motion.a>
      )}
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  const [tab, setTab] = useState(0);

  const projects = [
    {
      title: "Funfinity",
      description: "Funfinity is a vibrant game hub...",
      technologies: ["React", "Vite", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
      category: "web",
      gradient: { start: "#FF7E5F", end: "#FEB47B" },
      shadowColor: "255, 126, 95",
      sourceCodeLink: "https://github.com/SachiinVishwakarma/GameHub.git",
      liveLink: "https://fun-finity.vercel.app",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshEJ3YrLSxbWOf7563r7I3na3arHXjnDkBw&s",
    },
    {
      title: "Academic ERP",
      description: "An all-in-one Student Management system...",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT Authentication"],
      category: "web",
      gradient: { start: "#FF3CAC", end: "#784BA0" },
      image: "https://cdn.libsys.co.in/fetch/15/1/CONTENT/BACKGROUND/Academic%20Campus%20ERP_1683790130843.jpg", // <-- New image path
    },
    {
      title: "Research on Common Sense Knowledge",
      description: "A research project focused on common sense reasoning in AI.",
      technologies: ["Python", "Machine Learning", "NLP", "TensorFlow", "Data Analysis"],
      category: "research",
      gradient: { start: "#4E65FF", end: "#92EFFD" },
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMheEmdQGdDgE3tIsZHc1dHCq-ayxrKEmzXQ&s", // <-- New image path
    },
  ];


  const filteredProjects =
    tab === 0
      ? projects
      : projects.filter((p) => {
        if (tab === 1) return p.category === 'web';
        if (tab === 2) return p.category === 'mobile';
        if (tab === 3) return p.category === 'research';
        return true;
      });

  return (
    <section id="projects" className="py-16 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <motion.div
            className="flex items-center justify-center gap-3 flex-wrap text-4xl md:text-5xl font-extrabold uppercase tracking-widest mb-8 bg-gradient-to-r from-[#ff6a00] to-[#ff00ff] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,102,255,1)]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaGamepad className="text-pink-500 text-3xl md:text-4xl" />
            Projects
          </motion.div>
          <span className="block h-1 w-32 bg-[#ff3cac] mx-auto mt-3 rounded-full" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Explore my latest quests and research that push the boundaries of knowledge and technology!
          </p>
        </motion.div>

        <TabsComponent tab={tab} setTab={setTab} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
