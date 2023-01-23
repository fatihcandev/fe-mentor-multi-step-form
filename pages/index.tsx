import { FormProvider } from 'react-hook-form'
import { useForm } from '@/hooks'
import Layout from '@/components/Layout'
import Head from 'next/head'

export default function Home() {
  const form = useForm()
  return (
    <>
      <Head>
        <title>Frontend Mentor | Multi-step Form with Next.js</title>
      </Head>
      <FormProvider {...form}>
        <Layout />
      </FormProvider>
    </>
  )
}
