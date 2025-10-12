'use client'
import { motion } from 'framer-motion'
import React from 'react'

type FadeInProps = {
  children: React.ReactNode
  delay?: number
  duration?: number
}

export const FadeIn = ({ children, delay = 0, duration = 0.6 }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay, duration, ease: 'easeOut' }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
)
