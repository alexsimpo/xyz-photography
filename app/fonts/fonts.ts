import localFont from 'next/font/local'

export const fontTungsten = localFont({
  src: [
    {
      path: './Tungsten-Semibold.woff2',
      style: 'normal',
      weight: '600',
    },
    {
      path: './Tungsten-Bold.woff2',
      style: 'normal',
      weight: '700',
    },
  ],
  display: 'swap',
  variable: '--font-tungsten',
})
