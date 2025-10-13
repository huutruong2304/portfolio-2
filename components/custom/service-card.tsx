import React from 'react'

type Props = {
  name?: string
  description?: string
  icon?: React.ElementType
}

const ServiceCard = ({ name, description, icon }: Props) => {
  return (
    <div className="w-full py-10 lg:min-h-56 rounded-xl bg-card flex flex-col justify-start items-start space-y-3 hover:shadow-lg hover:border-orange-500 cursor-pointer transition-all p-2 md:p-5">
      {icon &&
        React.createElement(icon, { className: 'w-10 h-10 md:w-14 md:h-14 text-orange-500' })}
      <h3 className="text-foreground text-lg md:text-xl font-extrabold uppercase break-words line-clamp-2">
        {name}
      </h3>
      <p className="text-card-foreground text-sm line-clamp-3 italic">{description}</p>
    </div>
  )
}

export default ServiceCard
