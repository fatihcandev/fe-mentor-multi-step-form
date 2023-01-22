import Sidebar from './Sidebar'
import StepContent from './StepContent'

export const Layout = () => {
  return (
    <div className="min-h-screen grid grid-cols-[270px,1fr] p-4 rounded-sm">
      <Sidebar />
      <StepContent />
    </div>
  )
}
