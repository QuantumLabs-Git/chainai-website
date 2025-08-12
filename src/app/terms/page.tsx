import { Metadata } from 'next'
import Link from 'next/link'
import styles from '../services/services.module.scss'

export const metadata: Metadata = {
  title: 'Terms & Conditions | ChainAI - Service Agreement & Legal Terms',
  description: 'Read ChainAI\'s terms and conditions for using our Web3 marketing services. Understand your rights, obligations, and our service agreements.',
  keywords: 'terms and conditions, service agreement, legal terms, user agreement, ChainAI terms',
}

export default function TermsConditionsPage() {
  const lastUpdated = "January 1, 2024"
  
  return (
    <main className="tf-section-service-detail">
      {/* Breadcrumb */}
      <div className="sect-header">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item active">Terms & Conditions</li>
            </ol>
          </nav>
        </div>
      </div>
      <span className="br-line"></span>

      {/* Terms Content */}
      <section className={styles.legalPage}>
        <div className="container">
          <div className={styles.legalContent}>
            <h1 className="s-title font-2 mb-4">Terms & Conditions</h1>
            <p className={styles.lastUpdated}>Last Updated: {lastUpdated}</p>

            <div className={styles.legalSection}>
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing or using ChainAI Marketing's website and services ("Services"), you agree to be bound by these 
                Terms and Conditions ("Terms"). If you disagree with any part of these terms, you may not access our Services. 
                These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2>2. Definitions</h2>
              <ul>
                <li><strong>"Company"</strong> refers to ChainAI Marketing</li>
                <li><strong>"Services"</strong> refers to all marketing, consulting, and technical services provided by ChainAI</li>
                <li><strong>"Client"</strong> refers to any individual or entity purchasing our Services</li>
                <li><strong>"Content"</strong> refers to any materials, data, or information provided by either party</li>
                <li><strong>"Deliverables"</strong> refers to the work product provided to the Client</li>
              </ul>
            </div>

            <div className={styles.legalSection}>
              <h2>3. Services Provided</h2>
              <p>ChainAI Marketing provides various Web3 marketing services including but not limited to:</p>
              <ul>
                <li>Digital marketing strategy and implementation</li>
                <li>Community management and growth</li>
                <li>Influencer and KOL marketing</li>
                <li>Content creation and distribution</li>
                <li>Technical consulting and development</li>
                <li>Exchange listing assistance</li>
                <li>Public relations and media outreach</li>
              </ul>
              <p>
                Specific services, deliverables, and timelines will be outlined in individual service agreements or 
                statements of work.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2>4. Client Obligations</h2>
              <p>As a client, you agree to:</p>
              <ul>
                <li>Provide accurate and complete information necessary for service delivery</li>
                <li>Respond promptly to requests for information or approvals</li>
                <li>Grant necessary permissions and access for service execution</li>
                <li>Ensure all provided content complies with applicable laws and regulations</li>
                <li>Make timely payments according to agreed terms</li>
                <li>Not engage in any illegal or fraudulent activities</li>
              </ul>
            </div>

            <div className={styles.legalSection}>
              <h2>5. Payment Terms</h2>
              <h3>5.1 Pricing</h3>
              <p>
                Pricing for services will be as specified in the service agreement or invoice. All prices are in USD 
                unless otherwise specified.
              </p>

              <h3>5.2 Payment Schedule</h3>
              <p>Payment terms are as follows unless otherwise agreed:</p>
              <ul>
                <li>50% deposit upon contract signing</li>
                <li>Remaining balance upon completion or monthly for ongoing services</li>
                <li>Invoices are due within 14 days of receipt</li>
              </ul>

              <h3>5.3 Late Payments</h3>
              <p>
                Late payments may incur interest at 1.5% per month. We reserve the right to suspend services for 
                accounts more than 30 days overdue.
              </p>

              <h3>5.4 Refund Policy</h3>
              <p>
                Refunds are evaluated on a case-by-case basis. Generally, deposits are non-refundable once work has commenced. 
                We offer a 30-day satisfaction guarantee on select services as specified in individual agreements.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2>6. Intellectual Property Rights</h2>
              <h3>6.1 Client Content</h3>
              <p>
                You retain all rights to content you provide to us. By providing content, you grant us a license to use, 
                modify, and distribute it as necessary to perform our Services.
              </p>

              <h3>6.2 Deliverables</h3>
              <p>
                Upon full payment, ownership of custom deliverables transfers to the Client, except for any pre-existing 
                Company intellectual property or third-party materials, which are licensed to the Client.
              </p>

              <h3>6.3 Company Property</h3>
              <p>
                All methodologies, tools, templates, and know-how used in providing Services remain the property of ChainAI Marketing.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2>7. Confidentiality</h2>
              <p>
                Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed 
                during the term of service. This obligation survives termination of the agreement for a period of three (3) years.
              </p>
              <p>Confidential information does not include information that:</p>
              <ul>
                <li>Is or becomes publicly available through no breach by the receiving party</li>
                <li>Was rightfully known before disclosure</li>
                <li>Is independently developed without use of confidential information</li>
                <li>Must be disclosed by law or court order</li>
              </ul>
            </div>

            <div className={styles.legalSection}>
              <h2>8. Warranties and Disclaimers</h2>
              <h3>8.1 Service Warranty</h3>
              <p>
                We warrant that Services will be performed in a professional and workmanlike manner consistent with industry standards.
              </p>

              <h3>8.2 Disclaimers</h3>
              <p>
                EXCEPT AS EXPRESSLY PROVIDED, SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL 
                IMPLIED WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>

              <h3>8.3 No Guarantee of Results</h3>
              <p>
                While we strive for excellence, we cannot guarantee specific results, including but not limited to: ROI, 
                user growth, token price performance, or exchange listings.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2>9. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, CHAINAI MARKETING'S TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR 
                RELATED TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE AMOUNT PAID BY CLIENT IN THE PRECEDING 12 MONTHS.
              </p>
              <p>
                IN NO EVENT SHALL WE BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, 
                INCLUDING LOST PROFITS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2>10. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless ChainAI Marketing, its affiliates, and their respective 
                officers, directors, employees, and agents from any claims, damages, losses, or expenses (including attorney fees) 
                arising from:
              </p>
              <ul>
                <li>Your breach of these Terms</li>
                <li>Your violation of any law or third-party rights</li>
                <li>Content you provide to us</li>
                <li>Your use of our Services</li>
              </ul>
            </div>

            <div className={styles.legalSection}>
              <h2>11. Term and Termination</h2>
              <h3>11.1 Term</h3>
              <p>
                These Terms commence upon your first use of our Services and continue until terminated.
              </p>

              <h3>11.2 Termination</h3>
              <p>Either party may terminate Services by providing 30 days written notice. We may terminate immediately for:</p>
              <ul>
                <li>Material breach of these Terms</li>
                <li>Non-payment</li>
                <li>Illegal or unethical conduct</li>
                <li>Insolvency or bankruptcy</li>
              </ul>

              <h3>11.3 Effect of Termination</h3>
              <p>
                Upon termination, all outstanding payments become immediately due. Provisions regarding confidentiality, 
                intellectual property, and limitation of liability survive termination.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2>12. Dispute Resolution</h2>
              <h3>12.1 Negotiation</h3>
              <p>
                Parties agree to attempt to resolve disputes through good faith negotiation before pursuing other remedies.
              </p>

              <h3>12.2 Arbitration</h3>
              <p>
                Any disputes not resolved through negotiation shall be settled by binding arbitration under the rules of the 
                American Arbitration Association. The arbitration shall be conducted in English and the decision shall be final and binding.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2>13. General Provisions</h2>
              <h3>13.1 Governing Law</h3>
              <p>
                These Terms are governed by the laws of [Jurisdiction] without regard to conflict of law principles.
              </p>

              <h3>13.2 Entire Agreement</h3>
              <p>
                These Terms, together with any service agreements, constitute the entire agreement between the parties.
              </p>

              <h3>13.3 Amendments</h3>
              <p>
                We reserve the right to modify these Terms at any time. Material changes will be notified via email or 
                website notice. Continued use after changes constitutes acceptance.
              </p>

              <h3>13.4 Severability</h3>
              <p>
                If any provision is found unenforceable, the remaining provisions shall continue in full force.
              </p>

              <h3>13.5 Assignment</h3>
              <p>
                You may not assign these Terms without our written consent. We may assign our rights and obligations freely.
              </p>

              <h3>13.6 Force Majeure</h3>
              <p>
                Neither party is liable for delays or failures due to causes beyond reasonable control, including acts of God, 
                natural disasters, war, terrorism, riots, embargoes, or acts of civil or military authorities.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2>14. Specific Service Terms</h2>
              <h3>14.1 Marketing Campaigns</h3>
              <p>
                Client acknowledges that marketing results depend on various factors beyond our control. We do not guarantee 
                specific outcomes or performance metrics.
              </p>

              <h3>14.2 Third-Party Platforms</h3>
              <p>
                We are not responsible for changes to third-party platform policies (social media, exchanges, etc.) that may 
                affect service delivery.
              </p>

              <h3>14.3 Compliance</h3>
              <p>
                Client is responsible for ensuring all marketing activities comply with applicable laws and regulations in 
                their jurisdiction, including securities laws and advertising standards.
              </p>
            </div>

            <div className={styles.legalSection}>
              <h2>15. Contact Information</h2>
              <p>For questions about these Terms & Conditions, please contact us at:</p>
              <div className={styles.contactInfo}>
                <p><strong>ChainAI Marketing</strong></p>
                <p>Email: legal@chainai.marketing</p>
                <p>Support: support@chainai.marketing</p>
                <p>Address: [Your Business Address]</p>
              </div>
            </div>

            <div className={styles.ctaSection}>
              <p>By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.</p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className="btn-main">
                  Get Started
                </Link>
                <Link href="/privacy" className="btn-secondary">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}