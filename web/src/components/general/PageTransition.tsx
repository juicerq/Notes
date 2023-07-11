'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <AnimatePresence>
      <motion.div
        key={'home-page'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 50,
          delay: 0.2,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
