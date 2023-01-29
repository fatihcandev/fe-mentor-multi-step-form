import {
  useForm as useReactHookForm,
  useFormContext as useRHFormContext,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormValues, schema } from './schema'
import { Step } from '@/types'
import { steps } from '@/constants'

export const useForm = () => {
  return useReactHookForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      currentStep: 'Info',
      name: '',
      email: '',
      phone: '',
      selectedPlan: 'Arcade',
      isYearlyPrice: false,
    },
    mode: 'onChange',
  })
}

const numberedSteps: Record<number, Step> = {
  1: 'Info',
  2: 'Plan',
  3: 'Add-Ons',
  4: 'Summary',
}

export const useFormContext = () => {
  const form = useRHFormContext<FormValues>()
  const { setValue, watch } = form
  const { currentStep, selectedPlan, isYearlyPrice } = watch()
  const currentStepNumber = Object.keys(steps).indexOf(currentStep) + 1

  const setCurrentStep = (step: FormValues['currentStep']) => {
    setValue('currentStep', step)
  }

  const setSelectedPlan = (plan: FormValues['selectedPlan']) => {
    setValue('selectedPlan', plan)
  }

  const setYearlyPrice = (isYearly: FormValues['isYearlyPrice']) => {
    setValue('isYearlyPrice', isYearly)
  }

  const goBack = () => {
    if (currentStepNumber === 1) return
    const previousStep = currentStepNumber - 1
    setCurrentStep(numberedSteps[previousStep])
  }

  const goToNextStep = () => {
    if (currentStepNumber === 4) return
    const nextStep = currentStepNumber + 1
    setCurrentStep(numberedSteps[nextStep])
  }

  return {
    ...form,
    currentStep,
    currentStepNumber,
    isYearlyPrice,
    selectedPlan,
    setCurrentStep,
    setSelectedPlan,
    setYearlyPrice,
    goBack,
    goToNextStep,
  }
}
