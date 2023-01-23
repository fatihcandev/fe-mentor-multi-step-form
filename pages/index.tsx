import { FormProvider } from 'react-hook-form'
import { useForm } from '@/hooks'
import Layout from '@/components/Layout'

export default function Home() {
  const form = useForm()
  return (
    <FormProvider {...form}>
      <Layout />
    </FormProvider>
  )
}
