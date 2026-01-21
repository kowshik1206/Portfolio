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
      institution: 'Sri Chaitanya Junior College',
      duration: '2020 - 2022',
      grade: 'Score: 972/1000',
      icon: '📚',
    },
    {
      degree: 'SSC',
      field: '10th Grade',
      institution: 'Sri Chaitanya Techno School',
      duration: '2020',
      grade: 'Score: 998/1000',
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
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          {/* Education Section */}
          <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">📚</span>
              <h3 className="text-2xl font-bold gradient-text">Education</h3>
            </div>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary-500 pl-4">
                  <div className="flex items-start gap-2 mb-1">
                    <span className="text-primary-400 text-xl">{edu.icon}</span>
                    <div>
                      <h4 className="text-white font-bold text-lg">{edu.degree}</h4>
                      <p className="text-primary-400 font-semibold">{edu.field}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.duration} | {edu.grade}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathon Experience Section */}
          <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🏆</span>
              <h3 className="text-2xl font-bold gradient-text">Hackathon Experience</h3>
            </div>
            <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {hackathons.map((hack, index) => (
                <div key={index} className="border-l-2 border-purple-500 pl-4">
                  <h4 className="text-primary-400 font-bold text-lg mb-1">{hack.name}</h4>
                  <p className="text-white font-semibold mb-2">{hack.project}</p>
                  <p className="text-gray-400 text-sm">{hack.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Strengths and Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {/* Core Strengths */}
          <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🎯</span>
              <h3 className="text-2xl font-bold gradient-text">Core Strengths</h3>
            </div>
            <div className="space-y-4">
              {strengths.map((strength, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">{strength.name}</span>
                    <span className="text-primary-400 font-bold">{strength.level}%</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${strength.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Contact */}
          <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">👨‍💼</span>
              <h3 className="text-2xl font-bold gradient-text">Leadership & Contact</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-semibold mb-3">Leadership Roles</h4>
                <ul className="space-y-2">
                  {leadership.map((role, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="text-primary-400 mt-1">•</span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-dark-700">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <FaEnvelope className="text-primary-400" />
                    <span className="text-sm">Email: kowshikboggavarapu@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <FaMapMarkerAlt className="text-primary-400" />
                    <span className="text-sm">Location: Vijayawada, Andhra Pradesh</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <FaPhone className="text-primary-400" />
                    <span className="text-sm">Phone: +91 9381299718</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '5+', label: 'Projects Completed' },
            { value: '5+', label: 'Hackathons Participated' },
            { value: '8+', label: 'Technologies Explored' },
            { value: '3+', label: 'Years Experience' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="bg-gradient-to-br from-dark-800 to-dark-900 border border-primary-500/20 rounded-2xl p-6 text-center hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
