'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Simple floating particles component using native Three.js
function FloatingParticles() {
  const ref = useRef<THREE.Points>(null!)
  
  const particlesCount = 1000
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#4f46e5"
        size={0.05}
        transparent
        opacity={0.6}
      />
    </points>
  )
}

// Floating geometric shapes
function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Icosahedron */}
      <mesh position={[-3, 2, -2] as [number, number, number]}>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial color="#06b6d4" wireframe transparent opacity={0.7} />
      </mesh>
      
      {/* Octahedron */}
      <mesh position={[3, -1, -1] as [number, number, number]}>
        <octahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial color="#8b5cf6" wireframe transparent opacity={0.7} />
      </mesh>
      
      {/* Dodecahedron */}
      <mesh position={[0, 3, -3] as [number, number, number]}>
        <dodecahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial color="#f59e0b" wireframe transparent opacity={0.7} />
      </mesh>
      
      {/* Tetrahedron */}
      <mesh position={[-2, -2, 1] as [number, number, number]}>
        <tetrahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial color="#ef4444" wireframe transparent opacity={0.7} />
      </mesh>
      
      {/* Torus */}
      <mesh position={[2, 1, 2] as [number, number, number]}>
        <torusGeometry args={[0.4, 0.2, 8, 16]} />
        <meshStandardMaterial color="#10b981" wireframe transparent opacity={0.7} />
      </mesh>
    </group>
  )
}

// Animated skill nodes
function SkillNodes() {
  const groupRef = useRef<THREE.Group>(null!)
  
  const skills = [
    { name: 'React', position: [-4, 1, 0] as [number, number, number], color: '#61dafb' },
    { name: 'TypeScript', position: [4, -1, 0] as [number, number, number], color: '#3178c6' },
    { name: 'Three.js', position: [0, 2, 0] as [number, number, number], color: '#000000' },
    { name: 'Next.js', position: [-2, -2, 0] as [number, number, number], color: '#000000' },
    { name: 'Solidity', position: [2, 2, 0] as [number, number, number], color: '#627eea' },
    { name: 'Node.js', position: [0, -3, 0] as [number, number, number], color: '#339933' },
  ]
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, index) => {
        child.position.y += Math.sin(state.clock.elapsedTime + index) * 0.01
        child.rotation.y = state.clock.elapsedTime * 0.5
      })
    }
  })

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => (
        <mesh key={skill.name} position={skill.position}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial 
            color={skill.color} 
            transparent 
            opacity={0.8}
            emissive={skill.color}
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  )
}

// Main Three.js scene
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10] as [number, number, number]} intensity={1} />
      <pointLight position={[-10, -10, -10] as [number, number, number]} intensity={0.5} color="#4f46e5" />
      
      {/* Components */}
      <FloatingParticles />
      <FloatingShapes />
      <SkillNodes />
    </>
  )
}

// Main component
export default function SkillsHero() {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="absolute inset-0"
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="mb-6 text-5xl font-bold text-white lg:text-7xl opacity-0 animate-fade-in-up">
            Skills & Expertise
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-white/80 leading-relaxed opacity-0 animate-fade-in-up animation-delay-300">
            Interactive showcase of my technical skills across the full stack of modern web development
          </p>
          
          {/* Floating skill badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-600">
            {['React.js', 'TypeScript', 'Three.js', 'Next.js', 'Solidity', 'Node.js'].map((skill, index) => (
              <div
                key={skill}
                className="rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 pointer-events-none" />
    </div>
  )
}
