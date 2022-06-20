import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { StateContext } from '../component/context/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (<StateContext>
  <Component {...pageProps} />
  </StateContext>)
}

export default MyApp
