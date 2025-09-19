import { NextRequest, NextResponse } from 'next/server'
import { arweave, loadWallet } from '@/lib/arweave'

export async function GET(request: NextRequest) {
  try {
    const wallet = await loadWallet()
    
    // Get wallet address
    const address = await arweave.wallets.jwkToAddress(wallet)
    
    // Get wallet balance
    const balance = await arweave.wallets.getBalance(address)
    const balanceAR = arweave.ar.winstonToAr(balance)
    
    return NextResponse.json({
      success: true,
      address,
      balance: {
        winston: balance,
        ar: balanceAR
      }
    })

  } catch (error) {
    console.error('Error getting wallet info:', error)
    return NextResponse.json(
      { error: 'Failed to get wallet information' },
      { status: 500 }
    )
  }
}
