'use client'

import { useEffect, useRef } from 'react'

interface VisualEffectsProps {
  effect: 'holographic' | 'glitch' | 'cyberpunk' | 'watercolor' | 'neon' | null
  intensity?: number
}

export default function VisualEffects({ effect, intensity = 0.5 }: VisualEffectsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Animation loop
    let time = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      if (effect) {
        switch (effect) {
          case 'holographic':
            drawHolographicEffect(ctx, time, intensity)
            break
          case 'glitch':
            drawGlitchEffect(ctx, time, intensity)
            break
          case 'cyberpunk':
            drawCyberpunkEffect(ctx, time, intensity)
            break
          case 'watercolor':
            drawWatercolorEffect(ctx, time, intensity)
            break
          case 'neon':
            drawNeonEffect(ctx, time, intensity)
            break
        }
      }

      time += 0.016 // ~60fps
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [effect, intensity])

  // Holographic effect with rainbow gradients
  const drawHolographicEffect = (ctx: CanvasRenderingContext2D, time: number, intensity: number) => {
    const { width, height } = ctx.canvas
    
    // Create rainbow gradient that moves
    const gradient = ctx.createLinearGradient(
      Math.sin(time) * width * 0.5 + width * 0.5,
      0,
      Math.cos(time) * width * 0.5 + width * 0.5,
      height
    )
    
    gradient.addColorStop(0, `hsla(${(time * 50) % 360}, 100%, 70%, ${intensity * 0.3})`)
    gradient.addColorStop(0.2, `hsla(${(time * 50 + 60) % 360}, 100%, 70%, ${intensity * 0.5})`)
    gradient.addColorStop(0.4, `hsla(${(time * 50 + 120) % 360}, 100%, 70%, ${intensity * 0.4})`)
    gradient.addColorStop(0.6, `hsla(${(time * 50 + 180) % 360}, 100%, 70%, ${intensity * 0.5})`)
    gradient.addColorStop(0.8, `hsla(${(time * 50 + 240) % 360}, 100%, 70%, ${intensity * 0.3})`)
    gradient.addColorStop(1, `hsla(${(time * 50 + 300) % 360}, 100%, 70%, ${intensity * 0.4})`)
    
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
    
    // Add prismatic lines
    for (let i = 0; i < 5; i++) {
      const y = (Math.sin(time + i) * height * 0.3) + height * 0.5
      ctx.strokeStyle = `hsla(${(time * 100 + i * 60) % 360}, 100%, 80%, ${intensity * 0.6})`
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }
  }

  // Glitch effect with digital corruption
  const drawGlitchEffect = (ctx: CanvasRenderingContext2D, time: number, intensity: number) => {
    const { width, height } = ctx.canvas
    
    // Random glitch bars
    if (Math.random() < intensity * 0.1) {
      const numBars = Math.floor(Math.random() * 8) + 2
      for (let i = 0; i < numBars; i++) {
        const y = Math.random() * height
        const barHeight = Math.random() * 20 + 5
        const offset = (Math.random() - 0.5) * 20
        
        ctx.fillStyle = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${intensity * 0.7})`
        ctx.fillRect(offset, y, width, barHeight)
      }
    }
    
    // Digital noise
    for (let i = 0; i < width * height * intensity * 0.001; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const size = Math.random() * 3 + 1
      
      ctx.fillStyle = Math.random() > 0.5 ? '#ff0080' : '#00ff80'
      ctx.fillRect(x, y, size, size)
    }
  }

  // Cyberpunk effect with neon grids
  const drawCyberpunkEffect = (ctx: CanvasRenderingContext2D, time: number, intensity: number) => {
    const { width, height } = ctx.canvas
    
    // Grid lines
    ctx.strokeStyle = `rgba(0, 255, 255, ${intensity * 0.3})`
    ctx.lineWidth = 1
    
    const gridSize = 50
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()
    }
    
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }
    
    // Neon glow particles
    for (let i = 0; i < 20; i++) {
      const x = (Math.sin(time + i) * width * 0.4) + width * 0.5
      const y = (Math.cos(time * 0.7 + i) * height * 0.4) + height * 0.5
      
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 20)
      gradient.addColorStop(0, `rgba(255, 0, 128, ${intensity * 0.8})`)
      gradient.addColorStop(1, 'rgba(255, 0, 128, 0)')
      
      ctx.fillStyle = gradient
      ctx.fillRect(x - 20, y - 20, 40, 40)
    }
  }

  // Watercolor effect with soft blending
  const drawWatercolorEffect = (ctx: CanvasRenderingContext2D, time: number, intensity: number) => {
    const { width, height } = ctx.canvas
    
    // Soft color blobs
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7']
    
    for (let i = 0; i < 8; i++) {
      const x = (Math.sin(time * 0.5 + i) * width * 0.3) + width * 0.5
      const y = (Math.cos(time * 0.3 + i) * height * 0.3) + height * 0.5
      const radius = 50 + Math.sin(time + i) * 30
      
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
      const color = colors[i % colors.length]
      gradient.addColorStop(0, `${color}${Math.floor(intensity * 100).toString(16).padStart(2, '0')}`)
      gradient.addColorStop(1, `${color}00`)
      
      ctx.fillStyle = gradient
      ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2)
    }
  }

  // Neon effect with electric glow
  const drawNeonEffect = (ctx: CanvasRenderingContext2D, time: number, intensity: number) => {
    const { width, height } = ctx.canvas
    
    // Electric arcs
    for (let i = 0; i < 6; i++) {
      const startX = Math.random() * width
      const startY = Math.random() * height
      const endX = startX + (Math.random() - 0.5) * 200
      const endY = startY + (Math.random() - 0.5) * 200
      
      ctx.strokeStyle = `rgba(255, 255, 0, ${intensity * 0.8})`
      ctx.lineWidth = 3
      ctx.shadowColor = '#ffff00'
      ctx.shadowBlur = 20
      
      ctx.beginPath()
      ctx.moveTo(startX, startY)
      ctx.quadraticCurveTo(
        startX + (Math.random() - 0.5) * 100,
        startY + (Math.random() - 0.5) * 100,
        endX,
        endY
      )
      ctx.stroke()
    }
    
    ctx.shadowBlur = 0
  }

  if (!effect) return null

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none mix-blend-overlay"
      style={{ width: '100%', height: '100%' }}
    />
  )
}
