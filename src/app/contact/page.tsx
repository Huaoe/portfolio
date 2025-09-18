'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic will be implemented later
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='mx-auto max-w-6xl'>
        <h1 className='mb-8 text-4xl font-bold'>Get In Touch</h1>
        
        <div className='grid gap-12 lg:grid-cols-2'>
          {/* Contact Information */}
          <div>
            <h2 className='mb-6 text-2xl font-semibold'>Let's Connect</h2>
            <p className='mb-8 text-lg text-muted-foreground'>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className='space-y-6'>
              <div className='flex items-center space-x-4'>
                <Mail className='h-6 w-6 text-primary' />
                <div>
                  <p className='font-medium'>Email</p>
                  <p className='text-muted-foreground'>contact@thomasberrod.dev</p>
                </div>
              </div>
              
              <div className='flex items-center space-x-4'>
                <Phone className='h-6 w-6 text-primary' />
                <div>
                  <p className='font-medium'>Phone</p>
                  <p className='text-muted-foreground'>Available upon request</p>
                </div>
              </div>
              
              <div className='flex items-center space-x-4'>
                <MapPin className='h-6 w-6 text-primary' />
                <div>
                  <p className='font-medium'>Location</p>
                  <p className='text-muted-foreground'>Available for remote work</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid gap-6 sm:grid-cols-2'>
                <div>
                  <label htmlFor='name' className='mb-2 block text-sm font-medium'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
                    placeholder='Your name'
                  />
                </div>
                
                <div>
                  <label htmlFor='email' className='mb-2 block text-sm font-medium'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
                    placeholder='your@email.com'
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor='subject' className='mb-2 block text-sm font-medium'>
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
                  placeholder='What is this about?'
                />
              </div>
              
              <div>
                <label htmlFor='message' className='mb-2 block text-sm font-medium'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className='w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
                  placeholder='Your message...'
                />
              </div>
              
              <button
                type='submit'
                className='inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
              >
                <Send className='mr-2 h-4 w-4' />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
