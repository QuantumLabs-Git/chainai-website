'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './CTASection.module.scss'

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { number: '500+', label: 'Projects Launched' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '50M+', label: 'Users Reached' }
  ]

  return (
    <section className={styles.ctaSection}>
      {/* Floating background icons */}
      <div className={styles.floatingIcon}>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor" opacity="0.5">
          <circle cx="30" cy="30" r="30" fill="#8b5cf6" />
        </svg>
      </div>
      <div className={styles.floatingIcon}>
        <svg width="80" height="80" viewBox="0 0 80 80" fill="currentColor" opacity="0.3">
          <rect width="80" height="80" rx="10" fill="#8b5cf6" />
        </svg>
      </div>
      <div className={styles.floatingIcon}>
        <svg width="70" height="70" viewBox="0 0 70 70" fill="currentColor" opacity="0.4">
          <polygon points="35,10 60,50 10,50" fill="#8b5cf6" />
        </svg>
      </div>

      <div className="container">
        <div className={styles.ctaContent}>
          <span className={styles.badge}>Limited Time Offer</span>
          
          <h2 className={styles.title}>
            Ready to Revolutionize Your Web3 Marketing?
          </h2>
          
          <p className={styles.description}>
            Join hundreds of successful crypto projects that have scaled their growth with ChainAI&apos;s 
            AI-powered marketing solutions. Get started today and see results in weeks, not months.
          </p>

          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.primaryBtn}>
              <span>Start Your Campaign</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            
            <Link href="/ai-strategist" className={styles.secondaryBtn}>
              <span>Try AI Strategist</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </Link>
          </div>

          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.stat}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection