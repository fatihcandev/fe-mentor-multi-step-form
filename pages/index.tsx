import { FormProvider } from 'react-hook-form'
import { Layout } from '../components'
import { useForm } from '@/hooks'

export default function Home() {
  const form = useForm()
  return (
    <FormProvider {...form}>
      <Layout />
    </FormProvider>
  )
}
