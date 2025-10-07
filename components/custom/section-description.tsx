import React from 'react'

type Props = {
  content?: string
}

const SectionDescription = ({ content }: Props) => {
  return <p className="md:text-center">{content}</p>
}

export default SectionDescription
