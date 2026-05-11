'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories = [
    {
      category: '💻 Frontend Development',
      icon: '💻',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'PHP', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      category: '⚙️ Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Laravel', level: 88 },
        { name: 'Node.js', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'API Development', level: 82 },
        { name: 'Database Design', level: 80 },
      ],
    },
    {
      category: '🔌 IoT & Hardware',
      icon: '🔌',
      skills: [
        { name: 'Arduino/ESP32', level: 90 },
        { name: 'LoRa Communication', level: 85 },
        { name: 'GPS Tracking', level: 80 },
        { name: 'Sensor Integration', level: 85 },
        { name: 'Hardware Prototyping', level: 82 },
      ],
    },
    {
      category: '⛓️ Blockchain Development',
      icon: '⛓️',
      skills: [
        { name: 'Smart Contracts', level: 75 },
        { name: 'Solidity', level: 70 },
        { name: 'Move Programming', level: 65 },
        { name: 'Web3 Integration', level: 72 },
        { name: 'Cryptocurrency Wallets', level: 68 },
      ],
    },
    {
      category: '🛠️ Tools & Technologies',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 88 },
        { name: 'VS Code', level: 90 },
        { name: 'Linux/Unix', level: 75 },
        { name: 'Docker', level: 70 },
        { name: 'Project Management', level: 85 },
      ],
    },
  ];

  const radarData = [
    { skill: 'React.js', value: 90, fullMark: 100 },
    { skill: 'Node.js', value: 70, fullMark: 100 },
    { skill: 'PHP', value: 85, fullMark: 100 },
    { skill: 'JavaScript', value: 85, fullMark: 100 },
    { skill: 'MySQL', value: 85, fullMark: 100 },
    { skill: 'Arduino/ESP32', value: 85, fullMark: 100 },
    { skill: 'Smart Contracts', value: 70, fullMark: 100 },
    { skill: 'LoRa', value: 80, fullMark: 100 },
    { skill: 'Bootstrap', value: 80, fullMark: 100 },
  ];

  const overallProficiency = 92;
  const currentFocus = ['IoT Systems', 'Blockchain', 'Full-Stack', 'Hardware'];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />
      <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="container mx-auto px-6 relative z-10" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency across different domains
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={category.category} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: categoryIndex * 0.1, duration: 0.6 } } }} whileHover={{ y: -5, scale: 1.02 }} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl rounded-2xl p-6 border border-dark-700/50 group-hover:border-primary-500/50 transition-all duration-300 shadow-xl group-hover:shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{category.icon}</span>
                    <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-purple-400 transition-all duration-300">
                      {category.category.replace(/^[^\s]+\s/, '')}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div key={skill.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + skillIndex * 0.05 }}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 font-medium text-sm hover:text-white transition-colors">{skill.name}</span>
                          <span className="text-primary-400 font-semibold text-sm">{skill.level}%</span>
                        </div>
                        <div className="h-2.5 bg-dark-700/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05, ease: 'easeOut' }}
                            className="h-full rounded-full bg-gradient-to-r from-primary-500 to-purple-500 shadow-lg shadow-purple-500/50"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } } }} whileHover={{ y: -5, scale: 1.02 }} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl rounded-2xl p-6 border border-dark-700/50 group-hover:border-cyan-500/50 transition-all duration-300 shadow-xl group-hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📊</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                    Skills Overview
                  </h3>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={radarData}>
                      <PolarGrid stroke="#374151" />
                      <PolarAngleAxis dataKey="skill" tick={{ fill: '#9CA3AF', fontSize: 10 }} />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#9CA3AF', fontSize: 10 }} />
                      <Radar name="Proficiency" dataKey="value" stroke="#667eea" fill="#667eea" fillOpacity={0.6} />
                      <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px', fontSize: '12px' }} labelStyle={{ color: '#F9FAFB' }} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.6 } } }} className="grid md:grid-cols-2 gap-6">
            <motion.div whileHover={{ y: -5, scale: 1.02 }} className="group relative bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl rounded-2xl p-6 border border-dark-700/50 hover:border-green-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-300">
                  Overall Proficiency
                </h3>
                <div className="flex items-end gap-4">
                  <div className="flex-1">
                    <div className="h-3 bg-dark-700/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${overallProficiency}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-500/50"
                      />
                    </div>
                  </div>
                  <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: 1.2 }} className="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                    {overallProficiency}%
                  </motion.span>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5, scale: 1.02 }} className="group relative bg-gradient-to-br from-dark-800/90 to-dark-900/90 backdrop-blur-xl rounded-2xl p-6 border border-dark-700/50 hover:border-orange-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl">
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

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 0.6 } } }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { value: '2+', label: 'Years Experience', color: 'from-blue-500 to-cyan-500' },
              { value: '4+', label: 'Projects', color: 'from-purple-500 to-pink-500' },
              { value: '8+', label: 'Technologies', color: 'from-green-500 to-emerald-500' },
              { value: '100%', label: 'Dedication', color: 'from-orange-500 to-red-500' },
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
