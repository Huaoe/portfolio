'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { 
  Palette, 
  Wand2, 
  Download, 
  Share2, 
  Sparkles, 
  Zap, 
  RefreshCw,
  Settings,
  Eye,
  EyeOff,
  Loader2
} from 'lucide-react'
import VisualEffects from './VisualEffects'

// Visual effect presets
const effectPresets = [
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    description: 'Neon lights, digital glitch, futuristic',
    prompt: 'cyberpunk style, neon lights, digital art, futuristic, glitch effects',
    gradient: 'from-cyan-500 to-purple-500'
  },
  {
    id: 'holographic',
    name: 'Holographic',
    description: 'Rainbow prism, iridescent, ethereal',
    prompt: 'holographic effect, rainbow prism, iridescent, ethereal glow',
    gradient: 'from-pink-500 to-blue-500'
  },
  {
    id: 'glitch',
    name: 'Digital Glitch',
    description: 'Data corruption, pixel sorting, digital',
    prompt: 'digital glitch art, data corruption, pixel sorting, abstract',
    gradient: 'from-red-500 to-green-500'
  },
  {
    id: 'watercolor',
    name: 'Watercolor',
    description: 'Artistic painting, soft colors, dreamy',
    prompt: 'watercolor painting style, soft colors, artistic, dreamy',
    gradient: 'from-blue-400 to-purple-400'
  },
  {
    id: 'neon',
    name: 'Neon Art',
    description: 'Bright neon colors, electric, vibrant',
    prompt: 'neon art style, bright electric colors, vibrant glow',
    gradient: 'from-yellow-400 to-pink-500'
  }
]

// Custom hook for intersection observer (reused pattern)
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
      if (entry.isIntersecting && !hasIntersected) {
        setHasIntersected(true)
      }
    }, {
      threshold: 0.1,
      rootMargin: '-50px',
      ...options
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [hasIntersected])

  return [ref, isIntersecting, hasIntersected] as const
}

export default function NFTStudio() {
  const [selectedPreset, setSelectedPreset] = useState<string>('')
  const [customPrompt, setCustomPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [showOriginal, setShowOriginal] = useState(true)
  const [showEffects, setShowEffects] = useState(false)
  const [studioRef, studioIntersecting, studioHasIntersected] = useIntersectionObserver()

  // Simulate AI image generation (placeholder for Stable Diffusion integration)
  const handleGenerate = async () => {
    setIsGenerating(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // For now, we'll use a placeholder generated image
    // In production, this would call the Stable Diffusion API
    setGeneratedImage('/thomasPict.jpg') // Placeholder - would be the generated image
    setIsGenerating(false)
    setShowOriginal(false)
  }

  const handlePresetSelect = (preset: typeof effectPresets[0]) => {
    setSelectedPreset(preset.id)
    setCustomPrompt(preset.prompt)
    setShowEffects(true)
  }

  const handleReset = () => {
    setSelectedPreset('')
    setCustomPrompt('')
    setGeneratedImage(null)
    setShowOriginal(true)
    setIsGenerating(false)
    setShowEffects(false)
  }

  return (
    <div 
      ref={studioRef}
      className={`mt-16 transition-all duration-1000 ${
        studioHasIntersected 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      {/* NFT Studio Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
            <Palette className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            AI-Powered NFT Studio
          </h2>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Transform my portrait using AI-powered effects and mint it as an NFT. 
          Choose from preset styles or create your own unique prompt.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Image Preview Section */}
        <div className="space-y-6">
          {/* Image Display */}
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-primary/5 to-purple-500/5">
            <div className="absolute inset-0">
              {showOriginal || !generatedImage ? (
                <Image
                  src="/thomasPict.jpg"
                  alt="Thomas Berrod Portrait"
                  fill
                  className="object-cover transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <Image
                  src={generatedImage}
                  alt="AI Generated Portrait"
                  fill
                  className="object-cover transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
            </div>
            
            {/* Visual Effects Overlay */}
            {showEffects && selectedPreset && (
              <VisualEffects 
                effect={selectedPreset as any} 
                intensity={0.6}
              />
            )}
            
            {/* Loading Overlay */}
            {isGenerating && (
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center text-white">
                  <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4" />
                  <p className="text-lg font-semibold">Generating AI Art...</p>
                  <p className="text-sm opacity-80">This may take a few moments</p>
                </div>
              </div>
            )}

            {/* Control Buttons */}
            <div className="absolute top-4 right-4 flex gap-2">
              {/* Effects Toggle */}
              {selectedPreset && (
                <button
                  onClick={() => setShowEffects(!showEffects)}
                  className={`p-2 rounded-lg backdrop-blur-sm text-white transition-colors ${
                    showEffects 
                      ? 'bg-purple-500/80 hover:bg-purple-600/80' 
                      : 'bg-black/50 hover:bg-black/70'
                  }`}
                >
                  <Sparkles className="h-5 w-5" />
                </button>
              )}
              
              {/* Original/Generated Toggle */}
              {generatedImage && !isGenerating && (
                <button
                  onClick={() => setShowOriginal(!showOriginal)}
                  className="p-2 rounded-lg bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
                >
                  {showOriginal ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                </button>
              )}
            </div>
          </div>

          {/* Image Controls */}
          <div className="flex gap-3">
            <button
              onClick={handleGenerate}
              disabled={isGenerating || (!selectedPreset && !customPrompt.trim())}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="h-5 w-5" />
                  Generate AI Art
                </>
              )}
            </button>
            
            <button
              onClick={handleReset}
              className="px-4 py-3 border border-border rounded-xl hover:bg-accent transition-colors"
            >
              <RefreshCw className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Controls Section */}
        <div className="space-y-6">
          {/* Style Presets */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Style Presets
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {effectPresets.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handlePresetSelect(preset)}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 hover:scale-105 ${
                    selectedPreset === preset.id
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className={`w-full h-2 rounded-full bg-gradient-to-r ${preset.gradient} mb-3`} />
                  <h4 className="font-semibold text-sm">{preset.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{preset.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Prompt */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              Custom Prompt
            </h3>
            <textarea
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              placeholder="Describe your desired artistic style and effects..."
              className="w-full h-32 p-4 rounded-xl border border-border bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Generation Info */}
          <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              AI Generation Info
            </h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Uses Stable Diffusion AI model</li>
              <li>• Based on your portrait as foundation</li>
              <li>• Generation takes 30-60 seconds</li>
              <li>• Results can be minted as NFTs</li>
            </ul>
          </div>

          {/* Action Buttons */}
          {generatedImage && !isGenerating && (
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                <Download className="h-5 w-5" />
                Download
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-border rounded-xl hover:bg-accent transition-colors">
                <Share2 className="h-5 w-5" />
                Mint NFT
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
