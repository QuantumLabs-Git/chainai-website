'use client'

import { useEffect, useState, useRef } from 'react'
import styles from './ResultsVisualization.module.scss'

const ResultsVisualization = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  const codeLines = [
    '$ chainai metrics --analyze',
    '',
    'Initializing ChainAI Analytics Engine...',
    '[████████████████████████] 100%',
    '',
    '╔══════════════════════════════════════════╗',
    '║     CHAINAI PERFORMANCE METRICS 2024     ║',
    '╚══════════════════════════════════════════╝',
    '',
    'const projectsLaunched = 500+;',
    'const successRate = 98.7%;',
    'const marketCapGenerated = "$2B+";',
    'const communityReach = "10M+";',
    '',
    '// Blockchain Distribution',
    'const blockchains = {',
    '  ethereum: 145,',
    '  binanceSmartChain: 89,',
    '  polygon: 67,',
    '  solana: 56,',
    '  avalanche: 43,',
    '  arbitrum: 38,',
    '  others: 62',
    '};',
    '',
    '// Service Performance',
    'const services = {',
    '  influencerMarketing: {',
    '    campaigns: 2847,',
    '    reach: "500M+",',
    '    roi: "425%"',
    '  },',
    '  communityManagement: {',
    '    activeChats: 127,',
    '    dailyEngagement: "1.2M",',
    '    retention: "94%"',
    '  },',
    '  aiOptimization: {',
    '    dataProcessed: "15TB",',
    '    predictionsAccuracy: "91%",',
    '    campaignsOptimized: 3200',
    '  }',
    '};',
    '',
    '> All metrics verified on-chain ✓',
    '> Real-time data processing active',
    '> Next update in 00:15:42',
    '',
    '_'
  ]

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (currentLineIndex < codeLines.length) {
      const currentLine = codeLines[currentLineIndex]
      
      if (currentCharIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setCurrentCharIndex(currentCharIndex + 1)
        }, Math.random() * 50 + 20) // Variable typing speed
        
        return () => clearTimeout(timeout)
      } else {
        // Line completed
        setDisplayedLines(prev => [...prev, currentLine])
        setCurrentLineIndex(currentLineIndex + 1)
        setCurrentCharIndex(0)
        
        // Auto-scroll
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight
        }
      }
    } else {
      // Restart animation after a delay
      const timeout = setTimeout(() => {
        setDisplayedLines([])
        setCurrentLineIndex(0)
        setCurrentCharIndex(0)
      }, 5000)
      
      return () => clearTimeout(timeout)
    }
  }, [currentLineIndex, currentCharIndex, codeLines])

  const getCurrentTypingLine = () => {
    if (currentLineIndex < codeLines.length) {
      return codeLines[currentLineIndex].substring(0, currentCharIndex)
    }
    return ''
  }

  return (
    <div className={styles.terminalContainer}>
      <div className={styles.terminalHeader}>
        <div className={styles.terminalButtons}>
          <span className={styles.terminalButton} data-color="red"></span>
          <span className={styles.terminalButton} data-color="yellow"></span>
          <span className={styles.terminalButton} data-color="green"></span>
        </div>
        <div className={styles.terminalTitle}>chainai-metrics.js</div>
      </div>
      <div className={styles.terminalBody} ref={containerRef}>
        <div className={styles.terminalContent}>
          {displayedLines.map((line, index) => (
            <div key={index} className={styles.codeLine}>
              <span dangerouslySetInnerHTML={{ __html: formatLine(line) }} />
            </div>
          ))}
          {currentLineIndex < codeLines.length && (
            <div className={styles.codeLine}>
              <span dangerouslySetInnerHTML={{ __html: formatLine(getCurrentTypingLine()) }} />
              <span className={`${styles.cursor} ${showCursor ? styles.visible : ''}`}>|</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Format lines with syntax highlighting
const formatLine = (line: string): string => {
  // Comments
  if (line.trim().startsWith('//')) {
    return `<span class="${styles.comment}">${line}</span>`
  }
  
  // Commands
  if (line.startsWith('$') || line.startsWith('>')) {
    return `<span class="${styles.command}">${line}</span>`
  }
  
  // Headers
  if (line.includes('═') || line.includes('║')) {
    return `<span class="${styles.header}">${line}</span>`
  }
  
  // Progress bar
  if (line.includes('████')) {
    return `<span class="${styles.progress}">${line}</span>`
  }
  
  // Parse JavaScript syntax
  return line
    .replace(/const|let|var/g, '<span class="' + styles.keyword + '">$&</span>')
    .replace(/(\w+)(?=\s*=)/g, '<span class="' + styles.variable + '">$1</span>')
    .replace(/(["'])([^"']*)\1/g, '<span class="' + styles.string + '">$1$2$1</span>')
    .replace(/(\d+\.?\d*%?|\$\d+[BM]\+?)/g, '<span class="' + styles.number + '">$1</span>')
    .replace(/[{}[\]():,]/g, '<span class="' + styles.punctuation + '">$&</span>')
}

export default ResultsVisualization