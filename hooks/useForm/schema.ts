import * as z from 'zod'

import {
  EMAIL_ERROR,
  PHONE_ERROR,
  PHONE_MAX_LENGTH_ERROR,
  REQUIRED_ERROR,
  phoneNumberRegex,
} from './constants'

export const StepEnum = z.enum(['Info', 'Plan', 'Add-Ons', 'Summary'])

export const PlanEnum = z.enum(['Arcade', 'Advanced', 'Pro'])

export const AddOnEnum = z.enum([
  'OnlineService',
  'LargerStorage',
  'CustomizableProfile',
])

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
    .max(11, PHONE_MAX_LENGTH_ERROR)
    .refine(value => phoneNumberRegex.test(value), {
      message: PHONE_ERROR,
    }),
  selectedPlan: PlanEnum,
  isYearlyPrice: z.boolean(),
  selectedAddOns: z.array(AddOnEnum),
})
export type FormValues = z.infer<typeof schema>
