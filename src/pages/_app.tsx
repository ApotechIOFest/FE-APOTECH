import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBar } from '@elements'
import { AxiosProvider } from '@contexts'
import { AuthProvider } from 'src/components/contexts/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AxiosProvider>
        <AuthProvider>
          <NavBar />
          <Component {...pageProps} />
        </AuthProvider>
      </AxiosProvider>
    </>
  )
}
