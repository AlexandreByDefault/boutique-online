import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { StateContext } from '../component/context/context'
import Layout from '../component/ui/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <StateContext>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </StateContext>)
}

export default MyApp
