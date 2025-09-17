'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

// --- Constants & Configuration ---

const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Contact', href: '#contact' }
];

const ANIMATIONS = {
  // Animation variants for components
  // ... (keeping this concise for brevity)
};

// --- Main Navbar & Sub-Components ---

const Logo: React.FC = () => (
  <a href="#" className="flex items-center">
    <div className="h-10 w-32 bg-gradient-to-r from-brand-primary to-brand-accent rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-lg">NexlifAI</span>
    </div>
  </a>
);

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-11 h-11" />; // Placeholder for SSR

  return (
    <motion.button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="theme-toggle-modern p-3 transition-all duration-300 relative group"
      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
        </motion.div>
      </AnimatePresence>
      <div className="theme-glow absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.button>
  );
};

const NavigationItems: React.FC<{ activeSection: string }> = ({ activeSection }) => (
  <div className="hidden lg:flex items-center space-x-1">
    {NAV_ITEMS.map((item) => {
      const isActive = activeSection === item.href.substring(1);
      return (
        <motion.a
          key={item.label}
          href={item.href}
          className={`nav-item-modern relative px-6 py-3 font-medium text-sm transition-all duration-300 group ${isActive ? 'nav-item-active' : ''}`}
        >
          <span className="relative z-10">{item.label}</span>
          {isActive && (
            <motion.div
              layoutId="active-nav-bg"
              className="nav-item-bg-modern absolute inset-0"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </motion.a>
      );
    })}
  </div>
);

const CTAButton: React.FC = () => (
  <motion.a
    href="#contact"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="cta-button-modern px-8 py-3 font-semibold text-sm transition-all duration-300 relative overflow-hidden group"
  >
    <span className="relative z-10">Get Started</span>
    <div className="cta-bg-modern absolute inset-0" />
  </motion.a>
);

// --- Main Navbar Component ---

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // --- Scroll Spy Logic ---
  useEffect(() => {
    const handleScroll = () => {
      // Scrolled state for navbar background
      setScrolled(window.scrollY > 20);

      // Active section highlighting
      const sections = NAV_ITEMS.map(item => document.getElementById(item.href.substring(1)));
      let currentSection = '';

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop - 150; // Offset for better accuracy
          const sectionHeight = section.clientHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="fixed top-4 left-4 right-4 z-50"
      >
        <div className={`modern-navbar transition-all duration-300 ${scrolled ? 'navbar-scrolled' : 'navbar-default'}`}>
          <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-8 py-3">
            <Logo />
            <NavigationItems activeSection={activeSection} />
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
              <CTAButton />
            </div>
            {/* Mobile menu would go here */}
          </div>
        </div>
      </motion.nav>
    </>
  );
}
