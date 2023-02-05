import { Advanced, Arcade, Pro } from '@/components/icons'
import { Plan } from '@/types'

export const plans: Plan[] = [
  {
    type: 'Arcade',
    title: 'Arcade',
    icon: <Arcade />,
    monthlyPrice: 9,
    yearlyPrice: 90,
  },
  {
    type: 'Advanced',
    title: 'Advanced',
    icon: <Advanced />,
    monthlyPrice: 12,
    yearlyPrice: 120,
  },
  {
    type: 'Pro',
    title: 'Pro',
    icon: <Pro />,
    monthlyPrice: 15,
    yearlyPrice: 150,
  },
]
