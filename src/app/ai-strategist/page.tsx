import { Metadata } from 'next'
import Link from 'next/link'
import HackerText from '@/components/HackerText/HackerText'
import Odometer from '@/components/Odometer/Odometer'
import ChatInterface from '@/components/ChatInterface/ChatInterface'
import styles from './ai-strategist.module.scss'

export const metadata: Metadata = {
  title: 'AI Crypto Marketing Strategist | Free Web3 Marketing Plan Generator | ChainAI',
  description: 'Get a personalized crypto marketing strategy in 60 seconds. Our AI analyzes your Web3 project and recommends the perfect marketing mix from 200+ services. Free consultation.',
  keywords: 'ai crypto marketing strategist, web3 marketing plan generator, blockchain marketing bot, defi marketing ai, nft promotion strategy, crypto marketing automation, ai powered web3 marketing, instant marketing strategy',
  openGraph: {
    title: 'AI Crypto Marketing Strategist - Free Strategy in 60 Seconds | ChainAI',
    description: 'Get a personalized Web3 marketing strategy instantly. Our AI analyzes your project and recommends the perfect service mix. Start free.',
    url: 'https://chainai.marketing/ai-strategist',
    images: [{
      url: 'https://chainai.marketing/images/ai-strategist-og.jpg',
      width: 1200,
      height: 630,
      alt: 'ChainAI AI Marketing Strategist Interface'
    }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Crypto Marketing Strategist - Free Strategy Generator',
    description: 'Get personalized Web3 marketing strategies in 60 seconds. Powered by AI.',
    images: ['https://chainai.marketing/images/ai-strategist-twitter.jpg'],
  },
  alternates: {
    canonical: 'https://chainai.marketing/ai-strategist',
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

export default function AIStrategistPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ChainAI Marketing Strategist",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "AI-powered crypto marketing strategy generator that analyzes Web3 projects and recommends personalized marketing plans from 200+ services",
    "operatingSystem": "Web",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "523"
    },
    "creator": {
      "@type": "Organization",
      "name": "ChainAI Marketing",
      "url": "https://chainai.marketing"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="tf-section-ai-strategist">
      {/* Head Section */}
      <div className="sect-header">
        <div className="container">
          <div className="s-meta text-caption font-2">
            <p className="s-number_order wg-counter">
              [ <span className="text-white">0<Odometer value={2} /></span> / 09 ]
            </p>
            <p className="s-label">[ <span className="text-white"><HackerText text="AI STRATEGIST" /></span> ]</p>
          </div>
          {/* Breadcrumb for SEO */}
          <nav aria-label="breadcrumb" className="mt-3">
            <ol className="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
              <li className="breadcrumb-item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li className="breadcrumb-item active" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name">AI Marketing Strategist</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <span className="br-line"></span>

      {/* Hero Section with Chat Interface */}
      <section className={styles.aiStrategistHero}>
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="s-title font-2 wow fadeInUp">
              AI Crypto Marketing Strategist - Free Strategy Generator
            </h1>
            <p className="s-sub_title wow fadeInUp" data-wow-delay="0.1s">
              Get a personalized Web3 marketing plan in 60 seconds. Analyzes your project and recommends from 200+ proven crypto marketing services.
            </p>
          </div>
          
          <div className="wow fadeInUp" data-wow-delay="0.2s">
            <ChatInterface />
          </div>
        </div>
      </section>
    </main>
    </>
  )
}