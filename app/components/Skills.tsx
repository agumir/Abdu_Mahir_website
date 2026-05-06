'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillsData = [
  { name: 'React/Next.js', level: 95, color: '#61DAFB' },
  { name: 'TypeScript', level: 90, color: '#3178C6' },
  { name: 'Node.js', level: 88, color: '#339933' },
  { name: 'Python', level: 85, color: '#3776AB' },
  { name: 'Tailwind CSS', level: 92, color: '#06B6D4' },
  { name: 'MongoDB', level: 85, color: '#47A248' },
  { name: 'PostgreSQL', level: 82, color: '#4169E1' },
  { name: 'Docker', level: 80, color: '#2496ED' },
  { name: 'AWS', level: 78, color: '#FF9900' },
  { name: 'GraphQL', level: 85, color: '#E10098' },
  { name: 'TensorFlow', level: 75, color: '#FF6F00' },
  { name: 'Figma', level: 88, color: '#F24E1E' },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            We master the latest technologies to deliver cutting-edge solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-xl p-6 group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold"
                  style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                >
                  {skill.name[0]}
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: index * 0.05, duration: 1, ease: 'easeOut' }}
                  className="absolute h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-400">Proficiency</span>
                <span className="text-sm font-semibold" style={{ color: skill.color }}>
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap gap-4 justify-center glass-effect rounded-full px-8 py-4">
            {['AWS Certified', 'Meta Backend Pro', 'Google AI/ML', 'Frontend Masters'].map((cert) => (
              <span key={cert} className="text-sm text-gray-300">
                🏆 {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}