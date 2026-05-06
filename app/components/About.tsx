'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Cloud, Shield, Zap } from 'lucide-react'

const features = [
  { icon: Code2, title: 'Clean Code', description: 'Writing maintainable, scalable, and efficient code for long-term success' },
  { icon: Zap, title: 'Fast Performance', description: 'Optimized applications with lightning-fast load times' },
  { icon: Shield, title: 'Secure Solutions', description: 'Enterprise-grade security for peace of mind' },
  { icon: Cloud, title: 'Cloud Ready', description: 'Seamless deployment and scaling on modern cloud platforms' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark to-dark/95">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Us</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Two Minds,{' '}
              <span className="gradient-text">One Vision</span>
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Abdu Seid and Mahir Said bring together over a decade of combined experience in web development,
              creating digital solutions that push boundaries and deliver exceptional results.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our partnership combines Abdu's expertise in backend architecture and AI integration with Mahir's
              mastery of frontend development and user experience design. Together, we create complete,
              cutting-edge web applications that stand out in today's competitive landscape.
            </p>
            <div className="flex gap-4 flex-wrap">
              {['50+ Projects', '98% Satisfaction', '24/7 Support'].map((stat) => (
                <motion.div
                  key={stat}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect px-6 py-3 rounded-lg text-center flex-1 min-w-[120px]"
                >
                  <div className="text-2xl font-bold gradient-text">{stat.split(' ')[0]}</div>
                  <div className="text-sm text-gray-400">{stat.split(' ')[1]}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-xl text-center"
              >
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { name: 'Abdu Seid', role: 'Backend & AI Specialist', image: 'https://img.magnific.com/free-photo/top-view-unrecognizable-hacker-performing-cyberattack-night_1098-18706.jpg?semt=ais_hybrid&w=740&q=80' },
            { name: 'Mahir Said', role: 'Frontend & UX Expert', image: 'https://img.magnific.com/free-photo/top-view-unrecognizable-hacker-performing-cyberattack-night_1098-18706.jpg?semt=ais_hybrid&w=740&q=80' },
          ].map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + (index * 0.2), duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-2">{member.name}</h4>
                <p className="text-primary mb-4">{member.role}</p>
                <p className="text-gray-400">
                  {index === 0 
                    ? 'Expert in Node.js, Python, AI/ML integration, and cloud architecture.'
                    : 'Specialist in React, Next.js, responsive design, and creating seamless user experiences.'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}