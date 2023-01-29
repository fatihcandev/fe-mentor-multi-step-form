import { Checkmark } from './icons'

export interface CheckboxProps {
  checked: boolean
  // eslint-disable-next-line no-unused-vars
  onChange?: (checked: boolean) => void
}

const Checkbox = ({ checked, onChange }: CheckboxProps) => {
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
        onChange={onChange ? e => onChange(e.target.checked) : undefined}
      />
      <Checkmark />
    </span>
  )
}

export default Checkbox
