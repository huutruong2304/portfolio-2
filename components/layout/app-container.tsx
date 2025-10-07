import React from 'react'

type Props = {
  children?: React.ReactNode
}

const AppContainer = ({ children }: Props) => {
  return <div className="app-container w-[100vw] overflow-hidden">{children}</div>
}

export default AppContainer
