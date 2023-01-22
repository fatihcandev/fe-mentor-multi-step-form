import { Step, StepInfo } from '@/types'

export const steps: Record<Step, StepInfo> = {
  Info: {
    stepTitle: 'YOUR INFO',
    title: 'Personal Info',
    subtitle: 'Please provide your name, email address and phone number.',
  },
  Plan: {
    stepTitle: 'SELECT PLAN',
    title: 'Select your plan',
    subtitle: 'You have the option of monthly or yearly billing.',
  },
  'Add-Ons': {
    stepTitle: 'ADD-ONS',
    title: 'Pick add-ons',
    subtitle: 'Add-ons help enhance your gaming experience.',
  },
  Summary: {
    stepTitle: 'SUMMARY',
    title: 'Finishing up',
    subtitle: 'Please review your information and confirm your purchase.',
  },
}
