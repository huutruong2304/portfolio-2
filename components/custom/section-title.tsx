import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
  name?: string
  className?: string
}

const SectionTitle = ({ name, className }: Props) => {
  return (
    <h2
      className={cn('text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 md:text-center', className)}
    >
      {name}
    </h2>
  )
}

export default SectionTitle
