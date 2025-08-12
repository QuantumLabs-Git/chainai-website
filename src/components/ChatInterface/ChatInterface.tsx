'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './ChatInterface.module.scss'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m your AI Marketing Strategist. Tell me about your Web3 project and I\'ll create a comprehensive marketing strategy tailored to your needs. What type of project are you working on?',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateAIResponse(inputValue),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (userInput: string) => {
    // Simple response logic - replace with actual AI integration
    const input = userInput.toLowerCase()
    
    if (input.includes('defi') || input.includes('decentralized finance')) {
      return `Excellent! For a DeFi project, I recommend a comprehensive strategy focusing on:

📊 **Technical Credibility**
- Security audit promotions
- Technical documentation marketing
- Developer community engagement

🎯 **Target Audience**
- Crypto traders and yield farmers
- Institutional investors
- DeFi enthusiasts

💡 **Recommended Services**
- YouTube influencer reviews (Tier 1: $5,000-$15,000)
- Twitter KOL campaigns (30+ influencers: $3,000-$8,000)
- Dextools trending (7 days: $2,500)
- Chinese market entry package ($10,000)

Would you like me to create a detailed timeline and budget breakdown?`
    } else if (input.includes('nft') || input.includes('non-fungible')) {
      return `Great choice! NFT projects require a unique marketing approach. Here's my recommended strategy:

🎨 **Community Building**
- Discord community setup and management
- Twitter Spaces and AMA sessions
- Influencer partnerships with NFT collectors

🚀 **Launch Strategy**
- Pre-launch hype campaign
- Whitelist management
- Post-launch sustained marketing

💰 **Budget Allocation**
- Social media marketing: 40%
- Influencer partnerships: 30%
- PR and media: 20%
- Community incentives: 10%

What's your target launch date and budget range?`
    } else if (input.includes('token') || input.includes('coin')) {
      return `I'll create a comprehensive token marketing strategy for you. First, let me understand your project better:

1. What blockchain is your token built on?
2. What's your target market cap goal?
3. Do you have any exchange listings planned?
4. What's your marketing budget range?

Based on your answers, I'll recommend:
- Pre-launch marketing timeline
- Exchange listing strategy
- Community building approach
- Influencer partnership tiers
- Regional market focus (US, Europe, Asia)`
    } else {
      return `I understand you're working on a Web3 project. To create the most effective marketing strategy, I need to know:

🎯 **Project Type**: DeFi, NFT, Gaming, Infrastructure, or other?
💰 **Budget Range**: This helps me recommend the right service tiers
📅 **Timeline**: Launch date and key milestones
🌍 **Target Markets**: Geographic and demographic focus

Once you provide these details, I'll create a customized strategy with:
- Specific service recommendations
- Budget allocation
- Timeline with milestones
- Expected ROI metrics

What aspect would you like to discuss first?`
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const suggestedPrompts = [
    "I'm launching a DeFi protocol",
    "Help me market my NFT collection",
    "I need a strategy for my new token",
    "What services do you recommend for GameFi?"
  ]

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.aiAvatar}>
            <span>AI</span>
          </div>
          <div>
            <h3>ChainAI Marketing Strategist</h3>
            <p>Powered by advanced AI • Available 24/7</p>
          </div>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.newChatBtn}>
            <i className="icon icon-plus"></i>
            New Chat
          </button>
        </div>
      </div>

      <div className={styles.messagesContainer}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${styles.message} ${styles[message.role]}`}
          >
            <div className={styles.messageAvatar}>
              {message.role === 'user' ? (
                <i className="icon icon-user"></i>
              ) : (
                <span>AI</span>
              )}
            </div>
            <div className={styles.messageContent}>
              <pre>{message.content}</pre>
              <span className={styles.timestamp}>
                {message.timestamp.toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className={`${styles.message} ${styles.assistant}`}>
            <div className={styles.messageAvatar}>
              <span>AI</span>
            </div>
            <div className={styles.messageContent}>
              <div className={styles.typingIndicator}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {messages.length === 1 && (
        <div className={styles.suggestedPrompts}>
          <p>Try asking:</p>
          <div className={styles.promptsGrid}>
            {suggestedPrompts.map((prompt, index) => (
              <button
                key={index}
                className={styles.promptButton}
                onClick={() => {
                  setInputValue(prompt)
                  inputRef.current?.focus()
                }}
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={styles.inputContainer}>
        <textarea
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Describe your project and marketing goals..."
          rows={1}
          className={styles.messageInput}
        />
        <button
          className={styles.sendButton}
          onClick={handleSend}
          disabled={!inputValue.trim() || isTyping}
        >
          <i className="icon icon-send"></i>
        </button>
      </div>
    </div>
  )
}

export default ChatInterface