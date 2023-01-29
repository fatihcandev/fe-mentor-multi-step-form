import Sidebar from './Sidebar'
import StepContent from './StepContent'

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-lightBlue py-10">
      <div className="mx-auto grid w-[940px]  grid-cols-[270px,1fr] rounded-xl bg-white p-4 drop-shadow-xl">
        <Sidebar />
        <StepContent />
      </div>
    </div>
  )
}

export default Layout
