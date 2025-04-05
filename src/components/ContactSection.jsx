import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn, MdSend } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const socialLinks = {
    github: "https://github.com/SachiinVishwakarma",
    linkedin: "https://www.linkedin.com/in/sachin-vishwakarma-907a282a4",
    instagram: "https://www.instagram.com/sachin_vishw_"
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-[#0f0f1c] text-white flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="flex items-center justify-center gap-3 flex-wrap text-4xl md:text-5xl font-extrabold uppercase tracking-widest mb-8 bg-gradient-to-r from-[#ff6a00] to-[#ff00ff] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,102,255,1)]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SiNintendo className="text-pink-500 text-3xl md:text-4xl" />
            Connects
          </motion.div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
            Ready to join forces? Drop your quest details below!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
          {/* Optional left section can go here in future */}

          {/* Right form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:max-w-xl p-8 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-purple-700 shadow-lg"
          >
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent mb-6">
              Send a Message
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="p-3 rounded-md bg-transparent border-2 border-purple-700 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="p-3 rounded-md bg-transparent border-2 border-purple-700 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="md:col-span-2 p-3 rounded-md bg-transparent border-2 border-purple-700 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Message"
                required
                className="md:col-span-2 p-3 rounded-md bg-transparent border-2 border-purple-700 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-pink-500/50 transition"
            >
              SEND MESSAGE <MdSend />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
