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
  <a href="#" className="flex items-center flex-shrink-0">
    <div className="h-8 w-24 sm:h-10 sm:w-32 bg-gradient-to-r from-brand-primary to-brand-accent rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-sm sm:text-lg">NexlifAI</span>
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

const MobileMenuButton: React.FC<{ isOpen: boolean; onClick: () => void }> = ({ isOpen, onClick }) => (
  <motion.button
    onClick={onClick}
    className="mobile-menu-btn-modern p-3 lg:hidden"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <AnimatePresence mode="wait">
      <motion.div
        key={isOpen ? 'close' : 'open'}
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: 90 }}
        transition={{ duration: 0.2 }}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </motion.div>
    </AnimatePresence>
  </motion.button>
);

const MobileSidebar: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}> = ({ isOpen, onClose, activeSection }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const sidebarStyle = theme === 'dark' ? {
    background: 'rgba(17, 24, 39, 0.75)',
    backdropFilter: 'blur(20px) saturate(180%) brightness(120%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%) brightness(120%)',
    borderLeft: '1px solid rgba(55, 65, 81, 0.4)',
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
    boxShadow: `
      -8px 0 32px rgba(0, 0, 0, 0.3),
      -2px 0 8px rgba(0, 0, 0, 0.2),
      inset 1px 0 0 rgba(255, 255, 255, 0.1)
    `
  } : {
    background: 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
    boxShadow: `
      -8px 0 32px rgba(0, 0, 0, 0.12),
      -2px 0 8px rgba(0, 0, 0, 0.08),
      inset 1px 0 0 rgba(255, 255, 255, 0.3)
    `
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-80 z-50 lg:hidden"
            style={sidebarStyle}
          >
            <div className="flex flex-col h-full p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pt-2">
                <div className="h-8 w-24 bg-gradient-to-r from-brand-primary to-brand-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">NexlifAI</span>
                </div>
                <motion.button
                  onClick={onClose}
                  className="p-2 rounded-full bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={18} className="text-gray-600 dark:text-gray-300" />
                </motion.button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 space-y-1">
                {NAV_ITEMS.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={onClose}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 relative ${
                        isActive
                          ? 'bg-gray-100/60 dark:bg-gray-800/60 text-brand-primary dark:text-brand-light font-semibold'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/40 dark:hover:bg-gray-800/40'
                      }`}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}
              </nav>


              {/* CTA Button */}
              <motion.a
                href="#contact"
                onClick={onClose}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-brand-primary to-brand-accent text-white px-6 py-4 rounded-xl font-semibold text-center transition-all duration-200 hover:shadow-lg mt-6"
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

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
          <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-3">
            <Logo />
            <NavigationItems activeSection={activeSection} />
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
              <CTAButton />
            </div>
            <div className="flex lg:hidden items-center space-x-1">
              <MobileMenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
