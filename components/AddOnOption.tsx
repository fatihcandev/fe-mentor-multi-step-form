import React from 'react'
import Checkbox from './Checkbox'
import { useFormContext } from '@/hooks'
import { AddOnInfo } from '@/types'
import Price from './Price'

const AddOnOption = ({ type, title, description, price }: AddOnInfo) => {
  const { selectedAddOns, handleSelectAddOn } = useFormContext()
  const isSelected = selectedAddOns.includes(type)
  return (
    <button
      className={`flex items-center rounded-lg border border-lightGray p-6 ${
        isSelected ? 'bg-magnolia' : ''
      }`}
      onClick={() => handleSelectAddOn(type)}
    >
      <Checkbox checked={selectedAddOns.includes(type)} />
      <div className="ml-6 flex flex-1 flex-col gap-0.5 text-left">
        <span className="font-medium text-marineBlue">{title}</span>
        <p className="text-sm text-coolGray">{description}</p>
      </div>
      <Price
        price={price}
        prefix="+"
        className="text-sm text-purplishBlue"
      />
    </button>
  )
}

export default AddOnOption
