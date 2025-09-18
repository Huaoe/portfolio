import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/huaoe',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thomas-berrod-1010562',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:thomasberrod42+pf@gmail.com',
    icon: Mail,
  },
]

export const Footer = () => {
  return (
    <footer className='border-t border-border bg-background'>
      <div className='mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex justify-center space-x-6 md:order-2'>
          {socialLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-muted-foreground hover:text-foreground transition-colors'
              target='_blank'
              rel='noopener noreferrer'
              aria-label={item.name}
            >
              <item.icon className='h-6 w-6' />
            </Link>
          ))}
        </div>
        <div className='mt-8 md:order-1 md:mt-0'>
          <p className='text-center text-xs leading-5 text-muted-foreground'>
            &copy; {new Date().getFullYear()} Thomas Berrod. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
