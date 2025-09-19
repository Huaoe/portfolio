import { NextRequest, NextResponse } from 'next/server'
import { uploadMetadataToArweave, type NFTMetadata } from '@/lib/arweave'

export async function POST(request: NextRequest) {
  try {
    const metadata: NFTMetadata = await request.json()

    if (!metadata.name || !metadata.description || !metadata.image) {
      return NextResponse.json(
        { error: 'Missing required metadata fields' },
        { status: 400 }
      )
    }

    // Upload metadata to Arweave
    const arweaveUrl = await uploadMetadataToArweave(metadata)

    return NextResponse.json({
      success: true,
      url: arweaveUrl,
      txId: arweaveUrl.split('/').pop()
    })

  } catch (error) {
    console.error('Error uploading metadata to Arweave:', error)
    return NextResponse.json(
      { error: 'Failed to upload metadata to Arweave' },
      { status: 500 }
    )
  }
}
