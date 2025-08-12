import { Metadata } from 'next'
import Link from 'next/link'
import styles from '../legal.module.scss'

export const metadata: Metadata = {
  title: 'Privacy Policy | ChainAI - Your Data Protection & Privacy',
  description: 'Learn how ChainAI protects your privacy and handles your data. Our comprehensive privacy policy covers data collection, usage, security, and your rights.',
  keywords: 'privacy policy, data protection, GDPR, data security, user privacy, ChainAI privacy',
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 1, 2024"
  
  return (
    <main className="tf-section-service-detail">
      {/* Breadcrumb */}
      <div className="sect-header">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item active">Privacy Policy</li>
            </ol>
          </nav>
        </div>
      </div>
      <span className="br-line"></span>

      {/* Privacy Policy Content */}
      <section className={styles.legalPage}>
        <div className="container">
          <div className={styles.legalContent}>
            <h1 className="s-title font-2 mb-4">Privacy Policy</h1>
            <p className={styles.lastUpdated}>Last Updated: {lastUpdated}</p>

            <div className={styles.legalSection}>
              <h2>1. Introduction</h2>
              <p>
                ChainAI Marketing ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy 
                carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2>2. Information We Collect</h2>
              <h3>2.1 Personal Information</h3>
              <p>We may collect personal information that you provide directly to us, including:</p>
              <ul>
                <li>Name and contact information (email address, phone number, company name)</li>
                <li>Billing and payment information</li>
                <li>Project details and marketing requirements</li>
                <li>Communication preferences</li>
                <li>Account credentials</li>
              </ul>

              <h3>2.2 Automatically Collected Information</h3>
              <p>When you visit our website, we automatically collect certain information about your device:</p>
              <ul>
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website addresses</li>
                <li>Pages viewed and links clicked</li>
                <li>Time and date of visits</li>
              </ul>

              <h3>2.3 Cookies and Tracking Technologies</h3>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, operate, and maintain our services</li>
                <li>Process transactions and send related information</li>
                <li>Respond to customer service requests and support needs</li>
                <li>Send marketing and promotional communications (with your consent)</li>
                <li>Improve and personalize user experience</li>
                <li>Analyze usage patterns and optimize our services</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className={styles.legalSection}>
              <h2>4. Information Sharing and Disclosure</h2>
              <p>We may share your information in the following circumstances:</p>
              <ul>
                <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
                <li><strong>Business Partners:</strong> With partners who provide complementary services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition</li>
                <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
              </ul>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties for their marketing purposes 
                without your explicit consent.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul>
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
              <p>
                However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee 
                absolute security.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2>6. Your Data Protection Rights</h2>
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul>
                <li><strong>Access:</strong> Request copies of your personal data</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
                <li><strong>Portability:</strong> Request transfer of your data to another organization</li>
                <li><strong>Objection:</strong> Object to our processing of your personal data</li>
                <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
              </ul>
              <p>To exercise any of these rights, please contact us at privacy@chainai.marketing</p>
            </div>

            <div className={styles.legalSection}>
              <h2>7. International Data Transfers</h2>
              <p>
                Your information may be transferred to and maintained on computers located outside of your state, province, country, 
                or other governmental jurisdiction where data protection laws may differ. We ensure appropriate safeguards are in place 
                for such transfers in compliance with applicable law.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2>8. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information 
                from children under 18. If you become aware that a child has provided us with personal information, please contact us 
                immediately.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2>9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content 
                of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2>10. Marketing Communications</h2>
              <p>
                With your consent, we may send you marketing communications about our services, industry insights, and promotional offers. 
                You can opt-out of these communications at any time by clicking the unsubscribe link in our emails or contacting us directly.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2>11. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, 
                comply with legal obligations, resolve disputes, and enforce our agreements. When we no longer need your information, 
                we will securely delete or anonymize it.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2>12. California Privacy Rights (CCPA)</h2>
              <p>
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including 
                the right to know what personal information we collect, the right to delete your information, and the right to opt-out 
                of the sale of your personal information (which we do not do).
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2>13. GDPR Compliance</h2>
              <p>
                For users in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR). 
                We process personal data based on legitimate interests, contract fulfillment, legal obligations, or your consent. 
                You have the right to lodge a complaint with your local supervisory authority.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2>14. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                We will notify you of any material changes by posting the new Privacy Policy on this page and updating the 
                "Last Updated" date.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2>15. Contact Information</h2>
              <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
              <div className={styles.contactInfo}>
                <p><strong>ChainAI Marketing</strong></p>
                <p>Email: privacy@chainai.marketing</p>
                <p>Data Protection Officer: dpo@chainai.marketing</p>
                <p>Address: [Your Business Address]</p>
              </div>
            </div>

            <div className={styles.ctaSection}>
              <p>By using our services, you acknowledge that you have read and understood this Privacy Policy.</p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className="btn-main">
                  Contact Us
                </Link>
                <Link href="/terms" className="btn-secondary">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}