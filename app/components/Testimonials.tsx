'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'Working with Abdu and Mahir was transformative for our business. Their technical expertise and innovative solutions increased our conversion rate by 150%.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    name: 'Michael Chen',
    role: 'CTO, DataFlow Systems',
    content: 'The AI-powered analytics dashboard they built for us is revolutionary. Our team can now make data-driven decisions in real-time.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, GreenEarth',
    content: 'Exceptional communication, technical skills, and dedication. They delivered our platform ahead of schedule and under budget.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-dark/50 to-dark">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-effect rounded-2xl p-8 md:p-12 text-center"
          >
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-primary"
            />
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-lg md:text-xl text-gray-300 mb-6 italic">
              "{testimonials[currentIndex].content}"
            </p>
            <h4 className="font-bold text-xl">{testimonials[currentIndex].name}</h4>
            <p className="text-primary">{testimonials[currentIndex].role}</p>
          </motion.div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 glass-effect rounded-full hover:bg-primary/20 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 glass-effect rounded-full hover:bg-primary/20 transition-all"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-primary' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}