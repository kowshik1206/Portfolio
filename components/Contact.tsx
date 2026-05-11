'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCheck } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [copySuccess, setCopySuccess] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('kowshikboggavarapu@gmail.com');
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormSuccess(false), 3000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'kowshikboggavarapu@gmail.com',
      href: 'mailto:kowshikboggavarapu@gmail.com',
      color: 'from-blue-500 to-cyan-500',
      action: 'copy',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 9381299718',
      href: 'tel:+919381299718',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Vijayawada, India',
      href: '#',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
            <FaEnvelope className="text-blue-400" />
            <span className="text-blue-400 text-sm font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl border border-dark-700/50 group-hover:border-blue-500/30 rounded-3xl p-8 transition-all duration-300 shadow-xl group-hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 hover:border-blue-500/30 focus:border-blue-500/50 rounded-xl text-white focus:outline-none transition-all duration-300"
                    required
                    placeholder="Your name"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 hover:border-blue-500/30 focus:border-blue-500/50 rounded-xl text-white focus:outline-none transition-all duration-300"
                    required
                    placeholder="your@email.com"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600 hover:border-blue-500/30 focus:border-blue-500/50 rounded-xl text-white focus:outline-none transition-all duration-300 resize-none"
                    required
                    placeholder="Your message here..."
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(14, 165, 233, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg"
                >
                  {formSuccess ? (
                    <span className="flex items-center justify-center gap-2">
                      <FaCheck /> Message Sent!
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -3 }}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-15 rounded-2xl blur-lg transition-opacity duration-300`}></div>
                    <div className={`relative flex items-center gap-4 bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl border border-dark-700/50 group-hover:border-dark-600 rounded-2xl p-6 transition-all duration-300 shadow-lg group-hover:shadow-xl cursor-pointer`}
                      onClick={info.action === 'copy' ? handleCopyEmail : undefined}
                    >
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <info.icon className="text-white text-xl" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-400 text-sm">{info.title}</p>
                        <p className="text-white font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                          {info.value}
                        </p>
                      </div>
                      {info.action === 'copy' && (
                        <motion.div
                          animate={{ scale: copySuccess ? [1, 1.2, 1] : 1 }}
                          className="text-gray-400 group-hover:text-primary-400 transition-colors"
                        >
                          {copySuccess ? <FaCheck className="text-green-400" /> : null}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl border border-dark-700/50 group-hover:border-purple-500/30 rounded-2xl p-8 transition-all duration-300 shadow-xl group-hover:shadow-2xl">
                <h4 className="text-lg font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">Connect With Me</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="https://www.linkedin.com/in/kowshik-boggavarapu"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3, boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)" }}
                    className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white transition-all duration-300 shadow-lg"
                  >
                    <FaLinkedin className="text-xl" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/kowshikboggavarapu"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3, boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)" }}
                    className="w-12 h-12 bg-gradient-to-br from-purple-600 to-gray-900 rounded-xl flex items-center justify-center text-white transition-all duration-300 shadow-lg"
                  >
                    <FaGithub className="text-xl" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ y: -3 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-xl border border-green-500/30 group-hover:border-green-500/50 rounded-2xl p-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <motion.div 
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  <h4 className="text-lg font-bold text-white">Available for Work</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Open to freelance projects and full-time opportunities
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
