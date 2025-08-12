'use client'

import { useEffect, useRef, ReactNode } from 'react'
import styles from './InfiniteSlide.module.scss'
import clsx from 'clsx'

interface InfiniteSlideProps {
  children: ReactNode
  speed?: number
  direction?: 'left' | 'right'
  className?: string
}

const InfiniteSlide = ({ 
  children, 
  speed = 50, 
  direction = 'left',
  className 
}: InfiniteSlideProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const scrollElement = scrollRef.current
    
    if (!container || !scrollElement) return

    // Clone the content for seamless loop
    const clone = scrollElement.cloneNode(true) as HTMLDivElement
    container.appendChild(clone)

    // Calculate animation duration based on speed
    const distance = scrollElement.offsetWidth
    const duration = distance / speed

    // Apply animation
    const keyframes = direction === 'left' 
      ? [
          { transform: 'translateX(0)' },
          { transform: `translateX(-${distance}px)` }
        ]
      : [
          { transform: `translateX(-${distance}px)` },
          { transform: 'translateX(0)' }
        ]

    const animation = scrollElement.animate(keyframes, {
      duration: duration * 1000,
      iterations: Infinity,
      easing: 'linear'
    })

    // Clone animation
    clone.animate(keyframes, {
      duration: duration * 1000,
      iterations: Infinity,
      easing: 'linear'
    })

    // Pause on hover
    const handleMouseEnter = () => {
      animation.pause()
    }

    const handleMouseLeave = () => {
      animation.play()
    }

    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      animation.cancel()
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
      if (clone.parentNode) {
        clone.parentNode.removeChild(clone)
      }
    }
  }, [speed, direction])

  return (
    <div ref={containerRef} className={clsx(styles.infiniteSlide, className)}>
      <div ref={scrollRef} className={styles.slideTrack}>
        {children}
      </div>
    </div>
  )
}

export default InfiniteSlide