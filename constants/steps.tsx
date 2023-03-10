import AddOnsStep from '@/components/AddOnsStep'
import InfoStep from '@/components/InfoStep'
import PlanStep from '@/components/PlanStep'
import { SummaryStep } from '@/components/SummaryStep'
import { Step, StepInfo } from '@/types'

export const steps: Record<Step, StepInfo> = {
  Info: {
    stepTitle: 'YOUR INFO',
    title: 'Personal Info',
    subtitle: 'Please provide your name, email address and phone number.',
    content: <InfoStep />,
  },
  Plan: {
    stepTitle: 'SELECT PLAN',
    title: 'Select your plan',
    subtitle: 'You have the option of monthly or yearly billing.',
    content: <PlanStep />,
  },
  'Add-Ons': {
    stepTitle: 'ADD-ONS',
    title: 'Pick add-ons',
    subtitle: 'Add-ons help enhance your gaming experience.',
    content: <AddOnsStep />,
  },
  Summary: {
    stepTitle: 'SUMMARY',
    title: 'Finishing up',
    subtitle: 'Double-check everything looks OK before confirming.',
    content: <SummaryStep />,
  },
}
