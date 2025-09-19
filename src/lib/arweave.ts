import Arweave from 'arweave'
import { ARWEAVE_CONFIG } from './web3-config'

// Initialize Arweave instance
export const arweave = Arweave.init({
  host: ARWEAVE_CONFIG.host,
  port: ARWEAVE_CONFIG.port,
  protocol: ARWEAVE_CONFIG.protocol,
  timeout: ARWEAVE_CONFIG.timeout,
  logging: ARWEAVE_CONFIG.logging,
})

// Load wallet from file (server-side only)
let walletKey: any = null

export const loadWallet = async () => {
  if (typeof window !== 'undefined') {
    throw new Error('Wallet loading should only happen on server-side')
  }
  
  if (!walletKey) {
    try {
      // In production, load from environment variable or secure storage
      if (process.env.ARWEAVE_WALLET_KEY) {
        walletKey = JSON.parse(process.env.ARWEAVE_WALLET_KEY)
      } else {
        // For development, load from local file
        const fs = await import('fs')
        const path = await import('path')
        const walletPath = path.join(process.cwd(), 'm9IQRGB5bDhqbSPsRztxRS4E0SCuosig52-Cs-j27HE.json')
        const walletData = fs.readFileSync(walletPath, 'utf8')
        walletKey = JSON.parse(walletData)
      }
    } catch (error) {
      console.error('Failed to load Arweave wallet:', error)
      throw new Error('Arweave wallet not found or invalid')
    }
  }
  
  return walletKey
}

// NFT Metadata interface
export interface NFTMetadata {
  name: string
  description: string
  image: string
  attributes: Array<{
    trait_type: string
    value: string | number
  }>
  external_url?: string
  animation_url?: string
}

// Upload image to Arweave (server-side)
export async function uploadImageToArweave(
  imageBlob: Blob,
  filename: string
): Promise<string> {
  try {
    const wallet = await loadWallet()
    
    // Convert blob to buffer
    const arrayBuffer = await imageBlob.arrayBuffer()
    const data = new Uint8Array(arrayBuffer)

    // Create transaction
    const transaction = await arweave.createTransaction({
      data: data,
    }, wallet)

    // Add tags
    transaction.addTag('Content-Type', imageBlob.type)
    transaction.addTag('App-Name', 'Thomas-Berrod-Portfolio')
    transaction.addTag('Type', 'image')
    transaction.addTag('File-Name', filename)

    // Sign transaction
    await arweave.transactions.sign(transaction, wallet)
    
    // Post transaction
    const response = await arweave.transactions.post(transaction)
    
    if (response.status === 200) {
      return `${ARWEAVE_CONFIG.gateway}${transaction.id}`
    } else {
      throw new Error(`Failed to post transaction: ${response.status}`)
    }
  } catch (error) {
    console.error('Error uploading image to Arweave:', error)
    throw new Error('Failed to upload image to Arweave')
  }
}

// Upload metadata to Arweave (server-side)
export async function uploadMetadataToArweave(
  metadata: NFTMetadata
): Promise<string> {
  try {
    const wallet = await loadWallet()
    
    // Convert metadata to JSON
    const data = JSON.stringify(metadata, null, 2)

    // Create transaction
    const transaction = await arweave.createTransaction({
      data: data,
    }, wallet)

    // Add tags
    transaction.addTag('Content-Type', 'application/json')
    transaction.addTag('App-Name', 'Thomas-Berrod-Portfolio')
    transaction.addTag('Type', 'metadata')
    transaction.addTag('Standard', 'ERC-721')

    // Sign transaction
    await arweave.transactions.sign(transaction, wallet)
    
    // Post transaction
    const response = await arweave.transactions.post(transaction)
    
    if (response.status === 200) {
      return `${ARWEAVE_CONFIG.gateway}${transaction.id}`
    } else {
      throw new Error(`Failed to post transaction: ${response.status}`)
    }
  } catch (error) {
    console.error('Error uploading metadata to Arweave:', error)
    throw new Error('Failed to upload metadata to Arweave')
  }
}

// Get data from Arweave
export async function getArweaveData(txId: string): Promise<any> {
  try {
    const response = await fetch(`${ARWEAVE_CONFIG.gateway}${txId}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching data from Arweave:', error)
    throw new Error('Failed to fetch data from Arweave')
  }
}

// Check transaction status
export async function getTransactionStatus(txId: string): Promise<{
  status: 'pending' | 'confirmed' | 'failed'
  confirmations: number
}> {
  try {
    const status = await arweave.transactions.getStatus(txId)
    
    if (status.status === 200) {
      return {
        status: 'confirmed',
        confirmations: status.confirmed?.number_of_confirmations || 0
      }
    } else if (status.status === 202) {
      return {
        status: 'pending',
        confirmations: 0
      }
    } else {
      return {
        status: 'failed',
        confirmations: 0
      }
    }
  } catch (error) {
    console.error('Error checking transaction status:', error)
    return {
      status: 'failed',
      confirmations: 0
    }
  }
}

// Utility function to create NFT metadata
export function createNFTMetadata(
  name: string,
  description: string,
  imageUrl: string,
  prompt: string,
  effectType: string
): NFTMetadata {
  return {
    name,
    description,
    image: imageUrl,
    attributes: [
      {
        trait_type: 'AI Model',
        value: 'Stable Diffusion'
      },
      {
        trait_type: 'Effect Type',
        value: effectType
      },
      {
        trait_type: 'Prompt',
        value: prompt
      },
      {
        trait_type: 'Creator',
        value: 'Thomas Berrod'
      },
      {
        trait_type: 'Generation Date',
        value: new Date().toISOString().split('T')[0]
      }
    ],
    external_url: 'https://thomasberrod.dev'
  }
}

// Client-side upload using API routes
export async function uploadToBundlr(data: string | Uint8Array, contentType: string): Promise<string> {
  try {
    if (contentType.startsWith('image/')) {
      // Upload image via API route
      const formData = new FormData()
      const blob = new Blob([data], { type: contentType })
      formData.append('image', blob, `nft-image-${Date.now()}.${contentType.split('/')[1]}`)
      formData.append('filename', `nft-image-${Date.now()}`)

      const response = await fetch('/api/arweave/upload-image', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      return result.url
    } else if (contentType === 'application/json') {
      // Upload metadata via API route
      const metadata = JSON.parse(data as string)
      
      const response = await fetch('/api/arweave/upload-metadata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(metadata),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      return result.url
    } else {
      throw new Error(`Unsupported content type: ${contentType}`)
    }
  } catch (error) {
    console.error('Error uploading to Arweave:', error)
    throw new Error('Failed to upload to Arweave')
  }
}
