import { Metadata } from 'next'
import Link from 'next/link'
import HackerText from '@/components/HackerText/HackerText'
import Odometer from '@/components/Odometer/Odometer'
import styles from '../services.module.scss'

export const metadata: Metadata = {
  title: 'Community Management Services | 24/7 Web3 Community Growth | ChainAI',
  description: 'Professional Web3 community management services. Telegram, Discord, Twitter management. 24/7 moderation, engagement strategies, community growth. Build loyal crypto communities.',
  keywords: 'community management, telegram management, discord management, crypto community, web3 community building, community growth, social media management',
  openGraph: {
    title: 'Community Management - Build & Grow Your Web3 Community',
    description: 'Professional 24/7 community management for crypto projects. Expert moderators, engagement strategies, and growth tactics.',
    url: 'https://chainai.marketing/services/community-management',
    images: [{
      url: 'https://chainai.marketing/images/community-management-og.jpg',
      width: 1200,
      height: 630,
      alt: 'ChainAI Community Management Services'
    }],
    type: 'website',
  },
  alternates: {
    canonical: 'https://chainai.marketing/services/community-management',
  },
}

export default function CommunityManagementPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web3 Community Management Services",
    "provider": {
      "@type": "Organization",
      "name": "ChainAI Marketing"
    },
    "description": "Professional 24/7 community management services for Web3 and blockchain projects",
    "serviceType": "Community Management",
    "areaServed": "Worldwide",
    "availableLanguage": ["English", "Chinese", "Spanish", "Korean", "Japanese", "Russian"]
  }

  const communityServices = [
    {
      category: 'Platform Management',
      services: [
        { platform: 'Telegram', features: '24/7 moderation, bot setup, raids protection', price: 'From $2,000/month' },
        { platform: 'Discord', features: 'Server setup, roles, moderation, events', price: 'From $2,500/month' },
        { platform: 'Twitter/X', features: 'Engagement, spaces hosting, thread creation', price: 'From $1,500/month' },
        { platform: 'Reddit', features: 'Subreddit management, AMA hosting', price: 'From $1,000/month' },
      ]
    },
    {
      category: 'Engagement Services',
      services: [
        { service: 'Community Events', description: 'AMAs, competitions, giveaways', price: '$500-2,000/event' },
        { service: 'Content Creation', description: 'Daily posts, announcements, updates', price: 'Included' },
        { service: 'Crisis Management', description: '24/7 FUD handling and PR support', price: 'Included' },
        { service: 'Ambassador Program', description: 'Recruit and manage ambassadors', price: '$1,000/month' },
      ]
    },
    {
      category: 'Growth Strategies',
      services: [
        { metric: 'Member Acquisition', target: '1,000-10,000+ members/month', method: 'Organic + Paid' },
        { metric: 'Engagement Rate', target: '20-40% daily active users', method: 'Gamification + Rewards' },
        { metric: 'Retention Rate', target: '80%+ monthly retention', method: 'Value-driven content' },
        { metric: 'Sentiment Score', target: '90%+ positive sentiment', method: 'Active moderation' },
      ]
    }
  ]

  const packages = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      features: [
        '1 Platform (Telegram or Discord)',
        '8 hours daily coverage',
        'Basic moderation',
        'Weekly reports',
        'Content calendar',
        '1 community event/month'
      ],
      cta: 'Start Building',
      popular: false
    },
    {
      name: 'Professional',
      price: '$5,000',
      period: '/month',
      features: [
        '2-3 Platforms coverage',
        '16 hours daily coverage',
        'Advanced moderation + bots',
        'Daily reports + analytics',
        'Ambassador program setup',
        '2-3 events/month',
        'Crisis management'
      ],
      cta: 'Scale Your Community',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$10,000+',
      period: '/month',
      features: [
        'All platforms coverage',
        '24/7 dedicated team',
        'Multi-language support',
        'Real-time analytics dashboard',
        'Full ambassador program',
        'Unlimited events',
        'Priority crisis response',
        'Custom integrations'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="tf-section-service-detail">
        {/* Breadcrumb */}
        <div className="sect-header">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/services">Services</Link></li>
                <li className="breadcrumb-item active">Community Management</li>
              </ol>
            </nav>
          </div>
        </div>
        <span className="br-line"></span>

        {/* Hero Section */}
        <section className={styles.serviceDetailHero}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h1 className="s-title font-2 mb-4">
                  Web3 Community Management Services
                </h1>
                <p className="lead mb-4">
                  Build, engage, and grow a thriving crypto community with our 24/7 professional management services. 
                  From Telegram to Discord, we create loyal communities that drive project success.
                </p>
                <div className="row mb-4">
                  <div className="col-md-4 mb-3">
                    <div className="stat-box">
                      <Odometer value={500} suffix="+" />
                      <span>Communities Managed</span>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="stat-box">
                      <Odometer value={2} suffix="M+" />
                      <span>Total Members</span>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="stat-box">
                      <Odometer value={95} suffix="%" />
                      <span>Retention Rate</span>
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-3 flex-wrap">
                  <Link href="/contact" className="btn-main">
                    Start Free Consultation
                  </Link>
                  <Link href="/ai-strategist" className="btn-border">
                    Try AI Strategist
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styles.heroVisual}>
                  <HackerText text="COMMUNITY" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* Why Community Management Matters */}
        <section className="tf-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 text-center">
                <h2 className="s-title font-2 mb-3">Why Professional Community Management Matters</h2>
                <p className="lead">Your community is your project&apos;s heartbeat - nurture it right</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-4">
                <div className="feature-card text-center">
                  <div className="icon-box mb-3">
                    <i className="icon-users"></i>
                  </div>
                  <h4>Build Trust</h4>
                  <p>Active management builds credibility and trust with your community</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="feature-card text-center">
                  <div className="icon-box mb-3">
                    <i className="icon-shield"></i>
                  </div>
                  <h4>Protect Reputation</h4>
                  <p>Swift FUD handling and crisis management protects your brand</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="feature-card text-center">
                  <div className="icon-box mb-3">
                    <i className="icon-trending-up"></i>
                  </div>
                  <h4>Drive Growth</h4>
                  <p>Engaged communities attract new members and investors organically</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="feature-card text-center">
                  <div className="icon-box mb-3">
                    <i className="icon-heart"></i>
                  </div>
                  <h4>Create Loyalty</h4>
                  <p>Strong communities become your best marketers and advocates</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* Our Services */}
        <section className="tf-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 text-center">
                <h2 className="s-title font-2 mb-3">Comprehensive Community Services</h2>
                <p className="lead">Everything you need to build and maintain a thriving Web3 community</p>
              </div>
            </div>
            
            {communityServices.map((category, index) => (
              <div key={index} className="mb-5">
                <h3 className="font-2 mb-4">{category.category}</h3>
                <div className="row">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="col-md-6 col-lg-3 mb-4">
                      <div className={styles.serviceCard}>
                        <h4>{(service as any).platform || (service as any).service || (service as any).metric}</h4>
                        <p>{(service as any).features || (service as any).description || (service as any).target}</p>
                        <div className="small text-muted">{(service as any).method}</div>
                        <div className="price">{(service as any).price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <span className="br-line"></span>

        {/* Our Approach */}
        <section className="tf-section bg-dark">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 text-center">
                <h2 className="s-title font-2 mb-3">Our Community Management Approach</h2>
                <p className="lead">A proven methodology for building engaged crypto communities</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="process-step text-center">
                  <div className="step-number">01</div>
                  <h4>Setup & Onboarding</h4>
                  <p>Platform setup, guidelines creation, team training, bot configuration</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="process-step text-center">
                  <div className="step-number">02</div>
                  <h4>Growth & Acquisition</h4>
                  <p>Member acquisition campaigns, referral programs, partnership outreach</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="process-step text-center">
                  <div className="step-number">03</div>
                  <h4>Engagement & Retention</h4>
                  <p>Daily interactions, events, AMAs, contests, valuable content sharing</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="process-step text-center">
                  <div className="step-number">04</div>
                  <h4>Analysis & Optimization</h4>
                  <p>Metrics tracking, sentiment analysis, strategy refinement, reporting</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* Packages */}
        <section className="tf-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 text-center">
                <h2 className="s-title font-2 mb-3">Community Management Packages</h2>
                <p className="lead">Choose the perfect plan for your community needs</p>
              </div>
            </div>
            <div className="row">
              {packages.map((pkg, index) => (
                <div key={index} className="col-lg-4 mb-4">
                  <div className={`${styles.pricingCard} ${pkg.popular ? styles.popular : ''}`}>
                    {pkg.popular && <div className={styles.popularBadge}>Most Popular</div>}
                    <h3>{pkg.name}</h3>
                    <div className={styles.price}>
                      {pkg.price}
                      <span>{pkg.period}</span>
                    </div>
                    <ul className={styles.features}>
                      {pkg.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <Link href="/contact" className="btn-main w-100">
                      {pkg.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* Results */}
        <section className="tf-section bg-dark">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 text-center">
                <h2 className="s-title font-2 mb-3">Community Growth Results</h2>
                <p className="lead">Real results from our community management campaigns</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="case-study-card">
                  <h4>DeFi Protocol Launch</h4>
                  <div className="results-grid">
                    <div className="result">
                      <span className="number">50K+</span>
                      <span className="label">Telegram Members in 30 days</span>
                    </div>
                    <div className="result">
                      <span className="number">35%</span>
                      <span className="label">Daily Active Users</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="case-study-card">
                  <h4>NFT Collection</h4>
                  <div className="results-grid">
                    <div className="result">
                      <span className="number">25K+</span>
                      <span className="label">Discord Members</span>
                    </div>
                    <div className="result">
                      <span className="number">Sold Out</span>
                      <span className="label">In 15 minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* CTA Section */}
        <section className="tf-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="s-title font-2 mb-3">Ready to Build Your Community?</h2>
                <p className="lead mb-4">
                  Let&apos;s create a thriving community that drives your project&apos;s success
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Link href="/contact" className="btn-main">
                    Get Started Today
                  </Link>
                  <Link href="/services" className="btn-border">
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}