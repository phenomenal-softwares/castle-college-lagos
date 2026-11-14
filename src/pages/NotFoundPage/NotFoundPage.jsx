import { Link } from 'react-router-dom'
import PageFrame from '../../components/PageFrame/PageFrame'

import styles from './NotFoundPage.module.css'

function NotFoundPage() {
  return (
    <PageFrame className={styles.page}>
      <section className="content-section not-found-section">
        <div className="container not-found-wrap">
          <p className="eyebrow">404</p>
          <h1>Page not found.</h1>
          <p>The page you are looking for does not appear to exist on Castle Royal College’s demo website.</p>
          <Link to="/" className="button button-primary">
            Return home
          </Link>
        </div>
      </section>
    </PageFrame>
  )
}

export default NotFoundPage
