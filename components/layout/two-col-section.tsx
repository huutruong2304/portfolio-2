import { cn } from '@/lib/utils'
import React from 'react'

type Props = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode
}

const TwoColSection = ({ children, className, ...props }: Props) => {
  return (
    <section
      className={cn(
        'bg-background py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 md:grid md:min-h-[90vh] items-center',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  )
}

export default TwoColSection
