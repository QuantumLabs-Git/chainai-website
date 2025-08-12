import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chainai.marketing'
  
  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-strategist`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]
  
  // Service detail pages
  const servicePages = [
    'kol-marketing',
    'exchange-listing',
    'chinese-marketing',
    'community-management',
    'crypto-pr',
    'token-listing',
    'defi-marketing',
    'nft-promotion',
    'telegram-marketing',
    'twitter-marketing',
    'youtube-promotion',
    'market-making',
    'ama-campaigns',
    'airdrop-marketing',
    'crypto-seo',
    'discord-marketing',
    'reddit-promotion',
    'dextools-trending',
    'coingecko-listing',
    'coinmarketcap-listing',
  ].map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
  
  // Regional pages
  const regionalPages = [
    'singapore',
    'dubai',
    'miami',
    'london',
    'hong-kong',
    'seoul',
    'tokyo',
    'berlin',
    'zurich',
    'lisbon',
  ].map((city) => ({
    url: `${baseUrl}/crypto-marketing-${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  return [...mainPages, ...servicePages, ...regionalPages]
}