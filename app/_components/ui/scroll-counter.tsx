'use client'

import { useEffect } from 'react'
import { motion, useTransform, MotionValue, animate } from 'framer-motion'

interface ScrollCounterProps {
  scrollYProgress: MotionValue<number>;
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

/**
 * A component that animates a number based on scroll progress.
 */
export const ScrollCounter: React.FC<ScrollCounterProps> = ({ 
  scrollYProgress, 
  to, 
  prefix = '', 
  suffix = '', 
  decimals = 0 
}) => {
  // Create a motion value that transforms the scroll progress (0-1) into a numerical value (0-to).
  // The animation starts when scrollYProgress is at 0.1 and ends at 0.9 for a smoother effect.
  const value = useTransform(scrollYProgress, [0.1, 0.9], [0, to], { clamp: true });
  
  // Create a new motion value to format the number as text with prefix, suffix, and decimals.
  const displayText = useTransform(value, (current) => prefix + current.toFixed(decimals) + suffix);

  return <motion.span>{displayText}</motion.span>;
};
