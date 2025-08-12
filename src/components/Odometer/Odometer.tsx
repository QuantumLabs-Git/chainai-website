'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './Odometer.module.scss'

interface OdometerProps {
  value: number
  duration?: number
}

const Odometer = ({ value, duration = 2000 }: OdometerProps) => {
  const [displayValue, setDisplayValue] = useState(0)
  const hasAnimated = useRef(false)
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true
      const startTime = Date.now()
      const startValue = 0

      const animate = () => {
        const currentTime = Date.now()
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smooth animation
        const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)
        const easedProgress = easeOutQuart(progress)

        const currentValue = Math.floor(startValue + (value - startValue) * easedProgress)
        setDisplayValue(currentValue)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      // Start animation after a small delay
      setTimeout(() => {
        animate()
      }, 500)
    }
  }, [inView, value, duration])

  return (
    <span ref={ref} className={styles.odometer}>
      {displayValue}
    </span>
  )
}

export default Odometer