'use client'

import { useEffect, useRef } from 'react'
import styles from './AIAvatar.module.scss'

interface AIAvatarProps {
  name: string
  role: string
}

export default function AIAvatar({ name, role }: AIAvatarProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas size
    canvas.width = 400
    canvas.height = 400
    
    // Create unique seed based on name
    const seed = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    
    // Background gradient
    const bgGradient = ctx.createRadialGradient(200, 200, 0, 200, 200, 200)
    bgGradient.addColorStop(0, 'rgba(0, 255, 136, 0.1)')
    bgGradient.addColorStop(1, 'rgba(10, 10, 10, 0.9)')
    ctx.fillStyle = bgGradient
    ctx.fillRect(0, 0, 400, 400)
    
    // Draw circuit patterns
    ctx.strokeStyle = 'rgba(0, 255, 136, 0.2)'
    ctx.lineWidth = 1
    
    // Random circuit lines based on seed
    for (let i = 0; i < 15; i++) {
      const startX = (seed * i * 13) % 400
      const startY = (seed * i * 17) % 400
      const endX = (seed * i * 19) % 400
      const endY = (seed * i * 23) % 400
      
      ctx.beginPath()
      ctx.moveTo(startX, startY)
      
      // Add circuit-like bends
      const midX = (startX + endX) / 2
      const midY = (startY + endY) / 2
      
      if (i % 2 === 0) {
        ctx.lineTo(midX, startY)
        ctx.lineTo(midX, endY)
      } else {
        ctx.lineTo(startX, midY)
        ctx.lineTo(endX, midY)
      }
      
      ctx.lineTo(endX, endY)
      ctx.stroke()
      
      // Add nodes
      ctx.fillStyle = 'rgba(0, 255, 136, 0.4)'
      ctx.beginPath()
      ctx.arc(startX, startY, 3, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.arc(endX, endY, 3, 0, Math.PI * 2)
      ctx.fill()
    }
    
    // Central AI core
    const centerX = 200
    const centerY = 200
    
    // Outer hexagon
    ctx.beginPath()
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI * 2 / 6) * i - Math.PI / 2
      const x = centerX + Math.cos(angle) * 100
      const y = centerY + Math.sin(angle) * 100
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.closePath()
    ctx.strokeStyle = 'rgba(0, 255, 136, 0.6)'
    ctx.lineWidth = 2
    ctx.stroke()
    
    // Inner patterns based on role
    if (role.includes('CEO')) {
      // Crown-like pattern for CEO
      ctx.beginPath()
      ctx.moveTo(centerX - 40, centerY)
      ctx.lineTo(centerX - 20, centerY - 40)
      ctx.lineTo(centerX, centerY - 20)
      ctx.lineTo(centerX + 20, centerY - 40)
      ctx.lineTo(centerX + 40, centerY)
      ctx.strokeStyle = 'rgba(0, 255, 136, 0.8)'
      ctx.lineWidth = 3
      ctx.stroke()
    } else if (role.includes('CMO')) {
      // Growth arrows for CMO
      for (let i = 0; i < 4; i++) {
        const angle = (Math.PI * 2 / 4) * i
        ctx.save()
        ctx.translate(centerX, centerY)
        ctx.rotate(angle)
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(0, -40)
        ctx.lineTo(-10, -30)
        ctx.moveTo(0, -40)
        ctx.lineTo(10, -30)
        ctx.strokeStyle = 'rgba(0, 255, 136, 0.8)'
        ctx.lineWidth = 2
        ctx.stroke()
        ctx.restore()
      }
    } else if (role.includes('CFO')) {
      // Financial chart pattern for CFO
      ctx.beginPath()
      ctx.moveTo(centerX - 40, centerY + 20)
      ctx.lineTo(centerX - 20, centerY - 10)
      ctx.lineTo(centerX, centerY + 10)
      ctx.lineTo(centerX + 20, centerY - 30)
      ctx.lineTo(centerX + 40, centerY - 20)
      ctx.strokeStyle = 'rgba(0, 255, 136, 0.8)'
      ctx.lineWidth = 3
      ctx.stroke()
      
      // Add data points
      const points = [-40, -20, 0, 20, 40]
      const values = [20, -10, 10, -30, -20]
      for (let i = 0; i < points.length; i++) {
        ctx.beginPath()
        ctx.arc(centerX + points[i], centerY + values[i], 4, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 255, 136, 0.9)'
        ctx.fill()
      }
    } else if (role.includes('CBDO')) {
      // Network pattern for CBDO
      const nodes = 6
      for (let i = 0; i < nodes; i++) {
        const angle = (Math.PI * 2 / nodes) * i
        const x = centerX + Math.cos(angle) * 50
        const y = centerY + Math.sin(angle) * 50
        
        ctx.beginPath()
        ctx.arc(x, y, 5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 255, 136, 0.8)'
        ctx.fill()
        
        // Connect to center
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(x, y)
        ctx.strokeStyle = 'rgba(0, 255, 136, 0.4)'
        ctx.stroke()
        
        // Connect to neighbors
        const nextAngle = (Math.PI * 2 / nodes) * ((i + 1) % nodes)
        const nextX = centerX + Math.cos(nextAngle) * 50
        const nextY = centerY + Math.sin(nextAngle) * 50
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(nextX, nextY)
        ctx.strokeStyle = 'rgba(0, 255, 136, 0.3)'
        ctx.stroke()
      }
    }
    
    // AI eye in center
    ctx.beginPath()
    ctx.arc(centerX, centerY, 15, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(0, 255, 136, 0.9)'
    ctx.fill()
    
    ctx.beginPath()
    ctx.arc(centerX, centerY, 8, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(10, 10, 10, 0.9)'
    ctx.fill()
    
    ctx.beginPath()
    ctx.arc(centerX, centerY, 4, 0, Math.PI * 2)
    ctx.fillStyle = '#00ff88'
    ctx.fill()
    
    // Data streams
    const dataPoints = 20
    for (let i = 0; i < dataPoints; i++) {
      const angle = (Math.PI * 2 / dataPoints) * i + (seed % 100) / 100
      const radius = 120 + Math.sin(i + seed) * 20
      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius
      
      ctx.beginPath()
      ctx.arc(x, y, 2, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(0, 255, 136, ${0.3 + Math.sin(i) * 0.3})`
      ctx.fill()
    }
    
    // Add scan lines effect
    ctx.strokeStyle = 'rgba(0, 255, 136, 0.05)'
    ctx.lineWidth = 1
    for (let y = 0; y < 400; y += 4) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(400, y)
      ctx.stroke()
    }
    
    // Add glow effect
    const glowGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 150)
    glowGradient.addColorStop(0, 'rgba(0, 255, 136, 0.3)')
    glowGradient.addColorStop(1, 'rgba(0, 255, 136, 0)')
    ctx.fillStyle = glowGradient
    ctx.fillRect(0, 0, 400, 400)
    
  }, [name, role])
  
  return (
    <div className={styles.aiAvatarContainer}>
      <canvas ref={canvasRef} className={styles.avatar} />
      <div className={styles.scanLine} />
      <div className={styles.cornerDecoration}>
        <div className={styles.corner} />
        <div className={styles.corner} />
        <div className={styles.corner} />
        <div className={styles.corner} />
      </div>
    </div>
  )
}