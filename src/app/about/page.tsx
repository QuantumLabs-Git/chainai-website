import { Metadata } from 'next'
import Link from 'next/link'
import HackerText from '@/components/HackerText/HackerText'
import Odometer from '@/components/Odometer/Odometer'
import FutureAnimation from '@/components/FutureAnimation/FutureAnimation'
import AIAvatar from '@/components/AIAvatar/AIAvatar'
import styles from './about.module.scss'

export const metadata: Metadata = {
  title: 'About ChainAI | Leading Web3 Marketing Agency Since 2017',
  description: 'ChainAI Marketing - Trusted by 500+ crypto projects. AI-powered marketing solutions, 200+ services, 95% client retention. Learn about our team and mission.',
  keywords: 'chainai marketing agency, web3 marketing company, crypto marketing team, blockchain marketing experts, ai marketing agency, defi marketing specialists',
  openGraph: {
    title: 'About ChainAI - Trusted by 500+ Web3 Projects Since 2017',
    description: 'Leading crypto marketing agency. AI-powered solutions, 200+ services, proven results. Meet our team.',
    url: 'https://chainai.marketing/about',
    images: [{
      url: 'https://chainai.marketing/images/about-og.jpg',
      width: 1200,
      height: 630,
      alt: 'ChainAI Marketing Team and Office'
    }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ChainAI - Leading Web3 Marketing Agency',
    description: 'Trusted by 500+ crypto projects. AI-powered marketing, 200+ services.',
    images: ['https://chainai.marketing/images/about-twitter.jpg'],
  },
  alternates: {
    canonical: 'https://chainai.marketing/about',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {
  return (
    <main className="tf-section-about">
      {/* Head Section */}
      <div className="sect-header">
        <div className="container">
          <div className="s-meta text-caption font-2">
            <p className="s-number_order wg-counter">
              [ <span className="text-white">0<Odometer value={7} /></span> / 09 ]
            </p>
            <p className="s-label">[ <span className="text-white"><HackerText text="ABOUT US" /></span> ]</p>
          </div>
        </div>
      </div>
      <span className="br-line"></span>

      {/* Hero Section */}
      <section className={styles.aboutHero}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className={styles.heroContent}>
                <h1 className="s-title font-3 wow fadeInLeft">
                  Pioneering the Future of<br />
                  Web3 Marketing
                </h1>
                <p className="s-sub_title wow fadeInLeft" data-wow-delay="0.1s">
                  ChainAI Marketing is the world's first fully automated, AI-driven marketing 
                  ecosystem specifically designed for cryptocurrency and blockchain projects.
                </p>
                <div className={`${styles.heroStats} wow fadeInLeft`} data-wow-delay="0.2s">
                  <div className={styles.statItem}>
                    <h3><Odometer value={2025} /></h3>
                    <p>Founded</p>
                  </div>
                  <div className={styles.statItem}>
                    <h3><Odometer value={50} />+</h3>
                    <p>Team Members</p>
                  </div>
                  <div className={styles.statItem}>
                    <h3><Odometer value={15} />+</h3>
                    <p>Countries</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.heroVisual} wow fadeInRight`}>
                <FutureAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>
      <span className="br-line"></span>

      {/* Mission & Vision */}
      <section className={styles.missionVision}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={`${styles.missionCard} wow fadeInUp`}>
                <div className={styles.cardIcon}>
                  <i className="icon icon-aim"></i>
                </div>
                <h2>Our Mission</h2>
                <p>
                  To democratize access to premium Web3 marketing tools and strategies, 
                  empowering every blockchain project to achieve its full potential through 
                  AI-powered solutions and transparent, blockchain-verified results.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.visionCard} wow fadeInUp`} data-wow-delay="0.1s">
                <div className={styles.cardIcon}>
                  <i className="icon icon-globe"></i>
                </div>
                <h2>Our Vision</h2>
                <p>
                  To become the global standard for Web3 marketing, where every crypto project 
                  leverages our AI-driven platform to build thriving communities, achieve 
                  sustainable growth, and revolutionize how marketing is done in the decentralized world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <span className="br-line"></span>

      {/* Our Story */}
      <section className={styles.ourStory}>
        <div className="container">
          <div className="sect-title text-center wow fadeInUp">
            <h2 className="s-title font-3">Our Story</h2>
            <p className="s-sub_title">
              From identifying market gaps to building the future of Web3 marketing
            </p>
          </div>
          
          <div className={styles.storyContent}>
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className={`${styles.storyText} wow fadeInUp`}>
                  <p>
                    ChainAI Marketing was born from a simple observation: the explosive growth 
                    of the cryptocurrency sector had created a fragmented, inefficient marketing 
                    landscape. Projects were struggling to coordinate with dozens of service 
                    providers, lacking expertise to create effective strategies, and facing 
                    prohibitive costs.
                  </p>
                  <p>
                    Our founders, combining decades of experience in blockchain technology, AI 
                    research, and digital marketing, saw an opportunity to revolutionize this space. 
                    By integrating cutting-edge AI with blockchain transparency, we created a 
                    platform that not only simplifies Web3 marketing but makes it accessible, 
                    measurable, and incredibly effective.
                  </p>
                  <p>
                    Today, ChainAI Marketing serves over 500 Web3 projects worldwide, offering 
                    200+ integrated services through our AI-powered platform. We're not just a 
                    marketing agency – we're your strategic partner in navigating the complex 
                    world of cryptocurrency promotion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <span className="br-line"></span>

      {/* Core Values */}
      <section className={styles.coreValues}>
        <div className="container">
          <div className="sect-title text-center wow fadeInUp">
            <h2 className="s-title font-3">Our Core Values</h2>
            <p className="s-sub_title">The principles that guide everything we do</p>
          </div>
          
          <div className={styles.valuesGrid}>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className={`${styles.valueCard} wow fadeInUp`}>
                  <div className={styles.valueIcon}>
                    <i className="icon icon-lightning"></i>
                  </div>
                  <h3>Innovation</h3>
                  <p>Pioneering the integration of AI and blockchain in marketing</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={`${styles.valueCard} wow fadeInUp`} data-wow-delay="0.1s">
                  <div className={styles.valueIcon}>
                    <i className="icon icon-chart"></i>
                  </div>
                  <h3>Intelligence</h3>
                  <p>Data-driven, strategic approaches to every challenge</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={`${styles.valueCard} wow fadeInUp`} data-wow-delay="0.2s">
                  <div className={styles.valueIcon}>
                    <i className="icon icon-shield"></i>
                  </div>
                  <h3>Trust</h3>
                  <p>Transparent, reliable service in the decentralized world</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={`${styles.valueCard} wow fadeInUp`} data-wow-delay="0.3s">
                  <div className={styles.valueIcon}>
                    <i className="icon icon-rocket"></i>
                  </div>
                  <h3>Results</h3>
                  <p>Focused on measurable outcomes and project success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <span className="br-line"></span>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className="container">
          <div className="sect-title text-center wow fadeInUp">
            <h2 className="s-title font-3">Leadership Team</h2>
            <p className="s-sub_title">Meet the visionaries behind ChainAI Marketing</p>
          </div>
          
          <div className={styles.teamGrid}>
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-6">
                <div className={`${styles.teamMember} wow fadeInUp`}>
                  <div className={styles.memberImage}>
                    <AIAvatar name="QUANTUM-7" role="CEO" />
                  </div>
                  <h4>QUANTUM-7</h4>
                  <p className={styles.memberRole}>Chief Executive Officer</p>
                  <p className={styles.memberBio}>Blockchain Pioneer • 10+ years in blockchain, former CMO at top-50 crypto project</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={`${styles.teamMember} wow fadeInUp`} data-wow-delay="0.1s">
                  <div className={styles.memberImage}>
                    <AIAvatar name="CIPHER-X" role="CMO" />
                  </div>
                  <h4>CIPHER-X</h4>
                  <p className={styles.memberRole}>Chief Marketing Officer</p>
                  <p className={styles.memberBio}>AI-Powered Marketing • Former Google AI researcher, data-driven growth expert</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={`${styles.teamMember} wow fadeInUp`} data-wow-delay="0.2s">
                  <div className={styles.memberImage}>
                    <AIAvatar name="NEXUS-1" role="CFO" />
                  </div>
                  <h4>NEXUS-1</h4>
                  <p className={styles.memberRole}>Chief Financial Officer</p>
                  <p className={styles.memberBio}>DeFi Expert • Managed $50M+ in crypto assets and treasury operations</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={`${styles.teamMember} wow fadeInUp`} data-wow-delay="0.3s">
                  <div className={styles.memberImage}>
                    <AIAvatar name="SYNAPSE-AI" role="CBDO" />
                  </div>
                  <h4>SYNAPSE-AI</h4>
                  <p className={styles.memberRole}>Chief Business Development Officer</p>
                  <p className={styles.memberBio}>Partnership Expert • 200+ industry partnerships secured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <span className="br-line"></span>

      {/* CTA Section */}
      <section className={styles.aboutCta}>
        <div className="container">
          <div className={`${styles.ctaWrapper} wow fadeInUp`}>
            <h2 className="s-title font-3">
              Ready to Join the Revolution?
            </h2>
            <p className="s-sub_title">
              Let's work together to transform your Web3 marketing strategy
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/ai-strategist" className="tf-btn style-2 animate-btn">
                Get Started
              </Link>
              <Link href="/contact" className="tf-btn style-transparent animate-btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <span className="br-line"></span>
    </main>
  )
}