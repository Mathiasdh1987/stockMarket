import React, { Fragment } from 'react'
import type { AppProps } from 'next/app'
import { useProvider, useCreateStore } from 'mobx-store-provider'
import Head from 'next/head'
import { RootStore } from '../store'
import GlobalStyle from '../utils/globalStyle'

const App = ({ Component, pageProps }: AppProps) => {
  const applicationStore = useCreateStore(() => RootStore)
  const Provider = useProvider()

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="My Marketstack Project." />
        {/* <meta name="build version" content={version} /> */}
        <title>StockMarket</title>
        <link rel="icon" href="/logo.svg" />
        {/* hacky solution to redirect mismatched accept language headers */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.location.pathname.startsWith("/de-de")) {
                window.location.href = "/de";
                console.log("redirected from /de-de to /de");
              }
            `,
          }}
        />
      </Head>
      <GlobalStyle />
      <Provider value={applicationStore}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  )
}

export default App
