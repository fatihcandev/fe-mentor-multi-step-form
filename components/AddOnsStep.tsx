import { getAddOns } from '@/constants'
import { useFormContext } from '@/hooks'
import AddOnOption from './AddOnOption'

const AddOnsStep = () => {
  const { isYearlyPrice } = useFormContext()
  const addOns = getAddOns(isYearlyPrice)
  return (
    <div className="flex flex-col gap-4">
      {Object.values(addOns).map(addOn => (
        <AddOnOption
          key={addOn.title}
          {...addOn}
        />
      ))}
    </div>
  )
}

export default AddOnsStep
