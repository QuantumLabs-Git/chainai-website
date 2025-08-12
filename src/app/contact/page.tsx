import { Metadata } from 'next'
import Link from 'next/link'
import HackerText from '@/components/HackerText/HackerText'
import Odometer from '@/components/Odometer/Odometer'
import styles from './contact.module.scss'

export const metadata: Metadata = {
  title: 'Contact ChainAI Marketing | Get Your Custom Web3 Marketing Strategy',
  description: 'Contact ChainAI Marketing for AI-powered Web3 marketing solutions. Get instant strategy through our Telegram bot or schedule a consultation with our team.',
  keywords: 'contact chainai marketing, web3 marketing consultation, crypto marketing support, blockchain marketing inquiry',
  openGraph: {
    title: 'Contact ChainAI Marketing - Get Your Custom Strategy',
    description: 'Reach out for AI-powered Web3 marketing solutions tailored to your project.',
    url: 'https://chainai.marketing/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="tf-section-contact">
      {/* Head Section */}
      <div className="sect-header">
        <div className="container">
          <div className="s-meta text-caption font-2">
            <p className="s-number_order wg-counter">
              [ <span className="text-white">0<Odometer value={8} /></span> / 09 ]
            </p>
            <p className="s-label">[ <span className="text-white"><HackerText text="CONTACT" /></span> ]</p>
          </div>
        </div>
      </div>
      <span className="br-line"></span>

      {/* Contact Hero */}
      <section className={styles.contactHero}>
        <div className="container">
          <div className="text-center">
            <h1 className="s-title font-3 wow fadeInUp">
              Let's Transform Your<br />Web3 Marketing Together
            </h1>
            <p className="s-sub_title wow fadeInUp" data-wow-delay="0.1s">
              Get instant AI-powered strategies or connect with our expert team
            </p>
          </div>
        </div>
      </section>
      <span className="br-line"></span>

      {/* Contact Options */}
      <section className={styles.contactOptions}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className={`${styles.contactCard} wow fadeInUp`}>
                <div className={styles.cardIcon}>
                  <i className="icon icon-message"></i>
                </div>
                <h3>Telegram Bot</h3>
                <p>Get instant AI-powered marketing strategies 24/7</p>
                <a href="https://t.me/chainaibot" target="_blank" rel="noopener noreferrer" className="tf-btn style-2 animate-btn">
                  Start Chat
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={`${styles.contactCard} wow fadeInUp`} data-wow-delay="0.1s">
                <div className={styles.cardIcon}>
                  <i className="icon icon-mail"></i>
                </div>
                <h3>Email Us</h3>
                <p>For detailed inquiries and partnership opportunities</p>
                <a href="mailto:hello@chainai.marketing" className="tf-btn style-transparent animate-btn">
                  hello@chainai.marketing
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={`${styles.contactCard} wow fadeInUp`} data-wow-delay="0.2s">
                <div className={styles.cardIcon}>
                  <i className="icon icon-twitter"></i>
                </div>
                <h3>Social Media</h3>
                <p>Follow us for updates and industry insights</p>
                <a href="https://twitter.com/chainaimarketing" target="_blank" rel="noopener noreferrer" className="tf-btn style-transparent animate-btn">
                  @ChainAIMarketing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <span className="br-line"></span>

      {/* Contact Form Section */}
      <section className={styles.contactForm}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.formWrapper}>
                <h2 className="wow fadeInLeft">Get in Touch</h2>
                <p className="wow fadeInLeft" data-wow-delay="0.1s">
                  Fill out the form below and our team will get back to you within 24 hours
                </p>
                
                <form className={`${styles.form} wow fadeInLeft`} data-wow-delay="0.2s">
                  <div className="row">
                    <div className="col-md-6">
                      <div className={styles.formGroup}>
                        <input 
                          type="text" 
                          placeholder="Your Name" 
                          required 
                          className={styles.formControl}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={styles.formGroup}>
                        <input 
                          type="email" 
                          placeholder="Email Address" 
                          required 
                          className={styles.formControl}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <input 
                      type="text" 
                      placeholder="Project Name" 
                      className={styles.formControl}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <select className={styles.formControl} required>
                      <option value="">Select Service Interest</option>
                      <option value="influencer">Influencer Marketing</option>
                      <option value="chinese">Chinese Marketing</option>
                      <option value="community">Community Management</option>
                      <option value="technical">Technical Services</option>
                      <option value="pr">PR & Media</option>
                      <option value="custom">Custom Package</option>
                    </select>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <textarea 
                      placeholder="Tell us about your project and marketing goals" 
                      rows={5} 
                      className={styles.formControl}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="tf-btn style-2 animate-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className={`${styles.infoWrapper} wow fadeInRight`}>
                <h3>Why Choose ChainAI?</h3>
                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <i className="icon icon-check"></i>
                    <div>
                      <h4>Instant Strategy Generation</h4>
                      <p>Get AI-powered marketing plans in seconds, not days</p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <i className="icon icon-check"></i>
                    <div>
                      <h4>200+ Integrated Services</h4>
                      <p>Everything you need in one unified platform</p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <i className="icon icon-check"></i>
                    <div>
                      <h4>Blockchain Verified Results</h4>
                      <p>Transparent, immutable proof of campaign performance</p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <i className="icon icon-check"></i>
                    <div>
                      <h4>24/7 Global Support</h4>
                      <p>Round-the-clock assistance across all time zones</p>
                    </div>
                  </div>
                </div>
                
                <div className={styles.urgentContact}>
                  <h4>Need Immediate Assistance?</h4>
                  <p>Our AI bot is available 24/7 for instant support</p>
                  <a href="https://t.me/chainaibot" target="_blank" rel="noopener noreferrer" className="tf-btn style-transparent animate-btn">
                    Chat Now on Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <span className="br-line"></span>

      {/* Office Locations */}
      <section className={styles.locations}>
        <div className="container">
          <div className="sect-title text-center wow fadeInUp">
            <h2 className="s-title font-3">Global Presence</h2>
            <p className="s-sub_title">Serving Web3 projects worldwide</p>
          </div>
          
          <div className={styles.locationsGrid}>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className={`${styles.locationCard} wow fadeInUp`}>
                  <i className="icon icon-location"></i>
                  <h4>Americas</h4>
                  <p>Serving North & South America</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={`${styles.locationCard} wow fadeInUp`} data-wow-delay="0.1s">
                  <i className="icon icon-location"></i>
                  <h4>Europe</h4>
                  <p>Full European coverage</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={`${styles.locationCard} wow fadeInUp`} data-wow-delay="0.2s">
                  <i className="icon icon-location"></i>
                  <h4>Asia-Pacific</h4>
                  <p>Specialized Asian markets</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={`${styles.locationCard} wow fadeInUp`} data-wow-delay="0.3s">
                  <i className="icon icon-location"></i>
                  <h4>Middle East</h4>
                  <p>Dubai & Gulf regions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <span className="br-line"></span>
    </main>
  )
}