import {
  useForm as useReactHookForm,
  useFormContext as useRHFormContext,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormValues, schema } from './schema'
import { AddOn, Plan, Step } from '@/types'
import { addOns, plans, steps } from '@/constants'

export const useForm = () => {
  return useReactHookForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      currentStep: 'Info',
      completedSteps: [],
      name: '',
      email: '',
      phone: '',
      selectedPlan: plans[0],
      paymentPeriod: 'Monthly',
      selectedAddOns: [addOns[0], addOns[1]],
      confirmed: false,
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
    paymentPeriod,
    selectedAddOns,
    confirmed,
  } = watch()
  const currentStepNumber = Object.keys(steps).indexOf(currentStep) + 1
  const isYearlyPrice = paymentPeriod === 'Yearly'
  const selectedPlanCost = isYearlyPrice
    ? selectedPlan.yearlyPrice
    : selectedPlan.monthlyPrice

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

  const togglePaymentPeriod = () => {
    const newPaymentPeriod = paymentPeriod === 'Monthly' ? 'Yearly' : 'Monthly'
    setValue('paymentPeriod', newPaymentPeriod)
  }

  const handleSelectAddOn = (addOn: AddOn) => {
    if (selectedAddOns.some(sa => sa.type === addOn.type)) {
      const filteredAddOns = selectedAddOns.filter(
        selectedAddOn => selectedAddOn.type !== addOn.type
      )
      setValue('selectedAddOns', filteredAddOns)
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
    selectedPlanCost,
    paymentPeriod,
    selectedAddOns,
    confirmed,
    setCurrentStep,
    goBack,
    goToNextStep,
    setSelectedPlan,
    togglePaymentPeriod,
    handleSelectAddOn,
  }
}
