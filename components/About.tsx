'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      degree: 'Bachelor of Technology',
      field: 'Information Technology',
      institution: 'DVR & DR. HS MIC College of Technology, Kanchikacherla',
      duration: '2022 - 2026',
      grade: 'CGPA: 7.62',
      icon: '🎓',
    },
    {
      degree: 'Intermediate (12th)',
      field: 'Mathematics, Physics, Chemistry',
      institution: 'KBN Shine College',
      duration: '2020 - 2022',
      grade: 'Score: 633/1000',
      icon: '📚',
    },
    {
      degree: 'SSC',
      field: '10th Grade',
      institution: 'Harpers High School',
      duration: '2020',
      grade: 'Score: 997/1000',
      icon: '🎓',
    },
  ];

  const hackathons = [
    {
      name: 'KBN CodeSpark Hackathon 2025',
      project: 'IoT-based Cattle Tracking System',
      description: 'Led team of 3 developers in developing real-time GPS tracking with LoRa communication.',
    },
    {
      name: 'PL Genesis Hackathon 2024',
      project: 'Web3 Project Development',
      description: 'Collaborated on smart contract development and blockchain integration.',
    },
    {
      name: 'Aptos & Algorand Hackathons 2024',
      project: 'Blockchain Exploration',
      description: 'Learned Move programming and cryptocurrency wallet integration.',
    },
  ];

  const strengths = [
    { name: 'Full-Stack Development', level: 90 },
    { name: 'IoT & Hardware', level: 85 },
    { name: 'Blockchain Development', level: 70 },
    { name: 'Problem Solving', level: 95 },
  ];

  const leadership = [
    'AAGAMA 2024 Event Organizer',
    'Hackathon Event Organizer',
    'Team Leadership in Multiple Projects',
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-800/30 to-transparent"></div>
      
      <div className="container mx-auto relative z-10 max-w-7xl" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Passionate full-stack developer with expertise in modern web technologies, IoT systems, and blockchain development
          </p>
        </motion.div>

        {/* Education and Hackathon Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Education Section */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl border border-dark-700/50 hover:border-primary-500/30 rounded-2xl p-8 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">📚</span>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Education</h3>
              </div>
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="border-l-2 border-primary-500/50 hover:border-primary-500 pl-4 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-2 mb-1">
                      <span className="text-primary-400 text-xl">{edu.icon}</span>
                      <div>
                        <h4 className="text-white font-bold text-base">{edu.degree}</h4>
                        <p className="text-primary-300 font-semibold text-sm">{edu.field}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs">{edu.institution}</p>
                    <p className="text-gray-500 text-xs">{edu.duration} | {edu.grade}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hackathon Experience Section */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl border border-dark-700/50 hover:border-purple-500/30 rounded-2xl p-8 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">🏆</span>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Hackathon Experience</h3>
              </div>
              <div className="space-y-5 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                {hackathons.map((hack, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="border-l-2 border-purple-500/50 hover:border-purple-500 pl-4 transition-colors duration-300"
                  >
                    <h4 className="text-purple-300 font-bold text-sm mb-1">{hack.name}</h4>
                    <p className="text-white font-semibold text-sm mb-2">{hack.project}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{hack.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Core Strengths and Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Core Strengths */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl border border-dark-700/50 hover:border-green-500/30 rounded-2xl p-8 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">🎯</span>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Core Strengths</h3>
              </div>
              <div className="space-y-5">
                {strengths.map((strength, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex justify-between mb-3 items-center">
                      <span className="text-white font-semibold text-sm">{strength.name}</span>
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="text-green-400 font-bold text-sm">{strength.level}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-dark-700/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${strength.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg shadow-green-500/50"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Leadership & Contact */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl border border-dark-700/50 hover:border-orange-500/30 rounded-2xl p-8 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">👨‍💼</span>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Leadership & Contact</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold mb-4 text-sm">Leadership Roles</h4>
                  <ul className="space-y-2">
                    {leadership.map((role, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-start gap-2 text-gray-300 text-sm"
                      >
                        <span className="text-orange-400 mt-0.5 font-bold">✦</span>
                        <span>{role}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-dark-700">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-300 text-sm hover:text-orange-300 transition-colors">
                      <FaEnvelope className="text-orange-400" />
                      <span>Email: kowshikboggavarapu@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300 text-sm hover:text-orange-300 transition-colors">
                      <FaMapMarkerAlt className="text-orange-400" />
                      <span>Location: Vijayawada, India</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300 text-sm hover:text-orange-300 transition-colors">
                      <FaPhone className="text-orange-400" />
                      <span>Phone: +91 9381299718</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Cards - Animated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            { value: '5+', label: 'Projects Completed', color: 'from-blue-500 to-cyan-500' },
            { value: '5+', label: 'Hackathons Participated', color: 'from-purple-500 to-pink-500' },
            { value: '8+', label: 'Technologies Explored', color: 'from-green-500 to-emerald-500' },
            { value: '3+', label: 'Years Experience', color: 'from-orange-500 to-red-500' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300`}></div>
              <div className="relative bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl border border-dark-700/50 group-hover:border-dark-600 rounded-2xl p-6 text-center transition-all duration-300 shadow-xl group-hover:shadow-2xl">
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs md:text-sm font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
