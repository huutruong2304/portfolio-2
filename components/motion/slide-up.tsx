'use client'
import { motion } from 'framer-motion'
import React from 'react'

type SlideUpProps = {
  children: React.ReactNode
  delay?: number
  y?: number
}

export const SlideUp = ({ children, delay = 0.5, y = 40 }: SlideUpProps) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
)
