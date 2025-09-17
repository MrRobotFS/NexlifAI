'use client'

import React from 'react'
import { motion } from 'framer-motion'

const brands = [
  {
    name: 'nu',
    logo: (
      <svg viewBox="0 0 120 40" className="h-8 w-auto">
        <text x="10" y="28" className="fill-current text-2xl font-bold tracking-wide">nu</text>
      </svg>
    )
  },
  {
    name: 'MongoDB',
    logo: (
      <svg viewBox="0 0 120 40" className="h-8 w-auto">
        <path d="M15 8c0-1.5 1-2.5 2.5-2.5S20 6.5 20 8v16c0 1.5-1 2.5-2.5 2.5S15 25.5 15 24V8z" className="fill-current"/>
        <text x="30" y="22" className="fill-current text-sm font-semibold">MongoDB</text>
      </svg>
    )
  },
  {
    name: 'OpenSea',
    logo: (
      <svg viewBox="0 0 120 40" className="h-8 w-auto">
        <circle cx="20" cy="20" r="8" className="fill-current opacity-80"/>
        <text x="35" y="24" className="fill-current text-sm font-semibold">OpenSea</text>
      </svg>
    )
  },
  {
    name: 'Linktree',
    logo: (
      <svg viewBox="0 0 120 40" className="h-8 w-auto">
        <path d="M15 10h10v5h-10z M18 15h4v10h-4z" className="fill-current"/>
        <text x="35" y="24" className="fill-current text-sm font-semibold">Linktree</text>
      </svg>
    )
  },
  {
    name: 'BILT',
    logo: (
      <svg viewBox="0 0 120 40" className="h-8 w-auto">
        <text x="10" y="28" className="fill-current text-2xl font-bold tracking-widest">BILT</text>
      </svg>
    )
  },
  {
    name: 'TechCorp',
    logo: (
      <svg viewBox="0 0 120 40" className="h-8 w-auto">
        <rect x="10" y="12" width="16" height="16" rx="3" className="fill-current"/>
        <text x="35" y="24" className="fill-current text-sm font-semibold">TechCorp</text>
      </svg>
    )
  }
]

export const BrandSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-brand-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Powering Innovation for
          </h2>
          <p className="text-xl text-gradient font-semibold">Industry Leaders</p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass-card flex items-center justify-center p-6 hover:shadow-glass transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer"
            >
              <div className="text-brand-primary hover:text-brand-accent transition-colors">
                {brand.logo}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Marquee */}
        <div className="md:hidden overflow-hidden">
          <motion.div
            animate={{ x: [0, -50 * brands.length] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-8 py-4"
            style={{ width: `${(brands.length * 2) * 200}px` }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 w-48 glass-card flex items-center justify-center p-6 grayscale"
              >
                <div className="text-brand-primary">
                  {brand.logo}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">50+</div>
            <div className="text-gray-600 text-sm">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">10M+</div>
            <div className="text-gray-600 text-sm">Users Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">99.9%</div>
            <div className="text-gray-600 text-sm">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">5★</div>
            <div className="text-gray-600 text-sm">Average Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}