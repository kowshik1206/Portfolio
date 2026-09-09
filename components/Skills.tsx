'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChartColumnIncreasing, Cpu, Database, LayoutGrid, ServerCog, Wrench, type LucideIcon } from 'lucide-react';

type SkillTier = 'Proficient' | 'Comfortable' | 'Learning';

type SkillItem = {
  name: string;
  tier: SkillTier;
};

type SkillCategory = {
  category: string;
  icon: LucideIcon;
  color: string;
  skills: SkillItem[];
};

const tierStyles: Record<SkillTier, string> = {
  Proficient: 'from-emerald-500/20 to-emerald-400/10 border-emerald-400/30 text-emerald-200',
  Comfortable: 'from-cyan-500/20 to-blue-400/10 border-cyan-400/30 text-cyan-200',
  Learning: 'from-orange-500/20 to-amber-400/10 border-orange-400/30 text-orange-200',
};

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories: SkillCategory[] = [
    {
      category: 'Frontend Development',
      icon: LayoutGrid,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'React.js', tier: 'Proficient' },
        { name: 'Next.js', tier: 'Proficient' },
        { name: 'TypeScript', tier: 'Comfortable' },
        { name: 'JavaScript', tier: 'Proficient' },
        { name: 'HTML5', tier: 'Proficient' },
        { name: 'CSS3', tier: 'Proficient' },
        { name: 'Tailwind CSS', tier: 'Proficient' },
        { name: 'Bootstrap', tier: 'Comfortable' },
      ],
    },
    {
      category: 'Backend Development',
      icon: ServerCog,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Express.js', tier: 'Comfortable' },
        { name: 'Node.js', tier: 'Comfortable' },
        { name: 'PHP', tier: 'Comfortable' },
        { name: 'Laravel', tier: 'Proficient' },
        { name: 'API Development', tier: 'Comfortable' },
      ],
    },
    {
      category: 'Databases',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'MySQL', tier: 'Proficient' },
        { name: 'MongoDB', tier: 'Comfortable' },
        { name: 'Database Design', tier: 'Comfortable' },
        { name: 'SQL Optimization', tier: 'Learning' },
      ],
    },
    {
      category: 'Tools & Platforms',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', tier: 'Proficient' },
        { name: 'GitHub', tier: 'Proficient' },
        { name: 'VS Code', tier: 'Proficient' },
        { name: 'WordPress', tier: 'Comfortable' },
        { name: 'Linux/Unix', tier: 'Learning' },
      ],
    },
    {
      category: 'IoT & Hardware',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Arduino/ESP32', tier: 'Proficient' },
        { name: 'LoRa Communication', tier: 'Comfortable' },
        { name: 'GPS Tracking', tier: 'Comfortable' },
        { name: 'Sensor Integration', tier: 'Comfortable' },
      ],
    },
    {
      category: 'Blockchain',
      icon: ChartColumnIncreasing,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Web3.js', tier: 'Learning' },
        { name: 'Smart Contracts', tier: 'Learning' },
        { name: 'Solidity', tier: 'Learning' },
        { name: 'Move Programming', tier: 'Learning' },
      ],
    },
  ];
  const currentFocus = ['React Development', 'Next.js', 'Full Stack', 'Web Performance'];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />
      <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="container mx-auto px-6 relative z-10" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-4">
            <span className="text-primary-400 text-sm font-semibold">Professional Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Skills & Technical Stack
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive expertise across frontend development, backend systems, databases, and modern web technologies. Specialized in building production-ready applications with React.js, Next.js, and full-stack development.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={category.category} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: categoryIndex * 0.08, duration: 0.6 } } }} whileHover={{ y: -6, scale: 1.02 }} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="relative bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl rounded-2xl p-6 border border-dark-700/50 group-hover:border-primary-500/50 transition-all duration-300 shadow-xl group-hover:shadow-2xl h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <category.icon className="h-7 w-7 text-primary-400" />
                    <h3 className="text-base md:text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-purple-400 transition-all duration-300">
                      {category.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + skillIndex * 0.04 }}
                        className={`rounded-full border px-3 py-2 text-xs font-semibold backdrop-blur-sm bg-gradient-to-r ${tierStyles[skill.tier]} flex items-center gap-2`}
                      >
                        <span>{skill.name}</span>
                        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider">
                          {skill.tier}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.6 } } }} className="grid md:grid-cols-2 gap-6">
              <motion.div whileHover={{ y: -5, scale: 1.02 }} className="group relative bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-dark-700/50 hover:border-green-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-300">
                    Skill Approach
                </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    I prefer shipping polished features, reviewing edge cases, and strengthening systems by iterating in public rather than mapping everything to percentages.
                  </p>
              </div>
            </motion.div>

              <motion.div whileHover={{ y: -5, scale: 1.02 }} className="group relative bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-dark-700/50 hover:border-orange-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-yellow-400 transition-all duration-300">
                  Current Focus
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentFocus.map((focus, index) => (
                    <motion.span key={focus} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }} whileHover={{ scale: 1.1 }} className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/50 hover:border-orange-400 rounded-full text-xs md:text-sm font-medium text-white hover:text-yellow-200 transition-all duration-300">
                      {focus}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 0.6 } } }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: '2+', label: 'Years Learning', color: 'from-blue-500 to-cyan-500' },
              { value: '2+', label: 'Live Projects', color: 'from-purple-500 to-pink-500' },
              { value: '20+', label: 'Skills', color: 'from-green-500 to-emerald-500' },
              { value: '100%', label: 'Commitment', color: 'from-orange-500 to-red-500' },
            ].map((stat, index) => (
              <motion.div key={stat.label} initial={{ scale: 0, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }} whileHover={{ y: -3, scale: 1.05 }} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 rounded-xl blur-lg transition-opacity duration-300`} />
                <div className={`relative bg-gradient-to-br ${stat.color}/10 to-transparent rounded-xl p-4 md:p-6 text-center border border-dark-700/50 group-hover:border-dark-600 transition-all duration-300`}>
                  <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs md:text-sm font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
