import { useFormContext } from '@/hooks'
import Sidebar from './Sidebar'
import StepContent from './StepContent'

const Layout = () => {
  const { goToNextStep, trigger, reset, getValues, handleSubmit } =
    useFormContext()

  const onSubmit = async () => {
    const isValid = await trigger()
    if (!isValid) return
    const values = getValues()
    reset(values)

    goToNextStep()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex min-h-screen bg-lightBlue py-10">
        <div className="mx-auto grid w-[66%]  grid-cols-[270px,1fr] rounded-xl bg-white p-4 drop-shadow-xl">
          <Sidebar />
          <StepContent />
        </div>
      </div>
    </form>
  )
}

export default Layout
