export default function Projects() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='mx-auto max-w-6xl'>
        <h1 className='mb-8 text-4xl font-bold'>Projects</h1>
        
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {/* Project cards will be added here */}
          <div className='rounded-lg border bg-card p-6 shadow-sm'>
            <h3 className='mb-2 text-xl font-semibold'>Portfolio Website</h3>
            <p className='mb-4 text-muted-foreground'>
              This very portfolio showcasing React.js, Three.js, and Web3 integration
            </p>
            <div className='flex flex-wrap gap-2'>
              <span className='rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary'>
                React.js
              </span>
              <span className='rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary'>
                Three.js
              </span>
              <span className='rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary'>
                TypeScript
              </span>
            </div>
          </div>
          
          <div className='rounded-lg border bg-card p-6 shadow-sm'>
            <h3 className='mb-2 text-xl font-semibold'>Web3 DApp</h3>
            <p className='mb-4 text-muted-foreground'>
              Decentralized application with NFT minting capabilities
            </p>
            <div className='flex flex-wrap gap-2'>
              <span className='rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary'>
                Solidity
              </span>
              <span className='rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary'>
                Web3
              </span>
              <span className='rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary'>
                React
              </span>
            </div>
          </div>
          
          <div className='rounded-lg border bg-card p-6 shadow-sm'>
            <h3 className='mb-2 text-xl font-semibold'>AI Image Generator</h3>
            <p className='mb-4 text-muted-foreground'>
              AI-powered image generation using Stable Diffusion
            </p>
            <div className='flex flex-wrap gap-2'>
              <span className='rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary'>
                AI/ML
              </span>
              <span className='rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary'>
                Python
              </span>
              <span className='rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary'>
                API
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
