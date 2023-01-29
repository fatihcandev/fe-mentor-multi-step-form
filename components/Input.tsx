import React from 'react'

type NativeInputProps = Omit<React.ComponentPropsWithRef<'input'>, 'onChange'>

interface InputProps extends NativeInputProps {
  label: string
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <label
            className="text-sm text-marineBlue"
            htmlFor={id}
          >
            {label}
          </label>
          {error && (
            <span className="text-sm font-medium text-strawberryRed">
              {error}
            </span>
          )}
        </div>
        <input
          ref={ref}
          className={`rounded-md border border-coolGray py-3 px-4 text-marineBlue placeholder-coolGray  outline-none hover:border-purplishBlue focus:border-purplishBlue ${
            error ? 'border-strawberryRed' : ''
          }`}
          {...props}
        />
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
