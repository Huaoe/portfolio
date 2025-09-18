export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <section className='flex h-screen w-full items-center justify-center'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl'>
            Thomas Berrod
          </h1>
          <p className='mb-8 text-xl text-muted-foreground sm:text-2xl'>
            Full Stack Developer & Web3 Innovator
          </p>
          <p className='mx-auto max-w-2xl text-lg text-muted-foreground'>
            Crafting innovative web experiences with React.js, TypeScript, Three.js, and Web3 technologies.
            Specializing in modern, responsive applications with cutting-edge AI integration.
          </p>
        </div>
      </section>
    </main>
  )
}
