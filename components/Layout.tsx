import Sidebar from './Sidebar'
import StepContent from './StepContent'

export const Layout = () => {
  return (
    <div className="grid min-h-screen grid-cols-[270px,1fr] rounded-sm p-4">
      <Sidebar />
      <StepContent />
    </div>
  )
}
