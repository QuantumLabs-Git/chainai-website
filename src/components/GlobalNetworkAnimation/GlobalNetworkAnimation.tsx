'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './GlobalNetworkAnimation.module.scss'

interface Node {
  id: number
  x: number
  y: number
  connections: number[]
  isPulsing: boolean
  pulseStartTime?: number
}

interface Pulse {
  id: number
  sourceNode: number
  targetNode: number
  progress: number
  startTime: number
}

const GlobalNetworkAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const nodesRef = useRef<Node[]>([])
  const pulsesRef = useRef<Pulse[]>([])
  const [hoveredNode, setHoveredNode] = useState<number | null>(null)
  const nextPulseId = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size to half height
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight / 2
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Generate neural network-like nodes
    const generateNodes = () => {
      const nodes: Node[] = []
      const nodeCount = 120
      
      // Create clusters of nodes for more organic distribution
      const clusters = 8
      const nodesPerCluster = Math.floor(nodeCount / clusters)
      
      for (let c = 0; c < clusters; c++) {
        // Random cluster center
        const clusterX = Math.random() * canvas.width
        const clusterY = Math.random() * canvas.height
        const clusterRadius = 150 + Math.random() * 100
        
        for (let n = 0; n < nodesPerCluster; n++) {
          const angle = Math.random() * Math.PI * 2
          const radius = Math.random() * clusterRadius
          const x = clusterX + Math.cos(angle) * radius
          const y = clusterY + Math.sin(angle) * radius
          
          // Keep nodes within canvas bounds
          if (x > 20 && x < canvas.width - 20 && y > 20 && y < canvas.height - 20) {
            nodes.push({
              id: nodes.length,
              x,
              y,
              connections: [],
              isPulsing: false
            })
          }
        }
      }

      // Create neural network-like connections
      nodes.forEach((node, i) => {
        // Connect to 2-4 nearest neighbors
        const distances = nodes.map((other, j) => ({
          id: j,
          distance: Math.sqrt(Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2))
        }))
        .filter(d => d.id !== i && d.distance < 200)
        .sort((a, b) => a.distance - b.distance)
        
        const connectionCount = 2 + Math.floor(Math.random() * 3)
        distances.slice(0, connectionCount).forEach(d => {
          if (!node.connections.includes(d.id)) {
            node.connections.push(d.id)
          }
        })
      })

      nodesRef.current = nodes
    }

    generateNodes()

    // Create pulse between connected nodes
    const createPulse = (sourceNodeId: number) => {
      const sourceNode = nodesRef.current[sourceNodeId]
      
      // Send pulses to all connected nodes
      sourceNode.connections.forEach(targetId => {
        pulsesRef.current.push({
          id: nextPulseId.current++,
          sourceNode: sourceNodeId,
          targetNode: targetId,
          progress: 0,
          startTime: Date.now()
        })
      })
    }

    // Start initial pulses from left side nodes
    const startAutoPulse = () => {
      const leftNodes = nodesRef.current.filter(node => node.x < canvas.width * 0.2)
      if (leftNodes.length > 0) {
        const randomNode = leftNodes[Math.floor(Math.random() * leftNodes.length)]
        createPulse(randomNode.id)
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections (axons)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.lineWidth = 1
      nodesRef.current.forEach(node => {
        node.connections.forEach(connectionId => {
          const connectedNode = nodesRef.current[connectionId]
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(connectedNode.x, connectedNode.y)
          ctx.stroke()
        })
      })

      // Update and draw pulses
      pulsesRef.current = pulsesRef.current.filter(pulse => {
        const elapsed = Date.now() - pulse.startTime
        pulse.progress = Math.min(elapsed / 800, 1) // 800ms per pulse

        if (pulse.progress >= 1) {
          // Pulse reached target, create new pulses from target
          if (Math.random() < 0.7) { // 70% chance to continue spreading
            const targetNode = nodesRef.current[pulse.targetNode]
            const nextConnections = targetNode.connections.filter(id => id !== pulse.sourceNode)
            if (nextConnections.length > 0) {
              const nextTarget = nextConnections[Math.floor(Math.random() * nextConnections.length)]
              pulsesRef.current.push({
                id: nextPulseId.current++,
                sourceNode: pulse.targetNode,
                targetNode: nextTarget,
                progress: 0,
                startTime: Date.now()
              })
            }
          }
          return false
        }

        // Draw pulse along axon
        const sourceNode = nodesRef.current[pulse.sourceNode]
        const targetNode = nodesRef.current[pulse.targetNode]
        const x = sourceNode.x + (targetNode.x - sourceNode.x) * pulse.progress
        const y = sourceNode.y + (targetNode.y - sourceNode.y) * pulse.progress

        // Pulse glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8)
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)')
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, 8, 0, Math.PI * 2)
        ctx.fill()

        // Pulse core
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.beginPath()
        ctx.arc(x, y, 2, 0, Math.PI * 2)
        ctx.fill()

        return true
      })

      // Draw nodes (house outlines)
      nodesRef.current.forEach(node => {
        ctx.strokeStyle = hoveredNode === node.id ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.4)'
        ctx.lineWidth = hoveredNode === node.id ? 2 : 1.5
        
        // Draw house outline only
        ctx.beginPath()
        // Roof
        ctx.moveTo(node.x - 8, node.y)
        ctx.lineTo(node.x, node.y - 10)
        ctx.lineTo(node.x + 8, node.y)
        // Walls
        ctx.lineTo(node.x + 8, node.y + 8)
        ctx.lineTo(node.x - 8, node.y + 8)
        ctx.lineTo(node.x - 8, node.y)
        ctx.stroke()
        
        // Draw door
        ctx.beginPath()
        ctx.moveTo(node.x - 3, node.y + 8)
        ctx.lineTo(node.x - 3, node.y + 2)
        ctx.lineTo(node.x + 3, node.y + 2)
        ctx.lineTo(node.x + 3, node.y + 8)
        ctx.stroke()
      })

      // Create new automatic pulse every 2 seconds
      if (Date.now() % 2000 < 16 && pulsesRef.current.length < 10) {
        startAutoPulse()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      let foundNode: number | null = null
      nodesRef.current.forEach(node => {
        const distance = Math.sqrt(Math.pow(x - node.x, 2) + Math.pow(y - node.y, 2))
        if (distance < 15) {
          foundNode = node.id
        }
      })

      if (foundNode !== null && foundNode !== hoveredNode) {
        setHoveredNode(foundNode)
        createPulse(foundNode)
      } else if (foundNode === null) {
        setHoveredNode(null)
      }
    }

    canvas.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [hoveredNode])

  return <canvas ref={canvasRef} className={styles.networkCanvas} />
}

export default GlobalNetworkAnimation