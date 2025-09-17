'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react'

export const CTASection: React.FC = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-brand-primary to-brand-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-white/10 to-brand-light/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute -bottom-24 -left-24 w-80 h-80 bg-gradient-to-br from-brand-light/10 to-white/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
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
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <Button
                  variant="glass"
                  size="lg"
                  className="text-lg px-8 py-4 text-white border-white/30 hover:bg-white/10"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Schedule a Call
                </Button>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-8 space-y-2 text-gray-300"
              >
                <p className="text-sm">📍 Based in California, USA</p>
                <p className="text-sm">📧 hello@nexlifai.com</p>
                <p className="text-sm">📞 Available 24/7 for consultations</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                title: 'Free Consultation',
                description: 'Get expert advice tailored to your needs',
                icon: '💡'
              },
              {
                title: 'Custom Solutions',
                description: 'Bespoke AI systems designed for your business',
                icon: '🎯'
              },
              {
                title: 'Rapid Deployment',
                description: 'Fast implementation with minimal downtime',
                icon: '⚡'
              },
              {
                title: 'Ongoing Support',
                description: '24/7 technical support and maintenance',
                icon: '🛡️'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 text-center hover:shadow-glass transition-all duration-300"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-16 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">48h</div>
            <div className="text-sm text-gray-300">Average Response Time</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">100%</div>
            <div className="text-sm text-gray-300">Project Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">5+</div>
            <div className="text-sm text-gray-300">Years of Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">50+</div>
            <div className="text-sm text-gray-300">Happy Clients</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}