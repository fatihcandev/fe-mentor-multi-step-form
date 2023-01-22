import * as z from 'zod'
import { StepEnum } from '@/hooks/useForm/schema'

export type Step = z.infer<typeof StepEnum>

export type StepInfo = {
  stepTitle: string
  title: string
  subtitle: string
}
