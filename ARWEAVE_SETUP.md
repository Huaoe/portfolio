# Arweave Integration Setup

This portfolio includes a complete Arweave integration for permanent storage of NFT images and metadata.

## 🔧 Setup Instructions

### 1. Wallet Configuration

Your Arweave wallet file `m9IQRGB5bDhqbSPsRztxRS4E0SCuosig52-Cs-j27HE.json` is already configured and properly secured in `.gitignore`.

### 2. Environment Variables

For **development**, leave the `ARWEAVE_WALLET_KEY` empty in your `.env.local`:
```bash
ARWEAVE_WALLET_KEY=
```

For **production**, set the wallet JSON as an environment variable:
```bash
ARWEAVE_WALLET_KEY='{"kty":"RSA","n":"...","e":"AQAB",...}'
```

### 3. API Endpoints

The following API routes handle Arweave operations:

- **POST** `/api/arweave/upload-image` - Upload images to Arweave
- **POST** `/api/arweave/upload-metadata` - Upload NFT metadata to Arweave  
- **GET** `/api/arweave/wallet-info` - Get wallet address and balance

### 4. Usage in NFT Studio

The NFT Studio automatically uses Arweave for:
1. **Image Storage** - AI-generated portraits stored permanently
2. **Metadata Storage** - ERC-721 compliant metadata with attributes
3. **Immutable Records** - All data is permanently stored on Arweave

## 🌐 How It Works

### Client-Side Flow
1. User generates AI art in NFT Studio
2. Client calls `/api/arweave/upload-image` with image data
3. Client calls `/api/arweave/upload-metadata` with NFT metadata
4. URLs returned for blockchain minting

### Server-Side Processing
1. API routes load wallet from file or environment
2. Create Arweave transactions with proper tags
3. Sign transactions with wallet private key
4. Post to Arweave network
5. Return permanent URLs

## 💰 Cost Considerations

- **Image Upload** (~1MB): ~0.001 AR (~$0.02)
- **Metadata Upload** (~1KB): ~0.000001 AR (~$0.00002)
- **Total per NFT**: ~$0.02 in AR tokens

## 🔒 Security Features

- ✅ Wallet file excluded from git
- ✅ Server-side only wallet access
- ✅ Environment variable support for production
- ✅ Proper transaction signing
- ✅ Error handling and validation

## 🚀 Production Deployment

1. **Vercel/Netlify**: Set `ARWEAVE_WALLET_KEY` environment variable
2. **Docker**: Mount wallet file or use environment variable
3. **AWS/GCP**: Use secrets manager for wallet storage

## 📊 Monitoring

Use the wallet info endpoint to monitor:
- Wallet balance
- Transaction history
- Upload costs

```bash
curl https://your-domain.com/api/arweave/wallet-info
```

## 🔗 Integration with Web3

The Arweave URLs are used as:
- `tokenURI` in ERC-721 smart contracts
- Permanent metadata storage
- Decentralized image hosting

This creates a fully decentralized NFT system with permanent storage guaranteed by Arweave's economic model.
