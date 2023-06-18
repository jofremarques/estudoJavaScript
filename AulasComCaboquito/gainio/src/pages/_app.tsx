import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { DOMHead } from '../components/DOMHead'
import { metaTagDefault } from '../data/metaTagDefault'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DOMHead {...metaTagDefault} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
