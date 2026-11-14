import { schoolData } from '../../data/schoolData'
import PageFrame from '../../components/PageFrame/PageFrame'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import AnimatedStat from '../../components/AnimatedStat/AnimatedStat'
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion'
import { FaArrowRight, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import styles from './AboutPage.module.css'

function AboutPage() {
  return (
    <PageFrame className={styles.page}>
      <section className="page-banner banner-about">
        <div className="container">
          <p className="eyebrow">About us</p>
          <h1>Rooted in purpose, driven by excellence.</h1>
        </div>
      </section>

      <section className="content-section">
        <div className="container story-grid">
          <div>
            <p className="eyebrow">Our story</p>
            <h2>Castle Royal College nurtures confident learners and leaders.</h2>
            <p>
              Established as a modern independent secondary school in Lagos, Castle Royal College provides a
              structured and caring environment where students can grow academically and personally.
            </p>
            <p>
              Our approach balances academic discipline with creativity, social responsibility and excellent
              pastoral care. We aim to guide learners toward strong character as much as strong grades.
            </p>
          </div>
          <div className={styles.storyPanel}>
            <div className={styles.storyPanelInner}>
              <h3>Our motto</h3>
              <p>{schoolData.motto}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section muted-section">
        <div className="container">
          <SectionHeader eyebrow="What defines us" title="Values that shape the school community" />
          <div className="feature-grid three-up">
            {schoolData.aboutPillars.map((pillar) => (
              <article key={pillar.title} className="info-card">
                <div className="icon-wrap">
                  <FaStar />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <SectionHeader eyebrow="Our teachers" title="A school community led by committed mentors" />
          <div className={styles.photoGrid}>
            {schoolData.faculty.map((teacher) => (
              <article key={teacher.name} className={styles.personCard}>
                <img src={teacher.image} alt={teacher.name} />
                <div className={styles.personInfo}>
                  <h3>{teacher.name}</h3>
                  <p className={styles.role}>{teacher.role}</p>
                  <p>{teacher.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section muted-section">
        <div className="container">
          <SectionHeader eyebrow="Leadership" title="Guiding a school culture rooted in care and excellence" />
          <div className={styles.leadershipGrid}>
            {schoolData.leadership.map((leader) => (
              <article key={leader.name} className={styles.leadershipCard}>
                <img src={leader.image} alt={leader.name} />
                <div>
                  <h3>{leader.name}</h3>
                  <p className={styles.role}>{leader.role}</p>
                  <p>{leader.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <SectionHeader eyebrow="School snapshot" title="Prepared for academic excellence and life beyond school" />
          <div className="stats-grid two-row">
            <div className="stat-card narrow">
              <strong><AnimatedStat end={200} suffix="+" /></strong>
              <span>Daily learner engagements</span>
            </div>
            <div className="stat-card narrow">
              <strong><AnimatedStat end={4} /></strong>
              <span>School houses</span>
            </div>
            <div className="stat-card narrow">
              <strong><AnimatedStat end={1} /></strong>
              <span>Focused mission</span>
            </div>
            <div className="stat-card narrow">
              <strong><AnimatedStat end={100} suffix="%" /></strong>
              <span>Student wellbeing emphasis</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section muted-section">
        <div className="container">
          <SectionHeader eyebrow="FAQs" title="Common questions from families" />
          <FaqAccordion items={schoolData.faqs} />
          <div className={styles.ctaRow}>
            <p>Ready to learn more about our school community?</p>
            <Link to="/admissions" className="button button-primary">
              Book a tour <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}

export default AboutPage
