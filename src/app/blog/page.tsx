import { Metadata } from 'next'
import Link from 'next/link'
import HackerText from '@/components/HackerText/HackerText'
import Odometer from '@/components/Odometer/Odometer'
import styles from './blog.module.scss'

export const metadata: Metadata = {
  title: 'Blog | Web3 Marketing Insights | ChainAI Marketing',
  description: 'Latest insights, strategies, and trends in Web3 marketing. Learn from our experts about crypto influencer marketing, AI-powered strategies, and blockchain promotion.',
  keywords: 'crypto marketing blog, web3 marketing insights, blockchain marketing strategies, defi marketing tips, nft promotion guide',
  openGraph: {
    title: 'ChainAI Marketing Blog - Web3 Marketing Insights',
    description: 'Latest insights and strategies in Web3 marketing from industry experts.',
    url: 'https://chainai.marketing/blog',
  },
}

// Mock blog posts data - in production, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    slug: 'complete-guide-crypto-influencer-marketing',
    title: 'Complete Guide to Crypto Influencer Marketing',
    excerpt: 'Learn how to leverage 65+ YouTube channels and 100+ Twitter KOLs to maximize your Web3 project\'s reach and engagement.',
    category: 'Influencer Marketing',
    author: 'ChainAI Team',
    date: '2025-07-28',
    readTime: '8 min read',
    image: '/images/section/image-creator.webp',
    featured: true,
  },
  {
    id: 2,
    slug: 'chinese-crypto-marketing-breaking-into-asian-markets',
    title: 'Chinese Crypto Marketing: Breaking into Asian Markets',
    excerpt: 'Discover the secrets to successfully entering the Chinese crypto market with our comprehensive guide covering KOLs, WeChat, and Ave.ai.',
    category: 'Regional Marketing',
    author: 'ChainAI Team',
    date: '2025-07-25',
    readTime: '10 min read',
    image: '/images/section/image-enhance.webp',
    featured: true,
  },
  {
    id: 3,
    slug: 'ai-tools-revolutionizing-web3-marketing',
    title: 'AI Tools Revolutionizing Web3 Marketing',
    excerpt: 'Explore how artificial intelligence is transforming crypto marketing strategies and delivering unprecedented results.',
    category: 'AI & Technology',
    author: 'ChainAI Team',
    date: '2025-07-22',
    readTime: '6 min read',
    image: '/images/section/ai-core.svg',
    featured: false,
  },
  {
    id: 4,
    slug: 'how-to-get-listed-on-coinmarketcap',
    title: 'How to Get Listed on CoinMarketCap: Step-by-Step',
    excerpt: 'A detailed guide on getting your token listed on CoinMarketCap, including requirements, process, and optimization tips.',
    category: 'Technical Guides',
    author: 'ChainAI Team',
    date: '2025-07-20',
    readTime: '12 min read',
    image: '/images/section/code-composer.webp',
    featured: false,
  },
  {
    id: 5,
    slug: 'web3-marketing-trends-2025',
    title: 'Web3 Marketing Trends 2025',
    excerpt: 'Stay ahead of the curve with our analysis of emerging trends in cryptocurrency and blockchain marketing.',
    category: 'Industry Analysis',
    author: 'ChainAI Team',
    date: '2025-07-18',
    readTime: '7 min read',
    image: '/images/section/website-builder.webp',
    featured: false,
  },
  {
    id: 6,
    slug: 'telegram-marketing-for-crypto-projects',
    title: 'Telegram Marketing for Crypto Projects',
    excerpt: 'Master Telegram marketing with strategies for community building, engagement, and converting members into investors.',
    category: 'Platform Guides',
    author: 'ChainAI Team',
    date: '2025-07-15',
    readTime: '9 min read',
    image: '/images/section/text-creator.webp',
    featured: false,
  },
]

const categories = [
  'All Posts',
  'Influencer Marketing',
  'Regional Marketing',
  'AI & Technology',
  'Technical Guides',
  'Industry Analysis',
  'Platform Guides',
]

export default function BlogPage() {
  return (
    <main className="tf-section-blog">
      {/* Head Section */}
      <div className="sect-header">
        <div className="container">
          <div className="s-meta text-caption font-2">
            <p className="s-number_order wg-counter">
              [ <span className="text-white">0<Odometer value={6} /></span> / 09 ]
            </p>
            <p className="s-label">[ <span className="text-white"><HackerText text="INSIGHTS" /></span> ]</p>
          </div>
        </div>
      </div>
      <span className="br-line"></span>

      {/* Hero Section */}
      <section className={styles.blogHero}>
        <div className="container">
          <div className="text-center">
            <h1 className="s-title font-3 wow fadeInUp">
              Web3 Marketing Insights
            </h1>
            <p className="s-sub_title wow fadeInUp" data-wow-delay="0.1s">
              Latest strategies, trends, and case studies from the frontlines of crypto marketing
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className={styles.featuredSection}>
        <div className="container">
          <h2 className="section-title wow fadeInUp">Featured Articles</h2>
          <div className="row">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <div key={post.id} className="col-lg-6">
                <article className={`${styles.featuredPost} wow fadeInUp`} data-wow-delay={`${index * 0.1}s`}>
                  <Link href={`/blog/${post.slug}`} className={styles.postLink}>
                    <div className={styles.postImage}>
                      <img src={post.image} alt={post.title} />
                      <div className={styles.postCategory}>{post.category}</div>
                    </div>
                    <div className={styles.postContent}>
                      <div className={styles.postMeta}>
                        <span className={styles.postDate}>{post.date}</span>
                        <span className={styles.postReadTime}>{post.readTime}</span>
                      </div>
                      <h3 className={styles.postTitle}>{post.title}</h3>
                      <p className={styles.postExcerpt}>{post.excerpt}</p>
                      <div className={styles.readMore}>
                        Read Article <i className="icon icon-arrow-right"></i>
                      </div>
                    </div>
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
      <span className="br-line"></span>

      {/* Blog Categories */}
      <section className={styles.categoriesSection}>
        <div className="container">
          <div className={styles.categoriesWrapper}>
            <ul className={styles.categoriesList}>
              {categories.map((category, index) => (
                <li key={index} className={styles.categoryItem}>
                  <button 
                    className={`${styles.categoryBtn} ${index === 0 ? styles.active : ''}`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className={styles.postsGrid}>
        <div className="container">
          <div className="row">
            {blogPosts.map((post, index) => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <article className={`${styles.postCard} wow fadeInUp`} data-wow-delay={`${index * 0.1}s`}>
                  <Link href={`/blog/${post.slug}`} className={styles.postLink}>
                    <div className={styles.postImage}>
                      <img src={post.image} alt={post.title} />
                      <div className={styles.postCategory}>{post.category}</div>
                    </div>
                    <div className={styles.postContent}>
                      <div className={styles.postMeta}>
                        <span className={styles.postDate}>{post.date}</span>
                        <span className={styles.postReadTime}>{post.readTime}</span>
                      </div>
                      <h3 className={styles.postTitle}>{post.title}</h3>
                      <p className={styles.postExcerpt}>{post.excerpt}</p>
                      <div className={styles.postAuthor}>
                        <span>By {post.author}</span>
                      </div>
                    </div>
                  </Link>
                </article>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className={styles.loadMore}>
            <button className="tf-btn style-transparent animate-btn">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
      <span className="br-line"></span>

      {/* Newsletter CTA */}
      <section className={styles.newsletterSection}>
        <div className="container">
          <div className={styles.newsletterWrapper}>
            <div className="text-center">
              <h2 className="s-title font-3 wow fadeInUp">
                Stay Updated with Web3 Marketing Insights
              </h2>
              <p className="s-sub_title wow fadeInUp" data-wow-delay="0.1s">
                Get the latest marketing strategies and industry news delivered to your inbox
              </p>
              <form className={`${styles.newsletterForm} wow fadeInUp`} data-wow-delay="0.2s">
                <div className={styles.formGroup}>
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className={styles.emailInput}
                    required
                  />
                  <button type="submit" className="tf-btn style-2 animate-btn">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <span className="br-line"></span>
    </main>
  )
}