import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'remixicon/fonts/remixicon.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
