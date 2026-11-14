import { useState } from 'react'
import { schoolData } from '../../data/schoolData'
import PageFrame from '../../components/PageFrame/PageFrame'

import styles from './NewsPage.module.css'

const categories = ['All', 'Academics', 'Events', 'Announcements']

function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filteredNews =
    activeCategory === 'All'
      ? schoolData.news
      : schoolData.news.filter((story) => story.category === activeCategory)

  return (
    <PageFrame className={styles.page}>
      <section className="page-banner banner-news">
        <div className="container">
          <p className="eyebrow">News & announcements</p>
          <h1>Updates from the school community.</h1>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className={styles.filters} role="group" aria-label="Filter news by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`${styles.filterButton} ${activeCategory === category ? styles.activeFilter : ''}`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="news-grid full-grid">
            {filteredNews.map((story) => (
              <article key={story.title} className="news-card">
                <span className="tag">{story.category}</span>
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
                <small>{story.date}</small>
              </article>
            ))}
            {filteredNews.length === 0 ? (
              <p className={styles.emptyState} role="status">
                There are no updates in this category yet.
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </PageFrame>
  )
}

export default NewsPage
