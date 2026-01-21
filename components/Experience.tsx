'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap, FaTrophy } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      type: 'work',
      icon: FaBriefcase,
      title: 'Web Developer Freelance',
      organization: 'Various Clients',
      period: '2022 - Present',
      description:
        'Delivered full-stack websites for education, healthcare, and automotive sectors. Engineered responsive designs and secure backends.',
      highlights: [
        'Built 10+ production websites',
        'Implemented responsive designs',
        'Optimized for performance and SEO',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      type: 'internship',
      icon: FaBriefcase,
      title: 'BlocksBlock Blockchain Intern',
      organization: 'BlocksBlock',
      period: '45-day Internship',
      description:
        'Completed intensive internship focused on Internet Computer Protocol (ICP), learning Rust, smart contracts, and canister-based dApps.',
      highlights: [
        'ICP fundamentals & architecture',
        'Rust programming',
        'Smart contract development',
        'Built canister-based dApps',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      type: 'education',
      icon: FaGraduationCap,
      title: 'B.Tech in Information Technology',
      organization: 'DVR & Dr. HS MIC College of Technology',
      period: '2022 - 2026 (Expected)',
      description: 'Current CGPA: 7.62 | Focus on Full-Stack Development and Blockchain Technologies',
      highlights: [
        'Strong academic performance',
        'Active in tech communities',
        'Multiple certifications',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      type: 'hackathon',
      icon: FaTrophy,
      title: 'Hackathon Achievements',
      organization: 'Multiple Events',
      period: '2023 - 2024',
      description:
        'Participated in blockchain hackathons including Aptos, ICP Web3, and Algorand events.',
      highlights: [
        'Aptos Hackathon (Vijayawada) - Beginner Level',
        'Aptos Hackathon (Bangalore) - Beginner: 1st Prize',
        'Algorand Hackathon - Practical exposure',
      ],
      color: 'from-orange-500 to-red-500',
    },
  ];

  const certifications = [
    'AICTE – Palo Alto Cybersecurity Virtual Internship',
    'AICTE – Google Android Developer Virtual Internship',
    'AICTE – Google AI/ML Virtual Internship',
    'Php Course Completion Certificate',
    'SEO Course Completion Certificate',
    'React Course Completion Certificate',
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-800/30 to-transparent"></div>

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey of learning, building, and achieving
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-5xl mx-auto space-y-8 mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-3xl p-8 hover:border-primary-500/50 transition-all duration-300">
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}
                ></div>

                <div className="relative flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <exp.icon className="text-white text-2xl" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-primary-400 font-semibold">
                          {exp.organization}
                        </p>
                      </div>
                      <span className="text-gray-400 text-sm md:text-base font-medium mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2"></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Certifications & <span className="gradient-text">Achievements</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="bg-gradient-to-br from-dark-800 to-dark-900 border border-primary-500/20 rounded-2xl p-6 flex items-center gap-4 hover:border-primary-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-600/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600/30 transition-colors">
                  <FaTrophy className="text-primary-400 text-xl" />
                </div>
                <p className="text-gray-300 font-medium">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {[
            {
              title: 'Active NSS Volunteer',
              description: 'Contributing to community service',
              icon: '🤝',
            },
            {
              title: 'Event Coordinator',
              description: 'Aagama 2024 & 2025',
              icon: '🎯',
            },
            {
              title: 'Hackathon Organizer',
              description: 'Aptos Blockchain Hackathon',
              icon: '🏆',
            },
          ].map((achievement, idx) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
              className="bg-gradient-to-br from-dark-800 to-dark-900 border border-purple-500/20 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h4 className="text-xl font-bold text-white mb-2">
                {achievement.title}
              </h4>
              <p className="text-gray-400">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
