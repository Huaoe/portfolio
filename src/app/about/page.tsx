export default function About() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='mx-auto max-w-4xl'>
        <h1 className='mb-8 text-4xl font-bold'>About Me</h1>
        
        <div className='prose prose-lg dark:prose-invert max-w-none'>
          <p className='text-xl text-muted-foreground mb-8'>
            I'm Thomas Berrod, a passionate full-stack developer with expertise in modern web technologies,
            specializing in React.js, TypeScript, Node.js, and cutting-edge Web3 development.
          </p>
          
          <div className='grid gap-8 md:grid-cols-2'>
            <div>
              <h2 className='text-2xl font-semibold mb-4'>Background</h2>
              <p className='text-muted-foreground'>
                With years of experience in software development, I've worked on projects ranging from
                enterprise applications to innovative Web3 platforms. I love creating immersive digital
                experiences that push the boundaries of what's possible on the web.
              </p>
            </div>
            
            <div>
              <h2 className='text-2xl font-semibold mb-4'>Expertise</h2>
              <ul className='space-y-2 text-muted-foreground'>
                <li>• Full-Stack Development (React, Node.js, TypeScript)</li>
                <li>• 3D Web Graphics (Three.js, WebGL)</li>
                <li>• Web3 & Blockchain Development</li>
                <li>• AI Integration & Machine Learning</li>
                <li>• Modern UI/UX Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
