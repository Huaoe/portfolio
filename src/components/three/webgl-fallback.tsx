'use client'

import { AlertTriangle } from 'lucide-react'

export const WebGLFallback = () => {
  return (
    <div className='flex h-full w-full items-center justify-center bg-gradient-to-br from-background to-muted'>
      <div className='text-center'>
        <AlertTriangle className='mx-auto mb-4 h-12 w-12 text-yellow-500' />
        <h3 className='mb-2 text-lg font-semibold'>3D Graphics Not Available</h3>
        <p className='text-sm text-muted-foreground'>
          Your browser doesn't support WebGL or 3D graphics are disabled.
          <br />
          The portfolio will work perfectly without 3D features.
        </p>
      </div>
    </div>
  )
}
