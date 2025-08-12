'use client'

import { useEffect } from 'react'
import useWOW from '@/hooks/useWOW'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import GoTop from '@/components/GoTop/GoTop'
import OrderBookAnimation from '@/components/OrderBookAnimation/OrderBookAnimation'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useWOW()

  useEffect(() => {
    // Initialize GSAP if needed
    const initGSAP = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      
      gsap.registerPlugin(ScrollTrigger)
      
      // Add any global GSAP animations here
    }

    initGSAP()
  }, [])

  return (
    <>
      <Header />
      <OrderBookAnimation variant="mobile-background" />
      {children}
      <Footer />
      <GoTop />
    </>
  )
}