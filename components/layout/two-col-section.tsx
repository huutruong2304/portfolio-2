import React from 'react'

type Props = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode
}

const TwoColSection = ({ children, ...props }: Props) => {
  return (
    <section className="py-20 grid-cols-2 gap-10 md:grid min-h-[90vh] flex items-center" {...props}>
      {children}
    </section>
  )
}

export default TwoColSection
