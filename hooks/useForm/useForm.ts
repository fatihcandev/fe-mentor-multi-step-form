import {
  useForm as useReactHookForm,
  useFormContext as useRHFormContext,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormValues, schema } from './schema'
import { AddOn, Plan, Step } from '@/types'
import { steps } from '@/constants'

export const useForm = () => {
  return useReactHookForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      currentStep: 'Info',
      completedSteps: [],
      name: '',
      email: '',
      phone: '',
      selectedPlan: 'Arcade',
      isYearlyPrice: false,
      selectedAddOns: ['OnlineService', 'LargerStorage'],
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
  const {
    currentStep,
    completedSteps,
    selectedPlan,
    isYearlyPrice,
    selectedAddOns,
  } = watch()
  const currentStepNumber = Object.keys(steps).indexOf(currentStep) + 1

  const setCurrentStep = (step: Step) => {
    setValue('currentStep', step)
  }

  const completeStep = (step: Step) => {
    if (completedSteps.includes(step)) return
    setValue('completedSteps', [...completedSteps, step])
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
    completeStep(currentStep)
  }

  const setSelectedPlan = (plan: Plan) => {
    setValue('selectedPlan', plan)
  }

  const setYearlyPrice = (isYearly: boolean) => {
    setValue('isYearlyPrice', isYearly)
  }

  const handleSelectAddOn = (addOn: AddOn) => {
    if (selectedAddOns.includes(addOn)) {
      setValue(
        'selectedAddOns',
        selectedAddOns.filter(selectedAddOn => selectedAddOn !== addOn)
      )
    } else {
      setValue('selectedAddOns', [...selectedAddOns, addOn])
    }
  }

  return {
    ...form,
    currentStep,
    currentStepNumber,
    completedSteps,
    isYearlyPrice,
    selectedPlan,
    selectedAddOns,
    setCurrentStep,
    goBack,
    goToNextStep,
    setSelectedPlan,
    setYearlyPrice,
    handleSelectAddOn,
  }
}
