'use client'

import { useState, useEffect, useRef } from 'react'
import { Calendar, MapPin, Award, Code, Lightbulb, Sparkles, Zap } from 'lucide-react'

const experiences = [
  {
    title: 'Fullstack Engineer',
    company: 'Berrodsoft (Self-employed)',
    location: 'Auray, Brittany, France (Remote)',
    period: 'Jun 2024 - Present',
    description: 'Leading innovative projects combining Web3, AI, and IoT technologies. Developing cutting-edge applications from railway analytics to blockchain tokenization and laser-guided pest control systems.',
    achievements: [
      'Built Stimio.fr: Railway pedal time series analysis for predictive maintenance',
      'Developed WorkspaceToken: Real estate tokenization DApp with ERC20 and EURC',
      'Created StarWarsBee: Lidar-guided laser system for Asian hornet elimination',
      'Launched TrickTrack: Web3 skateboarding community with NFT rewards',
      'Built MatePlanner: AI-powered vacation planning with social gaming features'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'Dalma',
    location: 'Auray, Brittany, France',
    period: 'Mar 2022 - Jun 2024',
    description: 'Led frontend development and team management for subscription-based platform. Built cross-device mobile applications and managed international testing teams using modern React ecosystem.',
    achievements: [
      'Refactored complete subscription flow improving user conversion',
      'Built cross-device mobile app from scratch using React Native',
      'Managed offshore testing team from Russia',
      'Led frontend development team using Scrum methodology',
      'Implemented cutting-edge stack: React.js, TypeScript, Next.js, XState, Tailwind'
    ]
  },
  {
    title: 'IT Developer & Architect',
    company: 'BMD now we.deploy(science)',
    location: 'Auray, Paris',
    period: 'Nov 2019 - Jan 2022',
    description: 'Architected modern web solutions and PWA implementations. Developed innovative sailing simulator combining Unity, databases, and real-time analytics.',
    achievements: [
      'Pioneered PWA (Progressive Web Application) adoption for clients',
      'Built sailing simulator using Unity, C#, Python stack',
      'Implemented modern React.js → Next.js migration',
      'Integrated MongoDB, InfluxDB, Postgres with Grafana analytics',
      'Deployed containerized solutions with Docker'
    ]
  },
  {
    title: 'Digital Innovation Advisor',
    company: 'City of Auray',
    location: 'Auray, Brittany, France',
    period: 'Jun 2020 - Aug 2021',
    description: 'Municipal digital transformation consultant focusing on innovation and technology adoption for public services.',
    achievements: [
      'Advised on digital transformation strategies',
      'Implemented innovative public service solutions',
      'Promoted technology adoption in municipal operations'
    ]
  },
  {
    title: 'PWA Developer & Scrum Master',
    company: 'e-declic',
    location: 'Bretagne, France',
    period: 'Aug 2018 - Nov 2019',
    description: 'Led PWA development and agile project management. Built modern web applications using React ecosystem and managed development workflows.',
    achievements: [
      'Developed TalentsTube platform (app.talentstube.com)',
      'Mastered Scrum methodology and team leadership',
      'Implemented React.js, Next.js, Saga architecture',
      'Deployed with Docker, Nginx, PM2 stack',
      'Integrated MaterialUI and react-spring animations'
    ]
  },
  {
    title: 'Full Stack Developer & Solution Architect',
    company: 'Les Grappes Services (ex Plugwine)',
    location: 'Paris',
    period: 'Oct 2012 - Sep 2016',
    description: 'Architected and developed wine e-commerce platform using Microsoft stack. Built scalable web solutions with modern frontend frameworks.',
    achievements: [
      'Built Plugwine.com e-commerce platform',
      'Architected C# ASP.NET MVC 4.0 solutions',
      'Implemented REST APIs and responsive design',
      'Developed with jQuery, HTML5, Bootstrap',
      'Managed full-stack development lifecycle'
    ]
  }
]

const skills = [
  { 
    category: 'Frontend', 
    items: ['React.js', 'TypeScript', 'Next.js', 'React Native', 'TailwindCSS', 'Material-UI', 'Shadcn/UI', 'Radix', 'XState', 'i18n', 'JSS', 'react-spring', 'jQuery', 'HTML5', 'Bootstrap'] 
  },
  { 
    category: 'Backend', 
    items: ['Node.js', 'Express.js', 'C#', 'ASP.NET MVC', 'Web API', 'MongoDB', 'PostgreSQL', 'InfluxDB', 'GraphQL', 'Firebase', 'Saga', 'WCF', 'REST APIs'] 
  },
  { 
    category: 'Web3 & Blockchain', 
    items: ['Solidity', 'ERC20 Tokens', 'EURC', 'NFT Development', 'DApp Architecture', 'Blockchain Integration', 'Tokenization'] 
  },
  { 
    category: 'AI & Machine Learning', 
    items: ['Time Series Analysis', 'Predictive Analytics', 'AI Planning Systems', 'Computer Vision', 'EmguCV', 'OpenCV', 'CBIR (Content-Based Image Retrieval)'] 
  },
  { 
    category: 'Game Development & 3D', 
    items: ['Unity', 'C#', 'Three.js', 'WebGL', 'Lidar Integration', 'Physics Simulation', 'Real-time Analytics'] 
  },
  { 
    category: 'Mobile Development', 
    items: ['React Native', 'Windows Phone 7', 'Xamarin', 'Monotouch', 'Cross-platform Development', 'Silverlight'] 
  },
  { 
    category: 'DevOps & Tools', 
    items: ['Docker', 'Nginx', 'PM2', 'GitHub Actions', 'Lerna', 'AWS', 'Azure', 'Grafana', 'Git', 'Figma', 'MOSS 2007'] 
  },
  { 
    category: 'IoT & Hardware', 
    items: ['RFID Systems', 'Lidar Technology', 'Sensor Integration', 'Railway Systems', 'Hardware-Software Integration'] 
  }
]

// Custom hook for intersection observer
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

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver()

  useEffect(() => {
    if (hasIntersected) {
      let startTime = null
      const startCount = 0
      
      const animate = (currentTime) => {
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
    <div ref={ref} className='text-2xl font-bold text-primary'>
      {count}{suffix}
    </div>
  )
}

// Experience item component
const ExperienceItem = ({ exp, index }: { exp: any, index: number }) => {
  const [expRef, expIntersecting, expHasIntersected] = useIntersectionObserver()
  
  return (
    <div 
      ref={expRef}
      className={`relative mb-12 transition-all duration-700 ${
        index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:text-right'
      } ${
        expHasIntersected 
          ? 'opacity-100 translate-y-0 translate-x-0' 
          : `opacity-0 translate-y-8 ${
              index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'
            }`
      }`}
      style={{
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* Animated Timeline dot */}
      <div className={`absolute left-2 h-4 w-4 rounded-full bg-primary border-4 border-background lg:left-1/2 lg:-translate-x-1/2 transition-all duration-500 ${
        expHasIntersected 
          ? 'scale-100 shadow-lg shadow-primary/50' 
          : 'scale-0'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`
      }}>
        <div className='absolute inset-0 rounded-full bg-primary animate-ping opacity-20'></div>
      </div>
      
      <div className={`ml-12 lg:ml-0 ${index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'}`}>
        <div className='rounded-lg bg-card/80 backdrop-blur-sm p-6 shadow-sm border border-border/50 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] group'>
          <div className='mb-2 flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors'>
            <Calendar className='h-4 w-4 group-hover:text-primary transition-colors' />
            {exp.period}
            <MapPin className='h-4 w-4 ml-2 group-hover:text-primary transition-colors' />
            {exp.location}
          </div>
          <h3 className='mb-1 text-xl font-semibold group-hover:text-primary transition-colors'>{exp.title}</h3>
          <p className='mb-3 text-primary font-medium group-hover:text-purple-500 transition-colors'>{exp.company}</p>
          <p className='mb-4 text-muted-foreground group-hover:text-foreground/80 transition-colors'>{exp.description}</p>
          <ul className='space-y-1'>
            {exp.achievements.map((achievement: string, i: number) => (
              <li key={i} className='flex items-start gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors'>
                <Award className='h-4 w-4 text-primary mt-0.5 flex-shrink-0 group-hover:animate-pulse' />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

// Skill group component
const SkillGroup = ({ skillGroup, groupIndex }: { skillGroup: any, groupIndex: number }) => {
  const [skillRef, skillIntersecting, skillHasIntersected] = useIntersectionObserver()
  
  return (
    <div 
      ref={skillRef}
      className={`rounded-lg bg-card/80 backdrop-blur-sm p-6 shadow-sm border border-border/50 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 group ${
        skillHasIntersected 
          ? 'opacity-100 translate-y-0 rotate-0' 
          : 'opacity-0 translate-y-8 rotate-1'
      }`}
      style={{
        transitionDelay: `${groupIndex * 100}ms`
      }}
    >
      <h3 className='mb-4 text-lg font-semibold flex items-center gap-2 group-hover:text-primary transition-colors'>
        <Code className='h-5 w-5 text-primary group-hover:animate-pulse' />
        {skillGroup.category}
      </h3>
      <div className='space-y-2'>
        {skillGroup.items.map((skill: string, skillIndex: number) => (
          <div 
            key={skill} 
            className={`rounded-full bg-secondary/50 px-3 py-1 text-sm font-medium text-center hover:bg-primary/20 hover:text-primary hover:scale-105 transition-all duration-300 cursor-default ${
              skillHasIntersected 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-4'
            }`}
            style={{
              transitionDelay: `${(groupIndex * 100) + (skillIndex * 50)}ms`
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function About() {
  const [scrollY, setScrollY] = useState(0)
  const [headerRef, headerIntersecting, headerHasIntersected] = useIntersectionObserver()
  const [introRef, introIntersecting, introHasIntersected] = useIntersectionObserver()
  const [timelineRef, timelineIntersecting, timelineHasIntersected] = useIntersectionObserver()
  const [skillsRef, skillsIntersecting, skillsHasIntersected] = useIntersectionObserver()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='relative overflow-hidden'>
      {/* Animated background elements */}
      <div className='fixed inset-0 pointer-events-none'>
        <div 
          className='absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl'
          style={{
            transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`,
          }}
        />
        <div 
          className='absolute top-96 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl'
          style={{
            transform: `translateY(${scrollY * -0.15}px) rotate(${scrollY * -0.03}deg)`,
          }}
        />
        <div 
          className='absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl'
          style={{
            transform: `translateY(${scrollY * 0.08}px) rotate(${scrollY * 0.02}deg)`,
          }}
        />
      </div>

      <div className='relative container mx-auto px-4 py-12'>
        <div className='mx-auto max-w-6xl'>
          {/* Header */}
          <div 
            ref={headerRef}
            className={`mb-16 text-center transition-all duration-1000 ${
              headerHasIntersected 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className='relative inline-block'>
              <h1 className='mb-6 text-4xl font-bold lg:text-5xl bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x'>
                About Me
              </h1>
              <div className='absolute -top-2 -right-2'>
                <Sparkles className='h-6 w-6 text-yellow-500 animate-pulse' />
              </div>
            </div>
            <p className={`mx-auto max-w-3xl text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-300 ${
              headerHasIntersected 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}>
              I'm Thomas Berrod, a passionate full-stack developer with expertise in modern web technologies,
              specializing in React.js, TypeScript, Node.js, and cutting-edge Web3 development.
            </p>
          </div>

          {/* Introduction */}
          <div 
            ref={introRef}
            className={`mb-16 rounded-2xl bg-gradient-to-r from-primary/5 to-purple-500/5 p-8 border border-border/50 backdrop-blur-sm transition-all duration-1000 hover:shadow-xl hover:shadow-primary/10 ${
              introHasIntersected 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <div className='grid gap-8 lg:grid-cols-2 items-center'>
              <div className={`transition-all duration-1000 delay-200 ${
                introHasIntersected 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}>
                <h2 className='mb-4 text-2xl font-semibold flex items-center gap-2 group'>
                  <Lightbulb className='h-6 w-6 text-primary group-hover:animate-pulse transition-all' />
                  My Journey
                  <Zap className='h-4 w-4 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity' />
                </h2>
                <p className='text-muted-foreground leading-relaxed mb-4 hover:text-foreground/80 transition-colors'>
                  With years of experience in software development, I've worked on projects ranging from
                  enterprise applications to innovative Web3 platforms. I love creating immersive digital
                  experiences that push the boundaries of what's possible on the web.
                </p>
                <p className='text-muted-foreground leading-relaxed hover:text-foreground/80 transition-colors'>
                  My passion lies in combining cutting-edge technologies like AI, blockchain, and 3D graphics
                  to create applications that are not just functional, but truly innovative and engaging.
                </p>
              </div>
              <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-400 ${
                introHasIntersected 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}>
                <div className='rounded-lg bg-background/50 p-4 text-center border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg group'>
                  <AnimatedCounter end={20} suffix='+' />
                  <div className='text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors'>Years Experience</div>
                </div>
                <div className='rounded-lg bg-background/50 p-4 text-center border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg group'>
                  <AnimatedCounter end={50} suffix='+' />
                  <div className='text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors'>Projects Completed</div>
                </div>
                <div className='rounded-lg bg-background/50 p-4 text-center border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg group'>
                  <AnimatedCounter end={15} suffix='+' />
                  <div className='text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors'>Technologies</div>
                </div>
                <div className='rounded-lg bg-background/50 p-4 text-center border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg group'>
                  <AnimatedCounter end={10} suffix='k+' />
                  <div className='text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors'>Users Impacted</div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div 
            ref={timelineRef}
            className={`mb-16 transition-all duration-1000 ${
              timelineHasIntersected 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className='mb-8 text-3xl font-semibold text-center bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent'>
              Professional Experience
            </h2>
            <div className='relative'>
              {/* Animated Timeline line */}
              <div className='absolute left-4 top-0 bottom-0 w-0.5 bg-border lg:left-1/2'></div>
              <div 
                className={`absolute left-4 top-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500 lg:left-1/2 transition-all duration-2000 ease-out ${
                  timelineHasIntersected ? 'h-full' : 'h-0'
                }`}
              ></div>
              
              {experiences.map((exp, index) => (
                <ExperienceItem key={index} exp={exp} index={index} />
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div 
            ref={skillsRef}
            className={`transition-all duration-1000 ${
              skillsHasIntersected 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className='mb-8 text-3xl font-semibold text-center bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent'>
              Technical Skills
            </h2>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
              {skills.map((skillGroup, groupIndex) => (
                <SkillGroup key={skillGroup.category} skillGroup={skillGroup} groupIndex={groupIndex} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
