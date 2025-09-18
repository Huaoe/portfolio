export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  imageUrl?: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  category: 'web' | 'mobile' | 'web3' | 'ai' | 'other'
  createdAt: Date
  updatedAt: Date
}

export interface Experience {
  id: string
  company: string
  position: string
  description: string
  startDate: Date
  endDate?: Date
  technologies: string[]
  current: boolean
}

export interface Skill {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'web3' | 'ai' | 'tools' | 'other'
  proficiency: number // 1-100
  icon?: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface ThemeConfig {
  mode: 'light' | 'dark' | 'system'
}

export interface NFTMetadata {
  name: string
  description: string
  image: string
  attributes: Array<{
    trait_type: string
    value: string | number
  }>
}

export interface AIGenerationParams {
  prompt: string
  style?: string
  seed?: number
  steps?: number
  guidance?: number
}
