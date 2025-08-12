'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './OrderBookAnimation.module.scss'

interface Order {
  id: number
  price: number
  amount: number
  total: number
  type: 'buy' | 'sell'
  timestamp: number
}

interface OrderBookAnimationProps {
  variant?: 'default' | 'mobile-background'
}

const OrderBookAnimation = ({ variant = 'default' }: OrderBookAnimationProps) => {
  const [orders, setOrders] = useState<{ buys: Order[], sells: Order[] }>({ buys: [], sells: [] })
  const [currentPrice, setCurrentPrice] = useState(0.015)
  const [isHovered, setIsHovered] = useState(false)
  const nextOrderId = useRef(0)
  const priceTargetRef = useRef(0.015)
  const intervalRef = useRef<NodeJS.Timeout>()
  const hoverStartTime = useRef<number>(0)

  // Generate initial orders
  useEffect(() => {
    const initialBuys: Order[] = []
    const initialSells: Order[] = []

    // Generate initial buy orders
    for (let i = 0; i < 15; i++) {
      const price = currentPrice - (i + 1) * 0.0001
      const amount = Math.random() * 50000 + 10000
      initialBuys.push({
        id: nextOrderId.current++,
        price,
        amount,
        total: price * amount,
        type: 'buy',
        timestamp: Date.now()
      })
    }

    // Generate initial sell orders
    for (let i = 0; i < 15; i++) {
      const price = currentPrice + (i + 1) * 0.0001
      const amount = Math.random() * 50000 + 10000
      initialSells.push({
        id: nextOrderId.current++,
        price,
        amount,
        total: price * amount,
        type: 'sell',
        timestamp: Date.now()
      })
    }

    setOrders({ buys: initialBuys, sells: initialSells })
  }, [])

  // Handle order generation
  useEffect(() => {
    const generateOrder = () => {
      setOrders(prev => {
        let newBuys = [...prev.buys]
        let newSells = [...prev.sells]

        if (isHovered) {
          // Calculate hover duration for exponential growth
          const hoverDuration = (Date.now() - hoverStartTime.current) / 1000
          const priceMultiplier = Math.pow(2.5, hoverDuration / 3) // More aggressive exponential growth
          
          // Generate multiple buy orders when hovered (4-7 per tick)
          const buyCount = Math.floor(Math.random() * 4) + 4
          for (let i = 0; i < buyCount; i++) {
            const buyPrice = currentPrice - Math.random() * (currentPrice * 0.01)
            const buyAmount = Math.random() * 500000 + 200000
            newBuys.unshift({
              id: nextOrderId.current++,
              price: buyPrice,
              amount: buyAmount * Math.min(priceMultiplier, 10),
              total: buyPrice * buyAmount * Math.min(priceMultiplier, 10),
              type: 'buy',
              timestamp: Date.now()
            })
          }

          // Remove old buy orders
          if (newBuys.length > 20) newBuys = newBuys.slice(0, 20)

          // Very rarely add a sell order (5% chance)
          if (Math.random() < 0.05) {
            const sellPrice = currentPrice + Math.random() * (currentPrice * 0.01)
            const sellAmount = Math.random() * 20000 + 5000
            newSells.unshift({
              id: nextOrderId.current++,
              price: sellPrice,
              amount: sellAmount,
              total: sellPrice * sellAmount,
              type: 'sell',
              timestamp: Date.now()
            })
            if (newSells.length > 20) newSells = newSells.slice(0, 20)
          }

          // Remove price increase from here - will be handled in separate interval
          
          // Cap at $1M
          priceTargetRef.current = Math.min(priceTargetRef.current, 1000000)
        } else {
          // Normal trading activity
          if (Math.random() < 0.5) {
            // Add buy order
            const buyPrice = currentPrice - Math.random() * (currentPrice * 0.005)
            const buyAmount = Math.random() * 50000 + 10000
            newBuys.unshift({
              id: nextOrderId.current++,
              price: buyPrice,
              amount: buyAmount,
              total: buyPrice * buyAmount,
              type: 'buy',
              timestamp: Date.now()
            })
            if (newBuys.length > 20) newBuys = newBuys.slice(0, 20)
          } else {
            // Add sell order
            const sellPrice = currentPrice + Math.random() * (currentPrice * 0.005)
            const sellAmount = Math.random() * 50000 + 10000
            newSells.unshift({
              id: nextOrderId.current++,
              price: sellPrice,
              amount: sellAmount,
              total: sellPrice * sellAmount,
              type: 'sell',
              timestamp: Date.now()
            })
            if (newSells.length > 20) newSells = newSells.slice(0, 20)
          }

          // Return price to baseline more aggressively
          const priceDiff = priceTargetRef.current - 0.015
          priceTargetRef.current = Math.max(priceTargetRef.current - priceDiff * 0.02, 0.015)
        }

        // Update orders relative to current price
        newBuys = newBuys.map(order => ({
          ...order,
          price: currentPrice - Math.abs(currentPrice - order.price)
        }))
        newSells = newSells.map(order => ({
          ...order,
          price: currentPrice + Math.abs(order.price - currentPrice)
        }))

        return { buys: newBuys, sells: newSells }
      })
    }

    intervalRef.current = setInterval(generateOrder, 100)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHovered, currentPrice])

  // Update price smoothly
  useEffect(() => {
    const priceInterval = setInterval(() => {
      setCurrentPrice(prev => {
        const diff = priceTargetRef.current - prev
        // Faster price movement with momentum
        const momentum = Math.abs(diff) > 1 ? 0.3 : 0.15
        const newPrice = prev + diff * momentum
        
        // Ensure price keeps moving if target is far away
        if (Math.abs(diff) > 0.00001) {
          return newPrice
        }
        return prev
      })
    }, 30) // Faster update rate

    return () => clearInterval(priceInterval)
  }, [])

  // Separate effect to continuously increase price target when hovered
  useEffect(() => {
    if (!isHovered) return

    const priceIncreaseInterval = setInterval(() => {
      const hoverDuration = (Date.now() - hoverStartTime.current) / 1000
      
      // Exponential price increase based on hover duration
      if (hoverDuration < 1) {
        // Start slow: 3% per tick
        priceTargetRef.current = Math.min(priceTargetRef.current * 1.03, 1000000)
      } else if (hoverDuration < 2) {
        // Speed up: 8% per tick
        priceTargetRef.current = Math.min(priceTargetRef.current * 1.08, 1000000)
      } else if (hoverDuration < 3) {
        // Faster: 15% per tick
        priceTargetRef.current = Math.min(priceTargetRef.current * 1.15, 1000000)
      } else if (hoverDuration < 4) {
        // Parabolic: 25% per tick
        priceTargetRef.current = Math.min(priceTargetRef.current * 1.25, 1000000)
      } else {
        // Moon mission: 40% per tick
        priceTargetRef.current = Math.min(priceTargetRef.current * 1.4, 1000000)
      }
    }, 50) // Update every 50ms for continuous growth

    return () => clearInterval(priceIncreaseInterval)
  }, [isHovered])

  const formatPrice = (price: number) => {
    if (price >= 1000) return `$${(price / 1000).toFixed(2)}K`
    if (price >= 1) return `$${price.toFixed(2)}`
    return `$${price.toFixed(6)}`
  }
  
  const formatAmount = (amount: number) => {
    if (amount >= 1000000) return `${(amount / 1000000).toFixed(2)}M`
    if (amount >= 1000) return `${(amount / 1000).toFixed(1)}K`
    return Math.floor(amount).toLocaleString()
  }

  return (
    <div 
      className={`${styles.orderBookContainer} ${variant === 'mobile-background' ? styles.mobileBackground : ''}`}
      onMouseEnter={() => {
        if (variant !== 'mobile-background') {
          setIsHovered(true)
          hoverStartTime.current = Date.now()
        }
      }}
      onMouseLeave={() => {
        if (variant !== 'mobile-background') {
          setIsHovered(false)
          hoverStartTime.current = 0
        }
      }}
    >
      <div className={styles.orderBookHeader}>
        <h3>Order Book</h3>
        <span className={styles.pair}>CHAIN/USDT</span>
      </div>

      <div className={styles.orderBookContent}>
        {/* Sell orders */}
        <div className={styles.sellOrders}>
          {orders.sells.slice().reverse().map((order, index) => (
            <div 
              key={order.id} 
              className={`${styles.order} ${styles.sellOrder}`}
              style={{
                opacity: 1 - (index * 0.05),
                animation: `${styles.slideIn} 0.3s ease-out`
              }}
            >
              <span className={styles.price}>{order.price >= 1 ? order.price.toFixed(2) : order.price.toFixed(6)}</span>
              <span className={styles.amount}>{formatAmount(order.amount)}</span>
              <span className={styles.total}>{formatAmount(order.total)}</span>
              <div 
                className={styles.orderBar} 
                style={{ width: `${(order.amount / 100000) * 100}%` }}
              />
            </div>
          ))}
        </div>

        {/* Current price */}
        <div className={styles.currentPrice}>
          <span className={styles.priceLabel}>Last Price</span>
          <span className={`${styles.priceValue} ${isHovered ? styles.priceUp : ''}`}>
            {formatPrice(currentPrice)}
          </span>
          {isHovered && <span className={styles.priceIndicator}>▲</span>}
        </div>

        {/* Buy orders */}
        <div className={styles.buyOrders}>
          {orders.buys.map((order, index) => (
            <div 
              key={order.id} 
              className={`${styles.order} ${styles.buyOrder}`}
              style={{
                opacity: 1 - (index * 0.05),
                animation: `${styles.slideIn} 0.3s ease-out`
              }}
            >
              <span className={styles.price}>{order.price >= 1 ? order.price.toFixed(2) : order.price.toFixed(6)}</span>
              <span className={styles.amount}>{formatAmount(order.amount)}</span>
              <span className={styles.total}>{formatAmount(order.total)}</span>
              <div 
                className={styles.orderBar} 
                style={{ width: `${(order.amount / 100000) * 100}%` }}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default OrderBookAnimation