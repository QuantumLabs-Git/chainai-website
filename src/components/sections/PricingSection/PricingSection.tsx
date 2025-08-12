'use client'

import { useState } from 'react'
import Link from 'next/link'
import HackerText from '@/components/HackerText/HackerText'
import Odometer from '@/components/Odometer/Odometer'
import styles from './PricingSection.module.scss'
import clsx from 'clsx'

const PricingSection = () => {
  const [activePlan, setActivePlan] = useState('growth')
  
  const pricingPlans = [
    {
      id: 'launch',
      name: 'Launch Package',
      price: '15,000',
      description: 'Perfect for new projects ready to make their mark',
      features: [
        '3 YouTube Influencer Videos',
        'CoinMarketCap & CoinGecko Listing',
        '7 Days Community Management',
        '5 Chinese KOL Influencers',
        'PR Distribution (10 Outlets)',
        'AI Strategy Consultation',
        'Basic Analytics Dashboard'
      ],
      highlighted: false,
      cta: 'Start Launch'
    },
    {
      id: 'growth',
      name: 'Growth Package',
      price: '35,000',
      description: 'Comprehensive marketing for established projects',
      features: [
        'Tier 1 YouTube Campaign',
        '30 Days Community Management',
        'Full Chinese Market Entry',
        'CMC, CG, Dextools Trending',
        'Comprehensive PR Campaign',
        'AI-Powered Optimization',
        'Advanced Analytics Suite',
        'Dedicated Account Manager'
      ],
      highlighted: true,
      cta: 'Accelerate Growth',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for ambitious projects',
      features: [
        'Custom AI Strategy Development',
        'Full Influencer Network Access',
        'Global Market Penetration',
        '24/7 Dedicated Support',
        'White-Glove Service',
        'Performance Guarantees',
        'Blockchain Verified Results',
        'Unlimited Optimization'
      ],
      highlighted: false,
      cta: 'Contact Sales'
    }
  ]

  return (
    <section className={styles.pricingSection} id="pricing">
      {/* Head Section */}
      <div className="sect-header">
        <div className="container">
          <div className="s-meta text-caption font-2">
            <p className="s-number_order wg-counter">
              [ <span className="text-white">0<Odometer value={5} /></span> / 09 ]
            </p>
            <p className="s-label">[ <span className="text-white"><HackerText text="PRICING" /></span> ]</p>
          </div>
        </div>
      </div>
      <span className="br-line"></span>

      {/* Main Content */}
      <div className="sect-main">
        <div className="container">
          <div className="sect-title text-center wow fadeInUp">
            <h2 className="s-title font-3">
              Transparent Pricing, Exceptional Value
            </h2>
            <p className="s-sub_title">
              Choose the perfect package for your project's growth stage
            </p>
          </div>

          <div className={styles.pricingGrid}>
            <div className="row justify-content-center">
              {pricingPlans.map((plan, index) => (
                <div key={plan.id} className="col-lg-4 col-md-6">
                  <div 
                    className={clsx(
                      styles.pricingCard,
                      { 
                        [styles.highlighted]: plan.highlighted,
                        [styles.active]: activePlan === plan.id
                      },
                      'wow fadeInUp'
                    )}
                    data-wow-delay={`${index * 0.1}s`}
                    onMouseEnter={() => setActivePlan(plan.id)}
                  >
                    {plan.popular && (
                      <div className={styles.popularBadge}>Most Popular</div>
                    )}
                    <div className={styles.pricingHeader}>
                      <h3 className={styles.planName}>{plan.name}</h3>
                      <div className={styles.priceWrapper}>
                        <span className={styles.currency}>$</span>
                        <span className={styles.price}>{plan.price}</span>
                      </div>
                      <p className={styles.planDescription}>{plan.description}</p>
                    </div>
                    <div className={styles.pricingFeatures}>
                      <ul>
                        {plan.features.map((feature, idx) => (
                          <li key={idx}>
                            <i className="icon icon-check"></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.pricingFooter}>
                      <Link 
                        href="/ai-strategist" 
                        className={clsx(
                          'tf-btn animate-btn',
                          plan.highlighted ? 'style-2' : 'style-transparent'
                        )}
                      >
                        {plan.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Solutions CTA */}
          <div className={styles.customCta}>
            <div className="text-center wow fadeInUp">
              <h3>Need a Custom Solution?</h3>
              <p>Our AI will create a personalized package tailored to your specific needs and budget</p>
              <Link href="/ai-strategist" className="tf-btn style-2 animate-btn">
                Get Custom Strategy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <span className="br-line"></span>
    </section>
  )
}

export default PricingSection