import PlanOption from './PlanOption'
import PaymentPeriodSwitch from './PaymentPeriodSwitch/PaymentPeriodSwitch'
import { useFormContext } from '@/hooks'
import { getPlans } from '@/constants/plans'

const PlanStep = () => {
  const { isYearlyPrice } = useFormContext()
  const plans = getPlans(isYearlyPrice)
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4">
        {Object.values(plans).map(plan => (
          <PlanOption
            key={plan.title}
            {...plan}
          />
        ))}
      </div>
      <PaymentPeriodSwitch />
    </div>
  )
}

export default PlanStep
