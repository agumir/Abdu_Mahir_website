'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 glass-effect rounded-full text-sm">
              🚀 Available for Opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            We Build{' '}
            <span className="gradient-text">Digital Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Innovative web solutions that transform ideas into powerful digital experiences.
            Meet Abdu Seid & Mahir Said - Your partners in digital success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 justify-center mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3 bg-primary rounded-full font-semibold hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all"
            >
              Start Project
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 glass-effect rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              View Work
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-6 justify-center mb-16"
          >
            <motion.a
              whileHover={{ y: -3 }}
              href="https://github.com"
              target="_blank"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="https://linkedin.com"
              target="_blank"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="https://twitter.com"
              target="_blank"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Twitter size={24} />
            </motion.a>
          </motion.div>

          <motion.a
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            href="#about"
            className="inline-block"
          >
            <ArrowDown className="text-primary" size={32} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}