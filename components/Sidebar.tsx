import Image from 'next/image'
import Step from './Step'
import { Step as StepType } from '@/types'
import { steps } from '@/constants'

const Sidebar = () => {
  return (
    <div className="relative overflow-hidden rounded-lg pt-10 pl-8">
      <Image
        src="/assets/images/bg-sidebar-desktop.svg"
        alt="sidebar background"
        fill
        style={{
          objectFit: 'cover',
        }}
      />
      <div className="relative flex flex-col gap-8">
        {Object.keys(steps).map((step: StepType) => (
          <Step key={step} step={step} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
