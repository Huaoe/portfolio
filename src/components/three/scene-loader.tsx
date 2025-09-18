'use client'

import { Html, useProgress } from '@react-three/drei'

export const SceneLoader = () => {
  const { progress } = useProgress()
  
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        <p className="mt-4 text-sm text-muted-foreground">
          Loading 3D Scene... {Math.round(progress)}%
        </p>
      </div>
    </Html>
  )
}
