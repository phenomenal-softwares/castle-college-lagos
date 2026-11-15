import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { schoolData } from '../../data/schoolData'
import PageFrame from '../../components/PageFrame/PageFrame'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import AnimatedStat from '../../components/AnimatedStat/AnimatedStat'
import { FaArrowRight, FaSchool, FaShieldAlt, FaBookOpen, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'

import styles from './HomePage.module.css'

function HomePage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <PageFrame className={styles.page}>
      <section id="home-hero" className={styles.hero}>
        <video
          className={styles.heroVideo}
          autoPlay={!shouldReduceMotion}
          muted
          loop
          playsInline
          preload={shouldReduceMotion ? 'none' : 'metadata'}
          poster="https://media.istockphoto.com/id/2281716878/photo/young-schoolgirl-wearing-uniform-and-backpack-smiling.jpg?s=612x612&w=0&k=20&c=cKQh1inqlI7nI8UsPI8DHCwV-diatPPSEakgxB-q5bU="
          aria-hidden="true"
          tabIndex={-1}
        >
          <source
            src="https://www.pexels.com/download/video/35701199/"
            type="video/mp4"
          />
        </video>
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <p className={`eyebrow ${styles.heroEyebrow}`}>A trusted private secondary school in Lagos</p>
            <h1>Where academic excellence meets character.</h1>
            <p className={`hero-text ${styles.heroText}`}>
              Castle Royal College inspires young people to achieve confidently through strong teaching,
              values-led guidance and a vibrant school culture rooted in Nigerian tradition.
            </p>
            <div className={`button-row ${styles.heroActions}`}>
              <Link to="/admissions" className="button button-primary">
                Join our school <FaArrowRight />
              </Link>
              <Link to="/about" className={`button button-secondary ${styles.secondaryButton}`}>
                Discover more
              </Link>
            </div>
            <div className={`hero-meta ${styles.heroMeta}`}>
              <span>
                <FaSchool /> {schoolData.session}
              </span>
              <span>
                <FaShieldAlt /> Safe, nurturing community
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container stats-grid">
          {schoolData.stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <strong><AnimatedStat end={stat.value} suffix={stat.suffix} /></strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <SectionHeader
            eyebrow="Why families choose us"
            title="A balanced school experience built for confident futures"
            text="We support learners with a strong academic foundation, clear values and meaningful opportunities beyond the classroom."
          />

          <div className="feature-grid three-up">
            {schoolData.aboutPillars.map((pillar) => (
              <motion.article key={pillar.title} className="info-card" whileHover={{ y: -6 }}>
                <div className="icon-wrap">
                  <FaBookOpen />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section muted-section">
        <div className="container">
          <SectionHeader
            eyebrow="School life in focus"
            title="Students, teachers and events at the heart of our community"
            text="Every part of school life is designed to build confidence, connection and a strong sense of purpose."
          />
          <div className={styles.photoGrid}>
            {schoolData.homeHighlights.map((item) => (
              <motion.article key={item.title} className={styles.highlightCard} whileHover={{ y: -6 }}>
                <div className={styles.imageWrap}>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className={styles.cardContent}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container split-layout">
          <div className={styles.teacherPhoto} aria-label="Students learning in class" />
          <div className="copy-panel">
            <p className="eyebrow">Academic pathways</p>
            <h2>Structured learning from JSS to SS</h2>
            <p>
              Our curriculum aligns with the Nigerian national system while offering a strong emphasis on
              subject mastery, continuous assessment, leadership and exam preparation.
            </p>
            <ul className="check-list">
              <li>JSS 1 to JSS 3 with a solid subject foundation</li>
              <li>SS 1 to SS 3 with focused WAEC, NECO and JAMB guidance</li>
              <li>Career awareness and mentoring for senior school learners</li>
            </ul>
            <Link to="/academics" className="button button-primary">
              Explore academics <FaChevronRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section muted-section">
        <div className="container">
          <SectionHeader
            eyebrow="Our teachers"
            title="Learning guided by experienced, caring educators"
          />
          <div className={styles.teacherGrid}>
            {schoolData.faculty.map((teacher) => (
              <article key={teacher.name} className={styles.teacherCard}>
                <img src={teacher.image} alt={teacher.name} />
                <div>
                  <h3>{teacher.name}</h3>
                  <p className={styles.teacherRole}>{teacher.role}</p>
                  <p>{teacher.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <SectionHeader
            eyebrow="School events"
            title="Moments that build belonging, pride and school spirit"
          />
          <div className={styles.eventGrid}>
            {schoolData.gallery.slice(0, 3).map((event) => (
              <article key={event.title} className={styles.eventCard}>
                <img src={event.image} alt={event.title} />
                <div>
                  <span>{event.tag}</span>
                  <h3>{event.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <SectionHeader
            eyebrow="Admissions journey"
            title="A simple, welcoming process for parents"
          />
          <div className="steps-grid">
            <div className="step-card">
              <span>01</span>
              <h3>Book a tour</h3>
              <p>Visit campus and understand our values, learning approach and school community.</p>
            </div>
            <div className="step-card">
              <span>02</span>
              <h3>Submit enquiry</h3>
              <p>Share your preferred year group and your child’s school background for a guided response.</p>
            </div>
            <div className="step-card">
              <span>03</span>
              <h3>Assessment & interview</h3>
              <p>We review readiness and provide an opportunity for families to ask questions.</p>
            </div>
            <div className="step-card">
              <span>04</span>
              <h3>Join the next session</h3>
              <p>Secure a place for a guided transition into the 2026/2027 academic year.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section muted-section">
        <div className="container">
          <SectionHeader
            eyebrow="Parent voices"
            title="Families trust our values and high standards"
          />
          <div className="testimonial-grid">
            {schoolData.testimonials.map((testimonial) => (
              <article key={testimonial.name} className="testimonial-card">
                <FaQuoteLeft />
                <p>{testimonial.quote}</p>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <SectionHeader eyebrow="Latest news" title="School updates and community highlights" />
          <div className="news-grid">
            {schoolData.news.slice(0, 3).map((story) => (
              <article key={story.title} className="news-card">
                <span className="tag">{story.category}</span>
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
                <small>{story.date}</small>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  )
}

export default HomePage
