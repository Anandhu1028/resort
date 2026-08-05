import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  style: 'normal',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aureliahighlands.com'),
  title: 'Aurelia Highlands Resort — Luxury Escape in Kuttikkanam, Kerala',
  description:
    'A cinematic luxury retreat in Kuttikkanam, Kerala, shaped by misty tea hills, pine forests, warm stone architecture, and immersive high-range experiences.',
  keywords: ['Aurelia Highlands Resort', 'Kuttikkanam', 'Kerala luxury resort', 'Western Ghats retreat'],
  alternates: {
    canonical: 'https://www.aureliahighlands.com',
  },
  openGraph: {
    title: 'Aurelia Highlands Resort',
    description:
      'An immersive luxury resort experience in the misty high ranges of Kuttikkanam, Kerala.',
    type: 'website',
    url: 'https://www.aureliahighlands.com',
    images: ['/images/aurelia-hero.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurelia Highlands Resort',
    description:
      'A cinematic luxury retreat in Kuttikkanam, Kerala, shaped by misty tea hills and warm forest architecture.',
    images: ['/images/aurelia-hero.png'],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0B0B0B',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
