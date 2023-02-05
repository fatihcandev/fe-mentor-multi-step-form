import Price from './Price'
import { useFormContext } from '@/hooks'
import { Plan } from '@/types'

const PlanOption = (plan: Plan) => {
  const { type, icon, title, monthlyPrice, yearlyPrice } = plan
  const { isYearlyPrice, selectedPlan, setSelectedPlan } = useFormContext()
  const isSelected = selectedPlan.type === type
  return (
    <button
      type="button"
      className={`flex h-[160px] w-[138px] flex-col rounded-lg border border-coolGray p-4 hover:border-purplishBlue ${
        isSelected ? 'border-purplishBlue bg-magnolia' : ''
      }`}
      onClick={() => setSelectedPlan(plan)}
    >
      <span className="mb-auto">{icon}</span>
      <span className="mb-0.5 font-medium text-marineBlue">{title}</span>
      <Price
        price={isYearlyPrice ? yearlyPrice : monthlyPrice}
        className="text-sm text-coolGray"
      />
    </button>
  )
}

export default PlanOption
