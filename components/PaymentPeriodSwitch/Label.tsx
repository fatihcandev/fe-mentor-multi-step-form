import React from 'react'

type LabelProps = {
  children: React.ReactNode
  selected: boolean
}

const Label = ({ children, selected }: LabelProps) => {
  return (
    <span
      className={`text-sm font-medium ${
        selected ? 'text-marineBlue' : 'text-coolGray'
      }`}
    >
      {children}
    </span>
  )
}

export default Label
