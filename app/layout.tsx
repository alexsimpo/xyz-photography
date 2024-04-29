import type { Metadata } from 'next'
import '../css/globals.css'
import { fontTungsten } from './fonts/fonts'

export const metadata: Metadata = {
  title: 'XYZ Photography',
  description: 'Super great and highly optimized seo description',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${fontTungsten.variable}`}>
      <head>
        <link rel='icon' href='/favicon/favicon.ico' sizes='any' />
        <link rel='icon' href='/favicon/icon?png' type='image/png' sizes='512x512' />
        <link rel='apple-touch-icon' href='/favicon/apple-icon' type='image/png' sizes='180x180' />
      </head>
      <body>{children}</body>
    </html>
  )
}
