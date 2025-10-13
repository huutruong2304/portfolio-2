import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { UserIcon } from 'lucide-react'

type Props = {
  content: string
  name: string
  profession?: string
  avatar?: string
}

const TestimonialCard = ({ content, name, profession, avatar }: Props) => {
  return (
    <div className="w-full py-10  bg-card rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-7 items-center px-4">
      <div className="col-span-2">
        <Avatar className="w-16 h-16 md:w-20 md:h-20 lg:w-30 lg:h-30">
          <AvatarImage src={avatar} className="object-cover" alt={name + ' avatar'} />
          <AvatarFallback className="bg-primary/10">
            <UserIcon className="w-10 h-10 text-primary" />
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="col-span-5">
        <blockquote className="italic my-3">&quot;{content}&quot;</blockquote>
        <h5 className="font-bold">{name}</h5>
        <p className="text-sm font-bold">{profession}</p>
      </div>
    </div>
  )
}

export default TestimonialCard
