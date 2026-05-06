'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Users, Trophy, Coffee } from 'lucide-react'

const stats = [
  { icon: Code2, value: 150, label: 'Projects Completed', suffix: '+' },
  { icon: Users, value: 50, label: 'Happy Clients', suffix: '+' },
  { icon: Trophy, value: 25, label: 'Awards Won', suffix: '' },
  { icon: Coffee, value: 5000, label: 'Coffee Consumed', suffix: '+' },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let start = 0
        const end = stat.value
        const duration = 2000
        const increment = end / (duration / 16)
        
        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setCounts(prev => {
              const newCounts = [...prev]
              newCounts[index] = end
              return newCounts
            })
            clearInterval(timer)
          } else {
            setCounts(prev => {
              const newCounts = [...prev]
              newCounts[index] = Math.floor(start)
              return newCounts
            })
          }
        }, 16)
        
        return () => clearInterval(timer)
      })
    }
  }, [isInView])

  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}