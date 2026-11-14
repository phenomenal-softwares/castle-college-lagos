import { schoolData } from '../../data/schoolData'
import PageFrame from '../../components/PageFrame/PageFrame'

import styles from './PortalDashboardPage.module.css'

function PortalDashboardPage({ role }) {
  const dashboardCards = schoolData.dashboardCards[role] || []
  const roleCap = role.charAt(0).toUpperCase() + role.slice(1)

  return (
    <PageFrame className={styles.page}>
      <section className="page-banner banner-portal-inner">
        <div className="container small-banner">
          <p className="eyebrow">{roleCap} dashboard</p>
          <h1>Welcome back to your portal overview.</h1>
        </div>
      </section>

      <section className="content-section">
        <div className="container dashboard-wrap">
          <div className="stats-grid dashboard-grid">
            {dashboardCards.map((item) => (
              <div key={item.label} className="stat-card dashboard-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="dashboard-panels">
            <div className="panel-card">
              <h3>Priority notices</h3>
              <ul>
                <li>School assembly and attendance reminder for this week.</li>
                <li>New event date added to the family calendar.</li>
                <li>Continuous assessment updates are available for review.</li>
              </ul>
            </div>
            <div className="panel-card">
              <h3>Upcoming school moments</h3>
              <ul>
                <li>Inter-house sports finals next Friday.</li>
                <li>Parents’ forum on academic support.</li>
                <li>Cultural Day rehearsal in the main hall.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}

export default PortalDashboardPage
