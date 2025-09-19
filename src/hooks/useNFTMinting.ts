import { useState } from 'react'
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { uploadToBundlr, createNFTMetadata, type NFTMetadata } from '@/lib/arweave'
import { NFT_CONTRACT_CONFIG } from '@/lib/web3-config'

export interface MintingState {
  isUploading: boolean
  isMinting: boolean
  isComplete: boolean
  error: string | null
  txHash: string | null
  tokenId: string | null
  arweaveUrl: string | null
  step: 'idle' | 'uploading-image' | 'uploading-metadata' | 'minting' | 'confirming' | 'complete'
}

export function useNFTMinting() {
  const { address } = useAccount()
  const { writeContract, data: hash, error: contractError } = useWriteContract()
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  const [mintingState, setMintingState] = useState<MintingState>({
    isUploading: false,
    isMinting: false,
    isComplete: false,
    error: null,
    txHash: null,
    tokenId: null,
    arweaveUrl: null,
    step: 'idle'
  })

  const mintNFT = async (
    imageBlob: Blob,
    name: string,
    description: string,
    prompt: string,
    effectType: string
  ) => {
    if (!address) {
      setMintingState(prev => ({ ...prev, error: 'Wallet not connected' }))
      return
    }

    try {
      // Reset state
      setMintingState({
        isUploading: true,
        isMinting: false,
        isComplete: false,
        error: null,
        txHash: null,
        tokenId: null,
        arweaveUrl: null,
        step: 'uploading-image'
      })

      // Step 1: Upload image to Arweave
      console.log('Uploading image to Arweave...')
      const imageArrayBuffer = await imageBlob.arrayBuffer()
      const imageData = new Uint8Array(imageArrayBuffer)
      const imageUrl = await uploadToBundlr(imageData, imageBlob.type)

      // Step 2: Create and upload metadata
      setMintingState(prev => ({ ...prev, step: 'uploading-metadata' }))
      console.log('Creating and uploading metadata...')
      
      const metadata: NFTMetadata = createNFTMetadata(
        name,
        description,
        imageUrl,
        prompt,
        effectType
      )

      const metadataUrl = await uploadToBundlr(
        JSON.stringify(metadata, null, 2),
        'application/json'
      )

      // Step 3: Mint NFT
      setMintingState(prev => ({ 
        ...prev, 
        isUploading: false,
        isMinting: true,
        step: 'minting',
        arweaveUrl: metadataUrl
      }))

      console.log('Minting NFT with metadata URL:', metadataUrl)
      
      // Call the smart contract mint function
      writeContract({
        address: NFT_CONTRACT_CONFIG.address as `0x${string}`,
        abi: NFT_CONTRACT_CONFIG.abi,
        functionName: 'mint',
        args: [address, metadataUrl],
      })

    } catch (error) {
      console.error('Error during NFT minting process:', error)
      setMintingState(prev => ({
        ...prev,
        isUploading: false,
        isMinting: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        step: 'idle'
      }))
    }
  }

  // Update state when transaction is submitted
  if (hash && mintingState.txHash !== hash) {
    setMintingState(prev => ({
      ...prev,
      txHash: hash,
      step: 'confirming'
    }))
  }

  // Update state when transaction is confirmed
  if (isConfirmed && !mintingState.isComplete) {
    setMintingState(prev => ({
      ...prev,
      isMinting: false,
      isComplete: true,
      step: 'complete'
    }))
  }

  // Handle contract errors
  if (contractError && !mintingState.error) {
    setMintingState(prev => ({
      ...prev,
      isMinting: false,
      error: contractError.message,
      step: 'idle'
    }))
  }

  const reset = () => {
    setMintingState({
      isUploading: false,
      isMinting: false,
      isComplete: false,
      error: null,
      txHash: null,
      tokenId: null,
      arweaveUrl: null,
      step: 'idle'
    })
  }

  return {
    mintNFT,
    reset,
    state: mintingState,
    isLoading: mintingState.isUploading || mintingState.isMinting || isConfirming,
  }
}
