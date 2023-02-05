import { useFormContext } from '@/hooks'
import Input from './Input'

const InfoStep = () => {
  const {
    formState: { errors },
    register,
  } = useFormContext()
  return (
    <div className="flex flex-col gap-6">
      <Input
        label="Name"
        placeholder="e.g. Stephen King"
        error={errors.name?.message}
        {...register('name')}
      />
      <Input
        label="Email Address"
        placeholder="e.g. stephenking@lorem.com"
        error={errors.email?.message}
        {...register('email')}
      />
      <Input
        label="Phone Number"
        placeholder="e.g. +1 234 567 890"
        error={errors.phone?.message}
        maxLength={11}
        {...register('phone')}
      />
    </div>
  )
}

export default InfoStep
