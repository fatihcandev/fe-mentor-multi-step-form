import { steps } from '@/constants'
import { useFormContext } from '@/hooks'

const StepContent = () => {
  const { currentStep } = useFormContext()
  const { title, subtitle } = steps[currentStep]

  return (
    <div className="px-[100px] pt-16 pb-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-marineBlue">{title}</h1>
        <p className="text-coolGray">{subtitle}</p>
      </div>
    </div>
  )
}

export default StepContent
