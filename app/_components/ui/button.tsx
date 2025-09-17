'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 border'

  const variantClasses = {
    primary: 'bg-gradient-to-r from-brand-primary to-brand-accent text-white hover:shadow-glass hover:scale-105 focus:ring-brand-primary/50 border-transparent hover:-translate-y-1',
    secondary: 'glass-card text-brand-primary hover:text-brand-accent border-glass-border hover:shadow-glass hover:-translate-y-1',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white hover:shadow-glass hover:-translate-y-1',
    glass: 'glass-button text-brand-primary hover:text-brand-accent border-glass-border hover:-translate-y-1'
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  return (
    <motion.button
      whileHover={{
        scale: 1.02,
        y: -2
      }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  )
}