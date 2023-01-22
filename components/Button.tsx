type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  variant: 'primary' | 'secondary'
}

const Button = ({ variant, children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`w-[123px] rounded-lg py-3 text-white ${
        variant === 'primary' ? 'bg-marineBlue' : 'bg-purplishBlue'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
