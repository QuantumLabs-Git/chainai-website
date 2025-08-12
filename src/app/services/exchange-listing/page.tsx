import { Metadata } from 'next'
import Link from 'next/link'
import HackerText from '@/components/HackerText/HackerText'
import Odometer from '@/components/Odometer/Odometer'
import styles from '../services.module.scss'

export const metadata: Metadata = {
  title: 'Crypto Exchange Listing Services | Fast-Track CEX & DEX Listings | ChainAI',
  description: 'Get listed on top crypto exchanges. Binance, Coinbase, KuCoin fast-track listings. DEX listings from $500. Full documentation support. 95% success rate.',
  keywords: 'crypto exchange listing, cex listing services, dex listing services, binance listing, coinbase listing, kucoin listing, fast track exchange listing',
  openGraph: {
    title: 'Crypto Exchange Listing Services - CEX & DEX Fast-Track',
    description: 'Professional exchange listing services. Get listed on major exchanges with our proven process.',
    url: 'https://chainai.marketing/services/exchange-listing',
    images: [{
      url: 'https://chainai.marketing/images/exchange-listing-og.jpg',
      width: 1200,
      height: 630,
      alt: 'ChainAI Exchange Listing Services'
    }],
    type: 'website',
  },
  alternates: {
    canonical: 'https://chainai.marketing/services/exchange-listing',
  },
}

export default function ExchangeListingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Crypto Exchange Listing Services",
    "provider": {
      "@type": "Organization",
      "name": "ChainAI Marketing"
    },
    "description": "Professional crypto exchange listing services for CEX and DEX platforms",
    "areaServed": "Worldwide",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "287"
    }
  }

  const exchangePackages = {
    tier1: [
      { name: 'Binance', timeline: '3-6 months', requirements: 'High volume, security audit', consultation: true },
      { name: 'Coinbase', timeline: '4-8 months', requirements: 'US compliance, legal opinion', consultation: true },
      { name: 'Kraken', timeline: '2-4 months', requirements: 'Technical review, compliance', consultation: true },
    ],
    tier2: [
      { name: 'KuCoin', timeline: '2-4 weeks', price: '$15,000-30,000', success: '95%' },
      { name: 'Gate.io', timeline: '1-3 weeks', price: '$10,000-25,000', success: '98%' },
      { name: 'Huobi', timeline: '2-4 weeks', price: '$20,000-40,000', success: '92%' },
    ],
    tier3: [
      { name: 'MEXC', timeline: '1-2 weeks', price: '$5,000-15,000', success: '99%' },
      { name: 'BitMart', timeline: '3-7 days', price: '$3,000-8,000', success: '100%' },
      { name: 'LBank', timeline: '3-5 days', price: '$2,000-5,000', success: '100%' },
    ],
    dex: [
      { name: 'Uniswap', timeline: '24 hours', price: '$500-1,000', type: 'Automated' },
      { name: 'PancakeSwap', timeline: '24 hours', price: '$300-800', type: 'Automated' },
      { name: 'Raydium', timeline: '24 hours', price: '$1,000-2,000', type: 'Automated' },
    ]
  }

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
                <li className="breadcrumb-item active">Exchange Listing</li>
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
                  Crypto Exchange Listing Services
                </h1>
                <p className="s-sub_title mb-5">
                  Fast-track your token listing on major centralized and decentralized exchanges. 
                  From Binance to Uniswap, we handle the entire listing process with a 95% success rate.
                </p>
                <div className="hero-buttons">
                  <Link href="/ai-strategist" className="tf-btn style-2">
                    Check Eligibility
                  </Link>
                  <Link href="https://t.me/chainaimarketing" className="tf-btn style-transparent">
                    Get Listed Now
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styles.heroStats}>
                  <div className={styles.statCard}>
                    <h3>287</h3>
                    <p>Successful Listings</p>
                  </div>
                  <div className={styles.statCard}>
                    <h3>95%</h3>
                    <p>Success Rate</p>
                  </div>
                  <div className={styles.statCard}>
                    <h3>50+</h3>
                    <p>Partner Exchanges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* Exchange Tiers */}
        <section className="pt-100 pb-100">
          <div className="container">
            <h2 className="s-title font-3 text-center mb-5">
              Exchange Listing Packages
            </h2>
            
            {/* Tier 1 Exchanges */}
            <div className="mb-5">
              <h3 className="font-2 mb-4">Tier 1 Exchanges (Premium)</h3>
              <div className="row">
                {exchangePackages.tier1.map((exchange, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div className={styles.exchangeCard}>
                      <h4>{exchange.name}</h4>
                      <p className="timeline">Timeline: {exchange.timeline}</p>
                      <p className="requirements">{exchange.requirements}</p>
                      <Link href="https://t.me/chainaimarketing" className="tf-btn style-2 w-100">
                        Free Consultation
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tier 2 Exchanges */}
            <div className="mb-5">
              <h3 className="font-2 mb-4">Tier 2 Exchanges (Fast-Track Available)</h3>
              <div className="row">
                {exchangePackages.tier2.map((exchange, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div className={styles.exchangeCard}>
                      <h4>{exchange.name}</h4>
                      <p className="timeline">Timeline: {exchange.timeline}</p>
                      <div className="price">{exchange.price}</div>
                      <p className="success">Success Rate: {exchange.success}</p>
                      <Link href="https://t.me/chainaimarketing" className="tf-btn style-2 w-100">
                        Apply Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tier 3 Exchanges */}
            <div className="mb-5">
              <h3 className="font-2 mb-4">Tier 3 Exchanges (Quick Listing)</h3>
              <div className="row">
                {exchangePackages.tier3.map((exchange, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div className={styles.exchangeCard}>
                      <h4>{exchange.name}</h4>
                      <p className="timeline">Timeline: {exchange.timeline}</p>
                      <div className="price">{exchange.price}</div>
                      <p className="success">Success Rate: {exchange.success}</p>
                      <Link href="https://t.me/chainaimarketing" className="tf-btn style-2 w-100">
                        Get Listed
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DEX Listings */}
            <div className="mb-5">
              <h3 className="font-2 mb-4">DEX Listings (Instant)</h3>
              <div className="row">
                {exchangePackages.dex.map((exchange, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div className={styles.exchangeCard}>
                      <h4>{exchange.name}</h4>
                      <p className="timeline">Timeline: {exchange.timeline}</p>
                      <div className="price">{exchange.price}</div>
                      <p className="type">Type: {exchange.type}</p>
                      <Link href="https://t.me/chainaimarketing" className="tf-btn style-2 w-100">
                        List Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* What's Included */}
        <section className="pt-100 pb-100 bg-dark">
          <div className="container">
            <h2 className="s-title font-3 text-center mb-5">
              What's Included in Our Service
            </h2>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className={styles.includedItem}>
                  <i className="icon icon-check"></i>
                  <div>
                    <h4>Technical Integration</h4>
                    <p>Complete API integration, wallet setup, and technical documentation</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className={styles.includedItem}>
                  <i className="icon icon-check"></i>
                  <div>
                    <h4>Compliance Support</h4>
                    <p>Legal opinion letters, KYC/AML documentation, regulatory compliance</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className={styles.includedItem}>
                  <i className="icon icon-check"></i>
                  <div>
                    <h4>Market Making</h4>
                    <p>Professional market making services to meet volume requirements</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className={styles.includedItem}>
                  <i className="icon icon-check"></i>
                  <div>
                    <h4>Marketing Package</h4>
                    <p>Exchange co-marketing, announcement support, community AMA</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className={styles.includedItem}>
                  <i className="icon icon-check"></i>
                  <div>
                    <h4>Dedicated Manager</h4>
                    <p>Single point of contact throughout the entire listing process</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className={styles.includedItem}>
                  <i className="icon icon-check"></i>
                  <div>
                    <h4>Post-Listing Support</h4>
                    <p>30 days of support including trading competitions and promotions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* Process Timeline */}
        <section className="pt-100 pb-100">
          <div className="container">
            <h2 className="s-title font-3 text-center mb-5">
              Listing Process Timeline
            </h2>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}>1</div>
                <div className={styles.timelineContent}>
                  <h4>Initial Assessment</h4>
                  <p>24-hour eligibility check and exchange recommendations</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}>2</div>
                <div className={styles.timelineContent}>
                  <h4>Documentation</h4>
                  <p>Prepare all technical and legal documents required</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}>3</div>
                <div className={styles.timelineContent}>
                  <h4>Application</h4>
                  <p>Submit and manage the application process</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}>4</div>
                <div className={styles.timelineContent}>
                  <h4>Integration</h4>
                  <p>Technical integration and testing phase</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}>5</div>
                <div className={styles.timelineContent}>
                  <h4>Launch</h4>
                  <p>Coordinated listing announcement and marketing push</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* Success Stories */}
        <section className="pt-100 pb-100 bg-dark">
          <div className="container">
            <h2 className="s-title font-3 text-center mb-5">
              Recent Success Stories
            </h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className={styles.successCard}>
                  <h4>DeFi Protocol X</h4>
                  <p className="exchange">Listed on KuCoin</p>
                  <p className="result">500% volume increase in first week</p>
                  <p className="timeline">Completed in 18 days</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className={styles.successCard}>
                  <h4>Gaming Token Y</h4>
                  <p className="exchange">Listed on Gate.io + MEXC</p>
                  <p className="result">$50M trading volume first day</p>
                  <p className="timeline">Dual listing in 14 days</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className={styles.successCard}>
                  <h4>Layer 2 Project Z</h4>
                  <p className="exchange">Listed on Binance</p>
                  <p className="result">Top 50 CMC ranking achieved</p>
                  <p className="timeline">Fast-tracked in 4 months</p>
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
                Ready to Get Listed?
              </h2>
              <p className="s-sub_title mb-5">
                Start your exchange listing journey with a free consultation
              </p>
              <div className="cta-buttons">
                <Link href="/ai-strategist" className="tf-btn style-2 me-3">
                  Check Eligibility
                </Link>
                <Link href="https://t.me/chainaimarketing" className="tf-btn style-transparent">
                  Speak to Expert
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}