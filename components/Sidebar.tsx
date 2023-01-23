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
        priority
      />
      <div className="relative flex flex-col gap-8">
        {Object.keys(steps).map(step => (
          <Step
            key={step}
            step={step as StepType}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
