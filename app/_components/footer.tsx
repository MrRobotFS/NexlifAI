'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: '#', label: 'Email' },
  ]

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'AI Solutions', href: '#services' },
        { name: 'Web Development', href: '#services' },
        { name: 'Mobile Apps', href: '#services' },
        { name: 'Automation', href: '#services' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Contact', href: '#contact' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'API Reference', href: '#' },
        { name: 'Support', href: '#' },
      ]
    }
  ]

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="text-2xl font-bold text-gradient">nexlifAI</span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
                Empowering businesses with cutting-edge AI solutions, custom applications, 
                and intelligent automation to drive digital transformation.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-accent-purple hover:to-accent-blue rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white transition-all duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-600 dark:text-gray-300 hover:text-accent-purple dark:hover:text-accent-blue transition-colors duration-200"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600 dark:text-gray-300">
              <span>© 2025 nexlifAI, Inc. All rights reserved.</span>
              <span className="hidden sm:block">•</span>
              <span className="flex items-center space-x-1">
                <span>Made with ❤️ in California</span>
              </span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-gray-600 dark:text-gray-300 hover:text-accent-purple dark:hover:text-accent-blue transition-colors duration-200"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-gray-600 dark:text-gray-300 hover:text-accent-purple dark:hover:text-accent-blue transition-colors duration-200"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}