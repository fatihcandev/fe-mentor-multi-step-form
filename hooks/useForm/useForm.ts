import {
  useForm as useReactHookForm,
  useFormContext as useRHFormContext,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormValues, schema } from './schema'

export const useForm = () => {
  return useReactHookForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      currentStep: 'Info',
      name: '',
      email: '',
      phone: '',
    },
  })
}

export const useFormContext = () => {
  const form = useRHFormContext<FormValues>()
  const { setValue, watch } = form
  const { currentStep } = watch()

  const setCurrentStep = (step: FormValues['currentStep']) => {
    setValue('currentStep', step)
  }

  return { ...form, currentStep, setCurrentStep }
}
