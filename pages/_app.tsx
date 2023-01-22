import { AppProps } from 'next/app'
import localFont from '@next/font/local'

import '../styles/globals.css'

const myFont = localFont({
  src: [
    {
      path: '../public/assets/fonts/Ubuntu-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/Ubuntu-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/Ubuntu-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
