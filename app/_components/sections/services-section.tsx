'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Accordion } from '../ui/accordion'
import { Brain, Code, Cog } from 'lucide-react'

const services = [
  {
    title: 'Artificial Intelligence Solutions',
    content: 'From custom LLMs and predictive analytics to computer vision, we build bespoke AI systems that solve your most complex challenges. Our AI solutions include natural language processing, machine learning model development, and intelligent automation systems.',
    icon: <Brain size={24} />,
    isDefaultOpen: true
  },
  {
    title: 'Web & Mobile App Development',
    content: 'We design and develop high-performance, scalable, and user-centric applications for all platforms. Our expertise includes React, Next.js, React Native, Node.js, and cloud-native architectures that deliver exceptional user experiences.',
    icon: <Code size={24} />
  },
  {
    title: 'Workflow Automation',
    content: 'Streamline your operations, reduce manual tasks, and increase efficiency with our intelligent automation solutions. We create custom workflows, integrate APIs, and build robotic process automation (RPA) systems that transform your business processes.',
    icon: <Cog size={24} />
  }
]

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-purple/10 to-accent-blue/10 border border-accent-purple/20 rounded-full px-6 py-2 mb-6"
          >
            <span className="text-sm font-medium text-accent-purple dark:text-accent-blue">
              Our Expertise
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="text-gradient">Transform Your Business</span>
            <br />
            <span className="text-gray-900 dark:text-white">with Cutting-Edge Technology</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            We specialize in three core areas that drive digital transformation and business growth. 
            Explore our services and discover how we can help you achieve your goals.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion items={services} />
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 rounded-2xl p-8 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-4 left-4 w-20 h-20 bg-gradient-to-br from-accent-purple to-accent-blue rounded-lg opacity-20"></div>
                <div className="absolute top-16 right-8 w-12 h-12 bg-gradient-to-br from-accent-blue to-accent-purple rounded-full opacity-30"></div>
                <div className="absolute bottom-8 left-12 w-16 h-16 bg-gradient-to-br from-accent-purple to-accent-blue rounded-lg opacity-25"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Why Choose nexlifAI?
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Expert Team</h4>
                      <p className="text-gray-600 dark:text-gray-300">Our team of AI engineers and developers bring decades of combined experience.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Proven Results</h4>
                      <p className="text-gray-600 dark:text-gray-300">We&apos;ve successfully delivered 500+ projects with measurable business impact.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h4>
                      <p className="text-gray-600 dark:text-gray-300">Round-the-clock support to ensure your systems run smoothly.</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">40%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">3x</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Faster Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}