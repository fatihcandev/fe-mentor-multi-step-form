import * as z from 'zod'
import {
  AddOnType,
  PaymentPeriodEnum,
  PlanType,
  StepEnum,
} from '@/hooks/useForm/schema'

export type Step = z.infer<typeof StepEnum>

export type StepInfo = {
  stepTitle: string
  title: string
  subtitle: string
  content: JSX.Element
}

export type Plan = z.infer<typeof PlanType> & {
  icon: JSX.Element
}

export type PaymentPeriod = z.infer<typeof PaymentPeriodEnum>

export type AddOn = z.infer<typeof AddOnType>
