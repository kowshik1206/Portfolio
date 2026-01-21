'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiGit,
  SiPython,
  SiAngular,
  SiBootstrap
} from 'react-icons/si';
import { FaEthereum, FaJava } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';

const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    { name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frontend' },
    { name: 'Next.js', icon: RiNextjsFill, color: '#000000', category: 'Frontend' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Frontend' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Frontend' },
    { name: 'Angular', icon: SiAngular, color: '#DD0031', category: 'Frontend' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26', category: 'Frontend' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6', category: 'Frontend' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend' },
    { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', category: 'Frontend' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'Backend' },
    { name: 'PHP', icon: SiPhp, color: '#777BB4', category: 'Backend' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', category: 'Database' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database' },
    { name: 'Python', icon: SiPython, color: '#3776AB', category: 'Languages' },
    { name: 'Java', icon: FaJava, color: '#007396', category: 'Languages' },
    { name: 'Blockchain', icon: FaEthereum, color: '#627EEA', category: 'Blockchain' },
    { name: 'Git', icon: SiGit, color: '#F05032', category: 'Tools' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/10 to-transparent"></div>
      
      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="group relative"
            >
              <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/20">
                <tech.icon
                  className="text-5xl transition-all duration-300"
                  style={{ color: tech.color }}
                />
                <span className="text-gray-300 text-sm font-medium text-center">
                  {tech.name}
                </span>
              </div>
              
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-dark-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {tech.category}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-dark-900"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
        >
          {[
            { number: '17+', label: 'Technologies' },
            { number: '10+', label: 'Projects' },
            { number: '3+', label: 'Years Learning' },
            { number: '5+', label: 'Certifications' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-gradient-to-br from-dark-800 to-dark-900 border border-primary-500/20 rounded-xl p-6 text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
