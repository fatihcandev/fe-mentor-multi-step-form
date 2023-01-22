import Sidebar from './Sidebar'
import StepContent from './StepContent'

export const Layout = () => {
  return (
    <div className="flex min-h-screen bg-lightBlue py-[100px]">
      <div className="mx-auto grid w-[940px] grid-cols-[270px,1fr] rounded-xl bg-white p-4">
        <Sidebar />
        <StepContent />
      </div>
    </div>
  )
}
