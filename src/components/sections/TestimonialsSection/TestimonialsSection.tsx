'use client'

import styles from './TestimonialsSection.module.scss'

interface Testimonial {
  id: number
  name: string
  role: string
  project: string
  avatar?: string
  rating: number
  text: string
  results?: {
    metric1: { value: string; label: string }
    metric2: { value: string; label: string }
  }
  featured?: boolean
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Chen",
      role: "CEO & Founder",
      project: "DeFiVault Protocol",
      rating: 5,
      text: "ChainAI transformed our marketing strategy completely. Their AI-powered approach helped us reach the right audience at the perfect time. We saw a 10x increase in TVL within just 3 months!",
      results: {
        metric1: { value: "$50M+", label: "TVL Growth" },
        metric2: { value: "300%", label: "User Increase" }
      },
      featured: true
    },
    {
      id: 2,
      name: "Sarah Kim",
      role: "Marketing Director",
      project: "MetaGuild NFT",
      rating: 5,
      text: "The results speak for themselves. Our NFT collection sold out in 12 minutes thanks to ChainAI's targeted campaign strategy. Their team truly understands the Web3 space.",
      results: {
        metric1: { value: "12 min", label: "Sellout Time" },
        metric2: { value: "10K+", label: "Community Size" }
      }
    },
    {
      id: 3,
      name: "Michael Torres",
      role: "Co-Founder",
      project: "ChainBridge L2",
      rating: 5,
      text: "Working with ChainAI was a game-changer. Their AI strategist helped us identify untapped markets and optimize our campaigns in real-time. ROI exceeded all expectations."
    },
    {
      id: 4,
      name: "Lisa Wang",
      role: "CMO",
      project: "CryptoSwap DEX",
      rating: 5,
      text: "The combination of AI technology and human expertise at ChainAI is unmatched. They delivered a 500% increase in daily trading volume within the first month of our campaign.",
      results: {
        metric1: { value: "500%", label: "Volume Growth" },
        metric2: { value: "50K+", label: "Active Traders" }
      }
    },
    {
      id: 5,
      name: "David Park",
      role: "Growth Lead",
      project: "GameFi Studios",
      rating: 5,
      text: "ChainAI's multi-channel approach and KOL network were exactly what we needed. They managed everything from Twitter to Telegram, delivering consistent results across all platforms."
    },
    {
      id: 6,
      name: "Emma Rodriguez",
      role: "Founder",
      project: "DAO Governance",
      rating: 5,
      text: "Professional, responsive, and results-driven. ChainAI helped us build a thriving community of 25,000+ engaged members. Their 24/7 support is truly exceptional."
    }
  ]

  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "95%", label: "Client Retention" },
    { value: "$2B+", label: "Market Cap Growth" },
    { value: "4.9/5", label: "Average Rating" }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg key={i} viewBox="0 0 24 24" fill={i < rating ? "currentColor" : "none"} stroke={i < rating ? "none" : "currentColor"}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Testimonials</span>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Join hundreds of successful Web3 projects that have scaled their growth with ChainAI
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className={`${styles.testimonialCard} ${testimonial.featured ? styles.featured : ''}`}
            >
              <div className={styles.rating}>
                {renderStars(testimonial.rating)}
              </div>
              
              <p className={styles.testimonialText}>{testimonial.text}</p>
              
              {testimonial.results && (
                <div className={styles.results}>
                  <div className={styles.resultsTitle}>Key Results</div>
                  <div className={styles.resultsGrid}>
                    <div className={styles.resultItem}>
                      <span className={styles.resultValue}>{testimonial.results.metric1.value}</span>
                      <span className={styles.resultLabel}>{testimonial.results.metric1.label}</span>
                    </div>
                    <div className={styles.resultItem}>
                      <span className={styles.resultValue}>{testimonial.results.metric2.value}</span>
                      <span className={styles.resultLabel}>{testimonial.results.metric2.label}</span>
                    </div>
                  </div>
                </div>
              )}

              <div className={styles.clientInfo}>
                <div className={styles.clientAvatar}>
                  {testimonial.avatar ? (
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  ) : (
                    getInitials(testimonial.name)
                  )}
                </div>
                <div className={styles.clientDetails}>
                  <div className={styles.clientName}>{testimonial.name}</div>
                  <div className={styles.clientRole}>{testimonial.role}</div>
                  <div className={styles.clientProject}>{testimonial.project}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.statsContainer}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.stat}>
              <div className={styles.statNumber}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.trustedBy}>
          <div className={styles.trustedTitle}>Trusted by Leading Web3 Projects</div>
          <div className={styles.logoGrid}>
            <div className={styles.logo}>UNISWAP</div>
            <div className={styles.logo}>AAVE</div>
            <div className={styles.logo}>POLYGON</div>
            <div className={styles.logo}>ARBITRUM</div>
            <div className={styles.logo}>CHAINLINK</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection