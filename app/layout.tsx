import '@mantine/core/styles.css'
import React from 'react'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import { theme } from '../theme'

export const metadata = {
  title: 'Jochem Dobber',
  description: 'Welcome to my personal website.',
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
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  )
}
