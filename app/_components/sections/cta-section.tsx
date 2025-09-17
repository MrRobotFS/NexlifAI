'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { ArrowRight, MessageCircle, Calendar, Send } from 'lucide-react'

// --- Sub-Components for CTASection ---

const CtaContent = () => (
  <div>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass-card inline-flex items-center space-x-2 rounded-full px-6 py-2 mb-6"
    >
      <span className="text-sm font-medium text-white">
        Ready to Get Started?
      </span>
    </motion.div>

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="text-4xl lg:text-5xl font-bold text-white mb-6"
    >
      Ready to Transform
      <br />
      <span className="text-gradient">Your Business?</span>
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-xl text-gray-300 leading-relaxed mb-8"
    >
      Let&apos;s discuss how nexlifAI can help you achieve your goals. Our experts are ready to 
      build your next big idea and transform your operations with cutting-edge AI technology.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="flex flex-col sm:flex-row gap-4"
    >
      <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
        <Calendar className="mr-2 w-5 h-5" />
        Schedule a Call
      </Button>
    </motion.div>
  </div>
);

const ContactForm = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="logo-card w-full p-8 space-y-6"
  >
    <h3 className="text-2xl font-bold text-white">Send us a message</h3>
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="sr-only">Name</label>
        <input type="text" id="name" placeholder="Your Name" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all" />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <input type="email" id="email" placeholder="Your Email" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all" />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea id="message" placeholder="Your Message" rows={4} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all"></textarea>
      </div>
      <Button type="submit" variant="primary" size="lg" className="w-full text-lg">
        <Send className="mr-2 w-5 h-5" />
        Send Message
      </Button>
    </form>
  </motion.div>
);

// --- Main CTASection Component ---

export const CTASection: React.FC = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-brand-primary to-brand-secondary relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Background decorative elements */}
        <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0]}} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-white/10 to-brand-light/10 rounded-full blur-3xl" />
        <motion.div animate={{ scale: [1.1, 1, 1.1], rotate: [0, -5, 0]}} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute -bottom-24 -left-24 w-80 h-80 bg-gradient-to-br from-brand-light/10 to-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <CtaContent />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
