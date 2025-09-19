'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Github, Eye, Filter, Search } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Dalma Frontend Development',
    description: 'Led frontend development team at Dalma, building cross-device mobile apps from scratch and managing offshore testing teams. Refactored subscription flows and implemented cutting-edge technologies in a Scrum environment.',
    image: '/images/Dalma.png',
    category: 'Professional Experience',
    status: 'Completed',
    featured: true,
    technologies: ['React.js', 'TypeScript', 'Next.js', 'React Native', 'XState', 'TailwindCSS', 'Material-UI', 'ShadcnUI', 'Radix', 'i18n', 'GitHub Actions', 'Lerna', 'Figma', 'AWS'],
    liveUrl: 'https://app.dalma.co/login',
    githubUrl: null,
    stats: {
      duration: '2+ years',
      team: '15+ devs',
      platforms: 'Multi-device'
    }
  },  

  {
    id: 2,
    title: 'We Deploy Science',
    description: 'Platform for scientific project deployment and collaboration. Streamlines the process of sharing and deploying scientific research and tools.',
    image: '/images/weDeployScience.png',
    category: 'Science & Research',
    status: 'Completed',
    featured: true,
    technologies: [ 'Unity', 'C#', 'python', 'React.js', 'Saga', 'Next.js', 'TypeScript', 'Docker', 'InfluxDB', 'MongoDB', 'Firebase', 'GraphQL', 'Graphana'],
    liveUrl: 'https://we.deploy.science/',
    githubUrl: null,
    stats: {
      projects: '8+',
      researchers: '2+',
      deployments: '1K+'
    }
  },
  {
    id: 3,
    title: 'Workspace Token',
    description: 'Web3 workspace management platform with tokenized access control. Enables decentralized workspace governance and resource allocation.',
    image: '/images/workspaceToken.png',
    category: 'Web3',
    status: 'Completed',
    featured: false,
    technologies: ['React', 'Solidity', 'Web3.js', 'IPFS', 'Hardhat', 'Next.js', 'TypeScript', 'web3.js', 'Wagmi/Viem', 'TailwindCSS', 'ShadcnUI'],
    liveUrl: 'https://workspace-token.vercel.app',
    githubUrl: null,
    stats: {
      tokens: '1+',
      workspaces: '10+',
      transactions: '1000+'
    }
  },{
    id: 1,
    title: 'Les Grappes',
    description: 'Premium wine marketplace platform connecting wine enthusiasts with exclusive selections. Built with modern web technologies for seamless user experience.',
    image: '/images/lesgrappes.png',
    category: 'E-Commerce',
    status: 'Completed',
    featured: true,
    technologies: ['C#.Net', 'SQLServer', 'javascript'],
    liveUrl: 'https://www.lesgrappes.com/',
    githubUrl: null,
    stats: {
      users: '10K+',
      team: '25+ devs',
      transactions: '25K+'
    }
  },
  {
    id: 4,
    title: 'Stimio.fr',
    description: 'Interactive platform for cognitive stimulation and brain training exercises. Features personalized training programs and progress tracking.',
    image: '/images/stimio.png',
    category: 'Health & Wellness',
    status: 'Completed',
    featured: true,
    technologies: ['python', 'tensorFlow', 'lightning', 'jupiter'],
    liveUrl: 'https://stimio.fr',
    githubUrl: null,
    stats: {
      users: '2K+',
      exercises: '100+',
      sessions: '50K+'
    }
  },
  {
    id: 6,
    title: 'Talents Tube',
    description: 'Video platform for showcasing professional talents and skills. Connected creators with opportunities through video portfolios.',
    image: '/images/talentsTube.png',
    category: 'Social Platform',
    status: 'Archived',
    featured: false,
    technologies: ['React', 'Node.js', 'FFmpeg', 'firebase', 'WebRTC', 'Saga', 'Material UI', 'Next.js', 'TypeScript', 'Docker', 'Symphony'],
    liveUrl: 'https://web.archive.org/web/20221201075721/https://www.talentstube.com/',
    githubUrl: null,
    stats: {
      videos: '10K+',
      creators: '2K+',
      views: '1M+'
    }
  },
  {
    id: 7,
    title: 'Auray Petition',
    description: 'Digital petition platform for local civic engagement. Revolutionary digital petition system for regulating church bell sounds in Auray.',
    image: '/images/aurayPetition.png',
    category: 'Civic Tech',
    status: 'Completed',
    featured: false,
    technologies: ['TypeScript', 'Next.js', 'Vercel', 'Supabase', 'TailwindCSS', 'ShadcnUI'],
    liveUrl: 'https://auray-petition.vercel.app/',
    githubUrl: 'https://github.com/Huaoe/auray-petition',
    stats: {
      signatures: '500+',
      shares: '200+',
      engagement: '85%'
    }
  },
  {
    id: 8,
    title: 'Secularisation Gallery',
    description: 'Interactive gallery showcasing the historical process of secularization through visual storytelling and data visualization.',
    image: '/images/secularisation.png',
    category: 'Education',
    status: 'Ongoing',
    featured: false,
    technologies: ['React', 'D3.js', 'Next.js', 'Vercel', 'CSS3'],
    liveUrl: 'https://secularization.vercel.app/gallery',
    githubUrl: null,
    stats: {
      artifacts: '300+',
      visitors: '1K+',
      interactions: '5K+'
    }
  },
  {
    id: 9,
    title: 'Star Wars Bee - Anti-Asian-Hornet Laser Defense System',
    description: 'An autonomous laser defense system designed to protect beehives from Asian hornets while preserving beneficial bees. This project combines computer vision, LIDAR sensing, and precision targeting to create an ethical and effective hornet deterrent system.',
    image: '/images/starwarsbeeGit.png',
    category: 'Arduino Dev',
    status: 'Ongoing',
    featured: false,
    technologies: ['Arduino', 'LIDAR', 'Computer Vision', 'Precision Targeting'],
    liveUrl: null,
    githubUrl: null,
    stats: {
      score: '4.5/5'
    }
  },
  {
    id: 10,
    title: 'ELURC DAO',
    description: 'Decentralized Autonomous Organization for ELURC token governance. Features ERC20 token implementation with DAO voting mechanisms.',
    image: '/images/coinElur512.png',
    category: 'Web3',
    status: 'Ongoing',
    featured: false,
    technologies: ['Solidity', 'OpenZeppelin', 'Hardhat', 'React', 'Web3.js', 'jupiter', 'Realms DAO'],
    liveUrl: null,
    githubUrl: null,
    stats: {
      holders: '1K+',
      proposals: '50+',
      tvl: '$100K+'
    }
  }
]

const categories = ['All', 'E-Commerce', 'Science & Research', 'Web3', 'Health & Wellness', 'Social Platform', 'Civic Tech', 'Education', 'Professional Experience', 'Arduino Dev']
const statuses = ['All', 'Completed', 'Archived', 'On going']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return matchesCategory && matchesStatus && matchesSearch
  })

  const featuredProjects = filteredProjects.filter(project => project.featured)
  const regularProjects = filteredProjects.filter(project => !project.featured)

  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='mx-auto max-w-7xl'>
        {/* Header */}
        <div className='mb-16 text-center'>
          <h1 className='mb-6 text-4xl font-bold lg:text-5xl'>My Projects</h1>
          <p className='mx-auto max-w-3xl text-xl text-muted-foreground leading-relaxed'>
            A showcase of my recent work spanning Web3, AI/ML, and full-stack development.
            Each project represents a unique challenge and innovative solution.
          </p>
        </div>

        {/* Search and Filters */}
        <div className='mb-12 space-y-6'>
          {/* Search Bar */}
          <div className='relative mx-auto max-w-md'>
            <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
            <input
              type='text'
              placeholder='Search projects, technologies...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full rounded-lg border border-border bg-background pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
            />
          </div>

          {/* Filter Toggle */}
          <div className='text-center'>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className='inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-accent transition-colors'
            >
              <Filter className='h-4 w-4' />
              Filters
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className='flex flex-wrap justify-center gap-4'>
              {/* Category Filter */}
              <div className='flex flex-wrap gap-2'>
                <span className='text-sm font-medium text-muted-foreground'>Category:</span>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Status Filter */}
              <div className='flex flex-wrap gap-2'>
                <span className='text-sm font-medium text-muted-foreground'>Status:</span>
                {statuses.map(status => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      selectedStatus === status
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className='mb-16'>
            <h2 className='mb-8 text-2xl font-semibold'>Featured Projects</h2>
            <div className='grid gap-8 lg:grid-cols-2'>
              {featuredProjects.map((project) => (
                <div key={project.id} className='group rounded-2xl bg-card p-8 shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]'>
                  {/* Project Image */}
                  <div className='mb-6 h-64 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-xl overflow-hidden border border-border/50 relative'>
                    {project.image && !project.image.includes('placeholder') ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className='object-cover hover:scale-105 transition-transform duration-300'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      />
                    ) : (
                      <div className='w-full h-full flex items-center justify-center'>
                        <Eye className='h-12 w-12 text-muted-foreground' />
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className='mb-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>{project.title}</h3>
                      <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                        project.status === 'Live' 
                          ? 'bg-green-500/10 text-green-500' 
                          : 'bg-orange-500/10 text-orange-500'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <span className='rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary'>
                      {project.category}
                    </span>
                  </div>

                  <p className='mb-6 text-muted-foreground leading-relaxed'>{project.description}</p>

                  {/* Stats */}
                  <div className='mb-6 grid grid-cols-3 gap-4'>
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className='text-center'>
                        <div className='text-lg font-bold text-primary'>{value}</div>
                        <div className='text-xs text-muted-foreground capitalize'>{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className='mb-6 flex flex-wrap gap-2'>
                    {project.technologies.map((tech) => (
                      <span key={tech} className='rounded-full bg-secondary/50 px-3 py-1 text-xs font-medium'>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className='flex gap-4'>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors'
                      >
                        <ExternalLink className='h-4 w-4' />
                        Link
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-accent transition-colors'
                      >
                        <Github className='h-4 w-4' />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects */}
        {regularProjects.length > 0 && (
          <div>
            <h2 className='mb-8 text-2xl font-semibold'>All Projects</h2>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {regularProjects.map((project) => (
                <div key={project.id} className='group rounded-xl bg-card p-6 shadow-sm border border-border/50 hover:shadow-md transition-all duration-300 hover:scale-[1.02]'>
                  {/* Project Image */}
                  <div className='mb-4 h-48 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-lg overflow-hidden border border-border/50 relative'>
                    {project.image && !project.image.includes('placeholder') ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className='object-cover hover:scale-105 transition-transform duration-300'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      />
                    ) : (
                      <div className='w-full h-full flex items-center justify-center'>
                        <Eye className='h-8 w-8 text-muted-foreground' />
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className='mb-2 flex items-center justify-between'>
                    <h3 className='text-lg font-semibold group-hover:text-primary transition-colors'>{project.title}</h3>
                    <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-500/10 text-green-500' 
                        : 'bg-orange-500/10 text-orange-500'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <span className='mb-3 inline-block rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary'>
                    {project.category}
                  </span>

                  <p className='mb-4 text-sm text-muted-foreground leading-relaxed'>{project.description}</p>

                  {/* Technologies */}
                  <div className='mb-4 flex flex-wrap gap-1'>
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className='rounded-full bg-secondary/50 px-2 py-1 text-xs font-medium'>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className='rounded-full bg-secondary/50 px-2 py-1 text-xs font-medium'>
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className='flex gap-2'>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors'
                      >
                        <ExternalLink className='h-3 w-3' />
                        Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-1 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium hover:bg-accent transition-colors'
                      >
                        <Github className='h-3 w-3' />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className='text-center py-12'>
            <div className='mb-4 text-4xl'>🔍</div>
            <h3 className='mb-2 text-xl font-semibold'>No projects found</h3>
            <p className='text-muted-foreground'>Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
