import * as z from 'zod'

import {
  EMAIL_ERROR,
  PHONE_ERROR,
  REQUIRED_ERROR,
  phoneNumberRegex,
} from './constants'

export const StepEnum = z.enum(['Info', 'Plan', 'Add-Ons', 'Summary'])

export const PlanEnum = z.enum(['Arcade', 'Advanced', 'Pro'])

export const PlanType = z.object({
  type: PlanEnum,
  title: z.string(),
  monthlyPrice: z.number(),
  yearlyPrice: z.number(),
})

export const PaymentPeriodEnum = z.enum(['Monthly', 'Yearly'])

export const AddOnEnum = z.enum([
  'OnlineService',
  'LargerStorage',
  'CustomizableProfile',
])

export const AddOnType = z.object({
  type: AddOnEnum,
  title: z.string(),
  description: z.string(),
  monthlyPrice: z.number(),
  yearlyPrice: z.number(),
})

export const schema = z.object({
  currentStep: StepEnum,
  completedSteps: z.array(StepEnum),
  name: z.string().min(1, REQUIRED_ERROR),
  email: z.string().min(1, REQUIRED_ERROR).email({
    message: EMAIL_ERROR,
  }),
  phone: z
    .string()
    .min(1, REQUIRED_ERROR)
    .refine(value => phoneNumberRegex.test(value), {
      message: PHONE_ERROR,
    }),
  selectedPlan: PlanType,
  paymentPeriod: PaymentPeriodEnum,
  selectedAddOns: z.array(AddOnType),
  confirmed: z.boolean(),
})
export type FormValues = z.infer<typeof schema>
