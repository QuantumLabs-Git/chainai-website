'use client'

import { useEffect, useRef } from 'react'
import styles from './FutureAnimation.module.scss'

export default function FutureAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    setCanvasSize()
    
    // Particle system
    const particles: Array<{
      x: number
      y: number
      z: number
      vx: number
      vy: number
      vz: number
      size: number
      opacity: number
      connected: number[]
    }> = []
    
    const particleCount = 50
    const maxDistance = 150
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        z: Math.random() * 200,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.5,
        connected: []
      })
    }
    
    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)'
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
      
      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        particle.z += particle.vz
        
        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.offsetWidth) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.offsetHeight) particle.vy *= -1
        if (particle.z < 0 || particle.z > 200) particle.vz *= -1
        
        // 3D perspective
        const perspective = 300 / (300 + particle.z)
        const screenX = particle.x * perspective
        const screenY = particle.y * perspective
        const size = particle.size * perspective
        
        // Draw particle
        ctx.beginPath()
        ctx.arc(screenX, screenY, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 255, 136, ${particle.opacity * perspective})`
        ctx.fill()
        
        // Glow effect
        const gradient = ctx.createRadialGradient(screenX, screenY, 0, screenX, screenY, size * 3)
        gradient.addColorStop(0, `rgba(0, 255, 136, ${particle.opacity * perspective * 0.3})`)
        gradient.addColorStop(1, 'rgba(0, 255, 136, 0)')
        ctx.fillStyle = gradient
        ctx.fill()
        
        // Draw connections
        particle.connected = []
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j]
          const dx = screenX - (other.x * (300 / (300 + other.z)))
          const dy = screenY - (other.y * (300 / (300 + other.z)))
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < maxDistance) {
            particle.connected.push(j)
            const opacity = (1 - distance / maxDistance) * 0.3 * perspective
            ctx.beginPath()
            ctx.moveTo(screenX, screenY)
            ctx.lineTo(other.x * (300 / (300 + other.z)), other.y * (300 / (300 + other.z)))
            ctx.strokeStyle = `rgba(0, 255, 136, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })
      
      // Draw holographic elements
      const time = Date.now() * 0.001
      
      // Central hologram
      ctx.save()
      ctx.translate(canvas.offsetWidth / 2, canvas.offsetHeight / 2)
      ctx.rotate(time * 0.2)
      
      // Outer ring
      ctx.beginPath()
      ctx.arc(0, 0, 100, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(0, 255, 136, ${0.3 + Math.sin(time) * 0.1})`
      ctx.lineWidth = 2
      ctx.stroke()
      
      // Inner hexagon
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI * 2 / 6) * i + time * 0.5
        const x = Math.cos(angle) * 60
        const y = Math.sin(angle) * 60
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.closePath()
      ctx.strokeStyle = `rgba(0, 255, 136, ${0.5 + Math.sin(time * 2) * 0.2})`
      ctx.lineWidth = 1.5
      ctx.stroke()
      
      // Data streams
      for (let i = 0; i < 3; i++) {
        const offset = (Math.PI * 2 / 3) * i
        ctx.beginPath()
        ctx.moveTo(0, 0)
        const endX = Math.cos(time + offset) * 120
        const endY = Math.sin(time + offset) * 120
        ctx.lineTo(endX, endY)
        ctx.strokeStyle = `rgba(0, 255, 136, ${0.2 + Math.sin(time * 3 + offset) * 0.1})`
        ctx.lineWidth = 1
        ctx.stroke()
        
        // Data points
        ctx.beginPath()
        ctx.arc(endX, endY, 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 255, 136, ${0.8})`
        ctx.fill()
      }
      
      ctx.restore()
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animate()
    
    // Handle resize
    const handleResize = () => {
      setCanvasSize()
    }
    window.addEventListener('resize', handleResize)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  return (
    <div className={styles.futureAnimationContainer}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.overlayElements}>
        <div className={styles.aiChip}>
          <span>AI CORE</span>
          <div className={styles.pulseIndicator} />
        </div>
        <div className={styles.dataStream}>
          <span>BLOCKCHAIN VERIFIED</span>
        </div>
        <div className={styles.quantumGrid} />
      </div>
    </div>
  )
}