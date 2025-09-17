'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'

// --- Animated Counter Component ---
interface CounterProps {
  from?: number;
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const Counter: React.FC<CounterProps> = ({ from = 0, to, prefix = '', suffix = '', decimals = 0 }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = prefix + value.toFixed(decimals) + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, prefix, suffix, decimals]);

  return <span ref={nodeRef}>{prefix}{from.toFixed(decimals)}{suffix}</span>;
};

// --- Brand Logos (using inline SVGs for theming) ---
const brands = [
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

const kpis = [
  { value: 50, suffix: '+', label: 'Enterprise Clients' },
  { value: 10, suffix: 'M+', label: 'Users Served' },
  { value: 99.9, suffix: '%', label: 'Uptime SLA', decimals: 1 },
  { value: 24, suffix: '/7', label: 'Support Availability' },
];

// --- Main BrandSection Component ---
export const BrandSection: React.FC = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900/10 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mx-auto max-w-2xl lg:max-w-3xl text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl"
          >
            Trusted by the world's most innovative companies
          </motion.h2>
        </div>

        {/* Logo Carousel */}
        <div className="w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="mx-6 flex w-48 flex-shrink-0 items-center justify-center">
                <div className="logo-card w-full h-24 flex items-center justify-center p-6">
                  <div className="h-10 w-auto text-gray-500 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-white">
                    {brand.logo}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KPIs/Stats Section */}
        <div className="mx-auto mt-24 max-w-7xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {kpis.map((stat) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">{stat.label}</dt>
                <dd className="order-first text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  <Counter to={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

      </div>
    </section>
  )
}
