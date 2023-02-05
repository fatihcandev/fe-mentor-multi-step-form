import { useFormContext } from '@/hooks'
import React from 'react'
import Price from '../Price'

const Total = () => {
  const { isYearlyPrice, selectedPlanCost, selectedAddOns } = useFormContext()
  const addOnPrices = selectedAddOns.map(addOn =>
    isYearlyPrice ? addOn.yearlyPrice : addOn.monthlyPrice
  )
  const totalAddOnPrices = addOnPrices.reduce((a, b) => a + b, 0)
  const total = selectedPlanCost + totalAddOnPrices
  return (
    <div className="flex justify-between px-6">
      <span className="text-coolGray">
        Total (per {isYearlyPrice ? 'year' : 'month'})
      </span>
      <Price
        price={total}
        className="text-xl font-bold text-purplishBlue"
      />
    </div>
  )
}

export default Total
