'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Code2, Database, Blocks, Wrench, Brain, Palette } from 'lucide-react'
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiSymfony,
  SiDjango,
  SiFirebase,
  SiSolidity,
  SiIpfs,
  SiGit,
  SiDocker,
  SiVercel,
  SiJest,
  SiOpenai,
  SiTensorflow,
  SiPython,
  SiHuggingface,
  SiFigma,
  SiJira,
  SiTrello,
  SiNotion,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiEthereum
} from 'react-icons/si'
import { FaAccessibleIcon, FaDatabase, FaCode, FaTools } from 'react-icons/fa'

// Dynamic import for Three.js component to avoid SSR issues
const SkillsHero = dynamic(() => import('@/components/three/SkillsHero'), {
  ssr: false,
  loading: () => (
    <div className='h-[60vh] animate-pulse bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' />
  ),
})

const skillCategories = [
  {
    category: 'Frontend Development',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      {
        name: 'React.js',
        level: 95,
        description: 'Advanced component architecture & hooks',
        icon: SiReact,
      },
      {
        name: 'TypeScript',
        level: 90,
        description: 'Type-safe development & advanced patterns',
        icon: SiTypescript,
      },
      {
        name: 'Next.js',
        level: 88,
        description: 'SSR, SSG, and full-stack applications',
        icon: SiNextdotjs,
      },
      {
        name: 'TailwindCSS',
        level: 92,
        description: 'Utility-first styling & custom designs',
        icon: SiTailwindcss,
      },
      { name: 'Shadcn', level: 85, description: 'Customizable UI components', icon: SiReact },
      {
        name: 'XState',
        level: 87,
        description: 'State management & machine learning',
        icon: SiJavascript,
      },
      {
        name: 'Saga',
        level: 89,
        description: 'State management & process management',
        icon: SiRedux,
      },
      { name: 'Redux', level: 88, description: 'State management ', icon: SiRedux },
      { name: 'Zustand', level: 87, description: 'State management ', icon: SiJavascript },
    ],
  },
  {
    category: 'Backend Development',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    skills: [
      {
        name: 'Node.js',
        level: 90,
        description: 'Server-side JavaScript & microservices',
        icon: SiNodedotjs,
      },
      {
        name: 'Express.js',
        level: 85,
        description: 'RESTful APIs & middleware development',
        icon: SiExpress,
      },
      {
        name: 'PostgreSQL',
        level: 80,
        description: 'Relational database design & optimization',
        icon: SiPostgresql,
      },
      {
        name: 'MongoDB',
        level: 75,
        description: 'NoSQL database & aggregation pipelines',
        icon: SiMongodb,
      },
      {
        name: 'GraphQL',
        level: 70,
        description: 'API design & query optimization',
        icon: SiGraphql,
      },
      {
        name: 'SQLServer',
        level: 77,
        description: 'Database design & optimization',
        icon: FaDatabase,
      },
      {
        name: 'Symphony',
        level: 85,
        description: 'Database design & optimization',
        icon: SiSymfony,
      },
      {
        name: 'Django',
        level: 87,
        description: 'Database design & optimization',
        icon: SiDjango,
      },
      { name: 'Firebase', level: 85, description: 'Notification system', icon: SiFirebase },
    ],
  },
  {
    category: 'Web3 & Blockchain',
    icon: Blocks,
    color: 'from-purple-500 to-pink-500',
    skills: [
      {
        name: 'Solidity',
        level: 85,
        description: 'Smart contract development & security',
        icon: SiSolidity,
      },
      {
        name: 'web3.js',
        level: 80,
        description: 'Smart contract development & security',
        icon: SiEthereum,
      },
      {
        name: 'Wagmi/Viem',
        level: 80,
        description: 'React hooks for Ethereum',
        icon: SiReact,
      },
      {
        name: 'Hardhat',
        level: 75,
        description: 'Development environment & testing',
        icon: FaTools,
      },
      {
        name: 'OpenZeppelin',
        level: 70,
        description: 'Secure contract libraries',
        icon: SiSolidity,
      },
      {
        name: 'IPFS',
        level: 65,
        description: 'Decentralized storage solutions',
        icon: SiIpfs,
      },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: Wrench,
    color: 'from-orange-500 to-red-500',
    skills: [
      {
        name: 'Git',
        level: 95,
        description: 'Version control & collaboration',
        icon: SiGit,
      },
      {
        name: 'Docker',
        level: 80,
        description: 'Containerization & deployment',
        icon: SiDocker,
      },
      {
        name: 'Vercel',
        level: 85,
        description: 'Serverless deployment & optimization',
        icon: SiVercel,
      },
      {
        name: 'Playwright',
        level: 70,
        description: 'End-to-end testing automation',
        icon: FaCode,
      },
      {
        name: 'Jest',
        level: 75,
        description: 'Unit testing & test-driven development',
        icon: SiJest,
      },
    ],
  },
  {
    category: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-indigo-500 to-purple-500',
    skills: [
      {
        name: 'Stable Diffusion',
        level: 75,
        description: 'AI image generation & fine-tuning',
        icon: SiPython,
      },
      {
        name: 'OpenAI APIs',
        level: 80,
        description: 'GPT integration & prompt engineering',
        icon: SiOpenai,
      },
      {
        name: 'TensorFlow.js',
        level: 65,
        description: 'Browser-based ML models',
        icon: SiTensorflow,
      },
      {
        name: 'Python',
        level: 70,
        description: 'Data processing & ML pipelines',
        icon: SiPython,
      },
      {
        name: 'Hugging Face',
        level: 60,
        description: 'Pre-trained models & transformers',
        icon: SiHuggingface,
      },
    ],
  },
  {
    category: 'Design & UX',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
    skills: [
      {
        name: 'UI/UX Design',
        level: 85,
        description: 'User-centered design principles',
        icon: SiFigma,
      },
      { name: 'Figma', level: 80, description: 'Design systems & prototyping', icon: SiFigma },
      {
        name: 'Animation',
        level: 75,
        description: 'CSS & JavaScript animations',
        icon: SiCss3,
      },
      {
        name: 'Responsive Design',
        level: 90,
        description: 'Mobile-first development',
        icon: SiHtml5,
      },
      {
        name: 'Accessibility',
        level: 80,
        description: 'WCAG compliance & inclusive design',
        icon: FaAccessibleIcon,
      },
      {
        name: 'Jira',
        level: 92,
        description: 'Project management & task tracking',
        icon: SiJira,
      },
      { name: 'Trello', level: 98, description: 'Task tracking', icon: SiTrello },
      {
        name: 'Notion',
        level: 95,
        description: 'Project management & task tracking',
        icon: SiNotion,
      },
    ],
  },
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
                  className='rounded-2xl border border-border/50 bg-card p-8 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg'
                >
                  {/* Category Header */}
                  <div className='mb-8 flex items-center gap-4'>
                    <div
                      className={`rounded-xl bg-gradient-to-r ${category.color} p-3`}
                    >
                      <IconComponent className='h-6 w-6 text-white' />
                    </div>
                    <h2 className='text-2xl font-semibold'>
                      {category.category}
                    </h2>
                  </div>

                  {/* Skills List */}
                  <div className='space-y-6'>
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className='group'>
                        {/* Skill Header */}
                        <div className='mb-2 flex items-center justify-between'>
                          <div className='flex items-center gap-3'>
                            <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-muted/50'>
                              {skill.icon && (
                                <skill.icon className='h-5 w-5 text-primary' />
                              )}
                            </div>
                            <div>
                              <span className='font-semibold text-foreground'>
                                {skill.name}
                              </span>
                              <p className='mt-1 text-sm text-muted-foreground'>
                                {skill.description}
                              </p>
                            </div>
                          </div>
                          <div className='text-right'>
                            <span className='text-lg font-bold text-primary'>
                              {skill.level}%
                            </span>
                          </div>
                        </div>

                        {/* Animated Progress Bar */}
                        <div className='relative h-3 overflow-hidden rounded-full bg-muted'>
                          <div
                            className={`absolute left-0 top-0 h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                            }}
                          >
                            {/* Shimmer effect */}
                            <div className='animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>
                          </div>

                          {/* Skill level indicator */}
                          <div
                            className='absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white shadow-sm transition-all duration-1000 ease-out'
                            style={{
                              left: isVisible
                                ? `calc(${skill.level}% - 4px)`
                                : '-4px',
                              transitionDelay: `${categoryIndex * 200 + skillIndex * 100 + 500}ms`,
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
            <div className='rounded-xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 text-center'>
              <div className='mb-2 text-3xl font-bold text-blue-500'>6+</div>
              <div className='text-sm text-muted-foreground'>Categories</div>
            </div>
            <div className='rounded-xl border border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 text-center'>
              <div className='mb-2 text-3xl font-bold text-green-500'>30+</div>
              <div className='text-sm text-muted-foreground'>Technologies</div>
            </div>
            <div className='rounded-xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 text-center'>
              <div className='mb-2 text-3xl font-bold text-purple-500'>5+</div>
              <div className='text-sm text-muted-foreground'>
                Years Experience
              </div>
            </div>
            <div className='rounded-xl border border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 text-center'>
              <div className='mb-2 text-3xl font-bold text-orange-500'>85%</div>
              <div className='text-sm text-muted-foreground'>
                Avg. Proficiency
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
