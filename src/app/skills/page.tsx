'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Code2, Database, Blocks, Wrench, Brain, Palette } from 'lucide-react'

// Dynamic import for Three.js component to avoid SSR issues
const SkillsHero = dynamic(() => import('@/components/three/SkillsHero'), {
  ssr: false,
  loading: () => <div className="h-[60vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-pulse" />
})

const skillCategories = [
  {
    category: 'Frontend Development',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React.js', level: 95, description: 'Advanced component architecture & hooks' },
      { name: 'TypeScript', level: 90, description: 'Type-safe development & advanced patterns' },
      { name: 'Next.js', level: 88, description: 'SSR, SSG, and full-stack applications' },
      { name: 'TailwindCSS', level: 92, description: 'Utility-first styling & custom designs' },
      { name: 'Three.js', level: 85, description: '3D graphics & interactive experiences' }
    ]
  },
  {
    category: 'Backend Development',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 90, description: 'Server-side JavaScript & microservices' },
      { name: 'Express.js', level: 85, description: 'RESTful APIs & middleware development' },
      { name: 'PostgreSQL', level: 80, description: 'Relational database design & optimization' },
      { name: 'MongoDB', level: 75, description: 'NoSQL database & aggregation pipelines' },
      { name: 'GraphQL', level: 70, description: 'API design & query optimization' }
    ]
  },
  {
    category: 'Web3 & Blockchain',
    icon: Blocks,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Solidity', level: 85, description: 'Smart contract development & security' },
      { name: 'Wagmi/Viem', level: 80, description: 'React hooks for Ethereum' },
      { name: 'Hardhat', level: 75, description: 'Development environment & testing' },
      { name: 'OpenZeppelin', level: 70, description: 'Secure contract libraries' },
      { name: 'IPFS', level: 65, description: 'Decentralized storage solutions' }
    ]
  },
  {
    category: 'Tools & DevOps',
    icon: Wrench,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Git', level: 95, description: 'Version control & collaboration' },
      { name: 'Docker', level: 80, description: 'Containerization & deployment' },
      { name: 'Vercel', level: 85, description: 'Serverless deployment & optimization' },
      { name: 'Jest', level: 75, description: 'Unit testing & test-driven development' },
      { name: 'Playwright', level: 70, description: 'End-to-end testing automation' }
    ]
  },
  {
    category: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'Stable Diffusion', level: 75, description: 'AI image generation & fine-tuning' },
      { name: 'OpenAI APIs', level: 80, description: 'GPT integration & prompt engineering' },
      { name: 'TensorFlow.js', level: 65, description: 'Browser-based ML models' },
      { name: 'Python', level: 70, description: 'Data processing & ML pipelines' },
      { name: 'Hugging Face', level: 60, description: 'Pre-trained models & transformers' }
    ]
  },
  {
    category: 'Design & UX',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'UI/UX Design', level: 85, description: 'User-centered design principles' },
      { name: 'Figma', level: 80, description: 'Design systems & prototyping' },
      { name: 'Animation', level: 75, description: 'CSS & JavaScript animations' },
      { name: 'Responsive Design', level: 90, description: 'Mobile-first development' },
      { name: 'Accessibility', level: 80, description: 'WCAG compliance & inclusive design' }
    ]
  }
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='min-h-screen'>
      {/* Three.js Animated Header */}
      <SkillsHero />
      
      {/* Skills Content */}
      <div className='container mx-auto px-4 py-16'>
        <div className='mx-auto max-w-7xl'>

        {/* Skills Grid */}
        <div className='grid gap-8 lg:grid-cols-2'>
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <div 
                key={categoryIndex} 
                className='rounded-2xl bg-card p-8 shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]'
              >
                {/* Category Header */}
                <div className='mb-8 flex items-center gap-4'>
                  <div className={`rounded-xl bg-gradient-to-r ${category.color} p-3`}>
                    <IconComponent className='h-6 w-6 text-white' />
                  </div>
                  <h2 className='text-2xl font-semibold'>{category.category}</h2>
                </div>

                {/* Skills List */}
                <div className='space-y-6'>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className='group'>
                      {/* Skill Header */}
                      <div className='mb-2 flex items-center justify-between'>
                        <div>
                          <span className='font-semibold text-foreground'>{skill.name}</span>
                          <p className='text-sm text-muted-foreground mt-1'>{skill.description}</p>
                        </div>
                        <div className='text-right'>
                          <span className='text-lg font-bold text-primary'>{skill.level}%</span>
                        </div>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className='relative h-3 bg-muted rounded-full overflow-hidden'>
                        <div 
                          className={`absolute left-0 top-0 h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer'></div>
                        </div>
                        
                        {/* Skill level indicator */}
                        <div 
                          className='absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-sm transition-all duration-1000 ease-out'
                          style={{ 
                            left: isVisible ? `calc(${skill.level}% - 4px)` : '-4px',
                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100) + 500}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Summary Stats */}
        <div className='mt-16 grid gap-6 md:grid-cols-4'>
          <div className='rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 text-center border border-blue-500/20'>
            <div className='text-3xl font-bold text-blue-500 mb-2'>6+</div>
            <div className='text-sm text-muted-foreground'>Categories</div>
          </div>
          <div className='rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 text-center border border-green-500/20'>
            <div className='text-3xl font-bold text-green-500 mb-2'>30+</div>
            <div className='text-sm text-muted-foreground'>Technologies</div>
          </div>
          <div className='rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 text-center border border-purple-500/20'>
            <div className='text-3xl font-bold text-purple-500 mb-2'>5+</div>
            <div className='text-sm text-muted-foreground'>Years Experience</div>
          </div>
          <div className='rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 text-center border border-orange-500/20'>
            <div className='text-3xl font-bold text-orange-500 mb-2'>85%</div>
            <div className='text-sm text-muted-foreground'>Avg. Proficiency</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
