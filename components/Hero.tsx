'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiReact, SiPhp, SiHtml5, SiGit, SiNodedotjs, SiMongodb, SiCss3, SiJavascript, SiBootstrap } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { HiCube } from 'react-icons/hi';
import { IoHardwareChip } from 'react-icons/io5';
import { FileText, HandHelping, Rocket } from 'lucide-react';
import Image from 'next/image';

const siteBasePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? '';

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
    <section id="home" className="min-h-screen flex items-center justify-center px-3 py-8 md:py-6">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-32 w-60 h-60 bg-primary-500/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-32 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Premium Main Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden backdrop-blur-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.8) 0%, rgba(20, 35, 60, 0.7) 100%)',
            boxShadow: '0 0 60px rgba(14, 165, 233, 0.15), 0 0 120px rgba(139, 92, 246, 0.1), inset 0 0 60px rgba(14, 165, 233, 0.05)',
            border: '1px solid rgba(14, 165, 233, 0.2)',
          }}
        >
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-purple-500/5 pointer-events-none" />

          <div className="relative p-4 md:p-6 lg:p-8">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 gap-4 lg:gap-8 items-center"
            >
              {/* Left Content */}
              <div className="space-y-4 text-left max-w-lg">
                {/* Welcome Badge */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="inline-block"
                >
                  <div className="px-4 py-2 bg-primary-500/15 border border-primary-500/40 rounded-full backdrop-blur-sm">
                    <p className="text-primary-300 text-xs md:text-sm font-semibold tracking-[0.15em] uppercase">
                      <span className="inline-flex items-center gap-2">
                        <HandHelping className="h-4 w-4" />
                        Welcome to my portfolio
                      </span>
                    </p>
                  </div>
                </motion.div>

                {/* Name Section */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                  className="space-y-4"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-[-0.02em]">
                    Kowshik
                    <br />
                    <span className="block mt-1 bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Boggavarapu
                    </span>
                  </h1>
                </motion.div>

                {/* Animated Scrolling Roles */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } },
                  }}
                  className="h-12 md:h-16 flex items-center overflow-hidden"
                >
                  <motion.div
                    animate={{ y: [0, -48, -96, -96] }}
                    transition={{
                      duration: 9,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                    className="flex flex-col gap-0"
                  >
                    <div className="h-12 md:h-16 flex items-center">
                      <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Web Developer
                      </h2>
                    </div>
                    <div className="h-12 md:h-16 flex items-center">
                      <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-primary-400 bg-clip-text text-transparent">
                        Frontend Developer
                      </h2>
                    </div>
                    <div className="h-12 md:h-16 flex items-center">
                      <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 via-primary-400 to-purple-400 bg-clip-text text-transparent">
                        Blockchain Enthusiast
                      </h2>
                    </div>
                    <div className="h-12 md:h-16 flex items-center">
                      <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Web Developer
                      </h2>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Description */}
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
                  }}
                  className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg"
                >
                  I specialize in creating modern, scalable web applications with expertise in frontend development, blockchain technologies, and full-stack solutions. Passionate about building responsive user experiences and exploring decentralized technologies.
                </motion.p>

                {/* Professional Stats */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
                  }}
                  className="grid grid-cols-2 gap-2 pt-2"
                >
                  {[
                    { value: '2+', label: 'Projects' },
                    { value: '2+', label: 'Years' },
                    { value: '3+', label: 'Hackathons' },
                    { value: '88%', label: 'Proficiency' },
                  ].map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ y: -3 }}
                      className="px-2 py-2 bg-gradient-to-br from-dark-800/50 to-dark-900/50 border border-primary-500/20 rounded-lg backdrop-blur-sm text-center"
                    >
                      <div className="text-base md:text-lg font-bold bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
                  }}
                  className="flex flex-wrap gap-3 pt-2"
                >
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(14, 165, 233, 0.6)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2.5 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-xs md:text-sm relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 -translate-x-full group-hover:translate-x-full transition-all duration-700"></span>
                    <span className="relative flex items-center gap-2">
                      <Rocket className="h-4 w-4" />
                      View My Projects
                    </span>
                  </motion.a>
                  <motion.a
                    href={`${siteBasePath}/KOWSHIK_RESUME.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2.5 bg-dark-800/80 backdrop-blur-md border-2 border-primary-500/40 hover:border-primary-500/70 text-gray-300 hover:text-white rounded-lg font-semibold transition-all duration-300 text-xs md:text-sm"
                  >
                    <span className="inline-flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Download Resume
                    </span>
                  </motion.a>
                </motion.div>

                {/* Social Dock */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } },
                  }}
                  className="flex gap-3 pt-3"
                >
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest pt-0">Follow</p>
                  <div className="flex gap-3 pt-4">
                    {[
                      { icon: FaGithub, url: 'https://github.com/kowshikboggavarapu', color: 'hover:border-gray-400' },
                      { icon: FaLinkedin, url: 'https://www.linkedin.com/in/kowshik-boggavarapu', color: 'hover:border-blue-400' },
                      { icon: FaEnvelope, url: 'mailto:kowshikboggavarapu@gmail.com', color: 'hover:border-primary-400' },
                    ].map((social, idx) => (
                      <motion.a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15, y: -5 }}
                        className={`w-11 h-11 flex items-center justify-center rounded-lg bg-gradient-to-br from-dark-700 to-dark-800 backdrop-blur-sm border border-dark-600 ${social.color} text-gray-400 hover:text-white transition-all duration-300 shadow-lg`}
                      >
                        <social.icon className="text-lg" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Content - Avatar and Tech Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex items-center justify-center"
              >
                <div className="relative mx-auto flex h-56 w-full max-w-[18rem] items-center justify-center sm:h-72 sm:max-w-[22rem] md:h-96 md:max-w-xs">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute z-5 h-[180px] w-[180px] rounded-full border-2 border-transparent bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 bg-clip-border sm:h-[240px] sm:w-[240px] md:h-[420px] md:w-[420px]"
                  />

                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    className="absolute z-4 h-[200px] w-[200px] rounded-full border-[1px] border-primary-500/30 opacity-50 sm:h-[260px] sm:w-[260px] md:h-[440px] md:w-[440px]"
                  />

                  <div
                    className="absolute z-10 flex h-[170px] w-[170px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-white to-gray-50 shadow-2xl sm:h-[230px] sm:w-[230px] md:h-[400px] md:w-[400px]"
                    style={{
                      boxShadow: '0 0 60px rgba(139, 92, 246, 0.5), 0 0 120px rgba(59, 130, 246, 0.3), inset 0 0 40px rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={`${siteBasePath}/developer-avatar.png`}
                        alt="Kowshik - Frontend Developer"
                        fill
                        sizes="(max-width: 640px) 170px, (max-width: 768px) 230px, 400px"
                        className="object-cover scale-110"
                        priority
                      />
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                      transition={{ opacity: { delay: 0.5, duration: 0.6 }, scale: { delay: 0.5, duration: 0.6, type: 'spring', bounce: 0.4 }, y: { delay: 0.5, duration: 2.5, repeat: Infinity, ease: 'easeInOut' } }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="absolute top-[-70px] left-1/2 z-20 flex -translate-x-1/2 cursor-pointer items-center gap-2 rounded-full bg-[#61DAFB] px-4 py-2 text-xs font-semibold text-white shadow-lg"
                    >
                      <SiReact className="text-base" /> React
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                      transition={{ opacity: { delay: 0.6, duration: 0.6 }, scale: { delay: 0.6, duration: 0.6, type: 'spring', bounce: 0.4 }, y: { delay: 0.8, duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="absolute top-[-40px] right-[-65px] z-20 flex cursor-pointer items-center gap-2 rounded-full bg-[#777BB4] px-4 py-2 text-xs font-semibold text-white shadow-lg"
                    >
                      <SiPhp className="text-base" /> PHP
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                      transition={{ opacity: { delay: 0.7, duration: 0.6 }, scale: { delay: 0.7, duration: 0.6, type: 'spring', bounce: 0.4 }, y: { delay: 1, duration: 2.8, repeat: Infinity, ease: 'easeInOut' } }}
                      whileHover={{ scale: 1.1 }}
                      className="absolute right-[-85px] top-1/2 z-20 flex -translate-y-1/2 cursor-pointer items-center gap-2 rounded-full bg-[#339933] px-4 py-2 text-xs font-semibold text-white shadow-lg"
                    >
                      <SiNodedotjs className="text-base" /> Node
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                      transition={{ opacity: { delay: 0.75, duration: 0.6 }, scale: { delay: 0.75, duration: 0.6, type: 'spring', bounce: 0.4 }, y: { delay: 0.9, duration: 3.1, repeat: Infinity, ease: 'easeInOut' } }}
                      whileHover={{ scale: 1.1 }}
                      className="absolute bottom-[-40px] right-[-65px] z-20 flex cursor-pointer items-center gap-2 rounded-full bg-[#47A248] px-4 py-2 text-xs font-semibold text-white shadow-lg"
                    >
                      <SiMongodb className="text-base" /> Mongo
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1, y: [0, -11, 0] }}
                      transition={{ opacity: { delay: 0.8, duration: 0.6 }, scale: { delay: 0.8, duration: 0.6, type: 'spring', bounce: 0.4 }, y: { delay: 1.1, duration: 2.7, repeat: Infinity, ease: 'easeInOut' } }}
                      whileHover={{ scale: 1.1 }}
                      className="absolute bottom-[-70px] left-1/2 z-20 flex -translate-x-1/2 cursor-pointer items-center gap-2 rounded-full bg-[#F7DF1E] px-4 py-2 text-xs font-bold text-black shadow-lg"
                    >
                      <SiJavascript className="text-base" /> JavaScript
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1, y: [0, -9, 0] }}
                      transition={{ opacity: { delay: 0.9, duration: 0.6 }, scale: { delay: 0.9, duration: 0.6, type: 'spring', bounce: 0.4 }, y: { delay: 1.3, duration: 3.3, repeat: Infinity, ease: 'easeInOut' } }}
                      whileHover={{ scale: 1.1 }}
                      className="absolute bottom-[-40px] left-[-65px] z-20 flex cursor-pointer items-center gap-2 rounded-full bg-[#7952B3] px-4 py-2 text-xs font-semibold text-white shadow-lg"
                    >
                      <SiBootstrap className="text-base" /> Bootstrap
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                      transition={{ opacity: { delay: 1, duration: 0.6 }, scale: { delay: 1, duration: 0.6, type: 'spring', bounce: 0.4 }, y: { delay: 1.5, duration: 2.8, repeat: Infinity, ease: 'easeInOut' } }}
                      whileHover={{ scale: 1.1 }}
                      className="absolute left-[-85px] top-1/2 z-20 flex -translate-y-1/2 cursor-pointer items-center gap-2 rounded-full bg-[#E34F26] px-4 py-2 text-xs font-semibold text-white shadow-lg"
                    >
                      <SiHtml5 className="text-base" /> HTML
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                      transition={{ opacity: { delay: 1.1, duration: 0.6 }, scale: { delay: 1.1, duration: 0.6, type: 'spring', bounce: 0.4 }, y: { delay: 1.7, duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
                      whileHover={{ scale: 1.1 }}
                      className="absolute top-[-40px] left-[-65px] z-20 flex cursor-pointer items-center gap-2 rounded-full bg-[#F05032] px-4 py-2 text-xs font-semibold text-white shadow-lg"
                    >
                      <SiGit className="text-base" /> Git
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
