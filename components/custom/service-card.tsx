import React from 'react'

type Props = {
  name?: string
  description?: string
  icon?: React.ElementType
}

const ServiceCard = ({ name, description, icon }: Props) => {
  return (
    <div className="w-full h-72 rounded-lg bg-gray-100 flex flex-col justify-center items-start space-y-3 hover:shadow-lg hover:border-orange-500 cursor-pointer transition-all p-5">
      {icon && React.createElement(icon, { className: 'w-14 h-14 text-orange-500' })}
      <h3 className="text-xl font-extrabold uppercase">{name}</h3>
      <p className="text-sm line-clamp-3">{description}</p>
    </div>
  )
}

export default ServiceCard
