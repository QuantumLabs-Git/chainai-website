'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.scss'
import clsx from 'clsx'
import MobileMenu from '../MobileMenu/MobileMenu'

const Header = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 50)
      
      // Update active link based on scroll position
      const sections = ['features', 'services', 'ai-strategist', 'pricing', 'blog', 'about']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <header id="header" className={clsx(styles.header, 'tf-header', { [styles.sticky]: isSticky })}>
        <div className="container">
          <div className={styles.headerInner}>
            <div className={styles.headerLeft}>
              <Link href="/" className={styles.logo}>
                <Image
                  src="/images/logo/chainai-logo.png"
                  alt="ChainAI Marketing"
                  width={150}
                  height={150}
                  priority
                />
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>ChainAI</span>
              </Link>
            </div>
            
            <nav className={clsx(styles.navigation, 'd-none d-lg-block')}>
              <ul className={styles.mainMenu}>
                <li className={styles.menuItem}>
                  <a 
                    href="#features" 
                    onClick={(e) => scrollToSection(e, '#features')}
                    className={clsx('tf-btn style-transparent text-body-3 animate-btn', {
                      [styles.active]: activeLink === 'features'
                    })}
                  >
                    Features
                  </a>
                </li>
                <li className={styles.menuItem}>
                  <Link 
                    href="/services" 
                    className={clsx('tf-btn style-transparent text-body-3 animate-btn', {
                      [styles.active]: activeLink === 'services'
                    })}
                  >
                    Services
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link 
                    href="/ai-strategist" 
                    className={clsx('tf-btn style-transparent text-body-3 animate-btn', {
                      [styles.active]: activeLink === 'ai-strategist'
                    })}
                  >
                    AI Strategist
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <a 
                    href="#pricing" 
                    onClick={(e) => scrollToSection(e, '#pricing')}
                    className={clsx('tf-btn style-transparent text-body-3 animate-btn', {
                      [styles.active]: activeLink === 'pricing'
                    })}
                  >
                    Pricing
                  </a>
                </li>
                <li className={styles.menuItem}>
                  <Link 
                    href="/blog" 
                    className={clsx('tf-btn style-transparent text-body-3 animate-btn', {
                      [styles.active]: activeLink === 'blog'
                    })}
                  >
                    Blog
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link 
                    href="/about" 
                    className={clsx('tf-btn style-transparent text-body-3 animate-btn', {
                      [styles.active]: activeLink === 'about'
                    })}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>
            
            <div className={styles.headerRight}>
              <div className={styles.btnGroup}>
                <Link href="https://t.me/chainaibot" target="_blank" rel="noopener noreferrer" className="tf-btn text-body-3 animate-btn d-none d-sm-flex">
                  Telegram Bot
                </Link>
                <Link href="/ai-strategist" className="tf-btn text-body-3 style-2 animate-btn animate-dark">
                  Get Strategy
                </Link>
                <button 
                  className={clsx(styles.mobileMenuBtn, 'd-lg-none')}
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open menu"
                >
                  <i className="icon icon-menu"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <span className="br-line"></span>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}

export default Header