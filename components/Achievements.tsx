'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      title: 'Aptos Hackathon Vijayawada',
      description: 'Won prize at Aptos Hackathon in Vijayawada for innovative blockchain solution',
      type: 'Hackathon',
      icon: '🏆',
      color: 'from-yellow-500 to-orange-500',
      bgGlow: 'shadow-yellow-500/20',
      date: '2024',
    },
    {
      title: 'Aptos Hackathon Bangalore',
      description: 'Participated and showcased blockchain development skills at Aptos Hackathon Bangalore',
      type: 'Hackathon',
      icon: '🥇',
      color: 'from-purple-500 to-pink-500',
      bgGlow: 'shadow-purple-500/20',
      date: '2024',
    },
    {
      title: 'Algorand Hackathon',
      description: 'Developed Web3 solutions and learned Algorand blockchain integration',
      type: 'Hackathon',
      icon: '🎖️',
      color: 'from-blue-500 to-cyan-500',
      bgGlow: 'shadow-blue-500/20',
      date: '2024',
    },
    {
      title: 'KBN CodeSpark Hackathon 2025',
      description: '1st Prize for IoT-based Cattle Tracking System built in 24 hours',
      type: 'Achievement',
      icon: '⭐',
      color: 'from-green-500 to-emerald-500',
      bgGlow: 'shadow-green-500/20',
      date: '2025',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="achievements" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
            <FaTrophy className="text-purple-400" />
            <span className="text-purple-400 text-sm font-semibold">Achievements & Hackathons</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hackathons & <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Recognition for innovation, problem-solving, and participation in competitive events
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-15 rounded-2xl blur-xl transition-opacity duration-300`}></div>
              
              {/* Card */}
              <div className={`relative bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl border border-dark-700/50 group-hover:border-dark-600 rounded-2xl p-8 transition-all duration-300 shadow-xl group-hover:shadow-2xl overflow-hidden`}>
                {/* Top decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.color} opacity-5 rounded-bl-full`}></div>

                <div className="relative z-10">
                  {/* Icon and Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center shadow-lg text-3xl`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {achievement.icon}
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className={`px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r ${achievement.color} shadow-lg`}
                    >
                      {achievement.date}
                    </motion.span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {achievement.title}
                  </h3>

                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-gradient-to-r ${achievement.color} text-white shadow-md`}>
                    {achievement.type}
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${achievement.color} opacity-5 rounded-tr-full`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-3 gap-4 md:gap-8"
        >
          {[
            { icon: FaTrophy, value: '4+', label: 'Hackathons', color: 'from-yellow-500 to-orange-500' },
            { icon: FaMedal, value: '1', label: '1st Prize', color: 'from-purple-500 to-pink-500' },
            { icon: FaAward, value: 'Multiple', label: 'Recognitions', color: 'from-blue-500 to-cyan-500' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -3 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 rounded-xl blur-lg transition-opacity duration-300`}></div>
              <div className={`relative bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl border border-dark-700/50 group-hover:border-dark-600 rounded-xl p-6 text-center transition-all duration-300 shadow-xl group-hover:shadow-2xl`}>
                <motion.div 
                  className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                  whileHover={{ scale: 1.2 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-xs md:text-sm font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
