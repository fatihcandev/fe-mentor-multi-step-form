import { steps } from '@/constants'
import { useFormContext } from '@/hooks'
import Button from './Button'
import BackButton from './BackButton'

const StepContent = () => {
  const { currentStep, goToNextStep, trigger, reset, getValues } =
    useFormContext()
  const { title, subtitle, content } = steps[currentStep]
  const isNotFirstStep = currentStep !== 'Info'

  const validateStep = async () => {
    const isValid = await trigger()
    if (!isValid) return
    const values = getValues()
    reset(values, {
      keepValues: true,
    })

    goToNextStep()
  }

  return (
    <div className="flex flex-col px-[90px] pt-16 pb-8">
      <div className="mb-9 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-marineBlue">{title}</h1>
        <p className="text-coolGray">{subtitle}</p>
      </div>
      {content}
      <div className="mt-auto flex">
        {isNotFirstStep && <BackButton />}
        <Button
          variant="primary"
          className="ml-auto"
          onClick={validateStep}
        >
          Next Step
        </Button>
      </div>
    </div>
  )
}

export default StepContent
