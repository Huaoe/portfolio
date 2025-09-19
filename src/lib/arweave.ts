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

// Upload image to Arweave
export async function uploadImageToArweave(
  imageBlob: Blob,
  filename: string
): Promise<string> {
  try {
    // Convert blob to buffer
    const arrayBuffer = await imageBlob.arrayBuffer()
    const data = new Uint8Array(arrayBuffer)

    // Create transaction
    const transaction = await arweave.createTransaction({
      data: data,
    })

    // Add tags
    transaction.addTag('Content-Type', imageBlob.type)
    transaction.addTag('App-Name', 'Thomas-Berrod-Portfolio')
    transaction.addTag('Type', 'image')
    transaction.addTag('File-Name', filename)

    // Sign and post transaction (this would require a wallet key)
    // For client-side, we'll use a different approach with bundlr or similar
    
    // Return the transaction ID (this would be the Arweave URL)
    const txId = transaction.id
    return `${ARWEAVE_CONFIG.gateway}${txId}`
  } catch (error) {
    console.error('Error uploading image to Arweave:', error)
    throw new Error('Failed to upload image to Arweave')
  }
}

// Upload metadata to Arweave
export async function uploadMetadataToArweave(
  metadata: NFTMetadata
): Promise<string> {
  try {
    // Convert metadata to JSON
    const data = JSON.stringify(metadata, null, 2)

    // Create transaction
    const transaction = await arweave.createTransaction({
      data: data,
    })

    // Add tags
    transaction.addTag('Content-Type', 'application/json')
    transaction.addTag('App-Name', 'Thomas-Berrod-Portfolio')
    transaction.addTag('Type', 'metadata')
    transaction.addTag('Standard', 'ERC-721')

    // Return the transaction ID (this would be the Arweave URL)
    const txId = transaction.id
    return `${ARWEAVE_CONFIG.gateway}${txId}`
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

// Client-side upload using Bundlr (for production)
export async function uploadToBundlr(data: string | Uint8Array, contentType: string): Promise<string> {
  // This would integrate with Bundlr Network for easier Arweave uploads
  // For now, we'll simulate the upload
  console.log('Uploading to Bundlr/Arweave...', { contentType })
  
  // Simulate upload delay
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Return a mock transaction ID
  const mockTxId = 'mock-arweave-tx-' + Date.now()
  return `${ARWEAVE_CONFIG.gateway}${mockTxId}`
}
