'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCalendar, FaUsers, FaAward, FaRocket } from 'react-icons/fa';
import { HiSparkles, HiLightningBolt, HiCheckCircle } from 'react-icons/hi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Cattle Tracking System',
      subtitle: 'IoT Livestock Monitoring Solution',
      description: 'End-to-end IoT livestock monitoring system with real-time GPS tracking and geofencing capabilities for rural livestock management.',
      duration: '24 Hours',
      teamSize: '3 developers',
      category: 'IoT',
      status: 'Completed',
      statusColor: 'bg-pink-500',
      categoryColor: 'bg-pink-500',
      gradientColor: 'from-cyan-500 to-blue-500',
      year: '2025',
      icon: '📡',
      achievement: 'Built in 24 hours',
      keyResults: [
        '3-meter GPS precision',
        '15km communication range',
        '6-month battery life',
      ],
      technologies: ['ESP32', 'LoRa', 'GNSS', 'PHP', 'MySQL', 'JavaScript'],
      github: '#',
      liveDemo: 'https://careerinedu.com/tracker/map.html',
    },
    {
      title: 'Muskan Medicare',
      subtitle: 'Healthcare Management Platform',
      description: 'Professional corporate website optimized for search engines and user experience with comprehensive pharmaceutical information.',
      duration: '2 months',
      teamSize: '5 Developers',
      category: 'Web',
      status: 'Live',
      statusColor: 'bg-green-500',
      categoryColor: 'bg-green-500',
      gradientColor: 'from-green-500 to-emerald-500',
      year: '2024',
      icon: '🏥',
      achievement: 'First page Google ranking',
      keyResults: [
        '90+ PageSpeed score',
        'First page Google ranking',
        '100% cross-browser support',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'SEO', 'Analytics'],
      github: '#',
      liveDemo: 'http://muskanmedicare.com/',
    },
    {
      title: 'DrWinz Pharma',
      subtitle: 'Corporate Pharmaceutical Website',
      description: 'Professional corporate website optimized for search engines and user experience with comprehensive pharmaceutical information.',
      duration: '1 month',
      teamSize: '5 Developers',
      category: 'Web',
      status: 'Live',
      statusColor: 'bg-green-500',
      categoryColor: 'bg-green-500',
      gradientColor: 'from-blue-500 to-purple-500',
      year: '2024',
      icon: '💊',
      achievement: '92 PageSpeed score',
      keyResults: [
        '90+ PageSpeed score',
        'First page Google ranking',
        '100% cross-browser support',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'SEO', 'Analytics'],
      github: '#',
      liveDemo: 'http://drwinzpharma.com/',
    },
    {
      title: 'RiyoCar',
      subtitle: 'Luxury Car Rental Platform',
      description: 'Comprehensive car rental platform with advanced booking system, customer management, and interactive vehicle gallery.',
      duration: '1 month',
      teamSize: '5 Developers',
      category: 'Web',
      status: 'Live',
      statusColor: 'bg-green-500',
      categoryColor: 'bg-pink-500',
      gradientColor: 'from-orange-500 to-red-500',
      year: '2024',
      icon: '🚗',
      achievement: '200+ bookings',
      keyResults: [
        'Seamless booking experience',
        'Fast loading gallery',
        'Comprehensive review system',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
      github: '#',
      liveDemo: 'http://riyocar.com/',
    },
    {
      title: 'CareerInEdu',
      subtitle: 'AI-Powered Career Guidance Platform',
      description: 'Comprehensive career guidance platform with AI-based job recommendations, internship listings, and career analytics.',
      duration: '5 months',
      teamSize: '5 developers',
      category: 'Web',
      status: 'Live',
      statusColor: 'bg-green-500',
      categoryColor: 'bg-purple-500',
      gradientColor: 'from-purple-500 to-pink-500',
      year: '2023',
      icon: '🎓',
      achievement: '500+ active users',
      keyResults: [
        '95% job match accuracy',
        '500+ job listings',
        'Real-time notifications',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
      github: '#',
      liveDemo: 'http://careerinedu.com/',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background - matching Timeline */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/5 to-transparent"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-4">
            <HiSparkles className="text-primary-400" />
            <span className="text-primary-400 text-sm font-semibold">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Innovative solutions across web development, IoT, AI, and enterprise platforms
          </p>
        </motion.div>

        {/* Projects Grid with Timeline-style cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="relative bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl border border-dark-700/50 rounded-2xl p-6 md:p-8 hover:border-primary-500/50 transition-all duration-500 shadow-2xl hover:shadow-3xl overflow-hidden">
                {/* Animated Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradientColor} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}></div>
                
                {/* Corner Decoration */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${project.gradientColor} opacity-5 rounded-bl-full`}></div>
                
                <div className="relative z-10">
                  {/* Header with Icon and Year */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      {/* Animated Icon */}
                      <motion.div 
                        className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.gradientColor} flex items-center justify-center shadow-lg text-2xl`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {project.icon}
                      </motion.div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`${project.categoryColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
                            {project.category}
                          </span>
                          <span className={`${project.statusColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1`}>
                            <HiCheckCircle className="text-sm" />
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-3xl font-bold text-white/10">{project.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-purple-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-gray-400 font-medium text-sm md:text-base mb-4">
                    {project.subtitle}
                  </p>

                  {/* Achievement Badge */}
                  <div className="flex items-center gap-2 mb-5 bg-yellow-500/10 border border-yellow-500/20 rounded-lg px-3 py-2 w-fit">
                    <FaAward className="text-yellow-400 text-sm" />
                    <span className="text-yellow-400 text-xs font-semibold">{project.achievement}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Duration and Team in glassmorphic container */}
                  <div className="grid grid-cols-2 gap-4 mb-6 bg-dark-700/30 backdrop-blur-sm rounded-xl p-4 border border-dark-600/50">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${project.gradientColor} bg-opacity-20 flex items-center justify-center`}>
                        <FaCalendar className="text-primary-400" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Duration</p>
                        <p className="text-white font-semibold text-sm">{project.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${project.gradientColor} bg-opacity-20 flex items-center justify-center`}>
                        <FaUsers className="text-primary-400" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Team Size</p>
                        <p className="text-white font-semibold text-sm">{project.teamSize}</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Results */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <HiLightningBolt className="text-yellow-400 text-lg" />
                      <h4 className="text-white font-bold text-sm">Key Results</h4>
                    </div>
                    <ul className="space-y-2">
                      {project.keyResults.map((result, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.15 + idx * 0.1 }}
                          className="flex items-start gap-3 text-gray-300 text-sm bg-dark-700/20 rounded-lg p-2"
                        >
                          <span className="text-primary-400 mt-0.5">▸</span>
                          <span>{result}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies with Timeline-style tags */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">⚡</span>
                      <h4 className="text-white font-bold text-sm">Tech Stack</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.15 + idx * 0.08 }}
                          whileHover={{ scale: 1.1 }}
                          className={`px-3 py-1.5 bg-gradient-to-r ${project.gradientColor} text-white rounded-lg text-xs font-semibold backdrop-blur-sm transition-all duration-300 hover:shadow-lg cursor-default shadow-md`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-dark-700/80 hover:bg-dark-600 backdrop-blur-sm text-gray-300 hover:text-white rounded-xl transition-all duration-300 border border-dark-600 hover:border-primary-500/50 shadow-lg"
                    >
                      <FaGithub className="text-lg" />
                      <span className="font-semibold text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${project.gradientColor} hover:opacity-90 text-white rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl`}
                    >
                      <FaRocket className="text-sm" />
                      <span className="font-semibold text-sm">Live Demo</span>
                    </motion.a>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${project.gradientColor} opacity-5 rounded-tr-full`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
