import Switch from '../Switch'
import Label from './Label'
import { useFormContext } from '@/hooks'

const PaymentPeriodSwitch = () => {
  const { isYearlyPrice, togglePaymentPeriod } = useFormContext()
  return (
    <div className="flex items-center justify-center gap-4 rounded-lg bg-alabaster py-4">
      <Label selected={!isYearlyPrice}>Monthly</Label>
      <Switch
        checked={isYearlyPrice}
        onChange={togglePaymentPeriod}
      />
      <Label selected={isYearlyPrice}>Yearly</Label>
    </div>
  )
}

export default PaymentPeriodSwitch
