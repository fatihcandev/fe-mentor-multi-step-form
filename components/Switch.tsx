// switch component

import React from 'react'

export interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

export const Switch = ({ checked, onChange }: SwitchProps) => {
  return (
    <span className="relative h-5 w-[38px] rounded-full bg-marineBlue p-1">
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        className="absolute inset-0 z-20 cursor-pointer opacity-0"
      />
      <span
        className={`absolute left-1 z-10 flex h-3 w-3 rounded-[50%] bg-white transition-all ${
          checked ? 'left-[22px]' : ''
        }`}
      />
    </span>
  )
}

export default Switch
