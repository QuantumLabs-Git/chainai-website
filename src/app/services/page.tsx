import { Metadata } from 'next'
import Link from 'next/link'
import HackerText from '@/components/HackerText/HackerText'
import Odometer from '@/components/Odometer/Odometer'
import styles from './services.module.scss'

export const metadata: Metadata = {
  title: 'Crypto Marketing Services | 200+ Web3 Solutions | ChainAI',
  description: 'Complete crypto marketing services catalog. KOL campaigns from $500, exchange listings, PR packages, community management. Get instant pricing and 24hr delivery.',
  keywords: 'crypto marketing services, kol marketing packages, exchange listing services, web3 pr agency, telegram marketing, discord community management, chinese crypto marketing, dextools trending, coinmarketcap listing',
  openGraph: {
    title: 'Crypto Marketing Services - 200+ Solutions with Instant Pricing',
    description: 'Full-service Web3 marketing. KOL campaigns, exchange listings, PR, community management. Transparent pricing, 24hr delivery.',
    url: 'https://chainai.marketing/services',
    images: [{
      url: 'https://chainai.marketing/images/services-og.jpg',
      width: 1200,
      height: 630,
      alt: 'ChainAI Crypto Marketing Services Catalog'
    }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Marketing Services - 200+ Solutions',
    description: 'Complete Web3 marketing catalog. KOL campaigns from $500, exchange listings, PR. Get instant pricing.',
    images: ['https://chainai.marketing/images/services-twitter.jpg'],
  },
  alternates: {
    canonical: 'https://chainai.marketing/services',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const serviceCategories = [
  {
    id: 'community-management',
    title: 'Community Management',
    icon: 'icon-users',
    description: 'Professional 24/7 moderation and engagement across all platforms',
    detailedServices: {
      'Telegram Community Moderators': [
        '1 Day Community Manager Service - Professional moderation and community engagement',
        '20 Day Community Management Package - Extended coverage with growth strategies'
      ],
      'Features': [
        'Real-time response to community questions',
        'Spam and scam prevention',
        'Daily engagement activities',
        'Community growth strategies',
        'Regular reporting and analytics'
      ]
    }
  },
  {
    id: 'shilling-services',
    title: 'Shilling Services',
    icon: 'icon-lightning',
    description: 'Mass DM campaigns and automated shilling across platforms',
    detailedServices: {
      'Mass DMs Packages': [
        '25,000 DMs Package - Targeted messaging with proof of work',
        '50,000 DMs Package - Expanded reach with documentation',
        '100,000 DMs Package - Maximum reach with full proof'
      ],
      'Automated Shilling': [
        'PumpFun Group - 3 days pre-launch + 4 weeks live',
        'MoonShot Group - 4 weeks targeted shilling',
        'SunPump Group - 3 days pre-launch + 4 weeks active',
        '220 Groups Package - Non-stop coverage across all groups'
      ]
    }
  },
  {
    id: 'chinese-marketing',
    title: 'Chinese Marketing',
    icon: 'icon-globe',
    description: 'Complete Chinese market entry with 40+ KOLs and specialized platforms',
    detailedServices: {
      'Core Services': [
        'Market entry consultation',
        'Landing page translation',
        'Traditional Mandarin KOLs (Taiwan/Hong Kong)',
        '40+ verified Simplified Mandarin influencers'
      ],
      'Platform Services': [
        'Ave.ai Trending & Banners',
        'Chinese Buy Bot Groups',
        'Biggest Buy Competition',
        'WeChat official account management',
        'Tracked token listings'
      ],
      'Press Release Network': [
        '40+ Chinese crypto media outlets',
        'Major finance media distribution',
        'Tech and blockchain specialized sites'
      ]
    }
  },
  {
    id: 'youtube-influencers',
    title: 'YouTube Network',
    icon: 'icon-play',
    description: 'Access to 65+ YouTube channels across all tiers',
    detailedServices: {
      'Tier 1 Influencers': [
        'Altcoin Daily - Dedicated videos & interviews',
        'Lark Davis - Full reviews & live interviews',
        'Davinci Jeremie - Dedicated content',
        'The Moon - Dedicated reviews',
        'Kyle Chasse - Comprehensive coverage'
      ],
      'Tier 2 Influencers': [
        'Data Dash',
        'Crypto Banter',
        'Joe Parys',
        'Paul Barron',
        'Crypto Rover',
        'And 10+ more channels'
      ],
      'Content Types': [
        'Dedicated video reviews',
        'Integration videos',
        'Interview opportunities',
        'Live streaming options',
        'Regional language channels'
      ]
    }
  },
  {
    id: 'ai-tools',
    title: 'AI-Powered Tools',
    icon: 'icon-chart',
    description: 'Advanced AI solutions for content creation and automation',
    detailedServices: {
      'AI Modules': [
        'Quanmed AI Integration - Multi-language conversational AI',
        'Three Protocol Integration - Blockchain-integrated responses'
      ],
      'Engagement Tools': [
        'YouTube AI Comment Engager',
        'Tweet AI Comment Engager',
        'AI Twitter Trending Engine',
        'Sentiment-aware responses'
      ],
      'Content Creation': [
        'AI Blog Bot with SEO optimization',
        'Personal Assistant for content strategies',
        'SEO Audit Tools',
        'Content calendar management'
      ]
    }
  },
  {
    id: 'design-services',
    title: 'Design Services',
    icon: 'icon-paint',
    description: 'Complete brand identity and web design solutions',
    detailedServices: {
      'Brand Development': [
        'Full Brand Book Development',
        'Logo variations and usage rules',
        'Color palette and typography',
        'Brand voice and messaging'
      ],
      'Web Design': [
        'Figma 5-Page Website Design',
        'Mobile-responsive layouts',
        'Interactive prototypes',
        'Design system creation'
      ]
    }
  },
  {
    id: 'dex-services',
    title: 'DEX & Platform Services',
    icon: 'icon-exchange',
    description: 'Trending services and premium placements across DEX platforms',
    detailedServices: {
      'Dextools Services': [
        'Dextools Votes',
        'Rockets and Fireworks',
        'Trending optimization'
      ],
      'DexScreener': [
        '24h Premium Slot (#1-#3)',
        '24h Standard Slot (#4-#10)'
      ],
      'Listings & Verification': [
        'CoinGecko fast-track listing',
        'CoinMarketCap expedited listing',
        'Supply verification',
        'Watchlist management'
      ]
    }
  },
  {
    id: 'pr-media',
    title: 'PR & Media',
    icon: 'icon-news',
    description: 'Press release distribution across 40+ crypto publications',
    detailedServices: {
      'Premium Media Outlets': [
        'TheNewsCrypto.com - Articles, reviews, interviews',
        'Crypto.ro - Homepage features, push notifications',
        'Blockinsider.com - Organic & sponsored content',
        'CoinEagle.com - Full editorial coverage',
        'Crypto-news-flash.com',
        'And 35+ more outlets'
      ],
      'Content Types': [
        'Press releases',
        'Sponsored articles',
        'Technical analysis',
        'Video interviews',
        'Banner placements'
      ]
    }
  },
  {
    id: 'technical-services',
    title: 'Technical Services',
    icon: 'icon-shield',
    description: 'Market making, launch services, and blockchain integrations',
    detailedServices: {
      'Core Technical': [
        'Professional market making',
        'Liquidity provision',
        'Price stability mechanisms',
        'Complete launch management'
      ],
      'Volume Generation': [
        'Binance Smart Chain organic volume',
        'Solana DEX activity enhancement',
        'Trading bot services'
      ],
      'Blockchain Services': [
        'Cross-chain bridging',
        'Multi-chain deployment',
        'Smart contract integration'
      ]
    }
  },
  {
    id: 'trending-services',
    title: 'Trending Services',
    icon: 'icon-rocket',
    description: 'Get your project trending on major platforms',
    detailedServices: {
      'Platform Trending': [
        'Dextools Trending',
        '7 Days CMC Most Viewed',
        '24h CMC Search Bar',
        '7 Days CoinGecko Search',
        '7 Days Crypto.com Search',
        'X (Twitter) Worldwide Trending',
        'OpenSea Trending (NFTs)'
      ]
    }
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    icon: 'icon-network',
    description: 'Comprehensive coverage across all social platforms',
    detailedServices: {
      'TikTok Marketing': [
        'Small to Mega KOL packages',
        'Complete TikTok domination strategies'
      ],
      'X (Twitter)': [
        'Comprehensive influencer network',
        'Varied follower counts',
        'High engagement rates'
      ],
      'Instagram': [
        'Professor Crypto collaborations',
        'Complete Instagram strategies'
      ],
      'Telegram Growth': [
        'HypeMen for engagement',
        'Bot members',
        'Scraping/inviting services'
      ]
    }
  },
  {
    id: 'special-services',
    title: 'Special Services',
    icon: 'icon-diamond',
    description: 'Unique marketing solutions for maximum impact',
    detailedServices: {
      'Billboard Advertising': [
        'SpaceX Billboard - 1 Week',
        'Las Vegas MGM Grand - 1 Week',
        'Las Vegas BLVD - 1 Week'
      ],
      'Gaming Services': [
        'Telegram Game Development',
        'Community engagement games',
        'Reward mechanisms'
      ],
      'AI Agents': [
        'Text Agents - Conversational AI',
        'Audio Agents - Voice interactions',
        'Video Agents - Content creation',
        '3D Video Agents - Metaverse ready'
      ],
      'Exchange Listings': [
        'Binance Web3 Wallet',
        'Major CEX introductions',
        'Fast-track processes'
      ]
    }
  }
]

export default function ServicesPage() {
  return (
    <main className="tf-section-services">
      {/* Head Section */}
      <div className="sect-header">
        <div className="container">
          <div className="s-meta text-caption font-2">
            <p className="s-number_order wg-counter">
              [ <span className="text-white">0<Odometer value={4} /></span> / 09 ]
            </p>
            <p className="s-label">[ <span className="text-white font-2"><HackerText text="SERVICES" /></span> ]</p>
          </div>
        </div>
      </div>
      <span className="br-line"></span>

      {/* Hero Section */}
      <section className={styles.servicesHero}>
        <div className="container">
          <div className="text-center">
            <h1 className="s-title font-2 wow fadeInUp">
              200+ Marketing Services,<br />One Unified Platform
            </h1>
            <p className="s-sub_title wow fadeInUp" data-wow-delay="0.1s">
              ChainAI Marketing offers comprehensive blockchain and AI-powered marketing services<br />
              designed specifically for Web3 projects. Access everything through our AI bot or website.
            </p>
            <div className={`${styles.heroStats} wow fadeInUp`} data-wow-delay="0.2s">
              <div className={styles.statItem}>
                <h3><Odometer value={200} />+</h3>
                <p>Services Available</p>
              </div>
              <div className={styles.statItem}>
                <h3><Odometer value={65} />+</h3>
                <p>YouTube Channels</p>
              </div>
              <div className={styles.statItem}>
                <h3><Odometer value={40} />+</h3>
                <p>Chinese KOLs</p>
              </div>
              <div className={styles.statItem}>
                <h3><Odometer value={50} />+</h3>
                <p>Media Outlets</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <span className="br-line"></span>

      {/* Service Categories */}
      <section className={styles.servicesDetailed}>
        <div className="container">
          <div className="sect-title text-center wow fadeInUp">
            <h2 className="s-title font-2">Our Service Catalog</h2>
            <p className="s-sub_title">Explore our comprehensive range of Web3 marketing solutions</p>
          </div>

          <div className={styles.categoriesWrapper}>
            {serviceCategories.map((category, index) => (
              <div key={category.id} className={`${styles.categoryBlock} wow fadeInUp`} data-wow-delay={`${index * 0.1}s`}>
                <div className={styles.categoryHeader}>
                  <div className={styles.iconBox}>
                    <i className={`icon ${category.icon}`}></i>
                  </div>
                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>
                
                <div className={styles.categoryContent}>
                  {Object.entries(category.detailedServices).map(([groupName, services]) => (
                    <div key={groupName} className={styles.serviceGroup}>
                      <h4>{groupName}</h4>
                      <ul>
                        {services.map((service, idx) => (
                          <li key={idx}>
                            <i className="icon icon-check"></i>
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <span className="br-line"></span>

      {/* Quick Access Grid */}
      <section className={styles.quickAccess}>
        <div className="container">
          <div className="sect-title text-center wow fadeInUp">
            <h2 className="s-title font-2">Popular Service Packages</h2>
            <p className="s-sub_title">Quick access to our most requested service bundles</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className={`${styles.packageCard} wow fadeInUp`}>
                <h3>Starter Pack</h3>
                <ul>
                  <li>Dextools listing</li>
                  <li>Dexscreener listing</li>
                  <li>Ave.ai listing</li>
                  <li>Basic community setup</li>
                  <li>Initial PR release</li>
                </ul>
                <Link href="/ai-strategist" className="tf-btn style-transparent animate-btn">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={`${styles.packageCard} wow fadeInUp`} data-wow-delay="0.1s">
                <h3>Growth Pack</h3>
                <ul>
                  <li>YouTube influencer campaign</li>
                  <li>Twitter KOL outreach</li>
                  <li>Community management</li>
                  <li>DEX trending services</li>
                  <li>PR distribution</li>
                </ul>
                <Link href="/ai-strategist" className="tf-btn style-transparent animate-btn">
                  Scale Up
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={`${styles.packageCard} wow fadeInUp`} data-wow-delay="0.2s">
                <h3>Premium Pack</h3>
                <ul>
                  <li>Chinese market entry</li>
                  <li>Market making services</li>
                  <li>Billboard advertising</li>
                  <li>CEX listing support</li>
                  <li>Full AI automation</li>
                </ul>
                <Link href="/ai-strategist" className="tf-btn style-transparent animate-btn">
                  Go Premium
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <span className="br-line"></span>

      {/* Custom Solutions CTA */}
      <section className={styles.customSolutions}>
        <div className="container">
          <div className={`${styles.ctaBox} wow fadeInUp`}>
            <h2 className="s-title font-2">
              Need a Custom Marketing Strategy?
            </h2>
            <p className="s-sub_title">
              Our AI-powered strategy engine creates unique combinations of services<br />
              optimized for your project&apos;s goals, target audience, and budget.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/ai-strategist" className="tf-btn style-2 animate-btn">
                Get AI Strategy
              </Link>
              <a href="https://t.me/chainaibot" target="_blank" rel="noopener noreferrer" className="tf-btn style-transparent animate-btn">
                Contact on Telegram
              </a>
            </div>
          </div>
        </div>
      </section>
      <span className="br-line"></span>

      {/* Note */}
      <section className={styles.servicesNote}>
        <div className="container">
          <div className="text-center">
            <p className="text-caption font-2">
              <em>Note: This catalog represents our current service offerings. Services may be added or modified as we continue to expand our capabilities and partnerships.</em>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}