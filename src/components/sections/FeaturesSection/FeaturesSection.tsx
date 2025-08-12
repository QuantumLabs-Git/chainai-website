'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './FeaturesSection.module.scss'
import HackerText from '@/components/HackerText/HackerText'
import Odometer from '@/components/Odometer/Odometer'
import AINetworkAnimation from '@/components/AINetworkAnimation/AINetworkAnimation'
import clsx from 'clsx'

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState('influencerMarketing')
  
  const features = [
    {
      id: 'influencerMarketing',
      title: 'Influencer Marketing',
      description: 'Access 65+ YouTube channels, 100+ Twitter KOLs, and TikTok creators. Get dedicated videos, integrations, and interviews with top crypto influencers.',
      image: '/images/section/image-creator.webp'
    },
    {
      id: 'chineseMarketing',
      title: 'Chinese Marketing',
      description: 'Complete Chinese market entry with 40+ KOLs, WeChat services, Ave.ai trending, and professional translation services.',
      image: '/images/section/image-enhance.webp'
    },
    {
      id: 'aiStrategist',
      title: 'AI Marketing Strategist',
      description: 'Get instant, personalized marketing strategies powered by AI. Our bot analyzes your project and recommends the perfect service mix.',
      image: '/images/section/ai-core.svg'
    },
    {
      id: 'communityManagement',
      title: 'Community Management',
      description: '24/7 professional moderation, growth strategies, and engagement programs across Telegram, Discord, and other platforms.',
      image: '/images/section/text-creator.webp'
    },
    {
      id: 'technicalServices',
      title: 'Technical Services',
      description: 'DEX trending, CMC/CoinGecko listings, volume generation, and blockchain-verified campaign results.',
      image: '/images/section/code-composer.webp'
    },
    {
      id: 'prAndMedia',
      title: 'PR & Media',
      description: 'Press release distribution across 40+ crypto publications, sponsored articles, and media coverage in 10+ languages.',
      image: '/images/section/website-builder.webp'
    }
  ]

  const activeFeature = features.find(f => f.id === activeTab)

  return (
    <section className={styles.sectionFeature} id="features">
      {/* Head Section */}
      <div className="sect-header">
        <div className="container">
          <div className="s-meta text-caption font-2">
            <p className="s-number_order wg-counter">
              [ <span className="text-white">0<Odometer value={2} /></span> / 09 ]
            </p>
            <p className="s-label">[ <span className="text-white"><HackerText text="FEATURES" /></span> ]</p>
          </div>
        </div>
      </div>
      <span className="br-line"></span>

      {/* Tagline Section */}
      <div className="sect-tagline">
        <div className="container">
          <div className="sect-tagline_inner">
            <span className="hafl-plus pst-left_bot wow bounceInScale"></span>
            <span className="hafl-plus pst-right_bot wow bounceInScale"></span>
            <p className="s-name text-caption font-2">
              <span className="bar-group type-left">
                <span className="bar_center"></span>
              </span>
              <span className="no-delay">
                <HackerText text="200+ SERVICES. AI-POWERED. BLOCKCHAIN-VERIFIED." instant />
              </span>
              <span className="bar-group type-right">
                <span className="bar_center"></span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <span className="br-line"></span>

      {/* Main Section */}
      <div className={clsx('sect-main', styles.flatAnimateTab)}>
        <div className={clsx(styles.sImgItem, 'wow bounceInScale')}>
          <img 
            className="lazyload" 
            src="/images/section/smoke-blue.webp" 
            alt="Item"
          />
        </div>
        <div className="container">
          <div className="sect-title wow fadeInUp">
            <h2 className="s-title font-3">
              Our Comprehensive Service Ecosystem
            </h2>
            <p className="s-sub_title">
              From influencer marketing to technical services, ChainAI offers everything <br className="d-none d-lg-block" />
              your Web3 project needs to succeed — all powered by AI and verified on blockchain.
            </p>
          </div>
          
          <div className={styles.tabContent}>
            <div className={clsx(styles.animationWrapper, 'wow fadeInUp')}>
              <AINetworkAnimation />
              {activeFeature && (
                <div className={styles.featureInfo}>
                  <h4 className="s-title">{activeFeature.title}</h4>
                  <p className="s-sub_title text-body-3">
                    {activeFeature.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <span className="br-line"></span>
        
        <div className="container">
          <div className="position-relative">
            <ul className={clsx(styles.tabCanDo, 'position-relative mx-1')} role="tablist">
              {features.map((feature) => (
                <li key={feature.id} className={styles.navTabItem} role="presentation">
                  <button
                    onClick={() => setActiveTab(feature.id)}
                    className={clsx(
                      'tf-btn style-transparent text-body-3 animate-btn',
                      styles.btnTab,
                      { [styles.active]: activeTab === feature.id }
                    )}
                    aria-selected={activeTab === feature.id}
                    role="tab"
                  >
                    {feature.title}
                  </button>
                </li>
              ))}
            </ul>
            <span className="hafl-plus pst-left_bot item_bot wow bounceInScale"></span>
            <span className="hafl-plus pst-right_bot item_bot wow bounceInScale"></span>
          </div>
        </div>
      </div>
      <span className="br-line"></span>

      {/* Bottom Section */}
      <div className="sect-bottom">
        <div className="container">
          <div className="box-hacker has-overlay_linear mx-1">
            <p className="hacker-text text-caption font-2 text-uppercase hackerText">
              qW8bL2nRM4ZpYk5gJfXvCt1uHdEo93NTaVxBYmOe7rPQnKDlcUs0AjzhFiGSwLXtRpUo6NMJvqa7bT2EfyCdx9KWZhgL1nF
            </p>
          </div>
        </div>
      </div>
      <span className="br-line"></span>
    </section>
  )
}

export default FeaturesSection