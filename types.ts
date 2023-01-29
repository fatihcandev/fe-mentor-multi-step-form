import * as z from 'zod'
import { PlanEnum, StepEnum } from '@/hooks/useForm/schema'

export type Step = z.infer<typeof StepEnum>

export type StepInfo = {
  stepTitle: string
  title: string
  subtitle: string
  content: JSX.Element
}

export type Plan = z.infer<typeof PlanEnum>

export type PlanInfo = {
  title: string
  icon: JSX.Element
  price: number
}
