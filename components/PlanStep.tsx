import PlanOption from './PlanOption'
import PaymentPeriodSwitch from './PaymentPeriodSwitch/PaymentPeriodSwitch'
import { plans } from '@/constants'

const PlanStep = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-center gap-4">
        {plans.map(plan => (
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
