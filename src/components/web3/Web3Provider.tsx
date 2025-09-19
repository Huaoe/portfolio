'use client'

import { ReactNode } from 'react'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RainbowKitProvider, darkTheme, lightTheme } from '@rainbow-me/rainbowkit'
import { useTheme } from 'next-themes'
import { web3Config } from '@/lib/web3-config'

// Import RainbowKit styles
import '@rainbow-me/rainbowkit/styles.css'

const queryClient = new QueryClient()

interface Web3ProviderProps {
  children: ReactNode
}

export default function Web3Provider({ children }: Web3ProviderProps) {
  const { theme } = useTheme()

  return (
    <WagmiProvider config={web3Config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={theme === 'dark' ? darkTheme() : lightTheme()}
          showRecentTransactions={true}
          appInfo={{
            appName: 'Thomas Berrod Portfolio',
            learnMoreUrl: 'https://thomasberrod.dev',
          }}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
