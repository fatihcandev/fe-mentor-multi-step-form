import * as z from 'zod'
import { AddOnEnum, PlanEnum, StepEnum } from '@/hooks/useForm/schema'

export type Step = z.infer<typeof StepEnum>

export type StepInfo = {
  stepTitle: string
  title: string
  subtitle: string
  content: JSX.Element
}

export type Plan = z.infer<typeof PlanEnum>

export type PlanInfo = {
  type: Plan
  title: string
  icon: JSX.Element
  price: number
}

export type AddOn = z.infer<typeof AddOnEnum>

export type AddOnInfo = {
  type: AddOn
  title: string
  description: string
  price: number
}
