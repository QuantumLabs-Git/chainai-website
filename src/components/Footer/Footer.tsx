'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.scss'
import { useEffect, useRef } from 'react'

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return
      
      const scrolled = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Update odometer when footer comes into view
      if (scrolled + windowHeight >= documentHeight - 300) {
        const odometer = footerRef.current.querySelector('.odometer')
        if (odometer && !odometer.classList.contains('counted')) {
          odometer.classList.add('counted')
          odometer.textContent = '9'
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer ref={footerRef} className="tf-footer">
      <div className="sect-header">
        <div className="container">
          <div className="s-meta text-caption font-2">
            <p className="s-number_order wg-counter">
              [ <span className="text-white">0<span className="odometer" data-number="9">0</span></span> / 09 ]
            </p>
            <p className="s-label">[ <span className="text-white hacker-text_transform">CONNECT</span> ]</p>
          </div>
        </div>
      </div>
      <span className="br-line"></span>

      <div className={styles.footerBody}>
        <div className="container">
          <div className={styles.footerInnerWrap}>
            <div className={styles.ftBgItem}>
              <svg width="373" height="386" viewBox="0 0 373 386" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M-20.3652 -169.377C51.9466 -197.973 130.337 -194.64 201.386 -163.785C231.304 -150.528 258.727 -133.254 282.736 -110.949C325.964 -70.7761 355.318 -17.9054 366.564 40.0342C370.265 59.0818 371.768 77.9351 372.479 97.3115C324.873 97.9552 277.174 97.3313 229.544 97.3271C228.079 63.7031 218.981 32.1199 196.393 6.23145C170.252 -23.7257 132.349 -44.3264 92.4482 -46.8164L92.4463 -46.8174L90.7129 -46.9082C54.3262 -48.5912 18.7081 -35.9096 -8.44531 -11.5557C-37.0303 14.0029 -54.4167 49.7508 -56.9043 87.9697L-57.0107 89.791C-58.2989 113.813 -54.005 142.076 -42.9033 163.783C-37.1848 174.963 -28.8153 185.968 -20.3926 195.226C8.465 226.937 42.7258 240.173 84.667 242.23C85.1421 289.797 84.7639 337.418 84.6768 384.998C46.9504 384.917 10.0955 377.981 -24.6406 363.084L-24.6416 363.083L-26.3154 362.364C-97.0673 331.734 -152.954 274.473 -181.853 202.93C-209.496 132.075 -207.915 53.1455 -177.453 -16.5449L-177.451 -16.5488C-147.535 -86.389 -90.9913 -141.4 -20.3652 -169.377Z"
                  stroke="white" strokeOpacity="0.1" />
                <path
                  d="M228.492 98.3174L228.516 241.184L85.663 241.254L85.706 144.073C85.7042 128.812 85.4327 113.528 85.746 98.29L228.492 98.3174Z"
                  stroke="white" strokeOpacity="0.1" />
                <path
                  d="M372.401 242.25L372.441 384.994L229.428 384.997C230.355 369.412 229.587 353.391 229.583 337.813L229.664 242.22L372.401 242.25Z"
                  stroke="white" strokeOpacity="0.1" />
              </svg>
            </div>
            <div className={`${styles.footerInnerLink} tf-grid-layout tf-col-2 lg-col-4`}>
              <Link href="/" className={`${styles.footerLogo} logo-site`}>
                <Image
                  src="/images/logo/chainai-logo.png"
                  alt="ChainAI Marketing"
                  width={180}
                  height={180}
                />
                <span style={{ fontSize: '24px', fontWeight: 'bold' }}>ChainAI</span>
              </Link>
              <div className={`${styles.footerColBlock} wow fadeInLeft mx-auto m-sm-0`}>
                <h5 className={`${styles.footerHeading} ${styles.footerHeadingMobile} font-2`}>Services</h5>
                <div className="tf-collapse-content">
                  <ul className={styles.footerMenuList}>
                    <li><Link href="/services/influencer-marketing" className="link text-main-2">Influencer Marketing</Link></li>
                    <li><Link href="/services/chinese-marketing" className="link text-main-2">Chinese Marketing</Link></li>
                    <li><Link href="/services/community-management" className="link text-main-2">Community Management</Link></li>
                    <li><Link href="/services/technical-services" className="link text-main-2">Technical Services</Link></li>
                  </ul>
                </div>
              </div>
              <div className={`${styles.footerColBlock} wow fadeInLeft`}>
                <h5 className={`${styles.footerHeading} ${styles.footerHeadingMobile} font-2`}>Legals</h5>
                <div className="tf-collapse-content">
                  <ul className={styles.footerMenuList}>
                    <li><Link href="/privacy" className="link text-main-2">Privacy Policy</Link></li>
                    <li><Link href="/terms" className="link text-main-2">Terms & Conditions</Link></li>
                  </ul>
                </div>
              </div>
              <div className={`${styles.footerColBlock} wow fadeInLeft mx-auto m-sm-0`}>
                <h5 className={`${styles.footerHeading} ${styles.footerHeadingMobile} font-2`}>Connect</h5>
                <div className="tf-collapse-content">
                  <ul className={styles.footerMenuList}>
                    <li><a href="https://t.me/chainaibot" target="_blank" rel="noopener noreferrer" className="link text-main-2">Telegram Bot</a></li>
                    <li><a href="https://twitter.com/chainaimarketing" target="_blank" rel="noopener noreferrer" className="link text-main-2">Twitter (X)</a></li>
                    <li><a href="mailto:hello@chainai.marketing" className="link text-main-2">Email Us</a></li>
                    <li><Link href="/contact" className="link text-main-2">Contact Form</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <span className="br-line has-dot"></span>
            <div className={styles.footerInnerBottom}>
              <p className="text-caption font-2">
                © 2025 ChainAI Marketing. ALL RIGHTS RESERVED.
              </p>
              <a href="#" onClick={scrollToTop} className="text-caption font-2 link">
                BACK TO TOP
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer