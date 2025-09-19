'use client'

import { useState } from 'react'
import Image from 'next/image'
import emailjs from '@emailjs/browser'
import dynamic from 'next/dynamic'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2, Shield } from 'lucide-react'

// @ts-ignore - Temporary fix for TypeScript compatibility
const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), {
  ssr: false,
  loading: () => <div className="h-20 w-80 bg-gray-100 animate-pulse rounded"></div>
})

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [captchaValue, setCaptchaValue] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    // Check if CAPTCHA is completed
    if (!captchaValue) {
      setSubmitStatus('error')
      setErrorMessage('Please complete the CAPTCHA verification.')
      setIsLoading(false)
      return
    }

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id'
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Thomas Berrod', // Your name
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setSubmitStatus('success')
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      // Reset CAPTCHA
      setCaptchaValue(null)
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
      setErrorMessage('Failed to send message. Please try again or contact me directly.')
      // Reset CAPTCHA on error
      setCaptchaValue(null)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className='min-h-screen'>
      {/* Hero Section with Wave Image */}
      <div className='relative h-96 overflow-hidden'>
        <Image
          src='/images/port-auray-saint-goustan-morbihan-bretagne-12.jpg'
          alt='Japanese Wave'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-black/40' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center text-white'>
            <h1 className='mb-4 text-5xl font-bold lg:text-6xl'>Get In Touch</h1>
            <p className='text-xl opacity-90'>Let's create something amazing together</p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className='container mx-auto px-4 py-16'>
        <div className='mx-auto max-w-6xl'>
        
        <div className='grid gap-12 lg:grid-cols-2'>
          {/* Contact Information with Wave Image */}
          <div className='space-y-8'>
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
                    <p className='text-muted-foreground'>thomasberrod42+pf@gmail.com</p>
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
                    <p className='text-muted-foreground'>Auray & remote work</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Wave Image */}
            <div className='relative h-64 w-full overflow-hidden rounded-lg border border-border/50'>
              <Image
                src='/images/waveJapan.jpg'
                alt='Japanese Wave'
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 50vw'
              />
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
              
              {/* reCAPTCHA */}
              <div className='flex flex-col items-center space-y-2'>
                <div className='flex items-center gap-2 text-sm text-muted-foreground mb-2'>
                  <Shield className='h-4 w-4' />
                  <span>Security verification required</span>
                </div>
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || 'your_site_key_here'}
                  onChange={(value) => setCaptchaValue(value)}
                  onExpired={() => setCaptchaValue(null)}
                  theme='light'
                />
              </div>
              
              <div className='flex flex-col items-center space-y-2'>
              <button
                type='submit'
                disabled={isLoading}
                className='inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isLoading ? (
                  <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className='mr-2 h-4 w-4 self-center' />
                    Send Message
                  </>
                )}
              </button>
              </div>
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className='flex items-center gap-2 rounded-md bg-green-50 p-3 text-green-800 border border-green-200'>
                  <CheckCircle className='h-5 w-5' />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className='flex items-center gap-2 rounded-md bg-red-50 p-3 text-red-800 border border-red-200'>
                  <AlertCircle className='h-5 w-5' />
                  <span>{errorMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
