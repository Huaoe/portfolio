import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { MainLayout } from '@/components/layout/main-layout'
import Web3Provider from '@/components/web3/Web3Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thomas Berrod - Full Stack Developer & Web3 Innovator',
  description: 'Portfolio of Thomas Berrod showcasing expertise in React.js, TypeScript, Node.js, Three.js, and Web3 development with innovative AI-powered features.',
  keywords: ['Thomas Berrod', 'Full Stack Developer', 'React.js', 'TypeScript', 'Node.js', 'Three.js', 'Web3', 'NFT', 'Portfolio'],
  authors: [{ name: 'Thomas Berrod' }],
  creator: 'Thomas Berrod',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon-128x128.png', sizes: '128x128', type: 'image/png' },
      { url: '/favicon-256x256.png', sizes: '256x256', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thomasberrod.dev',
    title: 'Thomas Berrod - Full Stack Developer & Web3 Innovator',
    description: 'Portfolio showcasing innovative web development with React.js, Three.js, and Web3 technologies.',
    siteName: 'Thomas Berrod Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thomas Berrod - Full Stack Developer',
    description: 'Innovative portfolio with React.js, Three.js, and Web3 features.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          defaultTheme='system'
          storageKey='portfolio-ui-theme'
        >
          <Web3Provider>
            <MainLayout>{children}</MainLayout>
          </Web3Provider>
        </ThemeProvider>
      </body>
    </html>
  )
}
