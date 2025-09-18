'use client'

import { Calendar, MapPin, Award, Code, Lightbulb } from 'lucide-react'

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
    company: 'BMD',
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

export default function About() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='mx-auto max-w-6xl'>
        {/* Header */}
        <div className='mb-16 text-center'>
          <h1 className='mb-6 text-4xl font-bold lg:text-5xl'>About Me</h1>
          <p className='mx-auto max-w-3xl text-xl text-muted-foreground leading-relaxed'>
            I'm Thomas Berrod, a passionate full-stack developer with expertise in modern web technologies,
            specializing in React.js, TypeScript, Node.js, and cutting-edge Web3 development.
          </p>
        </div>

        {/* Introduction */}
        <div className='mb-16 rounded-2xl bg-gradient-to-r from-primary/5 to-purple-500/5 p-8 border border-border/50'>
          <div className='grid gap-8 lg:grid-cols-2 items-center'>
            <div>
              <h2 className='mb-4 text-2xl font-semibold flex items-center gap-2'>
                <Lightbulb className='h-6 w-6 text-primary' />
                My Journey
              </h2>
              <p className='text-muted-foreground leading-relaxed mb-4'>
                With years of experience in software development, I've worked on projects ranging from
                enterprise applications to innovative Web3 platforms. I love creating immersive digital
                experiences that push the boundaries of what's possible on the web.
              </p>
              <p className='text-muted-foreground leading-relaxed'>
                My passion lies in combining cutting-edge technologies like AI, blockchain, and 3D graphics
                to create applications that are not just functional, but truly innovative and engaging.
              </p>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='rounded-lg bg-background/50 p-4 text-center border border-border/50'>
                <div className='text-2xl font-bold text-primary'>20+</div>
                <div className='text-sm text-muted-foreground'>Years Experience</div>
              </div>
              <div className='rounded-lg bg-background/50 p-4 text-center border border-border/50'>
                <div className='text-2xl font-bold text-primary'>50+</div>
                <div className='text-sm text-muted-foreground'>Projects Completed</div>
              </div>
              <div className='rounded-lg bg-background/50 p-4 text-center border border-border/50'>
                <div className='text-2xl font-bold text-primary'>15+</div>
                <div className='text-sm text-muted-foreground'>Technologies</div>
              </div>
              <div className='rounded-lg bg-background/50 p-4 text-center border border-border/50'>
                <div className='text-2xl font-bold text-primary'>10k+</div>
                <div className='text-sm text-muted-foreground'>Users Impacted</div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className='mb-16'>
          <h2 className='mb-8 text-3xl font-semibold text-center'>Professional Experience</h2>
          <div className='relative'>
            {/* Timeline line */}
            <div className='absolute left-4 top-0 bottom-0 w-0.5 bg-border lg:left-1/2'></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:text-right'}`}>
                {/* Timeline dot */}
                <div className='absolute left-2 h-4 w-4 rounded-full bg-primary border-4 border-background lg:left-1/2 lg:-translate-x-1/2'></div>
                
                <div className={`ml-12 lg:ml-0 ${index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'}`}>
                  <div className='rounded-lg bg-card p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow'>
                    <div className='mb-2 flex items-center gap-2 text-sm text-muted-foreground'>
                      <Calendar className='h-4 w-4' />
                      {exp.period}
                      <MapPin className='h-4 w-4 ml-2' />
                      {exp.location}
                    </div>
                    <h3 className='mb-1 text-xl font-semibold'>{exp.title}</h3>
                    <p className='mb-3 text-primary font-medium'>{exp.company}</p>
                    <p className='mb-4 text-muted-foreground'>{exp.description}</p>
                    <ul className='space-y-1'>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className='flex items-start gap-2 text-sm text-muted-foreground'>
                          <Award className='h-4 w-4 text-primary mt-0.5 flex-shrink-0' />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div>
          <h2 className='mb-8 text-3xl font-semibold text-center'>Technical Skills</h2>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className='rounded-lg bg-card p-6 shadow-sm border border-border/50'>
                <h3 className='mb-4 text-lg font-semibold flex items-center gap-2'>
                  <Code className='h-5 w-5 text-primary' />
                  {skillGroup.category}
                </h3>
                <div className='space-y-2'>
                  {skillGroup.items.map((skill) => (
                    <div key={skill} className='rounded-full bg-secondary/50 px-3 py-1 text-sm font-medium text-center'>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
