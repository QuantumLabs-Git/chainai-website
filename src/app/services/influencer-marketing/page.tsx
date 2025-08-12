import { Metadata } from 'next'
import Link from 'next/link'
import HackerText from '@/components/HackerText/HackerText'
import Odometer from '@/components/Odometer/Odometer'
import styles from '../services.module.scss'

export const metadata: Metadata = {
  title: 'Crypto Influencer Marketing | KOL Management & Campaigns | ChainAI',
  description: 'Connect with 500+ crypto influencers and KOLs. Twitter, YouTube, TikTok influencer campaigns. Verified crypto influencers, guaranteed reach, performance tracking.',
  keywords: 'crypto influencer marketing, KOL marketing, crypto influencers, Twitter KOLs, YouTube crypto, TikTok crypto, influencer campaigns, Web3 influencers',
  openGraph: {
    title: 'Influencer Marketing - 500+ Crypto KOLs & Influencers',
    description: 'Access the largest network of verified crypto influencers. Launch successful influencer campaigns with guaranteed results.',
    url: 'https://chainai.marketing/services/influencer-marketing',
    images: [{
      url: 'https://chainai.marketing/images/influencer-marketing-og.jpg',
      width: 1200,
      height: 630,
      alt: 'ChainAI Influencer Marketing Services'
    }],
    type: 'website',
  },
  alternates: {
    canonical: 'https://chainai.marketing/services/influencer-marketing',
  },
}

export default function InfluencerMarketingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Crypto Influencer Marketing Services",
    "provider": {
      "@type": "Organization",
      "name": "ChainAI Marketing"
    },
    "description": "Professional crypto influencer marketing and KOL management services",
    "serviceType": "Influencer Marketing",
    "areaServed": "Worldwide"
  }

  const influencerTiers = [
    {
      tier: 'Mega Influencers',
      followers: '1M+ followers',
      platforms: ['Twitter/X', 'YouTube', 'TikTok'],
      reach: '500K-2M per post',
      engagement: '3-5%',
      price: '$10,000-50,000/post',
      best_for: 'Major launches, brand awareness'
    },
    {
      tier: 'Macro Influencers',
      followers: '100K-1M followers',
      platforms: ['Twitter/X', 'YouTube', 'Instagram'],
      reach: '50K-500K per post',
      engagement: '5-8%',
      price: '$2,000-10,000/post',
      best_for: 'Product launches, community growth'
    },
    {
      tier: 'Mid-Tier Influencers',
      followers: '10K-100K followers',
      platforms: ['Twitter/X', 'Telegram', 'Discord'],
      reach: '5K-50K per post',
      engagement: '8-12%',
      price: '$500-2,000/post',
      best_for: 'Targeted campaigns, niche markets'
    },
    {
      tier: 'Micro Influencers',
      followers: '1K-10K followers',
      platforms: ['Twitter/X', 'Telegram', 'Reddit'],
      reach: '500-5K per post',
      engagement: '12-20%',
      price: '$100-500/post',
      best_for: 'Community building, authentic engagement'
    }
  ]

  const influencerServices = [
    {
      category: 'Campaign Types',
      services: [
        { type: 'Product Launch', description: 'Coordinated multi-influencer campaigns', timeline: '2-4 weeks' },
        { type: 'Token Promotion', description: 'Pre and post-launch promotion', timeline: '4-8 weeks' },
        { type: 'NFT Drops', description: 'Hype building and sellout campaigns', timeline: '1-2 weeks' },
        { type: 'Brand Awareness', description: 'Long-term brand building', timeline: 'Ongoing' },
      ]
    },
    {
      category: 'Content Formats',
      services: [
        { format: 'Twitter Threads', reach: 'High virality potential', engagement: 'Very High' },
        { format: 'YouTube Reviews', reach: 'In-depth analysis', engagement: 'High' },
        { format: 'Live AMAs', reach: 'Direct community interaction', engagement: 'Very High' },
        { format: 'TikTok Videos', reach: 'Viral potential', engagement: 'High' },
      ]
    },
    {
      category: 'Platform Coverage',
      services: [
        { platform: 'Twitter/X', influencers: '300+', speciality: 'Crypto Twitter (CT) natives' },
        { platform: 'YouTube', influencers: '100+', speciality: 'Long-form content creators' },
        { platform: 'TikTok', influencers: '50+', speciality: 'Short-form viral content' },
        { platform: 'Telegram', influencers: '150+', speciality: 'Community leaders' },
      ]
    }
  ]

  const packages = [
    {
      name: 'Starter Pack',
      price: '$5,000',
      period: '/campaign',
      features: [
        '5-10 Micro/Mid-tier influencers',
        'Single platform focus',
        'Campaign strategy',
        'Content guidelines',
        'Basic performance tracking',
        '2-week campaign duration'
      ],
      cta: 'Start Small',
      popular: false
    },
    {
      name: 'Growth Pack',
      price: '$15,000',
      period: '/campaign',
      features: [
        '20-30 Mixed tier influencers',
        'Multi-platform coverage',
        'Content creation support',
        'Campaign management',
        'Real-time analytics',
        '4-week campaign duration',
        'Performance optimization'
      ],
      cta: 'Scale Your Reach',
      popular: true
    },
    {
      name: 'Enterprise Pack',
      price: '$50,000+',
      period: '/campaign',
      features: [
        '50+ influencers all tiers',
        'Mega influencer inclusion',
        'Full creative production',
        'Dedicated campaign manager',
        'Advanced analytics dashboard',
        '8+ week campaigns',
        'PR integration',
        'Guaranteed impressions'
      ],
      cta: 'Maximum Impact',
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
                <li className="breadcrumb-item active">Influencer Marketing</li>
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
                  Crypto Influencer Marketing Services
                </h1>
                <p className="lead mb-4">
                  Access the largest network of verified crypto influencers and KOLs. Launch powerful campaigns 
                  that drive real results with our 500+ influencer network across all major platforms.
                </p>
                <div className="row mb-4">
                  <div className="col-md-4 mb-3">
                    <div className="stat-box">
                      <Odometer value={500} suffix="+" />
                      <span>Verified Influencers</span>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="stat-box">
                      <Odometer value={100} suffix="M+" />
                      <span>Total Reach</span>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="stat-box">
                      <Odometer value={10} suffix="x" />
                      <span>Average ROI</span>
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-3 flex-wrap">
                  <Link href="/contact" className="btn-main">
                    Launch Campaign
                  </Link>
                  <Link href="/ai-strategist" className="btn-border">
                    View Influencers
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styles.heroVisual}>
                  <HackerText text="INFLUENCE" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* Why Influencer Marketing */}
        <section className="tf-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 text-center">
                <h2 className="s-title font-2 mb-3">Why Crypto Influencer Marketing Works</h2>
                <p className="lead">Leverage the power of trusted voices in crypto</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-4">
                <div className="feature-card text-center">
                  <div className="icon-box mb-3">
                    <i className="icon-users"></i>
                  </div>
                  <h4>Instant Credibility</h4>
                  <p>Trusted influencers lend their reputation to your project</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="feature-card text-center">
                  <div className="icon-box mb-3">
                    <i className="icon-trending-up"></i>
                  </div>
                  <h4>Massive Reach</h4>
                  <p>Access millions of engaged crypto investors instantly</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="feature-card text-center">
                  <div className="icon-box mb-3">
                    <i className="icon-target"></i>
                  </div>
                  <h4>Targeted Audience</h4>
                  <p>Reach specific niches and demographics precisely</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="feature-card text-center">
                  <div className="icon-box mb-3">
                    <i className="icon-zap"></i>
                  </div>
                  <h4>Rapid Results</h4>
                  <p>See immediate impact on awareness and engagement</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* Influencer Tiers */}
        <section className="tf-section bg-dark">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 text-center">
                <h2 className="s-title font-2 mb-3">Influencer Tiers & Pricing</h2>
                <p className="lead">Choose the right influencer tier for your campaign goals</p>
              </div>
            </div>
            <div className="row">
              {influencerTiers.map((tier, index) => (
                <div key={index} className="col-md-6 col-lg-3 mb-4">
                  <div className={styles.tierCard}>
                    <h4>{tier.tier}</h4>
                    <div className="tier-stat">{tier.followers}</div>
                    <div className="tier-details">
                      <p><strong>Reach:</strong> {tier.reach}</p>
                      <p><strong>Engagement:</strong> {tier.engagement}</p>
                      <p><strong>Best for:</strong> {tier.best_for}</p>
                    </div>
                    <div className="tier-platforms">
                      {tier.platforms.map((platform, idx) => (
                        <span key={idx} className="platform-badge">{platform}</span>
                      ))}
                    </div>
                    <div className="price">{tier.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* Our Services */}
        <section className="tf-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 text-center">
                <h2 className="s-title font-2 mb-3">Comprehensive Influencer Services</h2>
                <p className="lead">End-to-end influencer campaign management</p>
              </div>
            </div>
            
            {influencerServices.map((category, index) => (
              <div key={index} className="mb-5">
                <h3 className="font-2 mb-4">{category.category}</h3>
                <div className="row">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="col-md-6 col-lg-3 mb-4">
                      <div className={styles.serviceCard}>
                        <h4>{(service as any).type || (service as any).format || (service as any).platform}</h4>
                        <p>{(service as any).description || (service as any).reach || (service as any).influencers}</p>
                        <div className="small text-muted">
                          {(service as any).timeline || (service as any).engagement || (service as any).speciality}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <span className="br-line"></span>

        {/* Campaign Process */}
        <section className="tf-section bg-dark">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 text-center">
                <h2 className="s-title font-2 mb-3">Our Campaign Process</h2>
                <p className="lead">Strategic approach to influencer marketing success</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="process-step text-center">
                  <div className="step-number">01</div>
                  <h4>Strategy & Selection</h4>
                  <p>Define goals, identify target audience, select perfect influencers</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="process-step text-center">
                  <div className="step-number">02</div>
                  <h4>Outreach & Negotiation</h4>
                  <p>Contact influencers, negotiate terms, secure best rates</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="process-step text-center">
                  <div className="step-number">03</div>
                  <h4>Content & Execution</h4>
                  <p>Create content briefs, manage posting schedule, ensure quality</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="process-step text-center">
                  <div className="step-number">04</div>
                  <h4>Track & Optimize</h4>
                  <p>Monitor performance, analyze results, optimize for ROI</p>
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
                <h2 className="s-title font-2 mb-3">Influencer Marketing Packages</h2>
                <p className="lead">Flexible packages to match your campaign goals</p>
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

        {/* Success Stories */}
        <section className="tf-section bg-dark">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 text-center">
                <h2 className="s-title font-2 mb-3">Influencer Campaign Results</h2>
                <p className="lead">Real results from our influencer marketing campaigns</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="case-study-card">
                  <h4>DeFi Protocol Launch</h4>
                  <div className="campaign-stats">
                    <div className="stat">
                      <span className="number">50+</span>
                      <span className="label">Influencers activated</span>
                    </div>
                    <div className="stat">
                      <span className="number">10M+</span>
                      <span className="label">Impressions</span>
                    </div>
                    <div className="stat">
                      <span className="number">$25M</span>
                      <span className="label">TVL in 7 days</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="case-study-card">
                  <h4>NFT Collection Drop</h4>
                  <div className="campaign-stats">
                    <div className="stat">
                      <span className="number">30</span>
                      <span className="label">KOLs engaged</span>
                    </div>
                    <div className="stat">
                      <span className="number">5M+</span>
                      <span className="label">Reach</span>
                    </div>
                    <div className="stat">
                      <span className="number">Sold Out</span>
                      <span className="label">In 30 minutes</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="case-study-card">
                  <h4>Token Launch</h4>
                  <div className="campaign-stats">
                    <div className="stat">
                      <span className="number">100+</span>
                      <span className="label">Influencers</span>
                    </div>
                    <div className="stat">
                      <span className="number">20M+</span>
                      <span className="label">Total reach</span>
                    </div>
                    <div className="stat">
                      <span className="number">15x</span>
                      <span className="label">ROI achieved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* Top Influencer Categories */}
        <section className="tf-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 text-center">
                <h2 className="s-title font-2 mb-3">Influencer Specializations</h2>
                <p className="lead">Expert influencers for every crypto niche</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="specialization-card">
                  <h5>DeFi Experts</h5>
                  <p>Yield farming, DEXs, lending protocols</p>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="specialization-card">
                  <h5>NFT Collectors</h5>
                  <p>Art, gaming NFTs, metaverse assets</p>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="specialization-card">
                  <h5>Trading Analysts</h5>
                  <p>Technical analysis, market predictions</p>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="specialization-card">
                  <h5>GameFi Streamers</h5>
                  <p>Play-to-earn, gaming guilds</p>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="specialization-card">
                  <h5>Layer 1/2 Advocates</h5>
                  <p>Blockchain technology, scaling solutions</p>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="specialization-card">
                  <h5>Memecoin Influencers</h5>
                  <p>Community tokens, viral campaigns</p>
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
                <h2 className="s-title font-2 mb-3">Ready to Launch Your Influencer Campaign?</h2>
                <p className="lead mb-4">
                  Connect with the right influencers and watch your project grow exponentially
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Link href="/contact" className="btn-main">
                    Start Campaign Now
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