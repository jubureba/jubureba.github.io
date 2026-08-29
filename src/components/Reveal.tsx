import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

interface SectionHeadingProps {
  kicker: string
  title: string
}

export function SectionHeading({ kicker, title }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12">
      <p className="mb-2 font-mono text-sm font-semibold uppercase tracking-widest text-accent-deep dark:text-accent">
        {kicker}
      </p>
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-indigo-400" />
    </Reveal>
  )
}
