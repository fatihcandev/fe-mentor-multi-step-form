import { Checkmark } from './icons'

export interface CheckboxProps {
  checked: boolean
}

const Checkbox = ({ checked }: CheckboxProps) => {
  return (
    <span
      className={`relative flex h-5 w-5 items-center justify-center overflow-hidden rounded-md ${
        checked ? 'bg-purplishBlue' : 'border border-lightGray'
      }`}
    >
      <input
        type="checkbox"
        className="absolute inset-0 z-10 opacity-0"
        checked={checked}
        readOnly
      />
      <Checkmark />
    </span>
  )
}

export default Checkbox
