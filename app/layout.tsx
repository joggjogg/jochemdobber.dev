import '@mantine/core/styles.css'
import React from 'react'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import { theme } from '../theme'
import Availability from '@/components/Availability/Availability'

export const metadata = {
  title: 'Jochem Dobber portfolio',
  description: 'Hi, this is the portfolio website of Jochem Dobber.',
}

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={'anonymous'}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.jpg"
          type="image/jpg"
          sizes="any"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jochemdobber.dev/" />
        <meta property="og:title" content="Jochem Dobber portfolio" />
        <meta
          property="og:description"
          content="Hi, this is the portfolio website of Jochem Dobber."
        />
        <meta
          property="og:image"
          content="https://imagedelivery.net/JXV2YHMjHNlIvjEy_tpsRQ/7c5c6f3d-a87d-4e19-1657-6ec137205c00/public"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jochemdobber.dev/" />
        <meta property="twitter:title" content="Jochem Dobber portfolio" />
        <meta
          property="twitter:description"
          content="Hi, this is the portfolio website of Jochem Dobber."
        />
        <meta
          property="twitter:image"
          content="https://imagedelivery.net/JXV2YHMjHNlIvjEy_tpsRQ/7c5c6f3d-a87d-4e19-1657-6ec137205c00/public"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Availability available />
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}
