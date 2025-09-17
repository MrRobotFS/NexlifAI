'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-primary/10 to-brand-accent/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-brand-accent/8 to-brand-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card inline-flex items-center space-x-2 rounded-full px-6 py-2"
          >
            <Sparkles className="w-4 h-4 text-brand-primary" />
            <span className="text-sm font-medium text-brand-primary">
              AI-Powered Solutions
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="block text-gradient">Build the Future</span>
            <span className="block text-gray-900 mt-2">
              with Intelligent
            </span>
            <span className="block text-gradient">Automation</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            nexlifAI delivers cutting-edge AI solutions, custom applications, and powerful 
            automations to scale your business and transform your operations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8"
          >
            <Button variant="primary" size="lg" className="text-lg px-8 py-4">
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button variant="glass" size="lg" className="text-lg px-8 py-4">
              View Our Work
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gradient-to-b from-brand-primary to-brand-accent rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}