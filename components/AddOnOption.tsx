import React from 'react'
import Checkbox from './Checkbox'
import { useFormContext } from '@/hooks'
import { AddOn } from '@/types'
import Price from './Price'

const AddOnOption = (addOn: AddOn) => {
  const { type, title, description, monthlyPrice, yearlyPrice } = addOn
  const { isYearlyPrice, selectedAddOns, handleSelectAddOn } = useFormContext()
  const isSelected = selectedAddOns.some(sa => sa.type === type)
  return (
    <button
      type="button"
      className={`flex items-center rounded-lg border border-lightGray p-6 ${
        isSelected ? 'bg-magnolia' : ''
      }`}
      onClick={() => handleSelectAddOn(addOn)}
    >
      <Checkbox checked={isSelected} />
      <div className="ml-6 flex flex-1 flex-col gap-0.5 text-left">
        <span className="font-medium text-marineBlue">{title}</span>
        <p className="text-sm text-coolGray">{description}</p>
      </div>
      <Price
        price={isYearlyPrice ? yearlyPrice : monthlyPrice}
        prefix="+"
        className="text-sm text-purplishBlue"
      />
    </button>
  )
}

export default AddOnOption
