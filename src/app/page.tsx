'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Scene } from '@/components/three/scene'
import { ArrowRight, Download } from 'lucide-react'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      {/* Hero Section with 3D Scene */}
      <section className='relative flex h-screen w-full items-center justify-center overflow-hidden'>
        {/* 3D Background */}
        <div className='absolute inset-0 z-0'>
          <Suspense fallback={
            <div className='flex h-full items-center justify-center'>
              <div className='h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent'></div>
            </div>
          }>
            <Scene />
          </Suspense>
        </div>
        
        {/* Content Overlay */}
        <div className='relative z-10 container mx-auto px-4 text-center'>
          <div className='mx-auto max-w-4xl'>
            <h1 className='mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl'>
              Thomas Berrod
            </h1>
            <p className='mb-8 text-xl text-muted-foreground sm:text-2xl lg:text-3xl'>
              Full Stack Developer & Web3 Innovator
            </p>
            <p className='mx-auto mb-10 max-w-2xl text-lg text-muted-foreground'>
              Crafting innovative web experiences with React.js, TypeScript, Three.js, and Web3 technologies.
              Specializing in modern, responsive applications with cutting-edge AI integration.
            </p>
            
            {/* CTA Buttons */}
            <div className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
              <Link 
                href='/projects'
                className='inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring group'
              >
                View My Work
                <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
              </Link>
              <Link 
                href='/resume.pdf' 
                target='_blank'
                className='inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
              >
                <Download className='mr-2 h-4 w-4' />
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
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I love creating immersive digital experiences that push the boundaries of what's possible on the web.
          </p>
        </div>
      </section>
    </main>
  )
}
