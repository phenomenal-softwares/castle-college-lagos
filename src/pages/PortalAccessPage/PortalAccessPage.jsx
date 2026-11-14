import { Link } from 'react-router-dom'
import PageFrame from '../../components/PageFrame/PageFrame'

import styles from './PortalAccessPage.module.css'

function PortalAccessPage({ role, title }) {
  const label = role.charAt(0).toUpperCase() + role.slice(1)
  const dashboardPath = `/portal/${role}/dashboard`

  return (
    <PageFrame className={styles.page}>
      <section className="page-banner banner-portal-inner">
        <div className="container small-banner">
          <p className="eyebrow">Portal preview</p>
          <h1>{title}</h1>
        </div>
      </section>

      <section className="content-section">
        <div className="container portal-access-wrap">
          <div className="portal-access-card">
            <h2>{label} portal overview</h2>
            <p>
              This page is a demo preview for the {role} experience. It intentionally keeps the portal functional 
              without connecting to any real student, staff or school records.
            </p>
            <ul className="check-list">
              <li>Academic update summaries</li>
              <li>School communication timeline</li>
              <li>Dashboard navigation and overview</li>
            </ul>
            <div className="button-row">
              <Link to={dashboardPath} className="button button-primary">
                Open dashboard preview
              </Link>
              <Link to="/portal" className="button button-secondary">
                Back to portals
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}

export default PortalAccessPage
