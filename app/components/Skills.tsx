'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs,
  SiPython, SiTailwindcss, SiMongodb, SiPostgresql,
  SiDocker, SiAew, SiGraphql, SiTensorflow
} from 'react-icons/si'

const skillsData = [
  { name: 'React/Next.js', icon: SiReact, level: 95, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, level: 90, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, level: 88, color: '#339933' },
  { name: 'Python', icon: SiPython, level: 85, color: '#3776AB' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92, color: '#06B6D4' },
  { name: 'MongoDB', icon: SiMongodb, level: 85, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, level: 82, color: '#4169E1' },
  { name: 'Docker', icon: SiDocker, level: 80, color: '#2496ED' },
  { name: 'AWS', icon: SiAew, level: 78, color: '#FF9900' },
  { name: 'GraphQL', icon: SiGraphql, level: 85, color: '#E10098' },
  { name: 'TensorFlow', icon: SiTensorflow, level: 75, color: '#FF6F00' },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
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
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-xl p-6 group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <skill.icon className="w-10 h-10" style={{ color: skill.color }} />
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
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

        {/* Additional certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex gap-8 glass-effect rounded-full px-8 py-4">
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