'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Download } from 'lucide-react'
import { useEffect, useState } from 'react'

// Matrix-style text effect component
const MatrixText = ({ children }: { children: string }) => {
  const [displayText, setDisplayText] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)
  
  const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
  
  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = []
    
    const animateText = () => {
      setIsAnimating(true)
      const targetText = children
      let currentIndex = 0
      
      const revealChar = () => {
        if (currentIndex < targetText.length) {
          // Show random characters first
          let iterations = 0
          const scrambleInterval = setInterval(() => {
            setDisplayText(prev => {
              const scrambled = targetText
                .split('')
                .map((char, index) => {
                  if (index < currentIndex) return char
                  if (index === currentIndex && iterations > 8) return char
                  return matrixChars[Math.floor(Math.random() * matrixChars.length)]
                })
                .join('')
              return scrambled
            })
            
            iterations++
            if (iterations > 10) {
              clearInterval(scrambleInterval)
              currentIndex++
              timeouts.push(setTimeout(revealChar, 50))
            }
          }, 30)
        } else {
          setIsAnimating(false)
        }
      }
      
      revealChar()
    }
    
    // Start animation after a delay
    const startTimeout = setTimeout(animateText, 1000)
    timeouts.push(startTimeout)
    
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout))
    }
  }, [children])
  
  return (
    <span className={`inline-block font-mono ${isAnimating ? 'text-green-400' : ''} transition-colors duration-300`}>
      {displayText || children}
    </span>
  )
}

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      {/* Hero Section with 3D Scene */}
      <section className='relative flex h-screen w-full items-center justify-center overflow-hidden'>
        {/* Enhanced Animated Background */}
        <div className='absolute inset-0 z-0'>
          <div className='h-full w-full bg-gradient-to-br from-background via-background to-muted overflow-hidden'>
            {/* Gradient overlays */}
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]'></div>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]'></div>
            
            {/* Floating geometric shapes */}
            <div className='absolute inset-0'>
              {/* Large floating cube with your picture */}
              <div className='absolute top-1/4 left-1/4 h-32 w-32 rounded-lg rotate-8 animate-float perspective-1500'>
                <div className='relative h-full w-full transform-style-preserve-3d hover:rotate-y-180 transition-transform duration-700'>
                  {/* Front face */}
                  <div className='absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 backface-hidden'>
                    <div className='h-full w-full rounded-lg overflow-hidden p-2'>
                      <Image
                        src='/thomasPict.jpg'
                        alt='Thomas Berrod'
                        width={120}
                        height={120}
                        className='h-full w-full object-cover rounded-md'
                        priority
                      />
                    </div>
                  </div>
                  {/* Back face */}
                  <div className='absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/5 border border-purple-500/20 backface-hidden rotate-y-180 flex items-center justify-center'>
                    <span className='text-xs font-semibold text-primary'>Thomas B.</span>
                  </div>
                </div>
              </div>
              

              {/* Additional decorative elements */}
   </div>
            
            {/* Grid pattern overlay */}
            <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]'></div>
          </div>
        </div>
        
        {/* Content Overlay */}
        <div className='relative z-10 container mx-auto px-4 text-center'>
          <div className='mx-auto max-w-5xl'>
            {/* Animated greeting */}
            <div className='mb-4 opacity-0 animate-fade-in-up'>
              <span className='inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary'>
                👋 Welcome to my portfolio
              </span>
            </div>
            
            {/* Main heading with gradient text */}
            <h1 className='mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl opacity-0 animate-fade-in-up animation-delay-200'>
              <span className='bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent'>
                Thomas Berrod
              </span>
            </h1>
            
            {/* Subtitle with typing effect */}
            <p className='mb-8 text-xl text-muted-foreground sm:text-2xl lg:text-3xl opacity-0 animate-fade-in-up animation-delay-400'>
              Full Stack Developer & 
              <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold'>
                {' '}Web3 Innovator
              </span>
            </p>
            
            {/* Description */}
            <p className='mx-auto mb-10 max-w-3xl text-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up animation-delay-600'>
              Crafting innovative web experiences with{' '}
              <span className='font-semibold text-foreground'>React.js</span>,{' '}
              <span className='font-semibold text-foreground'>TypeScript</span>,{' '}
              <span className='font-semibold text-foreground'>Three.js</span>, and{' '}
              <span className='font-semibold text-foreground'>Web3</span> technologies.
              <br />
              Specializing in modern, responsive applications with cutting-edge AI integration.
            </p>
            
            {/* Tech stack badges */}
            <div className='mb-10 flex flex-wrap justify-center gap-3 opacity-0 animate-fade-in-up animation-delay-800'>
              {['React.js', 'TypeScript', 'Python','C#.Net', 'SQL', 'Web3', 'AI/ML'].map((tech) => (
                <span 
                  key={tech}
                  className='rounded-full bg-secondary/50 px-4 py-2 text-sm font-medium text-secondary-foreground backdrop-blur-sm border border-border/50 hover:bg-secondary/70 transition-colors'
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className='flex flex-col gap-4 sm:flex-row sm:justify-center opacity-0 animate-fade-in-up animation-delay-1000'>
              <Link 
                href='/projects'
                className='inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group'
              >
                View My Work
                <ArrowRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
              </Link>
              <Link 
                href='/Thomas_Berrod_CV_2025_EN.pdf' 
                target='_blank'
                className='inline-flex items-center justify-center rounded-md border border-input bg-background/50 backdrop-blur-sm px-8 py-4 text-base font-medium shadow-lg transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
              >
                <Download className='mr-2 h-5 w-5' />
                Download Resume
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className='absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce'>
          <div className='h-6 w-4 rounded-full border-2 border-muted-foreground'>
            <div className='mx-auto mt-1 h-2 w-1 rounded-full bg-muted-foreground'></div>
          </div>
        </div>
      </section>

      {/* Additional sections will be added here */}
      <section className='py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='mb-8 text-3xl font-bold'>About Me</h2>
          <p className='mx-auto max-w-3xl text-lg text-muted-foreground'>
            I'm a passionate full-stack developer with expertise in{' '}
            <br></br>  <MatrixText>modern web technologies</MatrixText>. <br></br>
            I love creating immersive digital experiences that push the boundaries of what's possible on the web.
          </p>
        </div>
      </section>
    </main>
  )
}
