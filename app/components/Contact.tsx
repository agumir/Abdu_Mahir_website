'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Clock, CheckCircle, XCircle } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Store in localStorage for demo
    const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]')
    submissions.push({ ...formData, timestamp: new Date().toISOString() })
    localStorage.setItem('contact_submissions', JSON.stringify(submissions))
    
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 500)
  }

  const contactInfo = [
    { icon: Mail, text: 'contact@abdu-mahir.com', href: 'mailto:contact@abdu-mahir.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#' },
    { icon: Clock, text: 'Mon-Fri: 9AM - 6PM', href: '#' },
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-effect rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors text-white"
                  placeholder="Abdu Seid"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors text-white"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none text-white"
                  placeholder="Tell us about your project..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-primary rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </motion.button>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 justify-center p-3 bg-green-400/10 rounded-lg"
                >
                  <CheckCircle size={20} /> Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.text}
                    href={info.href}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all group cursor-pointer"
                  >
                    <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-all">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-gray-300 group-hover:text-primary transition-colors">
                      {info.text}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span>Monday - Friday:</span>
                  <span className="text-primary">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span>Saturday:</span>
                  <span className="text-primary">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Sunday:</span>
                  <span className="text-primary">Closed</span>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary text-center">
                    ⚡ Emergency support available 24/7 for existing clients
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}