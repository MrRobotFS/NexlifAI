import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://nexlifai.com'),
  title: 'nexlifAI - Build the Future with Intelligent Automation',
  description: 'nexlifAI delivers cutting-edge AI solutions, custom applications, and powerful automations to scale your business and transform your operations.',
  keywords: 'AI, artificial intelligence, automation, web development, mobile apps, California, startup, technology',
  authors: [{ name: 'nexlifAI' }],
  creator: 'nexlifAI',
  publisher: 'nexlifAI',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexlifai.com',
    title: 'nexlifAI - Build the Future with Intelligent Automation',
    description: 'Cutting-edge AI solutions, custom applications, and powerful automations to scale your business.',
    siteName: 'nexlifAI'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'nexlifAI - Build the Future with Intelligent Automation',
    description: 'Cutting-edge AI solutions, custom applications, and powerful automations to scale your business.',
    creator: '@nexlifai'
  }
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#F9FAFB' },
      { media: '(prefers-color-scheme: dark)', color: '#0D0D10' }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}