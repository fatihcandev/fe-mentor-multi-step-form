type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  variant: 'primary' | 'secondary' | 'tertiary'
}

const styles: Record<ButtonProps['variant'], string> = {
  primary: 'bg-marineBlue text-white min-w-[123px]',
  secondary: 'bg-purplishBlue text-white min-w-[123px]',
  tertiary: 'bg-transparent text-coolGray w-fit',
}

const Button = ({ variant, children, className, ...props }: ButtonProps) => {
  const style = styles[variant]
  return (
    <button
      className={`rounded-lg py-3 ${style} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
