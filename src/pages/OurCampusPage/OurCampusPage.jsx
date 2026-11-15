import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import 'yet-another-react-lightbox/plugins/captions.css'
import { schoolData } from '../../data/schoolData'
import PageFrame from '../../components/PageFrame/PageFrame'
import SectionHeader from '../../components/SectionHeader/SectionHeader'

import styles from './OurCampusPage.module.css'

const lightboxSlides = [
  ...schoolData.facilities.map((facility) => ({
    src: facility.image.replace('w=900', 'w=1800'),
    alt: facility.name,
    description: facility.description,
  })),
  ...schoolData.gallery.map((item) => ({
    src: item.image.replace('w=900', 'w=1800'),
    alt: item.title,
    description: `${item.tag} — ${item.title}`,
  })),
]

function OurCampusPage() {
  const [activeIndex, setActiveIndex] = useState(-1)

  return (
    <PageFrame className={styles.page}>
      <section className="page-banner banner-campus">
        <div className="container">
          <p className="eyebrow">Our Campus</p>
          <h1>Spaces and experiences that bring learning to life.</h1>
          <div className={styles.sectionLinks}>
            <a href="#facilities" className="button button-primary">Explore facilities</a>
            <a href="#gallery" className={`button button-light ${styles.galleryLink}`}>View campus gallery</a>
          </div>
        </div>
      </section>

      <section id="facilities" className="content-section">
        <div className="container">
          <SectionHeader
            eyebrow="Facilities"
            title="Purposeful spaces for learning, care and growth"
            text="Explore the places and resources that support a safe, engaging and well-rounded school experience."
          />
          <div className="facility-grid">
            {schoolData.facilities.map((facility, index) => (
              <article key={facility.name} className="facility-card">
                <button
                  type="button"
                  className={`${styles.imageButton} ${styles.facilityImage}`}
                  aria-label={`View ${facility.name} photo`}
                  onClick={() => setActiveIndex(index)}
                >
                  <img className={styles.photo} src={facility.image} alt="" loading="lazy" />
                </button>
                <div className="facility-copy">
                  <h3>{facility.name}</h3>
                  <p>{facility.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="content-section muted-section">
        <div className="container">
          <SectionHeader
            eyebrow="Campus gallery"
            title="Moments from learning, community and celebration"
            text="Open any photo to view it larger. Swipe or use the on-screen controls to browse all campus photos."
          />
          <div className="gallery-grid">
            {schoolData.gallery.map((item, index) => (
              <figure key={item.title} className="gallery-item">
                <button
                  type="button"
                  className={`${styles.imageButton} ${styles.galleryImage}`}
                  aria-label={`View ${item.title} photo`}
                  onClick={() => setActiveIndex(schoolData.facilities.length + index)}
                >
                  <img className={styles.photo} src={item.image} alt="" loading="lazy" />
                </button>
                <figcaption>
                  <span>{item.tag}</span>
                  <strong>{item.title}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={activeIndex >= 0}
        close={() => setActiveIndex(-1)}
        index={activeIndex}
        slides={lightboxSlides}
        plugins={[Captions]}
        controller={{ closeOnBackdropClick: true }}
      />
    </PageFrame>
  )
}

export default OurCampusPage
