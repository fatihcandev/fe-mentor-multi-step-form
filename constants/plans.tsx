import { Advanced, Arcade, Pro } from '@/components/icons'
import { Plan, PlanInfo } from '@/types'

export const getPlans = (isYearlyPrice: boolean): Record<Plan, PlanInfo> => ({
  Arcade: {
    title: 'Arcade',
    icon: <Arcade />,
    price: isYearlyPrice ? 90 : 9,
  },
  Advanced: {
    title: 'Advanced',
    icon: <Advanced />,
    price: isYearlyPrice ? 120 : 12,
  },
  Pro: {
    title: 'Pro',
    icon: <Pro />,
    price: isYearlyPrice ? 150 : 15,
  },
})
