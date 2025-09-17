'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

interface NavbarProps {
  className?: string
}

const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
]

const THEME_OPTIONS = [
  { name: 'light', icon: Sun },
  { name: 'dark', icon: Moon }
]

const ANIMATIONS = {
  container: {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  },
  item: {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20
      }
    }
  },
  navItem: {
    hover: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  },
  sidebar: {
    backdrop: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    panel: {
      initial: { x: '100%' },
      animate: {
        x: 0,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 30
        }
      },
      exit: {
        x: '100%',
        transition: { duration: 0.3 }
      }
    }
  }
}

const Logo: React.FC<{ size?: 'default' | 'small' }> = ({ size = 'default' }) => {
  const sizeClasses = size === 'small'
    ? 'h-8 w-28 text-base'
    : 'h-10 w-32 text-lg'

  return (
    <div className={`${sizeClasses} bg-gradient-to-r from-brand-primary to-brand-accent rounded-lg flex items-center justify-center`}>
      <span className="text-white font-bold">NexlifAI</span>
    </div>
  )
}

const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`theme-toggle-modern p-3 transition-all duration-300 relative group ${className}`}
    >
      <motion.div
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {theme === 'light' && <Sun className="w-5 h-5" />}
        {theme === 'dark' && <Moon className="w-5 h-5" />}
      </motion.div>
      <div className="theme-glow absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  )
}

const NavigationItems: React.FC = () => (
  <div className="hidden lg:flex items-center space-x-1">
    {NAV_ITEMS.map((item) => (
      <motion.a
        key={item.label}
        href={item.href}
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        className="nav-item-modern relative px-6 py-3 font-medium text-sm transition-all duration-300 group"
      >
        <span className="relative z-10">{item.label}</span>
        <motion.div
          className="nav-item-bg-modern absolute inset-0"
          initial={{ opacity: 0, scale: 0.8 }}
          variants={ANIMATIONS.navItem}
        />
        <motion.div
          className="nav-item-glow absolute inset-0"
          initial={{ opacity: 0 }}
          variants={ANIMATIONS.navItem}
        />
      </motion.a>
    ))}
  </div>
)

const CTAButton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.a
    href="#contact"
    whileHover={{
      scale: 1.02,
      transition: { type: 'spring', stiffness: 400, damping: 17 }
    }}
    whileTap={{ scale: 0.98 }}
    className={`cta-button-modern px-8 py-3 font-semibold text-sm transition-all duration-300 relative overflow-hidden group ${className}`}
  >
    <span className="relative z-10">Get Started</span>
    <motion.div
      className="cta-bg-modern absolute inset-0"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    />
    <div className="cta-glow absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.a>
)

const MobileMenuButton: React.FC<{
  isOpen: boolean
  onClick: () => void
}> = ({ isOpen, onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="lg:hidden mobile-menu-btn-modern p-3 transition-all duration-300 relative"
  >
    <AnimatePresence mode="wait">
      {isOpen ? (
        <motion.div
          key="close"
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <X className="w-5 h-5" />
        </motion.div>
      ) : (
        <motion.div
          key="menu"
          initial={{ rotate: 90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: -90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Menu className="w-5 h-5" />
        </motion.div>
      )}
    </AnimatePresence>
  </motion.button>
)

const SidebarNavigation: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col h-full p-8">
      <div className="flex items-center justify-between mb-12">
        <Logo size="small" />
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="sidebar-close-btn p-2 transition-all duration-300"
        >
          <X className="w-6 h-6" />
        </motion.button>
      </div>

      <div className="flex flex-col space-y-2 flex-1">
        {NAV_ITEMS.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            onClick={onClose}
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: index * 0.1 + 0.1 }
            }}
            whileHover={{ x: 4 }}
            className="sidebar-nav-item font-semibold text-lg py-4 px-4 transition-all duration-300 group relative"
          >
            <span className="relative z-10">{item.label}</span>
            <motion.div
              className="sidebar-item-bg absolute inset-0 rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileHover={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.2 }
              }}
            />
          </motion.a>
        ))}

        {mounted && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: NAV_ITEMS.length * 0.1 + 0.1 }
            }}
            className="py-4 px-4"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="sidebar-nav-item font-semibold text-lg">Theme</span>
            </div>
            <div className="flex space-x-3">
              {THEME_OPTIONS.map(({ name, icon: Icon }) => (
                <motion.button
                  key={name}
                  onClick={() => setTheme(name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`sidebar-theme-btn p-3 transition-all duration-300 relative ${
                    theme === name ? 'sidebar-theme-active' : 'sidebar-theme-inactive'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <motion.a
        href="#contact"
        onClick={onClose}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.4 }
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="sidebar-cta px-8 py-4 font-bold text-center transition-all duration-300 relative group overflow-hidden"
      >
        <span className="relative z-10">Get Started</span>
        <motion.div
          className="sidebar-cta-bg absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>
    </div>
  )
}

const MobileSidebar: React.FC<{
  isOpen: boolean
  onClose: () => void
}> = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          {...ANIMATIONS.sidebar.backdrop}
          onClick={onClose}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
        />
        <motion.div
          {...ANIMATIONS.sidebar.panel}
          className="fixed right-0 top-0 h-full w-80 z-50 lg:hidden mobile-sidebar"
        >
          <SidebarNavigation onClose={onClose} />
        </motion.div>
      </>
    )}
  </AnimatePresence>
)

export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <motion.nav
        variants={ANIMATIONS.container}
        initial="hidden"
        animate="visible"
        className={`fixed top-4 left-4 right-4 z-50 ${className}`}
      >
        <motion.div
          className={`
            modern-navbar transition-all duration-500 ease-out
            ${scrolled ? 'navbar-scrolled px-8 py-3' : 'navbar-default px-8 py-4'}
          `}
        >
          <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
            <motion.div
              variants={ANIMATIONS.item}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 z-10"
            >
              <a href="#" className="flex items-center">
                <Logo />
              </a>
            </motion.div>

            <motion.div variants={ANIMATIONS.item}>
              <NavigationItems />
            </motion.div>

            <motion.div
              variants={ANIMATIONS.item}
              className="hidden lg:flex items-center space-x-4"
            >
              <ThemeToggle />
              <CTAButton />
            </motion.div>

            <MobileMenuButton
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </motion.div>
      </motion.nav>

      <MobileSidebar isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  )
}