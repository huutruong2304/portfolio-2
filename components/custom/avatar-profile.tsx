import React from 'react'
import { AspectRatio } from '../ui/aspect-ratio'
import Image from 'next/image'

type Props = {
  src: string
  alt?: string
}

const AvatarProfile = ({ src, alt = 'avatar' }: Props) => {
  return (
    <div className="w-52 h-52 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-transparent rounded-full border-2 shadow-2xl">
      <AspectRatio ratio={1 / 1} className="w-full rounded-full overflow-hidden">
        <Image className="object-cover" src={src} fill alt={alt} />
      </AspectRatio>
    </div>
  )
}

export default AvatarProfile
