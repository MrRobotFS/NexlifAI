'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface AccordionItemProps {
  title: string
  content: string
  icon: React.ReactNode
  isDefaultOpen?: boolean
}

interface AccordionProps {
  items: AccordionItemProps[]
}

const AccordionItem: React.FC<AccordionItemProps & { isOpen: boolean; onToggle: () => void }> = ({
  title,
  content,
  icon,
  isOpen,
  onToggle
}) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-6 px-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-lg ${isOpen ? 'bg-gradient-to-r from-brand-primary to-brand-accent text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'}`}>
              {icon}
            </div>
            <h3 className={`text-xl font-semibold ${isOpen ? 'text-gradient' : 'text-gray-900 dark:text-white'}`}>
              {title}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-gray-500 dark:text-gray-400"
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 ml-16">
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {content}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0])) // First item open by default
  
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (openItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          {...item}
          isOpen={openItems.has(index)}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  )
}