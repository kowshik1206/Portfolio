'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiReact, SiPhp, SiHtml5, SiGit, SiNodedotjs, SiMongodb, SiCss3, SiJavascript, SiBootstrap } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { HiCube } from 'react-icons/hi';
import { IoHardwareChip } from 'react-icons/io5';
import Image from 'next/image';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-6 text-center md:text-left">
            <motion.div variants={itemVariants}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-3 leading-tight">
                Kowshik
                <br />
                <span className="bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Boggavarapu
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-xl md:text-2xl text-white font-bold">
                Full-Stack Developer & Blockchain Enthusiast
              </h2>
              <p className="text-sm md:text-base text-gray-400 font-medium">
                B.Tech IT Student | Building Modern Web Applications
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl"
            >
              Motivated IT student with hands-on experience in frontend and full-stack web development. Skilled in HTML, CSS, JavaScript, React.js, Next.js, TypeScript, AngularJS, PHP, and MySQL. Beginner-level exposure to blockchain technologies including ICP, Aptos Move, and Algorand. Passionate about building responsive, scalable, and user-friendly web solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-primary-500/30 text-sm md:text-base"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-dark-800/80 backdrop-blur-sm border-2 border-dark-700 hover:border-primary-500/50 text-gray-300 hover:text-white rounded-lg font-semibold transition-all duration-300 text-sm md:text-base"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 justify-center md:justify-start pt-2">
              <motion.a
                href="https://github.com/kowshikboggavarapu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-11 h-11 flex items-center justify-center rounded-lg bg-dark-800/80 backdrop-blur-sm border border-dark-700 text-gray-400 hover:text-white hover:border-primary-500/50 hover:bg-dark-700 transition-all duration-300"
              >
                <FaGithub className="text-lg" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/kowshik-boggavarapu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-11 h-11 flex items-center justify-center rounded-lg bg-dark-800/80 backdrop-blur-sm border border-dark-700 text-gray-400 hover:text-white hover:border-primary-500/50 hover:bg-dark-700 transition-all duration-300"
              >
                <FaLinkedin className="text-lg" />
              </motion.a>
              <motion.a
                href="mailto:kowshikboggavarapu@gmail.com"
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-11 h-11 flex items-center justify-center rounded-lg bg-dark-800/80 backdrop-blur-sm border border-dark-700 text-gray-400 hover:text-white hover:border-primary-500/50 hover:bg-dark-700 transition-all duration-300"
              >
                <FaEnvelope className="text-lg" />
              </motion.a>
              <motion.a
                href="tel:+919381299718"
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-11 h-11 flex items-center justify-center rounded-lg bg-dark-800/80 backdrop-blur-sm border border-dark-700 text-gray-400 hover:text-white hover:border-primary-500/50 hover:bg-dark-700 transition-all duration-300"
              >
                <FaPhone className="text-lg" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - 3D Avatar in White Circle with Floating Tech Badges */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg h-[550px] flex items-center justify-center">
              {/* White Circle Background with Neon Glow - Static */}
              <div
                className="absolute w-[360px] h-[360px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-white to-gray-50 rounded-full shadow-2xl flex items-center justify-center overflow-hidden"
                style={{
                  boxShadow: '0 0 50px rgba(139, 92, 246, 0.35), 0 0 90px rgba(59, 130, 246, 0.25)',
                }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/developer-avatar.png"
                    alt="Kowshik - Full Stack Developer"
                    width={400}
                    height={400}
                    className="object-cover scale-110"
                    priority
                  />
                </div>
              </div>

              {/* Floating Tech Badges - Arranged in a circular pattern around avatar */}
              {/* React - Top (12 o'clock) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0]
                }}
                transition={{
                  opacity: { delay: 0.5, duration: 0.6 },
                  scale: { delay: 0.5, duration: 0.6, type: "spring", bounce: 0.4 },
                  y: { delay: 0.5, duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-2 md:px-4 md:py-2 bg-[#61DAFB] text-white rounded-full font-semibold shadow-lg flex items-center gap-2 text-xs cursor-pointer z-10"
              >
                <SiReact className="text-sm md:text-base" /> React
              </motion.div>

              {/* PHP - Top Right (2 o'clock) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -12, 0]
                }}
                transition={{
                  opacity: { delay: 0.6, duration: 0.6 },
                  scale: { delay: 0.6, duration: 0.6, type: "spring", bounce: 0.4 },
                  y: { delay: 0.8, duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="absolute top-[15%] right-[5%] md:right-[8%] px-3 py-2 md:px-4 md:py-2 bg-[#777BB4] text-white rounded-full font-semibold shadow-lg flex items-center gap-2 text-xs cursor-pointer z-10"
              >
                <SiPhp className="text-sm md:text-base" /> PHP
              </motion.div>

              {/* Node.js - Right (3 o'clock) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0]
                }}
                transition={{
                  opacity: { delay: 0.7, duration: 0.6 },
                  scale: { delay: 0.7, duration: 0.6, type: "spring", bounce: 0.4 },
                  y: { delay: 1, duration: 2.8, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.1 }}
                className="absolute right-[-15px] md:right-[-25px] top-1/2 -translate-y-1/2 px-3 py-2 md:px-4 md:py-2 bg-[#339933] text-white rounded-full font-semibold shadow-lg flex items-center gap-2 text-xs cursor-pointer z-10"
              >
                <SiNodedotjs className="text-sm md:text-base" /> Node
              </motion.div>

              {/* MongoDB - Bottom Right (4 o'clock) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0]
                }}
                transition={{
                  opacity: { delay: 0.75, duration: 0.6 },
                  scale: { delay: 0.75, duration: 0.6, type: "spring", bounce: 0.4 },
                  y: { delay: 0.9, duration: 3.1, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.1 }}
                className="absolute right-[5%] md:right-[8%] bottom-[15%] px-3 py-2 md:px-4 md:py-2 bg-[#47A248] text-white rounded-full font-semibold shadow-lg flex items-center gap-2 text-xs cursor-pointer z-10"
              >
                <SiMongodb className="text-sm md:text-base" /> Mongo
              </motion.div>

              {/* JavaScript - Bottom (6 o'clock) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -11, 0]
                }}
                transition={{
                  opacity: { delay: 0.8, duration: 0.6 },
                  scale: { delay: 0.8, duration: 0.6, type: "spring", bounce: 0.4 },
                  y: { delay: 1.1, duration: 2.7, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.1 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 px-3 py-2 md:px-4 md:py-2 bg-[#F7DF1E] text-black rounded-full font-bold shadow-lg flex items-center gap-2 text-xs cursor-pointer z-10"
              >
                <SiJavascript className="text-sm md:text-base" /> JavaScript
              </motion.div>

              {/* Bootstrap - Bottom Left (8 o'clock) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -9, 0]
                }}
                transition={{
                  opacity: { delay: 0.9, duration: 0.6 },
                  scale: { delay: 0.9, duration: 0.6, type: "spring", bounce: 0.4 },
                  y: { delay: 1.3, duration: 3.3, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.1 }}
                className="absolute left-[5%] md:left-[8%] bottom-[15%] px-3 py-2 md:px-4 md:py-2 bg-[#7952B3] text-white rounded-full font-semibold shadow-lg flex items-center gap-2 text-xs cursor-pointer z-10"
              >
                <SiBootstrap className="text-sm md:text-base" /> Bootstrap
              </motion.div>

              {/* HTML - Left (9 o'clock) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0]
                }}
                transition={{
                  opacity: { delay: 1.0, duration: 0.6 },
                  scale: { delay: 1.0, duration: 0.6, type: "spring", bounce: 0.4 },
                  y: { delay: 1.5, duration: 2.8, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.1 }}
                className="absolute left-[-15px] md:left-[-25px] top-1/2 -translate-y-1/2 px-3 py-2 md:px-4 md:py-2 bg-[#E34F26] text-white rounded-full font-semibold shadow-lg flex items-center gap-2 text-xs cursor-pointer z-10"
              >
                <SiHtml5 className="text-sm md:text-base" /> HTML
              </motion.div>

              {/* Git - Top Left (10 o'clock) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -12, 0]
                }}
                transition={{
                  opacity: { delay: 1.1, duration: 0.6 },
                  scale: { delay: 1.1, duration: 0.6, type: "spring", bounce: 0.4 },
                  y: { delay: 1.7, duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.1 }}
                className="absolute left-[5%] md:left-[8%] top-[15%] px-3 py-2 md:px-4 md:py-2 bg-[#F05032] text-white rounded-full font-semibold shadow-lg flex items-center gap-2 text-xs cursor-pointer z-10"
              >
                <SiGit className="text-sm md:text-base" /> Git
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
