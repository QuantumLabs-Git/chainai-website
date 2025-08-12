'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface HackerTextProps {
  text: string
  instant?: boolean
  delay?: number
}

const HackerText = ({ text, instant = false, delay = 300 }: HackerTextProps) => {
  const [displayText, setDisplayText] = useState(text.split('').map(() => ' '))
  const [isAnimating, setIsAnimating] = useState(false)
  const hasAnimated = useRef(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true
      setIsAnimating(true)
      
      const timeout = setTimeout(() => {
        const revealed = new Array(text.length).fill(false)
        const display = text.split('').map(() => ' ')
        
        const scrambleInterval = setInterval(() => {
          for (let i = 0; i < text.length; i++) {
            if (!revealed[i]) {
              display[i] = chars.charAt(Math.floor(Math.random() * chars.length))
            }
          }
          setDisplayText([...display])
        }, 40)

        if (instant) {
          setTimeout(() => {
            for (let i = 0; i < text.length; i++) {
              revealed[i] = true
              display[i] = text[i]
            }
            clearInterval(scrambleInterval)
            setDisplayText([...display])
            setIsAnimating(false)
          }, 700)
        } else {
          for (let i = text.length - 1; i >= 0; i--) {
            setTimeout(() => {
              revealed[i] = true
              display[i] = text[i]
              
              if (i === 0) {
                clearInterval(scrambleInterval)
                setDisplayText([...display])
                setIsAnimating(false)
              }
            }, (text.length - 1 - i) * 150)
          }
        }
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [inView, text, instant, delay, chars])

  return (
    <span ref={ref} className="hacker-text_transform">
      {displayText.join('')}
    </span>
  )
}

export default HackerText