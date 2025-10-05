import React from 'react'

type Props = {
  name?: string
  className?: string
}

const SectionTitle = ({ name, className }: Props) => {
  return <h2 className={'text-5xl font-extrabold mb-5 ' + (className ? className : '')}>{name}</h2>
}

export default SectionTitle
