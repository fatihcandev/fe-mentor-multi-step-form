import { steps } from '@/constants'
import { useFormContext } from '@/hooks'
import Button from './Button'
import Thanks from './Thanks'

const StepContent = () => {
  const { currentStep, confirmed, goBack } = useFormContext()
  const { title, subtitle, content } = steps[currentStep]
  const showBackButton = currentStep !== 'Info'
  const isSummaryStep = currentStep === 'Summary'

  return confirmed ? (
    <Thanks />
  ) : (
    <div className="flex flex-col px-[15%] pt-16 pb-8">
      <div className="mb-9 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-marineBlue">{title}</h1>
        <p className="text-coolGray">{subtitle}</p>
      </div>
      {content}
      <div className="mt-auto flex">
        {showBackButton && (
          <Button
            variant="tertiary"
            onClick={goBack}
            className="font-medium"
          >
            Go Back
          </Button>
        )}
        <Button
          variant={isSummaryStep ? 'secondary' : 'primary'}
          className="ml-auto"
          type="submit"
        >
          {isSummaryStep ? 'Confirm' : 'Next Step'}
        </Button>
      </div>
    </div>
  )
}

export default StepContent
