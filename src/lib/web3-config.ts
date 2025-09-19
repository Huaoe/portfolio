import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { Chain } from 'viem'

// Hoodi Network Configuration (chainId: 560048)
export const hoodiNetwork: Chain = {
  id: 560048,
  name: 'Hoodi Network',
  nativeCurrency: {
    decimals: 18,
    name: 'Hoodi',
    symbol: 'HOODI',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.hoodi.network'], // Replace with actual RPC URL
    },
    public: {
      http: ['https://rpc.hoodi.network'], // Replace with actual RPC URL
    },
  },
  blockExplorers: {
    default: { 
      name: 'Hoodi Explorer', 
      url: 'https://explorer.hoodi.network' // Replace with actual explorer URL
    },
  },
  testnet: false, // Set to true if this is a testnet
}

// RainbowKit Configuration
export const web3Config = getDefaultConfig({
  appName: 'Thomas Berrod Portfolio',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'your-project-id',
  chains: [hoodiNetwork],
  ssr: true, // If your dApp uses server side rendering (SSR)
})

// NFT Contract Configuration
export const NFT_CONTRACT_CONFIG = {
  address: '0x...', // Will be set after contract deployment
  abi: [
    // ERC-721 ABI will be added here
    {
      inputs: [
        { name: 'to', type: 'address' },
        { name: 'tokenURI', type: 'string' }
      ],
      name: 'mint',
      outputs: [{ name: 'tokenId', type: 'uint256' }],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [{ name: 'tokenId', type: 'uint256' }],
      name: 'tokenURI',
      outputs: [{ name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [{ name: 'owner', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function'
    }
  ]
} as const

// IPFS Configuration
export const IPFS_CONFIG = {
  gateway: 'https://ipfs.io/ipfs/',
  pinataApiKey: process.env.NEXT_PUBLIC_PINATA_API_KEY,
  pinataSecretKey: process.env.NEXT_PUBLIC_PINATA_SECRET_KEY,
}
