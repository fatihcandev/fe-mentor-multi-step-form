import { useFormContext } from '@/hooks'

type PriceProps = React.ComponentPropsWithoutRef<'span'> & {
  price: number
  prefix?: string
}

const Price = ({ price, prefix = '', ...props }: PriceProps) => {
  const { isYearlyPrice } = useFormContext()
  return (
    <span {...props}>
      {prefix}${price}/{isYearlyPrice ? 'yr' : 'mo'}
    </span>
  )
}

export default Price
