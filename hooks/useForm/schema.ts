import * as z from 'zod'

import {
  EMAIL_ERROR,
  PHONE_ERROR,
  PHONE_MAX_LENGTH_ERROR,
  REQUIRED_ERROR,
} from './constants'

export const StepEnum = z.enum(['Info', 'Plan', 'Add-Ons', 'Summary'])

export const schema = z.object({
  currentStep: StepEnum,
  name: z.string({
    required_error: REQUIRED_ERROR,
  }),
  email: z
    .string({
      required_error: REQUIRED_ERROR,
    })
    .email({
      message: EMAIL_ERROR,
    }),
  phone: z
    .string({
      required_error: REQUIRED_ERROR,
      invalid_type_error: PHONE_ERROR,
    })
    .max(14, {
      message: PHONE_MAX_LENGTH_ERROR,
    })
    // put space every 3 characters after the first 2
    .transform(value => {
      return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, '$1 $2 $3 $4')
    }),
})

export type FormValues = z.infer<typeof schema>
