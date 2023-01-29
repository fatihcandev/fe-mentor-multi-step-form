import { PlanInfo } from '@/types'
import Price from './Price'
import { useFormContext } from '@/hooks'

const PlanOption = ({ type, icon, title, price }: PlanInfo) => {
  const { selectedPlan, setSelectedPlan } = useFormContext()
  const isSelected = selectedPlan === type
  return (
    <button
      className={`flex h-[160px] w-[138px] flex-col rounded-lg border-[1px] border-coolGray p-4 hover:border-purplishBlue ${
        isSelected ? 'border-purplishBlue bg-alabaster' : ''
      }`}
      onClick={() => setSelectedPlan(type)}
    >
      <span className="mb-auto">{icon}</span>
      <span className="mb-0.5 font-medium text-marineBlue">{title}</span>
      <Price
        price={price}
        className="text-sm text-coolGray"
      />
    </button>
  )
}

export default PlanOption
