import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thomas Berrod - Full Stack Developer & Web3 Innovator',
  description: 'Portfolio of Thomas Berrod showcasing expertise in React.js, TypeScript, Node.js, Three.js, and Web3 development with innovative AI-powered features.',
  keywords: ['Thomas Berrod', 'Full Stack Developer', 'React.js', 'TypeScript', 'Node.js', 'Three.js', 'Web3', 'NFT', 'Portfolio'],
  authors: [{ name: 'Thomas Berrod' }],
  creator: 'Thomas Berrod',
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
        <div className='relative flex min-h-screen flex-col'>
          <div className='flex-1'>{children}</div>
        </div>
      </body>
    </html>
  )
}
