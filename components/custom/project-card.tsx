import React from 'react'
import Image from 'next/image'

type Props = {
  frontImage?: string
  backImage?: string
  title?: string
  topics?: string[]
}

const ProjectCard = ({ frontImage, backImage, title, topics }: Props) => {
  return (
    <div className="w-full">
      <div className="bg-primary/20 h-[370px] relative rounded-xl overflow-hidden">
        <div className="absolute bottom-0 left-4 h-[90%] w-[80%] z-10 overflow-hidden">
          <div className="container w-full h-full">
            <Image
              src={frontImage || ''}
              alt={title || ''}
              className="object-cover object-top"
              fill
            />
          </div>
        </div>
        <div className="absolute right-4 h-[90%] w-[80%] overflow-hidden">
          <div className="container w-full h-full ">
            <Image
              src={backImage || ''}
              alt={title || ''}
              className="object-cover object-top border-none"
              fill
            />
          </div>
        </div>
      </div>
      <div className="flex space-x-3 mt-4">
        {topics?.map((topic) => (
          <p className="text-sm text-primary" key={topic}>
            {topic}
          </p>
        ))}
      </div>

      <h4 className="text-xl font-extrabold mt-1 line-clamp-2">{title}</h4>
    </div>
  )
}

export default ProjectCard
