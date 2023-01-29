import { AddOn, AddOnInfo } from '@/types'

export const getAddOns = (
  isYearlyPrice: boolean
): Record<AddOn, AddOnInfo> => ({
  OnlineService: {
    type: 'OnlineService',
    title: 'Online service',
    description: 'Access to multiplayer games',
    price: isYearlyPrice ? 10 : 1,
  },
  LargerStorage: {
    type: 'LargerStorage',
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: isYearlyPrice ? 20 : 2,
  },
  CustomizableProfile: {
    type: 'CustomizableProfile',
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: isYearlyPrice ? 20 : 2,
  },
})
