import { steps } from '@/constants'
import { useFormContext } from '@/hooks'
import { Step as StepType } from '@/types'

type StepProps = {
  step: StepType
}

const Step = ({ step }: StepProps) => {
  const { stepTitle } = steps[step]
  const stepNumber = Object.keys(steps).indexOf(step) + 1
  const { setCurrentStep } = useFormContext()
  return (
    <button
      className="flex gap-4 text-left"
      onClick={() => setCurrentStep(step)}
    >
      <span>{stepNumber}</span>
      <span className="flex flex-col gap-2">
        <span>STEP {stepNumber}</span>
        <span>{stepTitle}</span>
      </span>
    </button>
  )
}

export default Step
