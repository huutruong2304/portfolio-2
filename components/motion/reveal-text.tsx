'use client'
import { motion } from 'framer-motion'
import React from 'react'

type RevealTextProps = {
  text: string
  delay?: number
  duration?: number
}

export const RevealText = ({ text, delay = 0, duration = 0.05 }: RevealTextProps) => {
  const letters = text.split('')

  return (
    <motion.span
      style={{ display: 'inline-block', overflow: 'hidden' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block' }}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{
            delay: delay + i * duration,
            ease: 'easeOut',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}
