import { useFormContext } from '@/hooks'
import Price from '../Price'

const AddOnSummary = () => {
  const { isYearlyPrice, selectedAddOns } = useFormContext()

  if (!selectedAddOns.length) return null

  const addOnsSortedByPrice = selectedAddOns.sort(
    (a, b) => a.monthlyPrice - b.monthlyPrice
  )

  return (
    <div className="flex flex-col gap-6">
      {addOnsSortedByPrice.map(addOn => (
        <div
          key={addOn.type}
          className="flex justify-between"
        >
          <span className="text-coolGray">{addOn.title}</span>
          <Price
            price={isYearlyPrice ? addOn.yearlyPrice : addOn.monthlyPrice}
            prefix="+"
            className="text-marineBlue"
          />
        </div>
      ))}
    </div>
  )
}

export default AddOnSummary
