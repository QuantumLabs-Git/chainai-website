'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './HeroSection.module.scss'
import HackerText from '@/components/HackerText/HackerText'
import InfiniteSlide from '@/components/InfiniteSlide/InfiniteSlide'
import Odometer from '@/components/Odometer/Odometer'
import OrderBookAnimation from '@/components/OrderBookAnimation/OrderBookAnimation'
import clsx from 'clsx'

const HeroSection = () => {
  const [currentAI, setCurrentAI] = useState(0)
  const aiModels = [
    { name: 'ChatGPT', icon: 'icon-gpt' },
    { name: 'Gemini', icon: 'icon-gemini' },
    { name: 'Claude', icon: 'icon-cloud' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAI((prev) => (prev + 1) % aiModels.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [aiModels.length])

  return (
    <section className={styles.sectionHero}>
      {/* Order Book Animation */}
      <OrderBookAnimation />
      
      {/* Head Section */}
      <div className="sect-header" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container">
          <div className="s-meta text-caption font-2">
            <p className="s-number_order wg-counter">
              [ <span className="text-white">0<Odometer value={1} /></span> / 09 ]
            </p>
            <p className="s-label">[ <span className="text-white"><HackerText text="AI MARKETING" /></span> ]</p>
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
                <HackerText text="AI-POWERED WEB3 MARKETING REVOLUTION" instant />
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
      <div className="sect-main">
        <div className="container">
          <div className="sect-title wow fadeInUp">
            <h1 className="s-title font-3">
              Revolutionize Your Web3 Marketing.
              <div className={styles.textChangeWrap}>
                {aiModels.map((ai, index) => (
                  <div 
                    key={ai.name}
                    className={clsx(styles.textChangeRotating, {
                      [styles.active]: currentAI === index
                    })}
                  >
                    Powered by <span className={`icon ${ai.icon}`}></span> {ai.name}.
                  </div>
                ))}
              </div>
            </h1>
            <p className="s-sub_title">
              200+ marketing services, AI-driven strategies, and blockchain-verified results — <br className="d-none d-sm-block" />
              Your complete Web3 marketing ecosystem in one platform.
            </p>
          </div>
        </div>
        <span className="br-line"></span>
        
        <div className="container">
          <div className={clsx(styles.sectContent, 'position-relative')}>
            <div className={styles.boxAskWrap}>
              <div className={styles.boxAsk}>
                <form className={clsx(styles.formAsk, 'wow fadeInUp')}>
                  <div className="form-content">
                    <input 
                      className="style-2" 
                      type="text" 
                      placeholder="Describe your Web3 project..."
                    />

                    <fieldset className={styles.fieldBottom}>
                      <div className={styles.fieldLeft}>
                        <a href="#" className={clsx(styles.btnIp, styles.typeCircle, styles.ipAdd)}>
                          <i className="icon icon-plus"></i>
                        </a>
                        <a href="#" className={clsx(styles.btnIp, styles.ipModern, 'text-body-3')}>
                          <i className="icon icon-arrow-circle"></i>
                          ChainAI Bot
                          <i className="icon-arrow-caret-down fs-8"></i>
                        </a>
                      </div>
                      <div className={styles.fieldRight}>
                        <a href="#" className={clsx(styles.btnIp, styles.typeTransparent, styles.ipVoice)}>
                          <i className="icon icon-micro"></i>
                        </a>
                        <button type="submit" className={clsx(styles.btnSubmit, styles.btnIp, styles.typeCircle)}>
                          <i className="icon icon-arrow-top"></i>
                        </button>
                      </div>
                    </fieldset>
                  </div>
                </form>
              </div>
              <span className="hafl-plus pst-left_bot item_bot wow bounceInScale"></span>
              <span className="hafl-plus pst-right_bot item_bot wow bounceInScale"></span>
              <span className="hafl-plus pst-left_top item_top wow bounceInScale"></span>
              <span className="hafl-plus pst-right_top item_top wow bounceInScale"></span>
            </div>
            <span className={styles.lineSection}></span>
          </div>
        </div>
      </div>
      <span className="br-line"></span>

      {/* Brand Section */}
      <div className={styles.tfBrand}>
        <div className="container">
          <div className={styles.tfBrandInner}>
            <h5 className="title text-caption font-2 letter-space-0 fw-normal wg-counter wow fadeInUp">
              TRUSTED BY <Odometer value={500} />+ WEB3 PROJECTS WORLDWIDE
            </h5>
            <InfiniteSlide speed={30} className={styles.brandSlider}>
              {[
                'Uniswap',
                'Aave',
                'Chainlink',
                'Polygon',
                'Arbitrum',
                'Optimism',
                'Avalanche',
                'Solana',
                'Fantom',
                'BNB Chain',
                'Ethereum',
                'Polkadot',
                'Cosmos',
                'Near',
                'Algorand'
              ].map((brand, index) => (
                <div key={index} className={styles.imageBrand}>
                  <div className={styles.brandLogo}>
                    {brand}
                  </div>
                </div>
              ))}
            </InfiniteSlide>
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

export default HeroSection