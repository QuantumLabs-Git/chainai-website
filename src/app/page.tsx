import { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection/FeaturesSection'
import BenefitsSection from '@/components/sections/BenefitsSection/BenefitsSection'
import HowToUseSection from '@/components/sections/HowToUseSection/HowToUseSection'
import PricingSection from '@/components/sections/PricingSection/PricingSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection/TestimonialsSection'
import FAQSection from '@/components/sections/FAQSection/FAQSection'
import CTASection from '@/components/sections/CTASection/CTASection'

export const metadata: Metadata = {
  title: 'ChainAI Marketing | Web3 Marketing Agency | Crypto Marketing Services',
  description: 'Leading Web3 marketing agency offering 200+ crypto marketing services. KOL management, exchange listings, PR, community building. Trusted by 500+ blockchain projects.',
  keywords: 'web3 marketing agency, crypto marketing services, blockchain marketing, defi marketing, nft promotion, kol management, exchange listing services, crypto pr agency, web3 community management, token marketing',
  openGraph: {
    title: 'ChainAI Marketing - #1 Web3 Marketing Agency | 200+ Services',
    description: 'Full-service crypto marketing agency. KOL campaigns, exchange listings, PR, community management. Get results in 24 hours.',
    url: 'https://chainai.marketing',
    siteName: 'ChainAI Marketing',
    images: [{
      url: 'https://chainai.marketing/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'ChainAI Marketing - Web3 Marketing Agency'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChainAI Marketing - Leading Web3 Marketing Agency',
    description: '200+ crypto marketing services. KOL management, exchange listings, PR. Trusted by 500+ projects.',
    images: ['https://chainai.marketing/images/twitter-card.jpg'],
    creator: '@chainaimarket',
  },
  alternates: {
    canonical: 'https://chainai.marketing',
    languages: {
      'en': 'https://chainai.marketing',
      'zh': 'https://chainai.marketing/zh',
      'ko': 'https://chainai.marketing/ko',
      'ja': 'https://chainai.marketing/ja',
    }
  },
  verification: {
    google: 'google-site-verification-code',
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

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ChainAI Marketing",
    "url": "https://chainai.marketing",
    "logo": "https://chainai.marketing/images/logo.png",
    "description": "Leading Web3 marketing agency offering 200+ crypto marketing services",
    "sameAs": [
      "https://twitter.com/chainaimarket",
      "https://t.me/chainaimarketing",
      "https://linkedin.com/company/chainai-marketing"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Global"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-888-CHAINAI",
      "contactType": "sales",
      "availableLanguage": ["English", "Chinese", "Korean", "Japanese", "Spanish"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "523"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web3 Marketing Services",
    "provider": {
      "@type": "Organization",
      "name": "ChainAI Marketing"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Crypto Marketing Services",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "KOL Management",
          "description": "Influencer marketing campaigns with top crypto KOLs"
        },
        {
          "@type": "Service",
          "name": "Exchange Listings",
          "description": "Fast-track listings on major cryptocurrency exchanges"
        },
        {
          "@type": "Service",
          "name": "Community Management",
          "description": "24/7 community moderation and engagement"
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="hero-video">
        <video muted autoPlay loop playsInline>
          <source src="/videos/BlackHole.mp4" type="video/mp4" />
        </video>
        <div className="orther-overlay"></div>
      </div>
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <HowToUseSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
    </>
  )
}