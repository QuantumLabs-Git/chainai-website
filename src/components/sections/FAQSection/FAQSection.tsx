'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './FAQSection.module.scss'

interface FAQItem {
  id: number
  question: string
  answer: string | { text: string; list?: string[] }
}

const FAQSection = () => {
  const [activeItems, setActiveItems] = useState<number[]>([1])

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What is ChainAI and how does it work?",
      answer: "ChainAI is an AI-powered Web3 marketing platform that combines advanced artificial intelligence with blockchain expertise to deliver comprehensive marketing solutions. Our platform analyzes market trends, automates campaign optimization, and provides data-driven strategies specifically tailored for crypto and blockchain projects."
    },
    {
      id: 2,
      question: "How quickly can I see results from ChainAI campaigns?",
      answer: {
        text: "Most clients see initial results within 2-4 weeks, with significant growth typically occurring within 60-90 days. Results timeline depends on:",
        list: [
          "Your project's current market position",
          "Selected service packages",
          "Market conditions and competition",
          "Campaign budget and scope"
        ]
      }
    },
    {
      id: 3,
      question: "What types of crypto projects do you work with?",
      answer: "We work with all types of Web3 projects including DeFi protocols, NFT collections, Layer 1/Layer 2 blockchains, GameFi projects, Metaverse platforms, DAOs, and crypto exchanges. Our AI adapts strategies based on your specific project type and target audience."
    },
    {
      id: 4,
      question: "How does AI improve marketing results?",
      answer: {
        text: "Our AI technology enhances marketing performance through:",
        list: [
          "Real-time campaign optimization",
          "Predictive analytics for trend identification",
          "Automated A/B testing at scale",
          "Personalized content generation",
          "Smart audience targeting and segmentation"
        ]
      }
    },
    {
      id: 5,
      question: "What makes ChainAI different from other agencies?",
      answer: "ChainAI uniquely combines AI technology with deep Web3 expertise. Unlike traditional agencies, we offer 24/7 AI-powered optimization, blockchain-native strategies, transparent on-chain reporting, and access to the largest crypto marketing network with over 500 KOLs and 200+ media outlets."
    },
    {
      id: 6,
      question: "Do you offer custom packages?",
      answer: "Yes! While we have standard packages starting from $2,500/month, we create custom solutions based on your specific needs, budget, and growth objectives. Our AI Strategist can help design the perfect package for your project during a free consultation."
    },
    {
      id: 7,
      question: "How do you measure campaign success?",
      answer: {
        text: "We track comprehensive metrics including:",
        list: [
          "Community growth and engagement rates",
          "Token price and trading volume impact",
          "Brand awareness and sentiment scores",
          "Conversion rates and ROI",
          "On-chain metrics and wallet interactions"
        ]
      }
    },
    {
      id: 8,
      question: "What is your refund policy?",
      answer: "We offer a 30-day performance guarantee on most services. If you're not satisfied with the results within the first 30 days, we'll work to make it right or provide a partial refund based on delivered services. Specific terms vary by package and are outlined in our service agreements."
    }
  ]

  const toggleFAQ = (id: number) => {
    setActiveItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const renderAnswer = (answer: string | { text: string; list?: string[] }) => {
    if (typeof answer === 'string') {
      return <p>{answer}</p>
    }
    
    return (
      <>
        <p>{answer.text}</p>
        {answer.list && (
          <ul>
            {answer.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </>
    )
  }

  const leftColumnFAQs = faqData.filter((_, index) => index % 2 === 0)
  const rightColumnFAQs = faqData.filter((_, index) => index % 2 === 1)

  return (
    <section id="FAQs" className={styles.faqSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>FAQs</span>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Get answers to common questions about ChainAI&apos;s services, pricing, and how we can help grow your Web3 project
          </p>
        </div>

        <div className={styles.faqContent}>
          <div className={styles.faqColumn}>
            {leftColumnFAQs.map((faq) => (
              <div 
                key={faq.id} 
                className={`${styles.faqItem} ${activeItems.includes(faq.id) ? styles.active : ''}`}
              >
                <div className={styles.faqQuestion} onClick={() => toggleFAQ(faq.id)}>
                  <h3>{faq.question}</h3>
                  <div className={styles.icon}></div>
                </div>
                <div className={styles.faqAnswer}>
                  {renderAnswer(faq.answer)}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.faqColumn}>
            {rightColumnFAQs.map((faq) => (
              <div 
                key={faq.id} 
                className={`${styles.faqItem} ${activeItems.includes(faq.id) ? styles.active : ''}`}
              >
                <div className={styles.faqQuestion} onClick={() => toggleFAQ(faq.id)}>
                  <h3>{faq.question}</h3>
                  <div className={styles.icon}></div>
                </div>
                <div className={styles.faqAnswer}>
                  {renderAnswer(faq.answer)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.contactCTA}>
          <p>Still have questions? Our team is here to help!</p>
          <Link href="/contact" className={styles.ctaButton}>
            <span>Contact Support</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FAQSection