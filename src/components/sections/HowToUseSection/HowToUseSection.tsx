'use client'

import Link from 'next/link'
import styles from './HowToUseSection.module.scss'

const HowToUseSection = () => {
  const steps = [
    {
      number: 1,
      title: "Connect & Discover",
      description: "Start by connecting with our AI Strategist or scheduling a consultation. We'll analyze your project, understand your goals, and identify growth opportunities.",
      features: [
        "Free AI consultation available 24/7",
        "Project analysis and market research",
        "Custom strategy development"
      ],
      visual: {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
            <line x1="12" y1="22.08" x2="12" y2="12"/>
          </svg>
        ),
        title: "AI Analysis",
        description: "Our AI analyzes your project in real-time"
      }
    },
    {
      number: 2,
      title: "Choose Your Package",
      description: "Select from our comprehensive service packages or create a custom solution. Our AI recommends the best options based on your budget and objectives.",
      features: [
        "200+ marketing services available",
        "Flexible pricing from $2,500/month",
        "Custom packages tailored to your needs"
      ],
      visual: {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ),
        title: "Smart Selection",
        description: "AI-powered package recommendations"
      }
    },
    {
      number: 3,
      title: "Launch Campaign",
      description: "We execute your marketing campaign across multiple channels simultaneously. Our AI optimizes performance in real-time for maximum impact.",
      features: [
        "Multi-channel campaign execution",
        "Real-time optimization",
        "24/7 monitoring and adjustments"
      ],
      visual: {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
        ),
        title: "Live Campaigns",
        description: "Campaigns launch across all channels"
      }
    },
    {
      number: 4,
      title: "Track & Scale",
      description: "Monitor your results through our transparent dashboard. Watch your community grow, engagement soar, and ROI increase as we continuously optimize.",
      features: [
        "Real-time analytics dashboard",
        "Weekly performance reports",
        "Continuous scaling opportunities"
      ],
      visual: {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 3v18h18"/>
            <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
          </svg>
        ),
        title: "Growth Metrics",
        description: "Track success with live analytics"
      }
    }
  ]

  return (
    <section id="howToUse" className={styles.howToUseSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>How It Works</span>
          <h2 className={styles.title}>Start Growing in 4 Simple Steps</h2>
          <p className={styles.subtitle}>
            From initial consultation to explosive growth, our streamlined process delivers results fast
          </p>
        </div>

        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepContent}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className={styles.features}>
                  {step.features.map((feature, idx) => (
                    <div key={idx} className={styles.feature}>
                      <div className={styles.checkIcon}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.stepVisual}>
                <div className={styles.visualCard}>
                  <div className={styles.iconWrapper}>
                    {step.visual.icon}
                  </div>
                  <div className={styles.visualTitle}>{step.visual.title}</div>
                  <div className={styles.visualDesc}>{step.visual.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <p>Ready to transform your Web3 marketing?</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.primaryBtn}>
              <span>Get Started Now</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="/services" className={styles.secondaryBtn}>
              <span>View All Services</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToUseSection