'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time business intelligence platform with machine learning predictions',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    tech: ['React', 'TensorFlow', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#',
    category: 'ai',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with AI recommendations and payment integration',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
    tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    github: '#',
    live: '#',
    category: 'web',
  },
  {
    title: 'Healthcare Management System',
    description: 'HIPAA-compliant platform for patient management and telemedicine',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    github: '#',
    live: '#',
    category: 'enterprise',
  },
  {
    title: 'Social Media Analytics Tool',
    description: 'Cross-platform social media monitoring and engagement tracker',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop',
    tech: ['Vue.js', 'Django', 'Celery', 'Redis'],
    github: '#',
    live: '#',
    category: 'ai',
  },
  {
    title: 'Real Estate NFT Marketplace',
    description: 'Blockchain-based platform for tokenizing real estate assets',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
    tech: ['Next.js', 'Solidity', 'Web3.js', 'IPFS'],
    github: '#',
    live: '#',
    category: 'web3',
  },
  {
    title: 'Smart City IoT Dashboard',
    description: 'Real-time monitoring system for urban infrastructure',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
    tech: ['React', 'MQTT', 'InfluxDB', 'Grafana'],
    github: '#',
    live: '#',
    category: 'enterprise',
  },
]

const categories = ['all', 'ai', 'web', 'enterprise', 'web3']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory
  )

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Innovative solutions we've delivered to clients worldwide
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full capitalize transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-[0_0_20px_rgba(99,102,241,0.5)]'
                  : 'glass-effect hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 glass-effect rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition-colors"
                  >
                    <Github size={16} /> Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}