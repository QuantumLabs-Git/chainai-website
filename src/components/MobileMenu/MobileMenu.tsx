'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './MobileMenu.module.scss'
import clsx from 'clsx'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    onClose()
    
    setTimeout(() => {
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
    }, 300)
  }

  return (
    <>
      <div className={clsx(styles.overlay, { [styles.open]: isOpen })} />
      <div ref={menuRef} className={clsx(styles.mobileMenu, { [styles.open]: isOpen })}>
        <div className={styles.canvasHeader}>
          <div className={styles.logoSite}>
            <Image
              src="/images/logo/logo.svg"
              alt="QORE"
              width={100}
              height={33}
            />
          </div>
          <div className={styles.btnGroup}>
            <Link href="/get-started" className="tf-btn style-2">
              Get started
            </Link>
            <button 
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close menu"
            >
              <i className="icon-close"></i>
            </button>
          </div>
        </div>
        <span className="br-line"></span>
        
        <div className={styles.canvasBody}>
          <ul className={styles.navUlMb}>
            <li className={styles.navMbItem}>
              <a 
                href="#features" 
                onClick={(e) => handleLinkClick(e, '#features')}
                className={styles.mbItemLink}
              >
                Features
              </a>
            </li>
            <li className={styles.navMbItem}>
              <a 
                href="#howToUse" 
                onClick={(e) => handleLinkClick(e, '#howToUse')}
                className={styles.mbItemLink}
              >
                How to use
              </a>
            </li>
            <li className={styles.navMbItem}>
              <a 
                href="#pricing" 
                onClick={(e) => handleLinkClick(e, '#pricing')}
                className={styles.mbItemLink}
              >
                Pricing
              </a>
            </li>
            <li className={styles.navMbItem}>
              <a 
                href="#FAQs" 
                onClick={(e) => handleLinkClick(e, '#FAQs')}
                className={styles.mbItemLink}
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>
        
        <div className={styles.canvasFooter}>
          <Link href="/login" className="tf-btn w-100 animate-btn style-high">
            Login
          </Link>
        </div>
      </div>
    </>
  )
}

export default MobileMenu