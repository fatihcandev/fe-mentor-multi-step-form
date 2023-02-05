import { addOns } from '@/constants'
import AddOnOption from './AddOnOption'

const AddOnsStep = () => {
  return (
    <div className="flex flex-col gap-4">
      {addOns.map(addOn => (
        <AddOnOption
          key={addOn.title}
          {...addOn}
        />
      ))}
    </div>
  )
}

export default AddOnsStep
