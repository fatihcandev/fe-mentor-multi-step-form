import { steps } from '@/constants'
import { useFormContext } from '@/hooks'
import { Step as StepType } from '@/types'

type StepProps = {
  step: StepType
}

const Step = ({ step }: StepProps) => {
  const { stepTitle } = steps[step]
  const stepNumber = Object.keys(steps).indexOf(step) + 1
  const { currentStep, completedSteps, confirmed, setCurrentStep } =
    useFormContext()
  const isCurrentStep = currentStep === step
  const isDisabled = !completedSteps.includes(step) || confirmed
  return (
    <button
      className="flex items-center gap-4 text-left"
      onClick={() => setCurrentStep(step)}
      disabled={isDisabled}
      type="button"
    >
      <span
        className={`${
          isCurrentStep
            ? 'border-pastelBlue bg-pastelBlue text-marineBlue'
            : 'border-white text-white'
        } rounded-[50%] border-2 py-2 px-4 font-medium transition-all ease-out`}
      >
        {stepNumber}
      </span>
      <span className="flex flex-col">
        <span className="text-sm text-coolGray">STEP {stepNumber}</span>
        <span className="font-medium text-white">{stepTitle}</span>
      </span>
    </button>
  )
}

export default Step
