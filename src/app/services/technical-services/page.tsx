import { Metadata } from 'next'
import Link from 'next/link'
import HackerText from '@/components/HackerText/HackerText'
import Odometer from '@/components/Odometer/Odometer'
import styles from '../services.module.scss'

export const metadata: Metadata = {
  title: 'Web3 Technical Services | Smart Contract, DApp Development | ChainAI',
  description: 'Professional blockchain technical services. Smart contract development, auditing, DApp creation, tokenomics design, Web3 integration. Expert blockchain developers.',
  keywords: 'smart contract development, blockchain development, DApp development, Web3 integration, tokenomics, contract audit, Solidity, technical services',
  openGraph: {
    title: 'Technical Services - Blockchain Development & Web3 Solutions',
    description: 'Expert blockchain development services. Smart contracts, DApps, audits, and Web3 integrations.',
    url: 'https://chainai.marketing/services/technical-services',
    images: [{
      url: 'https://chainai.marketing/images/technical-services-og.jpg',
      width: 1200,
      height: 630,
      alt: 'ChainAI Technical Services'
    }],
    type: 'website',
  },
  alternates: {
    canonical: 'https://chainai.marketing/services/technical-services',
  },
}

export default function TechnicalServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web3 Technical Development Services",
    "provider": {
      "@type": "Organization",
      "name": "ChainAI Marketing"
    },
    "description": "Professional blockchain development and Web3 technical services",
    "serviceType": "Technical Development",
    "areaServed": "Worldwide"
  }

  const technicalServices = [
    {
      category: 'Smart Contract Development',
      services: [
        { service: 'Token Creation', description: 'ERC-20, BEP-20, SPL tokens', price: 'From $2,500' },
        { service: 'NFT Contracts', description: 'ERC-721, ERC-1155, custom NFTs', price: 'From $5,000' },
        { service: 'DeFi Protocols', description: 'Staking, farming, DEX contracts', price: 'From $15,000' },
        { service: 'DAO Contracts', description: 'Governance, voting, treasury', price: 'From $10,000' },
      ]
    },
    {
      category: 'Blockchain Integration',
      services: [
        { service: 'Multi-chain Support', description: 'Cross-chain bridges and integration', price: 'From $20,000' },
        { service: 'Wallet Integration', description: 'MetaMask, WalletConnect, custom wallets', price: 'From $3,000' },
        { service: 'Oracle Integration', description: 'Chainlink, Band Protocol setup', price: 'From $5,000' },
        { service: 'Layer 2 Solutions', description: 'Polygon, Arbitrum, Optimism integration', price: 'From $8,000' },
      ]
    },
    {
      category: 'Security & Auditing',
      services: [
        { service: 'Smart Contract Audit', description: 'Comprehensive security review', price: 'From $5,000' },
        { service: 'Penetration Testing', description: 'DApp and protocol security testing', price: 'From $8,000' },
        { service: 'Code Review', description: 'Best practices and optimization', price: 'From $2,000' },
        { service: 'Bug Bounty Setup', description: 'Program design and management', price: 'From $3,000' },
      ]
    },
    {
      category: 'DApp Development',
      services: [
        { service: 'Frontend Development', description: 'React, Next.js, Web3.js integration', price: 'From $10,000' },
        { service: 'Backend Infrastructure', description: 'Node.js, APIs, database setup', price: 'From $8,000' },
        { service: 'Mobile DApps', description: 'iOS and Android Web3 apps', price: 'From $25,000' },
        { service: 'Full-Stack DApps', description: 'Complete end-to-end solutions', price: 'From $30,000' },
      ]
    }
  ]

  const techStack = [
    { category: 'Blockchains', items: ['Ethereum', 'BSC', 'Polygon', 'Solana', 'Avalanche', 'Arbitrum'] },
    { category: 'Languages', items: ['Solidity', 'Rust', 'JavaScript', 'TypeScript', 'Python', 'Go'] },
    { category: 'Frameworks', items: ['Hardhat', 'Truffle', 'Web3.js', 'Ethers.js', 'React', 'Next.js'] },
    { category: 'Tools', items: ['OpenZeppelin', 'Chainlink', 'IPFS', 'The Graph', 'Moralis', 'Alchemy'] },
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
                <li className="breadcrumb-item active">Technical Services</li>
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
                  Web3 Technical Development Services
                </h1>
                <p className="lead mb-4">
                  Build secure, scalable blockchain solutions with our expert development team. From smart contracts 
                  to full-stack DApps, we bring your Web3 vision to life with cutting-edge technology.
                </p>
                <div className="row mb-4">
                  <div className="col-md-4 mb-3">
                    <div className="stat-box">
                      <Odometer value={500} suffix="+" />
                      <span>Contracts Deployed</span>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="stat-box">
                      <Odometer value={100} suffix="%" />
                      <span>Audit Pass Rate</span>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="stat-box">
                      <Odometer value={50} suffix="+" />
                      <span>DApps Built</span>
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-3 flex-wrap">
                  <Link href="/contact" className="btn-main">
                    Start Your Project
                  </Link>
                  <Link href="/ai-strategist" className="btn-border">
                    Technical Consultation
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styles.heroVisual}>
                  <HackerText text="BUILD WEB3" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* Why Choose Our Technical Services */}
        <section className="tf-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 text-center">
                <h2 className="s-title font-2 mb-3">Why Choose ChainAI Technical Services</h2>
                <p className="lead">Expert blockchain developers with proven track record</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-4">
                <div className="feature-card text-center">
                  <div className="icon-box mb-3">
                    <i className="icon-shield"></i>
                  </div>
                  <h4>Security First</h4>
                  <p>Audited code following best practices and security standards</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="feature-card text-center">
                  <div className="icon-box mb-3">
                    <i className="icon-code"></i>
                  </div>
                  <h4>Clean Code</h4>
                  <p>Well-documented, maintainable, and optimized smart contracts</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="feature-card text-center">
                  <div className="icon-box mb-3">
                    <i className="icon-layers"></i>
                  </div>
                  <h4>Multi-Chain</h4>
                  <p>Experience across all major blockchains and Layer 2 solutions</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="feature-card text-center">
                  <div className="icon-box mb-3">
                    <i className="icon-clock"></i>
                  </div>
                  <h4>On-Time Delivery</h4>
                  <p>Agile development with regular updates and milestone tracking</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* Technical Services */}
        <section className="tf-section bg-dark">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 text-center">
                <h2 className="s-title font-2 mb-3">Our Technical Services</h2>
                <p className="lead">Comprehensive blockchain development solutions</p>
              </div>
            </div>
            
            {technicalServices.map((category, index) => (
              <div key={index} className="mb-5">
                <h3 className="font-2 mb-4">{category.category}</h3>
                <div className="row">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="col-md-6 col-lg-3 mb-4">
                      <div className={styles.serviceCard}>
                        <h4>{service.service}</h4>
                        <p>{service.description}</p>
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

        {/* Tech Stack */}
        <section className="tf-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 text-center">
                <h2 className="s-title font-2 mb-3">Our Technology Stack</h2>
                <p className="lead">Cutting-edge tools and frameworks for Web3 development</p>
              </div>
            </div>
            <div className="row">
              {techStack.map((category, index) => (
                <div key={index} className="col-md-6 col-lg-3 mb-4">
                  <div className="tech-stack-card">
                    <h4 className="mb-3">{category.category}</h4>
                    <div className="tech-items">
                      {category.items.map((item, idx) => (
                        <span key={idx} className="tech-badge">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* Development Process */}
        <section className="tf-section bg-dark">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 text-center">
                <h2 className="s-title font-2 mb-3">Our Development Process</h2>
                <p className="lead">Structured approach for successful blockchain projects</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="process-step text-center">
                  <div className="step-number">01</div>
                  <h4>Discovery & Planning</h4>
                  <p>Requirements gathering, technical architecture, timeline planning</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="process-step text-center">
                  <div className="step-number">02</div>
                  <h4>Development</h4>
                  <p>Agile sprints, regular updates, continuous integration</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="process-step text-center">
                  <div className="step-number">03</div>
                  <h4>Testing & Audit</h4>
                  <p>Unit tests, integration tests, security audits, testnet deployment</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="process-step text-center">
                  <div className="step-number">04</div>
                  <h4>Deployment & Support</h4>
                  <p>Mainnet deployment, monitoring, maintenance, ongoing support</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* Recent Projects */}
        <section className="tf-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 text-center">
                <h2 className="s-title font-2 mb-3">Recent Technical Projects</h2>
                <p className="lead">Successful blockchain solutions we&apos;ve delivered</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="project-card">
                  <h4>DeFi Lending Protocol</h4>
                  <p>Complete lending/borrowing platform with liquidation engine</p>
                  <div className="tech-used">
                    <span>Solidity</span>
                    <span>Hardhat</span>
                    <span>React</span>
                  </div>
                  <div className="project-stats">
                    <div>$50M+ TVL</div>
                    <div>Zero exploits</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="project-card">
                  <h4>NFT Marketplace</h4>
                  <p>Full-featured marketplace with royalties and auction system</p>
                  <div className="tech-used">
                    <span>ERC-721</span>
                    <span>IPFS</span>
                    <span>Next.js</span>
                  </div>
                  <div className="project-stats">
                    <div>10K+ NFTs</div>
                    <div>$5M+ Volume</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="project-card">
                  <h4>Cross-Chain Bridge</h4>
                  <p>Secure bridge connecting Ethereum and BSC networks</p>
                  <div className="tech-used">
                    <span>Multi-sig</span>
                    <span>Chainlink</span>
                    <span>Node.js</span>
                  </div>
                  <div className="project-stats">
                    <div>$100M+ Bridged</div>
                    <div>5 Chains</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span className="br-line"></span>

        {/* Tokenomics Design */}
        <section className="tf-section bg-dark">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 text-center">
                <h2 className="s-title font-2 mb-3">Tokenomics Design Services</h2>
                <p className="lead">Create sustainable token economies that drive value</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <h4>Token Economic Model</h4>
                <ul className="feature-list">
                  <li>Supply and distribution planning</li>
                  <li>Vesting schedules design</li>
                  <li>Incentive mechanisms</li>
                  <li>Burn and buyback strategies</li>
                  <li>Staking and rewards systems</li>
                </ul>
              </div>
              <div className="col-md-6 mb-4">
                <h4>Implementation Support</h4>
                <ul className="feature-list">
                  <li>Smart contract development</li>
                  <li>Vesting contract creation</li>
                  <li>Liquidity management</li>
                  <li>Governance setup</li>
                  <li>Economic simulations</li>
                </ul>
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
                <h2 className="s-title font-2 mb-3">Ready to Build Your Web3 Solution?</h2>
                <p className="lead mb-4">
                  Let&apos;s bring your blockchain project to life with secure, scalable technology
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Link href="/contact" className="btn-main">
                    Start Your Project
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