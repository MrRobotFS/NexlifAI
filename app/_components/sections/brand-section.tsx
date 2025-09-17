'use client'

import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { ScrollCounter } from '../ui/scroll-counter'

// --- Constants for Component Data ---

const BRANDS = [
  { name: 'nu', logo: <svg viewBox="0 0 120 40"><text x="10" y="28" className="fill-current text-2xl font-bold tracking-wide">nu</text></svg> },
  { name: 'MongoDB', logo: <svg viewBox="0 0 120 40"><path d="M15 8c0-1.5 1-2.5 2.5-2.5S20 6.5 20 8v16c0 1.5-1 2.5-2.5 2.5S15 25.5 15 24V8z" className="fill-current"/><text x="30" y="22" className="fill-current text-sm font-semibold">MongoDB</text></svg> },
  { name: 'OpenSea', logo: <svg viewBox="0 0 120 40"><circle cx="20" cy="20" r="8" className="fill-current opacity-80"/><text x="35" y="24" className="fill-current text-sm font-semibold">OpenSea</text></svg> },
  { name: 'Linktree', logo: <svg viewBox="0 0 120 40"><path d="M15 10h10v5h-10z M18 15h4v10h-4z" className="fill-current"/><text x="35" y="24" className="fill-current text-sm font-semibold">Linktree</text></svg> },
  { name: 'BILT', logo: <svg viewBox="0 0 120 40"><text x="10" y="28" className="fill-current text-2xl font-bold tracking-widest">BILT</text></svg> },
  { name: 'TechCorp', logo: <svg viewBox="0 0 120 40"><rect x="10" y="12" width="16" height="16" rx="3" className="fill-current"/><text x="35" y="24" className="fill-current text-sm font-semibold">TechCorp</text></svg> },
  { name: 'InnovateX', logo: <svg viewBox="0 0 120 40"><text x="10" y="28" className="fill-current text-2xl font-bold">InnovateX</text></svg> },
  { name: 'Quantum', logo: <svg viewBox="0 0 120 40"><text x="10" y="28" className="fill-current text-2xl font-mono">QUANTUM</text></svg> },
  { name: 'Apex', logo: <svg viewBox="0 0 120 40"><path d="M10 28 l10 -15 l10 15 h-20 z" className="fill-current" /><text x="35" y="28" className="fill-current text-2xl font-bold">APEX</text></svg> },
  { name: 'Zenith', logo: <svg viewBox="0 0 120 40"><text x="10" y="28" className="fill-current text-3xl font-serif">Zenith</text></svg> },
  { name: 'Nova', logo: <svg viewBox="0 0 120 40"><text x="10" y="30" className="fill-current text-4xl font-bold">N</text><text x="30" y="28" className="fill-current text-2xl font-light">OVA</text></svg> },
  { name: 'Fusion', logo: <svg viewBox="0 0 120 40"><text x="10" y="28" className="fill-current text-2xl font-bold tracking-wider">FUSION</text></svg> },
];

const KPIS = [
  { value: 50, suffix: '+', label: 'Enterprise Clients' },
  { value: 10, suffix: 'M+', label: 'Users Served' },
  { value: 99.9, suffix: '%', label: 'Uptime', decimals: 1 },
  { value: 5, suffix: '★', label: 'Average Rating' },
];

// --- Sub-Components for BrandSection ---

const SectionTitle = () => (
  <div className="mx-auto max-w-2xl lg:max-w-3xl text-center mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
    >
      <span className="text-gradient">Trusted by the world&apos;s</span>
      <br />
      <span>most innovative companies</span>
    </motion.h2>
  </div>
);

const LogoCarousel = () => (
  <div className="w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
    <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
      {[...BRANDS, ...BRANDS].map((brand, index) => (
        <div key={index} className="mx-6 flex w-48 flex-shrink-0 items-center justify-center group">
          <div className="logo-card w-full h-24 flex items-center justify-center p-6">
            <div className="h-10 w-auto text-gray-400 dark:text-gray-500 transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-300">
              {brand.logo}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const KpiSection = ({ scrollYProgress }) => (
  <div className="mx-auto mt-24 max-w-7xl">
    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-2 lg:grid-cols-4">
      {KPIS.map((stat) => (
        <motion.div 
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-xs flex-col-reverse gap-y-2 items-center"
        >
          <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">{stat.label}</dt>
          <dd className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
            <ScrollCounter 
              scrollYProgress={scrollYProgress} 
              to={stat.value} 
              suffix={stat.suffix} 
              decimals={stat.decimals}
            />
          </dd>
        </motion.div>
      ))}
    </dl>
  </div>
);


// --- Main BrandSection Component ---

export const BrandSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // useScroll hook to track scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // Animation starts when the top of the section hits the bottom of the viewport
    // and ends when the center of the section hits the center of the viewport.
    offset: ["start end", "center center"]
  });

  return (
    <section ref={sectionRef} id="about" className="bg-white dark:bg-gray-900 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle />
        <LogoCarousel />
        <KpiSection scrollYProgress={scrollYProgress} />
      </div>
    </section>
  )
}
