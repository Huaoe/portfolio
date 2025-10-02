'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiSolidity,
  SiPostgresql,
  SiDocker,
  SiEthereum,
  SiPython,
  SiMongodb,
  SiGraphql,
  SiRedux,
  SiJavascript,
  SiGit,
  SiVercel,
  SiFirebase,
  SiExpress,
  SiFigma,
  SiJest,
} from 'react-icons/si'

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

// Individual flying logo component
function FlyingLogo({ 
  icon: Icon, 
  position, 
  color, 
  index 
}: { 
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>, 
  position: [number, number, number], 
  color: string, 
  index: number 
}) {
  const meshRef = useRef<THREE.Group>(null!)
  const initialY = position[1]
  
  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * 0.7 + index) * 0.3
      
      // Gentle rotation
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + index
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2 + index) * 0.2
      
      // Slight horizontal drift
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.3 + index * 0.5) * 0.2
    }
  })

  return (
    <group ref={meshRef} position={position}>
      {/* Background glow circle */}
      <mesh>
        <circleGeometry args={[0.5, 32]} />
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Logo using HTML */}
      <Html
        center
        distanceFactor={5}
        transform
        sprite
      >
        <div 
          className="flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm p-3 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white"
          style={{
            width: '60px',
            height: '60px',
            boxShadow: `0 0 30px ${color}40`,
          }}
        >
          <Icon className="w-8 h-8" style={{ color }} />
        </div>
      </Html>
    </group>
  )
}

// Animated skill nodes with flying logos
function SkillNodes() {
  const skills = [
    // Frontend Technologies
    { name: 'React', icon: SiReact, position: [-4.5, 1.2, -2] as [number, number, number], color: '#61dafb' },
    { name: 'TypeScript', icon: SiTypescript, position: [4.2, -1.3, -1.5] as [number, number, number], color: '#3178c6' },
    { name: 'Next.js', icon: SiNextdotjs, position: [0.5, 2.8, -3] as [number, number, number], color: '#000000' },
    { name: 'Tailwind', icon: SiTailwindcss, position: [-3.2, -2.1, 0.5] as [number, number, number], color: '#06b6d4' },
    { name: 'JavaScript', icon: SiJavascript, position: [3.8, 2.5, -0.5] as [number, number, number], color: '#f7df1e' },
    { name: 'Redux', icon: SiRedux, position: [-1.5, 3.2, 1] as [number, number, number], color: '#764abc' },
    
    // Backend Technologies
    { name: 'Node.js', icon: SiNodedotjs, position: [0.3, -2.8, -2.5] as [number, number, number], color: '#339933' },
    { name: 'Express', icon: SiExpress, position: [-4, -0.5, 1.5] as [number, number, number], color: '#000000' },
    { name: 'GraphQL', icon: SiGraphql, position: [2.5, -2, 2] as [number, number, number], color: '#e10098' },
    { name: 'Python', icon: SiPython, position: [1.2, 1.8, -1] as [number, number, number], color: '#3776ab' },
    
    // Databases
    { name: 'PostgreSQL', icon: SiPostgresql, position: [-2.3, 0.2, 1.8] as [number, number, number], color: '#4169e1' },
    { name: 'MongoDB', icon: SiMongodb, position: [4.5, 0.8, 1] as [number, number, number], color: '#47a248' },
    { name: 'Firebase', icon: SiFirebase, position: [-0.8, -1.2, 2.5] as [number, number, number], color: '#ffca28' },
    
    // Web3 & Blockchain
    { name: 'Solidity', icon: SiSolidity, position: [3.5, 2.2, 1.5] as [number, number, number], color: '#627eea' },
    { name: 'Ethereum', icon: SiEthereum, position: [-1.2, -1.8, -1] as [number, number, number], color: '#627eea' },
    
    // DevOps & Tools
    { name: 'Docker', icon: SiDocker, position: [2.2, 0.3, -2] as [number, number, number], color: '#2496ed' },
    { name: 'Git', icon: SiGit, position: [-3.5, 1.5, -1] as [number, number, number], color: '#f05032' },
    { name: 'Vercel', icon: SiVercel, position: [1.8, -0.5, 1.5] as [number, number, number], color: '#000000' },
    
    // Design & Testing
    { name: 'Figma', icon: SiFigma, position: [-2, 2.2, -1.5] as [number, number, number], color: '#f24e1e' },
    { name: 'Jest', icon: SiJest, position: [0.8, -3, 0.5] as [number, number, number], color: '#c21325' },
  ]

  return (
    <>
      {skills.map((skill, index) => (
        <FlyingLogo
          key={skill.name}
          icon={skill.icon}
          position={skill.position}
          color={skill.color}
          index={index}
        />
      ))}
    </>
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
            {['React.js', 'TypeScript', 'Next.js', 'Tailwind', 'Solidity', 'Node.js', 'PostgreSQL', 'Docker', 'Ethereum', 'Python'].map((skill, index) => (
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
