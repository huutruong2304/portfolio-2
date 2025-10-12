'use client'
import { motion } from 'framer-motion'
import React from 'react'

type ZoomInProps = {
  children: React.ReactNode
  delay?: number
}

export const ZoomIn = ({ children, delay = 0 }: ZoomInProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
)
