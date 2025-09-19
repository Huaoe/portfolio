'use client'

import { useState, useEffect } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useBalance, useChainId } from 'wagmi'
import { Wallet, ExternalLink, AlertCircle, CheckCircle } from 'lucide-react'
import { hoodiNetwork } from '@/lib/web3-config'

interface WalletConnectionProps {
  onConnectionChange?: (connected: boolean) => void
}

export default function WalletConnection({ onConnectionChange }: WalletConnectionProps) {
  const { address, isConnected } = useAccount()
  const chainId = useChainId()
  const { data: balance } = useBalance({
    address: address,
  })

  const [connectionStatus, setConnectionStatus] = useState<'disconnected' | 'connecting' | 'connected' | 'wrong-network'>('disconnected')

  useEffect(() => {
    if (!isConnected) {
      setConnectionStatus('disconnected')
    } else if (chainId !== hoodiNetwork.id) {
      setConnectionStatus('wrong-network')
    } else {
      setConnectionStatus('connected')
    }

    onConnectionChange?.(isConnected && chainId === hoodiNetwork.id)
  }, [isConnected, chainId, onConnectionChange])

  const getStatusInfo = () => {
    switch (connectionStatus) {
      case 'connected':
        return {
          icon: <CheckCircle className="h-5 w-5 text-green-500" />,
          message: 'Connected to Hoodi Network',
          color: 'text-green-500'
        }
      case 'wrong-network':
        return {
          icon: <AlertCircle className="h-5 w-5 text-orange-500" />,
          message: 'Please switch to Hoodi Network',
          color: 'text-orange-500'
        }
      case 'connecting':
        return {
          icon: <Wallet className="h-5 w-5 text-blue-500 animate-pulse" />,
          message: 'Connecting...',
          color: 'text-blue-500'
        }
      default:
        return {
          icon: <Wallet className="h-5 w-5 text-muted-foreground" />,
          message: 'Connect wallet to mint NFTs',
          color: 'text-muted-foreground'
        }
    }
  }

  const statusInfo = getStatusInfo()

  return (
    <div className="space-y-4">
      {/* Connection Status */}
      <div className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-card/50">
        {statusInfo.icon}
        <div className="flex-1">
          <p className={`font-medium ${statusInfo.color}`}>
            {statusInfo.message}
          </p>
          {isConnected && address && (
            <div className="mt-1 space-y-1">
              <p className="text-sm text-muted-foreground">
                Address: {address.slice(0, 6)}...{address.slice(-4)}
              </p>
              {balance && (
                <p className="text-sm text-muted-foreground">
                  Balance: {parseFloat(balance.formatted).toFixed(4)} {balance.symbol}
                </p>
              )}
            </div>
          )}
        </div>
        
        {/* Network Info */}
        {connectionStatus === 'connected' && (
          <a
            href={hoodiNetwork.blockExplorers.default.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-accent transition-colors"
            title="View on Hoodi Explorer"
          >
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </a>
        )}
      </div>

      {/* Connect Button */}
      <div className="flex justify-center">
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            // Note: If your app doesn't use authentication, you
            // can remove all 'authenticationStatus' checks
            const ready = mounted && authenticationStatus !== 'loading'
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus ||
                authenticationStatus === 'authenticated')

            return (
              <div
                {...(!ready && {
                  'aria-hidden': true,
                  'style': {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <button
                        onClick={openConnectModal}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200 hover:scale-105"
                      >
                        <Wallet className="h-5 w-5" />
                        Connect Wallet
                      </button>
                    )
                  }

                  if (chain.unsupported) {
                    return (
                      <button
                        onClick={openChainModal}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200"
                      >
                        <AlertCircle className="h-5 w-5" />
                        Switch Network
                      </button>
                    )
                  }

                  return (
                    <div className="flex gap-3">
                      <button
                        onClick={openChainModal}
                        className="flex items-center gap-2 px-4 py-2 border border-border rounded-xl hover:bg-accent transition-colors"
                      >
                        {chain.hasIcon && (
                          <div
                            style={{
                              background: chain.iconBackground,
                              width: 20,
                              height: 20,
                              borderRadius: 999,
                              overflow: 'hidden',
                              marginRight: 4,
                            }}
                          >
                            {chain.iconUrl && (
                              <img
                                alt={chain.name ?? 'Chain icon'}
                                src={chain.iconUrl}
                                style={{ width: 20, height: 20 }}
                              />
                            )}
                          </div>
                        )}
                        {chain.name}
                      </button>

                      <button
                        onClick={openAccountModal}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
                      >
                        {account.displayName}
                        {account.displayBalance
                          ? ` (${account.displayBalance})`
                          : ''}
                      </button>
                    </div>
                  )
                })()}
              </div>
            )
          }}
        </ConnectButton.Custom>
      </div>
    </div>
  )
}
