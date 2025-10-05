import React from 'react'

type Props = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode
}

const TwoColSection = ({ children, ...props }: Props) => {
  return (
    <section className="my-20 grid-cols-2 gap-10 md:grid" {...props}>
      {children}
    </section>
  )
}

export default TwoColSection
