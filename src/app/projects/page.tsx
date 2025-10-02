'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ExternalLink, Github, Eye, Filter, Search } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Dalma Frontend Development',
    description:
      'Led frontend development team at Dalma, building cross-device mobile apps from scratch and managing offshore testing teams. Refactored subscription flows and implemented cutting-edge technologies in a Scrum environment.',
    image: '/images/Dalma.png',
    category: 'Professional Experience',
    status: 'Completed',
    featured: true,
    technologies: [
      'React.js',
      'TypeScript',
      'Next.js',
      'React Native',
      'XState',
      'TailwindCSS',
      'Material-UI',
      'ShadcnUI',
      'Radix',
      'i18n',
      'GitHub Actions',
      'Lerna',
      'Figma',
      'AWS',
    ],
    liveUrl: 'https://app.dalma.co/login',
    githubUrl: null,
    stats: {
      duration: '2+ years',
      team: '15+ devs',
      platforms: '3 Multi-device',
    },
  },

  {
    id: 2,
    title: 'We Deploy Science',
    description:
      'Platform for scientific project deployment and collaboration. Streamlines the process of sharing and deploying scientific research and tools.',
    image: '/images/weDeployScience.png',
    category: 'Science & Research',
    status: 'Completed',
    featured: true,
    technologies: [
      'Unity',
      'C#',
      'python',
      'React.js',
      'Saga',
      'Next.js',
      'TypeScript',
      'Docker',
      'InfluxDB',
      'MongoDB',
      'Firebase',
      'GraphQL',
      'Graphana',
    ],
    liveUrl: 'https://we.deploy.science/',
    githubUrl: null,
    stats: {
      projects: '8+',
      researchers: '2+',
      deployments: '1K+',
    },
  },
  {
    id: 3,
    title: 'Workspace Token',
    description:
      'Web3 workspace management platform with tokenized access control. Enables decentralized workspace governance and resource allocation.',
    image: '/images/workspaceToken.png',
    category: 'Web3',
    status: 'Completed',
    featured: false,
    technologies: [
      'React',
      'Solidity',
      'Web3.js',
      'IPFS',
      'Hardhat',
      'Next.js',
      'TypeScript',
      'web3.js',
      'Wagmi/Viem',
      'TailwindCSS',
      'ShadcnUI',
    ],
    liveUrl: 'https://workspace-token.vercel.app',
    githubUrl: null,
    stats: {
      tokens: '1+',
      workspaces: '10+',
      transactions: '1000+',
    },
  },
  {
    id: 5,
    title: 'Les Grappes',
    description:
      'Premium wine marketplace platform connecting wine enthusiasts with exclusive selections. Built with modern web technologies for seamless user experience.',
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
      transactions: '25K+',
    },
  },
  {
    id: 4,
    title: 'Stimio.fr',
    description:
      'Interactive platform for cognitive stimulation and brain training exercises. Features personalized training programs and progress tracking.',
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
      sessions: '50K+',
    },
  },
  {
    id: 6,
    title: 'Talents Tube',
    description:
      'Video platform for showcasing professional talents and skills. Connected creators with opportunities through video portfolios.',
    image: '/images/talentsTube.png',
    category: 'Social Platform',
    status: 'Archived',
    featured: false,
    technologies: [
      'React',
      'Node.js',
      'FFmpeg',
      'firebase',
      'WebRTC',
      'Saga',
      'Material UI',
      'Next.js',
      'TypeScript',
      'Docker',
      'Symphony',
    ],
    liveUrl:
      'https://web.archive.org/web/20221201075721/https://www.talentstube.com/',
    githubUrl: null,
    stats: {
      videos: '10K+',
      creators: '2K+',
      views: '1M+',
    },
  },
  {
    id: 7,
    title: 'Auray Petition',
    description:
      'Digital petition platform for local civic engagement. Revolutionary digital petition system for regulating church bell sounds in Auray.',
    image: '/images/aurayPetition.png',
    category: 'Civic Tech',
    status: 'Completed',
    featured: false,
    technologies: [
      'TypeScript',
      'Next.js',
      'Vercel',
      'Supabase',
      'TailwindCSS',
      'ShadcnUI',
    ],
    liveUrl: 'https://auray-petition.vercel.app/',
    githubUrl: 'https://github.com/Huaoe/auray-petition',
    stats: {
      signatures: '500+',
      shares: '200+',
      engagement: '85%',
    },
  },
  {
    id: 8,
    title: 'Secularisation Gallery',
    description:
      'Interactive gallery showcasing the historical process of secularization through visual storytelling and data visualization.',
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
      interactions: '5K+',
    },
  },
  {
    id: 9,
    title: 'Star Wars Bee - Anti-Asian-Hornet Laser Defense System',
    description:
      'An autonomous laser defense system designed to protect beehives from Asian hornets while preserving beneficial bees. This project combines computer vision, LIDAR sensing, and precision targeting to create an ethical and effective hornet deterrent system.',
    image: '/images/starwarsbeeGit.png',
    category: 'Arduino Dev',
    status: 'Ongoing',
    featured: false,
    technologies: [
      'Arduino',
      'LIDAR',
      'Computer Vision',
      'Precision Targeting',
    ],
    liveUrl: null,
    githubUrl: null,
    stats: {
      score: '4.5/5',
    },
  },
  {
    id: 10,
    title: 'ELURC DAO',
    description:
      'Decentralized Autonomous Organization for ELURC token governance. Features ERC20 token implementation with DAO voting mechanisms.',
    image: '/images/coinElur512.png',
    category: 'Web3',
    status: 'Ongoing',
    featured: false,
    technologies: [
      'Solidity',
      'OpenZeppelin',
      'Hardhat',
      'React',
      'Web3.js',
      'jupiter',
      'Realms DAO',
    ],
    liveUrl: "https://elurc-dao.onrender.com/",
    githubUrl: null,
    stats: {
      holders: '1K+',
      proposals: '50+',
      tvl: '$100K+',
    },
  },
]

const categories = [
  'All',
  'E-Commerce',
  'Science & Research',
  'Web3',
  'Health & Wellness',
  'Social Platform',
  'Civic Tech',
  'Education',
  'Professional Experience',
  'Arduino Dev',
  'Tools & DevOps',
]
const statuses = ['All', 'Completed', 'Archived', 'On going']

// Custom hook for intersection observer (reused from About page)
const useIntersectionObserver = (options: IntersectionObserverInit = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
        ...options,
      }
    )

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

// Animated counter component for project stats
const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = '',
}: {
  end: number
  duration?: number
  suffix?: string
}) => {
  const [count, setCount] = useState(0)
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver()

  useEffect(() => {
    if (hasIntersected) {
      let startTime: number | null = null
      const startCount = 0

      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)

        setCount(Math.floor(progress * end))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [hasIntersected, end, duration])

  return (
    <div ref={ref} className='text-lg font-bold text-primary'>
      {count}
      {suffix}
    </div>
  )
}

// Project card component with animations
const ProjectCard = ({
  project,
  index,
  isFeatured = false,
}: {
  project: any
  index: number
  isFeatured?: boolean
}) => {
  const [cardRef, cardIntersecting, cardHasIntersected] =
    useIntersectionObserver()

  return (
    <div
      ref={cardRef}
      className={`group rounded-${isFeatured ? '2xl' : 'xl'} bg-card ${isFeatured ? 'p-8' : 'p-6'} border border-border/50 shadow-sm hover:shadow-${isFeatured ? 'lg' : 'md'} transition-all duration-500 hover:scale-[1.02] ${
        cardHasIntersected
          ? 'translate-y-0 rotate-0 opacity-100'
          : 'translate-y-8 rotate-1 opacity-0'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Project Image */}
      <div
        className={`${isFeatured ? 'mb-6 h-64' : 'mb-4 h-48'} ${isFeatured ? 'bg-gradient-to-br from-primary/10 to-purple-500/10' : 'bg-gradient-to-br from-primary/5 to-purple-500/5'} ${isFeatured ? 'rounded-xl' : 'rounded-lg'} relative overflow-hidden border border-border/50`}
      >
        {project.image && !project.image.includes('placeholder') ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className='object-cover transition-transform duration-300 hover:scale-105'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        ) : (
          <div className='flex h-full w-full items-center justify-center'>
            <Eye
              className={`${isFeatured ? 'h-12 w-12' : 'h-8 w-8'} text-muted-foreground`}
            />
          </div>
        )}
      </div>

      {/* Project Info */}
      <div
        className={`${isFeatured ? 'mb-4' : 'mb-2'} flex items-center justify-between`}
      >
        <div className='flex items-center gap-3'>
          <h3
            className={`${isFeatured ? 'text-xl' : 'text-lg'} font-semibold transition-colors group-hover:text-primary`}
          >
            {project.title}
          </h3>
          {isFeatured && (
            <span
              className={`rounded-full px-2 py-1 text-xs font-medium ${
                project.status === 'Live'
                  ? 'bg-green-500/10 text-green-500'
                  : 'bg-orange-500/10 text-orange-500'
              }`}
            >
              {project.status}
            </span>
          )}
        </div>
        {!isFeatured && (
          <span
            className={`rounded-full px-2 py-1 text-xs font-medium ${
              project.status === 'Live'
                ? 'bg-green-500/10 text-green-500'
                : 'bg-orange-500/10 text-orange-500'
            }`}
          >
            {project.status}
          </span>
        )}
      </div>

      {isFeatured ? (
        <span className='rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary'>
          {project.category}
        </span>
      ) : (
        <span className='mb-3 inline-block rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary'>
          {project.category}
        </span>
      )}

      <p
        className={`${isFeatured ? 'mb-6 text-base' : 'mb-4 text-sm'} leading-relaxed text-muted-foreground`}
      >
        {project.description}
      </p>

      {/* Stats - Featured projects only */}
      {isFeatured && (
        <div className='mb-6 grid grid-cols-3 gap-4'>
          {Object.entries(project.stats).map(([key, value]) => {
            // Extract number for animation
            const numericValue =
              typeof value === 'string'
                ? parseInt(value.replace(/\D/g, '')) || 0
                : typeof value === 'number'
                  ? value
                  : 0
            const suffix =
              typeof value === 'string' ? value.replace(/^\d+/, '') : ''

            return (
              <div key={key} className='text-center'>
                <AnimatedCounter end={numericValue} suffix={suffix} />
                <div className='text-xs capitalize text-muted-foreground'>
                  {key}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Technologies */}
      <div
        className={`mb-${isFeatured ? '6' : '4'} flex flex-wrap gap-${isFeatured ? '2' : '1'}`}
      >
        {(isFeatured
          ? project.technologies
          : project.technologies.slice(0, 4)
        ).map((tech: string) => (
          <span
            key={tech}
            className={`rounded-full bg-secondary/50 px-${isFeatured ? '3' : '2'} cursor-default py-1 text-xs font-medium transition-all duration-300 hover:scale-105 hover:bg-primary/20 hover:text-primary`}
          >
            {tech}
          </span>
        ))}
        {!isFeatured && project.technologies.length > 4 && (
          <span className='rounded-full bg-secondary/50 px-2 py-1 text-xs font-medium'>
            +{project.technologies.length - 4}
          </span>
        )}
      </div>

      {/* Links */}
      <div className={`flex gap-${isFeatured ? '4' : '2'}`}>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target='_blank'
            rel='noopener noreferrer'
            className={`inline-flex items-center gap-${isFeatured ? '2' : '1'} rounded-${isFeatured ? 'lg' : 'md'} bg-primary px-${isFeatured ? '4' : '3'} py-${isFeatured ? '2' : '1.5'} text-${isFeatured ? 'sm' : 'xs'} font-medium text-primary-foreground transition-colors duration-200 hover:scale-105 hover:bg-primary/90`}
          >
            <ExternalLink
              className={`h-${isFeatured ? '4' : '3'} w-${isFeatured ? '4' : '3'}`}
            />
            {isFeatured ? 'Link' : 'Live'}
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className={`inline-flex items-center gap-${isFeatured ? '2' : '1'} rounded-${isFeatured ? 'lg' : 'md'} border border-border bg-background px-${isFeatured ? '4' : '3'} py-${isFeatured ? '2' : '1.5'} text-${isFeatured ? 'sm' : 'xs'} font-medium transition-colors duration-200 hover:scale-105 hover:bg-accent`}
          >
            <Github
              className={`h-${isFeatured ? '4' : '3'} w-${isFeatured ? '4' : '3'}`}
            />
            {isFeatured ? 'Source Code' : 'Code'}
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [headerRef, headerIntersecting, headerHasIntersected] =
    useIntersectionObserver()
  const [filtersRef, filtersIntersecting, filtersHasIntersected] =
    useIntersectionObserver()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory
    const matchesStatus =
      selectedStatus === 'All' || project.status === selectedStatus
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      )

    return matchesCategory && matchesStatus && matchesSearch
  })

  const featuredProjects = filteredProjects.filter(
    (project) => project.featured
  )
  const regularProjects = filteredProjects.filter(
    (project) => !project.featured
  )

  return (
    <div className='container relative mx-auto overflow-hidden px-4 py-12'>
      {/* Floating background elements */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div
          className='animate-float absolute -right-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 blur-3xl'
          style={{
            transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`,
          }}
        ></div>
        <div
          className='animate-float-delayed absolute -left-40 top-1/2 h-60 w-60 rounded-full bg-gradient-to-br from-blue-500/20 via-primary/20 to-purple-500/20 blur-3xl'
          style={{
            transform: `translateY(${scrollY * 0.15}px) rotate(${-scrollY * 0.03}deg)`,
          }}
        ></div>
        <div
          className='animate-float-slow absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-primary/20 blur-3xl'
          style={{
            transform: `translateY(${scrollY * 0.08}px) rotate(${scrollY * 0.02}deg)`,
          }}
        ></div>
      </div>

      <div className='relative z-10 mx-auto max-w-7xl'>
        {/* Header */}
        <div
          ref={headerRef}
          className={` mb-16 text-center transition-all duration-1000 ${
            headerHasIntersected
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <h1 className='animate-gradient-x mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-4xl font-bold text-transparent lg:text-5xl line-clamp-3'>
            My Projects
          </h1>
          <p className='mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground'>
            A showcase of my recent work spanning Web3, AI/ML, and full-stack
            development. Each project represents a unique challenge and
            innovative solution.
          </p>
        </div>

        {/* Search and Filters */}
        <div
          ref={filtersRef}
          className={`mb-12 space-y-6 transition-all delay-200 duration-1000 ${
            filtersHasIntersected
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Search Bar */}
          <div className='relative mx-auto max-w-md'>
            <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
            <input
              type='text'
              placeholder='Search projects, technologies...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full rounded-lg border border-border bg-background py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
            />
          </div>

          {/* Filter Toggle */}
          <div className='text-center'>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className='inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent'
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
                <span className='text-sm font-medium text-muted-foreground'>
                  Category:
                </span>
                {categories.map((category) => (
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
                <span className='text-sm font-medium text-muted-foreground'>
                  Status:
                </span>
                {statuses.map((status) => (
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
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isFeatured={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects */}
        {regularProjects.length > 0 && (
          <div>
            <h2 className='mb-8 text-2xl font-semibold'>All Projects</h2>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {regularProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index + featuredProjects.length}
                  isFeatured={false}
                />
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className='py-12 text-center'>
            <div className='mb-4 text-4xl'>🔍</div>
            <h3 className='mb-2 text-xl font-semibold'>No projects found</h3>
            <p className='text-muted-foreground'>
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
