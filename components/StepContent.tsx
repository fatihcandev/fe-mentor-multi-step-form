import { steps } from '@/constants'
import { useFormContext } from '@/hooks'
import Button from './Button'
import BackButton from './BackButton'

const StepContent = () => {
  const { currentStep, goToNextStep } = useFormContext()
  const { title, subtitle } = steps[currentStep]
  const isNotFirstStep = currentStep !== 'Info'

  return (
    <div className="flex flex-col px-[90px] pt-16 pb-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-marineBlue">{title}</h1>
        <p className="text-coolGray">{subtitle}</p>
      </div>
      <div className="mt-auto flex">
        {isNotFirstStep && <BackButton />}
        <Button variant="primary" className="ml-auto" onClick={goToNextStep}>
          Next Step
        </Button>
      </div>
    </div>
  )
}

export default StepContent
