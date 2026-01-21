'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-dark-950 border-t border-dark-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Link href="/" className="text-3xl font-bold gradient-text mb-4 inline-block">
              Kowshik.dev
            </Link>
            <p className="text-gray-400 mb-4">
              Full-Stack Developer specializing in web development, blockchain, and modern
              technologies. Building innovative solutions one project at a time.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/kowshikboggavarapu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 hover:bg-primary-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/kowshik-boggavarapu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 hover:bg-primary-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="mailto:kowshikboggavarapu@gmail.com"
                className="w-10 h-10 bg-dark-800 hover:bg-primary-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="font-semibold text-primary-400">Email:</span>
                <br />
                kowshikboggavarapu@gmail.com
              </li>
              <li>
                <span className="font-semibold text-primary-400">Phone:</span>
                <br />
                +91 9381299718
              </li>
              <li>
                <span className="font-semibold text-primary-400">Location:</span>
                <br />
                Vijayawada, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800 pt-8 text-center">
          <p className="text-gray-400 mb-2">
            © {new Date().getFullYear()} Kowshik Boggavarapu. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            Built with Next.js, TypeScript, and Tailwind CSS <FaHeart className="text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
