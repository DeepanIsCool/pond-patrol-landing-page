import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Unbounded } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist'
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: '--font-unbounded'
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0A2342',
}

export const metadata: Metadata = {
  title: 'Pond Patrol - Autonomous AI Bird Deterrence for Fish Farms',
  description: 'Intelligent aquaculture protection with autonomous AI-powered bird deterrence. Secure your yield 24/7.',
  keywords: ['fish farming', 'bird deterrence', 'aquaculture', 'AI technology', 'predation prevention'],
  authors: [{ name: 'Brave Ventures' }],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${unbounded.variable}`}>
      <body className="font-sans antialiased text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
