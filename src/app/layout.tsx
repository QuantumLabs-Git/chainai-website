import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.scss'
import '@/styles/fonts.css'
import ClientLayout from './client-layout'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChainAI Marketing - AI-Powered Web3 & Crypto Marketing Agency',
  description: 'Leading Web3 marketing agency offering AI-powered crypto promotion, influencer marketing, Chinese market entry, and 200+ services. Get your custom strategy today.',
  keywords: 'crypto marketing agency, blockchain marketing services, web3 marketing agency, cryptocurrency promotion services, token marketing agency, crypto influencer marketing, defi marketing services, nft marketing agency, ai powered crypto marketing',
  authors: [{ name: 'ChainAI Marketing' }],
  creator: 'ChainAI Marketing',
  publisher: 'ChainAI Marketing',
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
  icons: {
    icon: '/images/logo/chainai-logo.png',
    apple: '/images/logo/chainai-logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chainai.marketing',
    siteName: 'ChainAI Marketing',
    title: 'ChainAI Marketing - AI-Powered Web3 & Crypto Marketing Agency',
    description: 'Leading Web3 marketing agency offering AI-powered crypto promotion, influencer marketing, Chinese market entry, and 200+ services.',
    images: [
      {
        url: 'https://chainai.marketing/images/logo/chainai-logo.png',
        width: 1200,
        height: 630,
        alt: 'ChainAI Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChainAI Marketing - AI-Powered Web3 & Crypto Marketing Agency',
    description: 'Leading Web3 marketing agency offering AI-powered crypto promotion and 200+ marketing services.',
    site: '@ChainAIMarketing',
    creator: '@ChainAIMarketing',
    images: ['https://chainai.marketing/images/logo/chainai-logo.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  alternates: {
    canonical: 'https://chainai.marketing',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MarketingAgency',
    name: 'ChainAI Marketing',
    description: 'AI-powered Web3 and cryptocurrency marketing agency',
    url: 'https://chainai.marketing',
    logo: 'https://chainai.marketing/images/logo/chainai-logo.png',
    sameAs: [
      'https://twitter.com/chainaimarketing',
      'https://t.me/chainaibot',
      'https://linkedin.com/company/chainai-marketing'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Global'
    },
    service: {
      '@type': 'Service',
      serviceType: 'Cryptocurrency Marketing',
      provider: {
        '@type': 'Organization',
        name: 'ChainAI Marketing'
      }
    },
    knowsAbout: [
      'Cryptocurrency Marketing',
      'Blockchain Marketing',
      'Web3 Marketing',
      'DeFi Marketing',
      'NFT Marketing',
      'Crypto Influencer Marketing',
      'Chinese Crypto Marketing',
      'AI Marketing Automation'
    ]
  }

  return (
    <html lang="en-US">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} counter-scroll`}>
        <ClientLayout>
          <div id="wrapper">
            <span className="line_page"></span>
            <div className="overlay_body"></div>
            <div className="texture_page">
              <div className="bg-texture"></div>
              <div className="temp"></div>
              <div className="bg-texture"></div>
            </div>
            {children}
          </div>
        </ClientLayout>
      </body>
    </html>
  )
}