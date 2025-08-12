import { Metadata } from 'next'
import Link from 'next/link'
import HackerText from '@/components/HackerText/HackerText'
import Odometer from '@/components/Odometer/Odometer'
import styles from '../services.module.scss'

export const metadata: Metadata = {
  title: 'Crypto KOL Marketing Services | Influencer Campaigns from $500 | ChainAI',
  description: 'Top crypto KOL marketing agency. YouTube reviews from $500, Twitter campaigns, TikTok promotions. 500+ verified KOLs, guaranteed reach, 24hr campaign launch.',
  keywords: 'crypto kol marketing, blockchain influencer marketing, youtube crypto promotion, twitter kol campaigns, tiktok crypto marketing, web3 influencer agency',
  openGraph: {
    title: 'Crypto KOL Marketing - Influencer Campaigns from $500',
    description: 'Premier crypto influencer marketing. YouTube, Twitter, TikTok campaigns. 500+ verified KOLs.',
    url: 'https://chainai.marketing/services/kol-marketing',
    images: [{
      url: 'https://chainai.marketing/images/kol-marketing-og.jpg',
      width: 1200,
      height: 630,
      alt: 'ChainAI KOL Marketing Services'
    }],
    type: 'website',
  },
  alternates: {
    canonical: 'https://chainai.marketing/services/kol-marketing',
  },
}

export default function KOLMarketingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Crypto KOL Marketing Services",
    "provider": {
      "@type": "Organization",
      "name": "ChainAI Marketing"
    },
    "description": "Professional crypto influencer marketing campaigns with verified KOLs",
    "areaServed": "Worldwide",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "500",
      "highPrice": "50000",
      "offerCount": "50+"
    }
  }

  const kolPackages = [
    {
      platform: 'YouTube',
      tiers: [
        { name: 'Tier 3', subscribers: '50K-200K', price: '$500-2,000', delivery: '3-5 days' },
        { name: 'Tier 2', subscribers: '200K-1M', price: '$2,000-10,000', delivery: '5-7 days' },
        { name: 'Tier 1', subscribers: '1M+', price: '$10,000-50,000', delivery: '7-10 days' },
      ]
    },
    {
      platform: 'Twitter/X',
      tiers: [
        { name: 'Micro', followers: '10K-50K', price: '$100-500', delivery: '24 hours' },
        { name: 'Mid-Tier', followers: '50K-500K', price: '$500-3,000', delivery: '1-2 days' },
        { name: 'Macro', followers: '500K+', price: '$3,000-15,000', delivery: '2-3 days' },
      ]
    },
    {
      platform: 'TikTok',
      tiers: [
        { name: 'Rising Star', followers: '100K-500K', price: '$300-1,500', delivery: '24 hours' },
        { name: 'Established', followers: '500K-2M', price: '$1,500-5,000', delivery: '1-2 days' },
        { name: 'Viral King', followers: '2M+', price: '$5,000-20,000', delivery: '2-3 days' },
      ]
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
                <li className="breadcrumb-item active">KOL Marketing</li>
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
                  Crypto KOL Marketing Services
                </h1>
                <p className="s-sub_title mb-5">
                  Launch influencer campaigns with 500+ verified crypto KOLs across YouTube, Twitter, and TikTok. 
                  Get guaranteed reach, authentic engagement, and measurable ROI starting from just $500.
                </p>
                <div className="hero-buttons">
                  <Link href="/ai-strategist" className="tf-btn style-2">
                    Get Free Strategy
                  </Link>
                  <Link href="https://t.me/chainaimarketing" className="tf-btn style-transparent">
                    Start Campaign Now
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styles.heroStats}>
                  <div className={styles.statCard}>
                    <h3>500+</h3>
                    <p>Verified KOLs</p>
                  </div>
                  <div className={styles.statCard}>
                    <h3>24hr</h3>
                    <p>Campaign Launch</p>
                  </div>
                  <div className={styles.statCard}>
                    <h3>95%</h3>
                    <p>Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* Why Choose Section */}
        <section className="pt-100 pb-100">
          <div className="container">
            <h2 className="s-title font-3 text-center mb-5">
              Why Choose ChainAI for KOL Marketing?
            </h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <i className="icon icon-shield"></i>
                  </div>
                  <h3>Verified Authenticity</h3>
                  <p>Every KOL is manually verified. No bots, no fake followers, guaranteed authentic engagement.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <i className="icon icon-chart"></i>
                  </div>
                  <h3>Performance Tracking</h3>
                  <p>Real-time analytics dashboard with reach, engagement, and conversion metrics.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <i className="icon icon-globe"></i>
                  </div>
                  <h3>Global Reach</h3>
                  <p>KOLs from US, Europe, Asia, LATAM. Target any market in any language.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* Pricing Packages */}
        <section className="pt-100 pb-100 bg-dark">
          <div className="container">
            <h2 className="s-title font-3 text-center mb-5">
              KOL Marketing Packages & Pricing
            </h2>
            {kolPackages.map((platform, index) => (
              <div key={index} className="mb-5">
                <h3 className="font-2 mb-4">{platform.platform} Influencers</h3>
                <div className="row">
                  {platform.tiers.map((tier, tierIndex) => (
                    <div key={tierIndex} className="col-md-4 mb-4">
                      <div className={styles.pricingCard}>
                        <h4>{tier.name}</h4>
                        <p className="followers">{tier.followers || tier.subscribers}</p>
                        <div className="price">{tier.price}</div>
                        <p className="delivery">Delivery: {tier.delivery}</p>
                        <Link href="https://t.me/chainaimarketing" className="tf-btn style-2 w-100">
                          Book Now
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <span className="br-line"></span>

        {/* Process Section */}
        <section className="pt-100 pb-100">
          <div className="container">
            <h2 className="s-title font-3 text-center mb-5">
              Our KOL Campaign Process
            </h2>
            <div className="row">
              <div className="col-md-3 mb-4">
                <div className={styles.processStep}>
                  <div className={styles.stepNumber}>1</div>
                  <h4>Strategy Call</h4>
                  <p>15-minute consultation to understand your goals and target audience</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className={styles.processStep}>
                  <div className={styles.stepNumber}>2</div>
                  <h4>KOL Selection</h4>
                  <p>AI matches your project with perfect KOLs based on audience overlap</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className={styles.processStep}>
                  <div className={styles.stepNumber}>3</div>
                  <h4>Content Creation</h4>
                  <p>Professional scripts and content briefs prepared for maximum impact</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className={styles.processStep}>
                  <div className={styles.stepNumber}>4</div>
                  <h4>Launch & Track</h4>
                  <p>Campaign goes live with real-time tracking and performance reports</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* FAQ Section */}
        <section className="pt-100 pb-100 bg-dark">
          <div className="container">
            <h2 className="s-title font-3 text-center mb-5">
              Frequently Asked Questions
            </h2>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className={styles.faqItem}>
                  <h4>How quickly can campaigns start?</h4>
                  <p>Most campaigns launch within 24-48 hours. Tier 1 YouTube influencers may take 7-10 days.</p>
                </div>
                <div className={styles.faqItem}>
                  <h4>Do you guarantee results?</h4>
                  <p>We guarantee the reach and views promised. Engagement rates typically range from 2-8% depending on content quality.</p>
                </div>
                <div className={styles.faqItem}>
                  <h4>Can I choose specific KOLs?</h4>
                  <p>Yes! Browse our KOL catalog or let our AI recommend the best matches for your project.</p>
                </div>
                <div className={styles.faqItem}>
                  <h4>What about content approval?</h4>
                  <p>You approve all content before it goes live. We provide scripts and talking points for consistency.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* CTA Section */}
        <section className="pt-100 pb-100">
          <div className="container">
            <div className="text-center">
              <h2 className="s-title font-3 mb-4">
                Ready to Launch Your KOL Campaign?
              </h2>
              <p className="s-sub_title mb-5">
                Join 500+ successful crypto projects using ChainAI's KOL network
              </p>
              <div className="cta-buttons">
                <Link href="/ai-strategist" className="tf-btn style-2 me-3">
                  Get AI Strategy
                </Link>
                <Link href="https://t.me/chainaimarketing" className="tf-btn style-transparent">
                  Talk to Expert
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}