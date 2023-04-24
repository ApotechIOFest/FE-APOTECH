import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBar } from '@elements'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}
