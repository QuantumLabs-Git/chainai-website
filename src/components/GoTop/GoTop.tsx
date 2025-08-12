'use client'

import { useState, useEffect } from 'react'
import styles from './GoTop.module.scss'
import clsx from 'clsx'

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      const progressAngle = (scrollPercent / 100) * 360
      
      setProgress(progressAngle)
      
      // Check if footer is visible
      const footer = document.querySelector('.tf-footer')
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const footerVisible = footerRect.top < windowHeight
        
        setIsVisible(scrollTop > 100 && !footerVisible)
      } else {
        setIsVisible(scrollTop > 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      id="goTop"
      className={clsx(styles.goTop, { [styles.show]: isVisible })}
      onClick={scrollToTop}
      aria-label="Go to top"
      style={{ '--progress-angle': `${progress}deg` } as React.CSSProperties}
    >
      <span className={styles.borderProgress}></span>
      <span className="icon icon-arrow-top"></span>
    </button>
  )
}

export default GoTop