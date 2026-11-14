import { schoolData } from '../../data/schoolData'
import PageFrame from '../../components/PageFrame/PageFrame'
import SectionHeader from '../../components/SectionHeader/SectionHeader'

import styles from './AcademicsPage.module.css'

function AcademicsPage() {
  return (
    <PageFrame className={styles.page}>
      <section className="page-banner banner-academics">
        <div className="container">
          <p className="eyebrow">Academics</p>
          <h1>Clear pathways, strong teaching and purposeful preparation.</h1>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <SectionHeader
            eyebrow="Academic structure"
            title="A curriculum designed for growth at every stage"
          />
          <div className="feature-grid three-up">
            {schoolData.programs.map((program) => (
              <article key={program.title} className="program-card">
                <span className="level-badge">{program.level}</span>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <ul>
                  {program.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section muted-section">
        <div className="container split-layout">
          <div className="copy-panel">
            <p className="eyebrow">Examination preparation</p>
            <h2>Targeted readiness for BECE, WAEC, NECO and JAMB/UTME.</h2>
            <ul className="check-list">
              <li>Focused subject mastery and revision planning</li>
              <li>Continuous assessment and remedial intervention</li>
              <li>Structured guidance on university and career choices</li>
            </ul>
          </div>
          <div className="visual-panel subject-panel" />
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <SectionHeader
            eyebrow="Beyond the classroom"
            title="Activities and games that grow confidence and connection"
            text="Our enrichment programme gives every learner opportunities to explore interests, build skills and enjoy being part of a team."
          />
          <div className={styles.activityGrid}>
            {schoolData.extracurriculars.map((activity) => (
              <article key={activity.title} className={styles.activityCard}>
                <img src={activity.image} alt="" loading="lazy" />
                <div>
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  )
}

export default AcademicsPage
