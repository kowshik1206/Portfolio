'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBriefcase, FaTrophy, FaUsers } from 'react-icons/fa';
import Experience from './Experience';

const AboutContent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'DVR & Dr. HS MIC College of Technology',
      location: 'Vijayawada, India',
      period: '2022 - 2026 (Expected)',
      cgpa: '7.62',
      description: 'Specialized in Full-Stack Development, Blockchain Technologies, and Modern Web Development',
    },
    {
      degree: 'Intermediate (12th)',
      institution: 'KBN (SNHNE) College, Vijayawada',
      location: 'Board of Intermediate Education, AP',
      period: '2020 - 2022',
      percentage: '63.3%',
      description: 'Focus on Mathematics, Physics, and Chemistry',
    },
    {
      degree: 'SSC (10th)',
      institution: "Harper's High School",
      location: 'Board of Secondary Education, AP',
      period: '2020',
      cgpa: '10',
      description: 'Completed with excellent academic performance',
    },
  ];

  const strengths = [
    {
      icon: FaBriefcase,
      title: 'Full-Stack Development',
      percentage: 90,
      description: 'Expertise in React, Next.js, Node.js, and modern frameworks',
    },
    {
      icon: FaTrophy,
      title: 'Problem Solving',
      percentage: 88,
      description: 'Strong analytical and debugging capabilities',
    },
    {
      icon: FaUsers,
      title: 'Team Collaboration',
      percentage: 90,
      description: 'Excellent communication and project management',
    },
    {
      icon: FaGraduationCap,
      title: 'Quick Learner',
      percentage: 92,
      description: 'Rapidly adapt to new technologies and frameworks',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Passionate full-stack developer with expertise in modern web technologies, blockchain
              development, and a strong focus on creating user-centric solutions
            </p>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              📚 <span className="gradient-text">Education</span>
            </h2>
            <div className="max-w-5xl mx-auto space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-3xl p-8 hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-600 to-purple-600 rounded-2xl flex items-center justify-center">
                      <FaGraduationCap className="text-white text-2xl" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                          <p className="text-primary-400 font-semibold">{edu.institution}</p>
                          <p className="text-gray-500 text-sm">{edu.location}</p>
                        </div>
                        <div className="text-right mt-2 md:mt-0">
                          <span className="text-gray-400 text-sm font-medium">{edu.period}</span>
                          {edu.cgpa && (
                            <p className="text-primary-400 font-bold text-lg">CGPA: {edu.cgpa}</p>
                          )}
                          {edu.percentage && (
                            <p className="text-primary-400 font-bold text-lg">{edu.percentage}</p>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-400">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              🎯 Core <span className="gradient-text">Strengths</span>
            </h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-3xl p-8 hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <strength.icon className="text-white text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{strength.title}</h3>
                      <p className="text-gray-400 text-sm">{strength.description}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400 text-sm">Proficiency</span>
                      <span className="text-primary-400 font-semibold">{strength.percentage}%</span>
                    </div>
                    <div className="h-3 bg-dark-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${strength.percentage}%` } : {}}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary-600 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20"
          >
            {[
              { number: '4+', label: 'Projects Completed' },
              { number: '3+', label: 'Hackathons Participated' },
              { number: '2+', label: 'Years Learning' },
              { number: '8+', label: 'Technologies' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                className="bg-gradient-to-br from-dark-800 to-dark-900 border border-primary-500/20 rounded-xl p-6 text-center hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <Experience />
    </div>
  );
};

export default AboutContent;
