'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 border-t border-dark-800 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4 inline-block hover:from-purple-400 hover:via-pink-400 hover:to-purple-500 transition-all duration-300">
              Kowshik.dev
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full-Stack Developer specializing in web development, blockchain, and modern technologies. Building innovative solutions one project at a time.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/kowshikboggavarapu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3, boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)" }}
                className="w-10 h-10 bg-gradient-to-br from-dark-800 to-dark-900 hover:from-purple-700 hover:to-purple-900 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 shadow-lg"
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/kowshik-boggavarapu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3, boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)" }}
                className="w-10 h-10 bg-gradient-to-br from-dark-800 to-dark-900 hover:from-blue-700 hover:to-blue-900 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 shadow-lg"
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
              <motion.a
                href="mailto:kowshikboggavarapu@gmail.com"
                whileHover={{ scale: 1.2, y: -3, boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)" }}
                className="w-10 h-10 bg-gradient-to-br from-dark-800 to-dark-900 hover:from-cyan-700 hover:to-cyan-900 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 shadow-lg"
              >
                <FaEnvelope className="text-xl" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 hover:translate-x-1 transition-all duration-300 inline-block relative group"
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Get In Touch</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="group">
                <span className="font-semibold text-primary-400 block mb-1">Email:</span>
                <a 
                  href="mailto:kowshikboggavarapu@gmail.com"
                  className="hover:text-primary-300 transition-all duration-300 group-hover:translate-x-1 inline-block"
                >
                  kowshikboggavarapu@gmail.com
                </a>
              </li>
              <li className="group">
                <span className="font-semibold text-primary-400 block mb-1">Phone:</span>
                <a 
                  href="tel:+919381299718"
                  className="hover:text-primary-300 transition-all duration-300 group-hover:translate-x-1 inline-block"
                >
                  +91 9381299718
                </a>
              </li>
              <li className="group">
                <span className="font-semibold text-primary-400 block mb-1">Location:</span>
                <span className="text-gray-400">Vijayawada, India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-800"></div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 text-center"
        >
          <p className="text-gray-400 mb-2">
            © {currentYear} Kowshik Boggavarapu. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
            Built with Next.js, TypeScript, and Tailwind CSS <FaHeart className="text-red-500 animate-pulse" />
          </p>
          <p className="text-gray-600 text-xs mt-4">
            Designed & developed with <span className="text-purple-400">passion</span> for creating amazing web experiences
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
