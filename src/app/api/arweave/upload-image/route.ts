import { NextRequest, NextResponse } from 'next/server'
import { uploadImageToArweave } from '@/lib/arweave'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('image') as File
    const filename = formData.get('filename') as string

    if (!file) {
      return NextResponse.json(
        { error: 'No image file provided' },
        { status: 400 }
      )
    }

    // Convert File to Blob
    const imageBlob = new Blob([await file.arrayBuffer()], { type: file.type })
    
    // Upload to Arweave
    const arweaveUrl = await uploadImageToArweave(imageBlob, filename || file.name)

    return NextResponse.json({
      success: true,
      url: arweaveUrl,
      txId: arweaveUrl.split('/').pop()
    })

  } catch (error) {
    console.error('Error uploading image to Arweave:', error)
    return NextResponse.json(
      { error: 'Failed to upload image to Arweave' },
      { status: 500 }
    )
  }
}
