import { Link } from 'react-router-dom'
import { schoolData } from '../../data/schoolData'
import PageFrame from '../../components/PageFrame/PageFrame'
import { FaArrowRight } from 'react-icons/fa'

import styles from './PortalPage.module.css'

function PortalPage() {
  return (
    <PageFrame className={styles.page}>
      <section className="page-banner banner-portal">
        <div className="container">
          <p className="eyebrow">Portal</p>
          <h1>School information, communication and progress dashboards.</h1>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="portal-grid">
            {schoolData.portalCards.map((card) => (
              <article key={card.title} className={`portal-card ${card.accent}`}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <Link to={card.route} className="button button-secondary">
                  Open portal <FaArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  )
}

export default PortalPage
