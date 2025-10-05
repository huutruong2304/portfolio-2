import React from 'react'
import { Progress } from '../ui/progress'

type Props = {
  name?: string
  value: number
}

const ProgressSkill = ({ name, value }: Props) => {
  return (
    <div className="flex flex-col space-y-2 my-3">
      {name && <p className="font-semibold">{name}</p>}
      <Progress value={value} className="w-full h-3" />
    </div>
  )
}

export default ProgressSkill
