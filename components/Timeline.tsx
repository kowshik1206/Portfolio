'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaLaptopCode, FaServer, FaRocket, FaAward, FaCalendar } from 'react-icons/fa';
import { HiSparkles, HiLightningBolt } from 'react-icons/hi';

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineData = [
    {
      year: '2025',
      type: 'IOT',
      title: 'IoT Cattle Tracking System',
      description: 'Real-time GPS tracking system with LoRa communication for livestock monitoring developed for KBN CodeSpark Hackathon 2025.',
      technologies: ['Arduino', 'ESP32', 'LoRa', 'GPS', 'IoT'],
      icon: FaRocket,
      color: 'from-cyan-500 to-blue-500',
      bgGlow: 'shadow-cyan-500/20',
      achievement: 'Built in 24 hours',
    },
    {
      year: '2024',
      type: 'WEB',
      title: 'Full-Stack Web Projects',
      description: 'Developed multiple responsive web applications using React, Next.js, PHP, and MySQL with modern design patterns.',
      technologies: ['React', 'Next.js', 'PHP', 'MySQL', 'Tailwind'],
      icon: FaLaptopCode,
      color: 'from-purple-500 to-pink-500',
      bgGlow: 'shadow-purple-500/20',
      achievement: '5+ live projects',
    },
    {
      year: '2024',
      type: 'BLOCKCHAIN',
      title: 'Blockchain Exploration',
      description: 'Learned Move programming and cryptocurrency wallet integration through Aptos & Algorand Hackathons.',
      technologies: ['Aptos Move', 'Algorand', 'Web3', 'Smart Contracts'],
      icon: FaServer,
      color: 'from-orange-500 to-red-500',
      bgGlow: 'shadow-orange-500/20',
      achievement: 'Web3 Pioneer',
    },
    {
      year: '2023',
      type: 'WEB',
      title: 'Career Guidance Platform',
      description: 'Built comprehensive educational platform with AI-based recommendations and career analytics.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap'],
      icon: FaCode,
      color: 'from-green-500 to-emerald-500',
      bgGlow: 'shadow-green-500/20',
      achievement: '500+ users',
    },
  ];

  return (
    <section id="timeline" className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/5 to-transparent"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-4">
            <HiSparkles className="text-primary-400" />
            <span className="text-primary-400 text-sm font-semibold">My Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Project <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A visual story of innovation, learning, and impact
          </p>
        </motion.div>

        {/* Modern Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Animated Center Line with gradient */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full">
            <motion.div 
              initial={{ height: 0 }}
              animate={inView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-cyan-500 via-purple-500 to-green-500"
            ></motion.div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-24">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="relative"
              >
                <div className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-6 md:gap-8`}>
                  {/* Content Card */}
                  <div className="w-full md:w-5/12">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`group relative bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl border border-dark-700/50 rounded-2xl p-6 md:p-8 hover:border-primary-500/50 transition-all duration-500 shadow-2xl ${item.bgGlow} hover:shadow-3xl`}
                    >
                      {/* Glow effect on hover */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}></div>
                      
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}>
                              <item.icon className="text-white text-xl" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <FaCalendar className="text-primary-400 text-sm" />
                                <span className="text-2xl font-bold gradient-text">{item.year}</span>
                              </div>
                              <span className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.color} text-white shadow-md`}>
                                {item.type}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-purple-400 transition-all duration-300">
                          {item.title}
                        </h3>

                        {/* Achievement Badge */}
                        <div className="flex items-center gap-2 mb-3">
                          <FaAward className="text-yellow-400 text-sm" />
                          <span className="text-yellow-400 text-xs font-semibold">{item.achievement}</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-relaxed mb-5">
                          {item.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={inView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                              whileHover={{ scale: 1.1 }}
                              className={`px-3 py-1.5 bg-gradient-to-r ${item.color} text-white rounded-lg text-xs font-semibold backdrop-blur-sm transition-all duration-300 hover:shadow-lg cursor-default shadow-md`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Corner decoration */}
                      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.color} opacity-5 rounded-bl-full`}></div>
                    </motion.div>
                  </div>

                  {/* Center Animated Node */}
                  <div className="hidden md:flex w-2/12 justify-center relative">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={inView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.2 + 0.3,
                        type: "spring",
                        stiffness: 200
                      }}
                      className="relative"
                    >
                      {/* Outer glow ring */}
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} blur-xl opacity-50`}
                      ></motion.div>
                      
                      {/* Main node */}
                      <div className={`relative w-20 h-20 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-2xl border-4 border-dark-900`}>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <item.icon className="text-white text-3xl" />
                        </motion.div>
                      </div>

                      {/* Connecting line */}
                      {index < timelineData.length - 1 && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={inView ? { height: '120px' } : {}}
                          transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                          className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b ${item.color}`}
                        ></motion.div>
                      )}
                    </motion.div>
                  </div>

                  {/* Empty Space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-24"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Journey <span className="gradient-text">Highlights</span>
            </h3>
            <p className="text-gray-400">Numbers that tell my story</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              { value: '4+', label: 'Projects Completed', icon: '🚀', color: 'from-blue-500 to-cyan-500' },
              { value: '3+', label: 'Hackathons', icon: '🏆', color: 'from-purple-500 to-pink-500' },
              { value: '8+', label: 'Technologies', icon: '⚡', color: 'from-orange-500 to-red-500' },
              { value: '2+', label: 'Years Experience', icon: '📅', color: 'from-green-500 to-emerald-500' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0, rotate: -180 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.4 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl border border-dark-700/50 rounded-2xl p-6 text-center hover:border-primary-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl cursor-default"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs md:text-sm font-medium">{stat.label}</div>
                </div>

                {/* Corner accent */}
                <div className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr ${stat.color} opacity-5 rounded-tr-full`}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
