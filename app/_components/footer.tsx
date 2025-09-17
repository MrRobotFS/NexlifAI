'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

// --- Footer Component v2 ---

const SocialLink = ({ icon, href, label }) => (
  <motion.a
    href={href}
    aria-label={label}
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
  >
    {icon}
  </motion.a>
);

const FooterLink = ({ href, name }) => (
  <li>
    <a href={href} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
      {name}
    </a>
  </li>
);

export const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: '#', label: 'Email' },
  ];

  const footerLinks = [
    { title: 'Services', links: [{ name: 'AI Solutions', href: '#services' }, { name: 'Web Development', href: '#services' }, { name: 'Mobile Apps', href: '#services' }]},
    { title: 'Company', links: [{ name: 'About Us', href: '#about' }, { name: 'Careers', href: '#' }, { name: 'Contact', href: '#contact' }]},
    { title: 'Resources', links: [{ name: 'Documentation', href: '#' }, { name: 'Case Studies', href: '#' }, { name: 'Support', href: '#' }]},
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main content area with glass effect */}
        <div className="logo-card p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            
            {/* Logo, description, and social links */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">NexlifAI</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
                Empowering businesses with cutting-edge AI solutions and intelligent automation.
              </p>
              <div className="flex items-center space-x-5">
                {socialLinks.map((social) => (
                  <SocialLink key={social.label} {...social} />
                ))}
              </div>
            </div>

            {/* Footer navigation links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 tracking-wider uppercase mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <FooterLink key={link.name} {...link} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar with copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} nexlifAI, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm mt-4 sm:mt-0">
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}