# Thomas Berrod - Portfolio Website

A cutting-edge portfolio website showcasing expertise in React.js, TypeScript, Node.js, Three.js, and Web3 development with innovative AI-powered features.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, TailwindCSS
- **3D Graphics**: Three.js integration with React Three Fiber
- **Web3 Integration**: Wallet connection, NFT minting on Hoodi network
- **AI Image Generation**: Stable Diffusion integration for personalized content
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Performance Optimized**: Core Web Vitals optimized, lazy loading
- **Accessibility**: WCAG compliant with full keyboard navigation

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS + Shadcn/ui
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Animation**: Framer Motion
- **State Management**: Zustand

### Web3
- **Wallet Connection**: RainbowKit
- **Blockchain Interaction**: Wagmi + Viem
- **Smart Contracts**: Solidity + OpenZeppelin
- **Development**: Hardhat
- **Network**: Hoodi (chainId: 560048)

### AI & APIs
- **Image Generation**: Stable Diffusion API
- **Storage**: IPFS for NFT metadata

### Development Tools
- **Linting**: ESLint + Prettier
- **Testing**: Jest + Playwright + Testing Library
- **Package Manager**: Yarn v4.5

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── three/          # Three.js components
│   └── web3/           # Web3 components
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── styles/             # Global styles
└── utils/              # Helper utilities
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- Yarn 4.5+

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/huaoe/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

4. **Run the development server**
```bash
yarn dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint issues
- `yarn type-check` - Run TypeScript checks
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting

## 🌐 Deployment

The project is configured for deployment on Vercel:

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file with:

```env
# Web3 Configuration
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id
NEXT_PUBLIC_ALCHEMY_API_KEY=your_alchemy_key

# AI Configuration
STABLE_DIFFUSION_API_KEY=your_api_key
STABLE_DIFFUSION_API_URL=your_api_url

# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 🎨 Design System

The project uses a custom design system built on:
- **Colors**: CSS custom properties for theme switching
- **Typography**: Inter font family
- **Spacing**: Tailwind's spacing scale
- **Components**: Shadcn/ui component library

## 🧪 Testing

- **Unit Tests**: Jest + Testing Library
- **E2E Tests**: Playwright
- **Type Checking**: TypeScript strict mode

Run tests:
```bash
yarn test
yarn test:e2e
```

## 📊 Performance

Target metrics:
- **Performance Score**: >90
- **Accessibility Score**: 100%
- **Bundle Size**: <500KB
- **Load Time**: <2s

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if needed
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Thomas Berrod**
- LinkedIn: [thomas-berrod-1010562](https://www.linkedin.com/in/thomas-berrod-1010562)
- GitHub: [@huaoe](https://github.com/huaoe)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Shadcn for the beautiful UI components
- Three.js community for 3D graphics capabilities
- Web3 ecosystem for blockchain integration tools
