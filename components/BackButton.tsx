import { useFormContext } from '@/hooks'

const BackButton = () => {
  const { goBack } = useFormContext()

  return (
    <button onClick={goBack} className="font-medium text-coolGray">
      Go Back
    </button>
  )
}

export default BackButton
