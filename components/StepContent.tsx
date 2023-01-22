import { steps } from '@/constants'
import { useFormContext } from '@/hooks'

const StepContent = () => {
  const { currentStep } = useFormContext()
  const { title, subtitle } = steps[currentStep]

  return (
    <div className="px-[100px] pt-16 pb-8">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}

export default StepContent
