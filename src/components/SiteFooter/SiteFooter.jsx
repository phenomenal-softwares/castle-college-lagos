import { Link } from 'react-router-dom'
import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { schoolData } from '../../data/schoolData'
import styles from './SiteFooter.module.css'

const currentYear = new Date().getFullYear()

function SiteFooter() {
  return (
    <footer className={`${styles.footer} site-footer`}>
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">CR</span>
            <span>
              <strong>{schoolData.name}</strong>
              <small>{schoolData.motto}</small>
            </span>
          </div>
          <p className="footer-copy">
            A fictional demonstration website created for a school portfolio project in Lagos, Nigeria.
          </p>
        </div>

        <div>
          <h3>Visit</h3>
          <ul className="footer-list">
            <li>
              <FaMapMarkerAlt /> {schoolData.address}
            </li>
            <li>
              <FaPhoneAlt /> {schoolData.phone}
            </li>
            <li>
              <FaEnvelope /> {schoolData.email}
            </li>
          </ul>
        </div>

        <div>
          <h3>Quick links</h3>
          <ul className="footer-list">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/academics">Academics</Link>
            </li>
            <li>
              <Link to="/admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/portal">Portal</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Connect</h3>
          <div className="social-row">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>
            © {currentYear} {schoolData.name}. Demonstration website.{' '}
            <span className={styles.creditDivider}>|</span> Website by{' '}
            <a
              className={styles.creatorLink}
              href={schoolData.creator.website}
              target="_blank"
              rel="noreferrer"
            >
              {schoolData.creator.name}
            </a>
          </p>
        </div>
      </div>
      <a
        className={styles.whatsappButton}
        href={schoolData.creator.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with the creator on WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" />
      </a>
    </footer>
  )
}

export default SiteFooter
