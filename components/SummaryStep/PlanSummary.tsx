import { useFormContext } from '@/hooks'
import Button from '../Button'
import Price from '../Price'

const PlanSummary = () => {
  const { selectedPlan, selectedPlanCost, paymentPeriod, setCurrentStep } =
    useFormContext()

  const handleChangePlan = () => {
    setCurrentStep('Plan')
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <span className="font-medium text-marineBlue">
          {selectedPlan.type} ({paymentPeriod})
        </span>
        <Button
          variant="tertiary"
          className="py-0 text-sm underline hover:text-purplishBlue"
          onClick={handleChangePlan}
        >
          Change
        </Button>
      </div>
      <Price
        price={selectedPlanCost}
        className="font-bold text-marineBlue"
      />
    </div>
  )
}

export default PlanSummary
