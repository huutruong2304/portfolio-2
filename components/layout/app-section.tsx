import React from 'react'

type Props = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode
}

const AppSection = ({ children, ...props }: Props) => {
  return (
    <section className="w-full my-20" {...props}>
      {children}
    </section>
  )
}

export default AppSection
