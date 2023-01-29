import { useFormContext } from '@/hooks'

type PriceProps = React.ComponentPropsWithoutRef<'span'> & {
  price: number
}

const Price = ({ price, ...props }: PriceProps) => {
  const { isYearlyPrice } = useFormContext()
  return (
    <span {...props}>
      ${price}/{isYearlyPrice ? 'yr' : 'mo'}
    </span>
  )
}

export default Price
