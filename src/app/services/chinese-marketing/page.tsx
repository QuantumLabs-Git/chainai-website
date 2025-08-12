import { Metadata } from 'next'
import Link from 'next/link'
import HackerText from '@/components/HackerText/HackerText'
import Odometer from '@/components/Odometer/Odometer'
import styles from '../services.module.scss'

export const metadata: Metadata = {
  title: 'Chinese Crypto Marketing | China Web3 Market Entry | ChainAI',
  description: 'Enter the Chinese crypto market with our comprehensive marketing services. WeChat, Weibo, Douyin campaigns. Chinese KOLs, community building, PR. Native team.',
  keywords: 'chinese crypto marketing, china blockchain marketing, wechat crypto promotion, weibo marketing, chinese kol, china market entry, asian crypto marketing',
  openGraph: {
    title: 'Chinese Crypto Marketing - Complete Market Entry Solutions',
    description: 'Professional Chinese market entry for crypto projects. Native team, proven strategies.',
    url: 'https://chainai.marketing/services/chinese-marketing',
    images: [{
      url: 'https://chainai.marketing/images/chinese-marketing-og.jpg',
      width: 1200,
      height: 630,
      alt: 'ChainAI Chinese Marketing Services'
    }],
    type: 'website',
  },
  alternates: {
    canonical: 'https://chainai.marketing/services/chinese-marketing',
  },
}

export default function ChineseMarketingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Chinese Crypto Marketing Services",
    "provider": {
      "@type": "Organization",
      "name": "ChainAI Marketing"
    },
    "description": "Comprehensive Chinese market entry services for Web3 and blockchain projects",
    "areaServed": ["China", "Hong Kong", "Taiwan", "Singapore"],
    "availableLanguage": ["Chinese", "Mandarin", "Cantonese", "English"]
  }

  const chineseServices = [
    {
      category: 'Social Media Marketing',
      services: [
        { platform: 'WeChat', services: 'Official account, mini-programs, groups', price: 'From $3,000/month' },
        { platform: 'Weibo', services: 'Verified account, content, KOL campaigns', price: 'From $2,000/month' },
        { platform: 'Douyin/TikTok', services: 'Short videos, livestreams, challenges', price: 'From $5,000/month' },
        { platform: 'Bilibili', services: 'Educational content, anime-style videos', price: 'From $4,000/month' },
      ]
    },
    {
      category: 'Chinese KOL Network',
      services: [
        { tier: 'Mega KOLs', followers: '1M+ followers', price: '$10,000-50,000/post' },
        { tier: 'Macro KOLs', followers: '100K-1M followers', price: '$2,000-10,000/post' },
        { tier: 'Mid-tier KOLs', followers: '10K-100K followers', price: '$500-2,000/post' },
        { tier: 'Micro KOLs', followers: '1K-10K followers', price: '$100-500/post' },
      ]
    },
    {
      category: 'Chinese PR & Media',
      services: [
        { outlet: 'Jinse Finance', type: 'Top crypto media', price: '$2,000-5,000/article' },
        { outlet: '8btc', type: 'Blockchain news', price: '$1,500-3,000/article' },
        { outlet: 'ChainNews', type: 'DeFi focused', price: '$1,000-2,500/article' },
        { outlet: 'Odaily', type: 'Tech analysis', price: '$1,000-2,000/article' },
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
                <li className="breadcrumb-item active">Chinese Marketing</li>
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
                  Chinese Crypto Marketing Services
                </h1>
                <h2 className="h3 mb-4">加密货币中国市场营销服务</h2>
                <p className="s-sub_title mb-5">
                  Unlock the world's largest crypto market with our native Chinese marketing team. 
                  From WeChat to Weibo, from Shanghai to Shenzhen, we deliver results that matter.
                </p>
                <div className="hero-buttons">
                  <Link href="/ai-strategist" className="tf-btn style-2">
                    Get Market Analysis
                  </Link>
                  <Link href="https://t.me/chainaimarketing" className="tf-btn style-transparent">
                    进入中国市场
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styles.heroStats}>
                  <div className={styles.statCard}>
                    <h3>400M+</h3>
                    <p>Chinese Crypto Users</p>
                  </div>
                  <div className={styles.statCard}>
                    <h3>50+</h3>
                    <p>Native Team Members</p>
                  </div>
                  <div className={styles.statCard}>
                    <h3>200+</h3>
                    <p>Chinese Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* Why Chinese Market */}
        <section className="pt-100 pb-100">
          <div className="container">
            <h2 className="s-title font-3 text-center mb-5">
              Why You Need Chinese Marketing
            </h2>
            <div className="row">
              <div className="col-md-3 mb-4">
                <div className={styles.marketStat}>
                  <h3>40%</h3>
                  <p>Of global crypto trading volume</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className={styles.marketStat}>
                  <h3>$500B+</h3>
                  <p>Annual crypto transactions</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className={styles.marketStat}>
                  <h3>60%</h3>
                  <p>Of Bitcoin mining hashrate</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className={styles.marketStat}>
                  <h3>#1</h3>
                  <p>In DeFi participation globally</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* Services Breakdown */}
        <section className="pt-100 pb-100 bg-dark">
          <div className="container">
            <h2 className="s-title font-3 text-center mb-5">
              Complete Chinese Marketing Solutions
            </h2>
            
            {chineseServices.map((category, index) => (
              <div key={index} className="mb-5">
                <h3 className="font-2 mb-4">{category.category}</h3>
                <div className="row">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="col-md-6 col-lg-3 mb-4">
                      <div className={styles.serviceCard}>
                        <h4>{(service as any).platform || (service as any).tier || (service as any).outlet}</h4>
                        <p>{(service as any).services || (service as any).followers || (service as any).type}</p>
                        <div className="price">{service.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <span className="br-line"></span>

        {/* Market Entry Process */}
        <section className="pt-100 pb-100">
          <div className="container">
            <h2 className="s-title font-3 text-center mb-5">
              Your Chinese Market Entry Roadmap
            </h2>
            <div className={styles.roadmap}>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className={styles.roadmapItem}>
                    <div className={styles.phase}>Phase 1: Foundation (Week 1-2)</div>
                    <ul>
                      <li>Chinese brand name creation</li>
                      <li>Whitepaper translation</li>
                      <li>WeChat official account setup</li>
                      <li>Weibo verification</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className={styles.roadmapItem}>
                    <div className={styles.phase}>Phase 2: Community (Week 3-4)</div>
                    <ul>
                      <li>Telegram Chinese group launch</li>
                      <li>WeChat groups creation</li>
                      <li>Local community moderators</li>
                      <li>Initial content calendar</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className={styles.roadmapItem}>
                    <div className={styles.phase}>Phase 3: Amplification (Month 2)</div>
                    <ul>
                      <li>KOL partnerships launch</li>
                      <li>Media PR campaign</li>
                      <li>Exchange communities</li>
                      <li>Regional meetups</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className={styles.roadmapItem}>
                    <div className={styles.phase}>Phase 4: Optimization (Ongoing)</div>
                    <ul>
                      <li>Performance analytics</li>
                      <li>Strategy refinement</li>
                      <li>Expansion to tier 2 cities</li>
                      <li>Partnership development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* Cultural Considerations */}
        <section className="pt-100 pb-100 bg-dark">
          <div className="container">
            <h2 className="s-title font-3 text-center mb-5">
              Why Native Expertise Matters
            </h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className={styles.expertiseCard}>
                  <i className="icon icon-language"></i>
                  <h4>Language Nuances</h4>
                  <p>Perfect translations that capture blockchain terminology and cultural context</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className={styles.expertiseCard}>
                  <i className="icon icon-network"></i>
                  <h4>Platform Expertise</h4>
                  <p>Deep knowledge of Chinese-specific platforms and user behaviors</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className={styles.expertiseCard}>
                  <i className="icon icon-shield"></i>
                  <h4>Compliance Navigation</h4>
                  <p>Understanding of regulatory landscape and compliant marketing strategies</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className={styles.expertiseCard}>
                  <i className="icon icon-users"></i>
                  <h4>Local Networks</h4>
                  <p>Established relationships with KOLs, media, and community leaders</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className={styles.expertiseCard}>
                  <i className="icon icon-chart"></i>
                  <h4>Market Intelligence</h4>
                  <p>Real-time insights on trends, competitors, and opportunities</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className={styles.expertiseCard}>
                  <i className="icon icon-clock"></i>
                  <h4>24/7 Coverage</h4>
                  <p>Round-the-clock community management across time zones</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* Success Stories */}
        <section className="pt-100 pb-100">
          <div className="container">
            <h2 className="s-title font-3 text-center mb-5">
              Chinese Market Success Stories
            </h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className={styles.caseStudy}>
                  <h4>DeFi Protocol Launch</h4>
                  <div className={styles.results}>
                    <p><strong>100K+</strong> WeChat followers in 30 days</p>
                    <p><strong>$50M</strong> TVL from Chinese users</p>
                    <p><strong>20+</strong> KOL partnerships</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className={styles.caseStudy}>
                  <h4>NFT Collection</h4>
                  <div className={styles.results}>
                    <p><strong>Sold out</strong> in 3 minutes</p>
                    <p><strong>80%</strong> Chinese buyers</p>
                    <p><strong>5M+</strong> Weibo impressions</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className={styles.caseStudy}>
                  <h4>Layer 1 Blockchain</h4>
                  <div className={styles.results}>
                    <p><strong>300K+</strong> Chinese community</p>
                    <p><strong>Top 3</strong> on Chinese exchanges</p>
                    <p><strong>50+</strong> Chinese validators</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* Packages */}
        <section className="pt-100 pb-100 bg-dark">
          <div className="container">
            <h2 className="s-title font-3 text-center mb-5">
              Chinese Marketing Packages
            </h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className={styles.packageCard}>
                  <h3>Starter Package</h3>
                  <div className="price">$10,000/month</div>
                  <ul>
                    <li>WeChat + Weibo setup</li>
                    <li>Basic translation services</li>
                    <li>5 KOL partnerships</li>
                    <li>Weekly content creation</li>
                    <li>Community management</li>
                  </ul>
                  <Link href="https://t.me/chainaimarketing" className="tf-btn style-2 w-100">
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className={styles.packageCard + ' ' + styles.featured}>
                  <div className={styles.badge}>Most Popular</div>
                  <h3>Growth Package</h3>
                  <div className="price">$25,000/month</div>
                  <ul>
                    <li>All social platforms</li>
                    <li>Full translation team</li>
                    <li>15 KOL partnerships</li>
                    <li>Daily content + video</li>
                    <li>24/7 community team</li>
                    <li>Monthly PR campaign</li>
                  </ul>
                  <Link href="https://t.me/chainaimarketing" className="tf-btn style-2 w-100">
                    Scale Now
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className={styles.packageCard}>
                  <h3>Enterprise Package</h3>
                  <div className="price">Custom Pricing</div>
                  <ul>
                    <li>Dedicated team of 10+</li>
                    <li>Unlimited content</li>
                    <li>50+ KOL network</li>
                    <li>Event management</li>
                    <li>Government relations</li>
                    <li>Market intelligence</li>
                  </ul>
                  <Link href="https://t.me/chainaimarketing" className="tf-btn style-2 w-100">
                    Contact Us
                  </Link>
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
                Ready to Enter the Chinese Market?
              </h2>
              <p className="s-sub_title mb-5">
                Join 200+ successful projects that conquered China with ChainAI
              </p>
              <div className="cta-buttons">
                <Link href="/ai-strategist" className="tf-btn style-2 me-3">
                  Get Free Analysis
                </Link>
                <Link href="https://t.me/chainaimarketing" className="tf-btn style-transparent">
                  开始中国营销 (Start Now)
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}