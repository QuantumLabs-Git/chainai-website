import HackerText from '@/components/HackerText/HackerText'
import Odometer from '@/components/Odometer/Odometer'
import ResultsVisualization from '@/components/ResultsVisualization/ResultsVisualization'
import styles from './BenefitsSection.module.scss'

const BenefitsSection = () => {
  const benefits = [
    {
      icon: 'icon-speed',
      title: 'Lightning Fast Results',
      description: 'Get your custom marketing strategy in 15 seconds. Launch campaigns within hours, not weeks.',
      metric: '15',
      metricLabel: 'Seconds to Strategy'
    },
    {
      icon: 'icon-chart',
      title: 'Data-Driven Success',
      description: 'AI analyzes millions of data points to optimize your campaigns for maximum ROI.',
      metric: '98',
      metricLabel: 'Success Rate %'
    },
    {
      icon: 'icon-globe',
      title: 'Global Reach',
      description: 'Access markets worldwide with native language support and regional expertise.',
      metric: '50',
      metricLabel: 'Countries Covered'
    },
    {
      icon: 'icon-shield',
      title: 'Blockchain Verified',
      description: 'Every campaign result is recorded on-chain for complete transparency and trust.',
      metric: '100',
      metricLabel: 'Transparency %'
    }
  ]

  return (
    <section className={styles.benefitsSection} id="benefits">
      {/* Head Section */}
      <div className="sect-header">
        <div className="container">
          <div className="s-meta text-caption font-2">
            <p className="s-number_order wg-counter">
              [ <span className="text-white">0<Odometer value={3} /></span> / 09 ]
            </p>
            <p className="s-label">[ <span className="text-white"><HackerText text="BENEFITS" /></span> ]</p>
          </div>
        </div>
      </div>
      <span className="br-line"></span>

      {/* Main Content */}
      <div className="sect-main">
        <div className="container">
          <div className="sect-title text-center wow fadeInUp">
            <h2 className="s-title font-3">
              Why Choose ChainAI Marketing?
            </h2>
            <p className="s-sub_title">
              Experience the future of Web3 marketing with unmatched speed, precision, and results
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            <div className="row">
              {benefits.map((benefit, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                  <div className={`${styles.benefitCard} wow fadeInUp`} data-wow-delay={`${index * 0.1}s`}>
                    <div className={styles.benefitIcon}>
                      <i className={`icon ${benefit.icon}`}></i>
                    </div>
                    <div className={styles.benefitMetric}>
                      <span className={styles.metricNumber}>
                        <Odometer value={parseInt(benefit.metric)} />
                      </span>
                      <span className={styles.metricLabel}>{benefit.metricLabel}</span>
                    </div>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                    <p className={styles.benefitDescription}>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className={styles.statsSection}>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className={styles.statsContent}>
                  <h3 className="wow fadeInLeft">Proven Results That Speak</h3>
                  <div className={styles.statsList}>
                    <div className={`${styles.statItem} wow fadeInLeft`} data-wow-delay="0.1s">
                      <div className={styles.statNumber}>
                        <Odometer value={500} />+
                      </div>
                      <div className={styles.statText}>
                        <h4>Projects Launched</h4>
                        <p>Successfully marketed Web3 projects across all major blockchains</p>
                      </div>
                    </div>
                    <div className={`${styles.statItem} wow fadeInLeft`} data-wow-delay="0.2s">
                      <div className={styles.statNumber}>
                        $<Odometer value={2} />B+
                      </div>
                      <div className={styles.statText}>
                        <h4>Market Cap Generated</h4>
                        <p>Combined market capitalization of projects we've marketed</p>
                      </div>
                    </div>
                    <div className={`${styles.statItem} wow fadeInLeft`} data-wow-delay="0.3s">
                      <div className={styles.statNumber}>
                        <Odometer value={10} />M+
                      </div>
                      <div className={styles.statText}>
                        <h4>Community Members</h4>
                        <p>Total reach across all managed communities and platforms</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={`${styles.statsVisual} wow fadeInRight`}>
                  <ResultsVisualization />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="br-line"></span>
    </section>
  )
}

export default BenefitsSection