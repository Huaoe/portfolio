export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Three.js', level: 85 },
        { name: 'TailwindCSS', level: 92 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'GraphQL', level: 70 },
      ]
    },
    {
      title: 'Web3 & Blockchain',
      skills: [
        { name: 'Solidity', level: 82 },
        { name: 'Wagmi/Viem', level: 85 },
        { name: 'Hardhat', level: 80 },
        { name: 'OpenZeppelin', level: 78 },
        { name: 'IPFS', level: 75 },
      ]
    },
    {
      title: 'AI & Tools',
      skills: [
        { name: 'Stable Diffusion', level: 75 },
        { name: 'Git/GitHub', level: 95 },
        { name: 'Docker', level: 70 },
        { name: 'Vercel', level: 90 },
        { name: 'Jest/Testing', level: 85 },
      ]
    }
  ]

  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='mx-auto max-w-6xl'>
        <h1 className='mb-8 text-4xl font-bold'>Skills & Technologies</h1>
        
        <div className='grid gap-8 md:grid-cols-2'>
          {skillCategories.map((category) => (
            <div key={category.title} className='rounded-lg border bg-card p-6 shadow-sm'>
              <h2 className='mb-6 text-2xl font-semibold'>{category.title}</h2>
              <div className='space-y-4'>
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className='mb-2 flex justify-between'>
                      <span className='font-medium'>{skill.name}</span>
                      <span className='text-sm text-muted-foreground'>{skill.level}%</span>
                    </div>
                    <div className='h-2 w-full rounded-full bg-secondary'>
                      <div 
                        className='h-2 rounded-full bg-primary transition-all duration-1000'
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
