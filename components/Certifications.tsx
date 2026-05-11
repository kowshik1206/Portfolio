'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCertificate, FaGraduationCap } from 'react-icons/fa';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: 'Google Android Internship',
      issuer: 'Google',
      category: 'Mobile Development',
      icon: '🚀',
      color: 'from-blue-500 to-cyan-500',
      date: '2024',
    },
    {
      title: 'Google AI/ML Internship',
      issuer: 'Google',
      category: 'Artificial Intelligence',
      icon: '🤖',
      color: 'from-purple-500 to-pink-500',
      date: '2024',
    },
    {
      title: 'Palo Alto Cybersecurity Internship',
      issuer: 'Palo Alto Networks',
      category: 'Cybersecurity',
      icon: '🔒',
      color: 'from-red-500 to-orange-500',
      date: '2024',
    },
    {
      title: 'React Certificate',
      issuer: 'Online Platform',
      category: 'Frontend',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-500',
      date: '2023',
    },
    {
      title: 'PHP Certificate',
      issuer: 'Online Platform',
      category: 'Backend',
      icon: '🐘',
      color: 'from-purple-500 to-blue-500',
      date: '2023',
    },
    {
      title: 'SEO Certificate',
      issuer: 'Online Platform',
      category: 'Digital Marketing',
      icon: '📈',
      color: 'from-green-500 to-emerald-500',
      date: '2023',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section id="certifications" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-4">
            <FaCertificate className="text-green-400" />
            <span className="text-green-400 text-sm font-semibold">Certifications & Credentials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Certifications</span> & Credentials
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Professional certifications demonstrating expertise across multiple domains
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative"
            >
              {/* Glow background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300`}></div>
              
              {/* Card */}
              <div className={`relative bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl border border-dark-700/50 group-hover:border-dark-600 rounded-2xl p-6 transition-all duration-300 shadow-xl group-hover:shadow-2xl overflow-hidden flex flex-col`}>
                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 -rotate-45 group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Top decoration */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${cert.color} opacity-5 rounded-bl-full`}></div>

                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Icon */}
                  <motion.div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center shadow-lg text-2xl mb-4`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {cert.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {cert.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-3 flex-grow">{cert.issuer}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-dark-700/50">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.08 }}
                      className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${cert.color} text-white`}
                    >
                      {cert.category}
                    </motion.span>
                    <span className="text-xs text-gray-500 font-medium">{cert.date}</span>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr ${cert.color} opacity-5 rounded-tr-full`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Continuously learning and upskilling to stay current with industry trends
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 197, 94, 0.6)" }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg"
          >
            <FaGraduationCap className="text-lg" />
            Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
