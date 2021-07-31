import '../styles/globals.css'


import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'

import initFirebase from '../lib/initFirebase'

import MDXComponents from './../components/MDXComponents'

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  initFirebase()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
          <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}

export default MyApp
