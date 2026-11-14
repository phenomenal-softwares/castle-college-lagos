import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { schoolData } from '../../data/schoolData'
import styles from './SiteHeader.module.css'

function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [heroVisible, setHeroVisible] = useState(true)
  const menuButtonRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    if (!isHome) return undefined

    let heroObserver
    const observeHero = () => {
      const hero = document.getElementById('home-hero')
      if (!hero) return false

      heroObserver = new IntersectionObserver(([entry]) => {
        setHeroVisible(entry.isIntersecting)
      })
      heroObserver.observe(hero)
      return true
    }

    if (observeHero()) {
      return () => heroObserver?.disconnect()
    }

    const pageObserver = new MutationObserver(() => {
      if (observeHero()) pageObserver.disconnect()
    })
    pageObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      pageObserver.disconnect()
      heroObserver?.disconnect()
    }
  }, [isHome])

  useEffect(() => {
    if (!mobileOpen) return undefined

    const handlePointerDown = (event) => {
      if (mobileMenuRef.current?.contains(event.target) || menuButtonRef.current?.contains(event.target)) return
      setMobileOpen(false)
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [mobileOpen])

  const closeMenu = () => setMobileOpen(false)

  return (
    <header
      className={`${styles.header} site-header ${isHome ? styles.homeHeader : ''} ${
        isHome && !heroVisible ? styles.compactHeader : ''
      }`}
    >
      <div className="container nav-row">
        <Link to="/" className="brand" aria-label="Castle Royal home" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="Castle Royal Logo"
            className={styles.logo}
            width={48}
            height={48}
          />
          <span>
            <strong>{schoolData.name}</strong>
            <small>{schoolData.shortName}</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {schoolData.navigation.map((item, index) => (
            <motion.div
              key={item.to}
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.25,
                delay: shouldReduceMotion ? 0 : index * 0.04,
                ease: 'easeOut',
              }}
            >
              <NavLink
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {item.label}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        <div className="nav-actions">
          <Link to="/admissions" className="button button-primary" onClick={closeMenu}>
            Apply now
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            className={`menu-button ${styles.menuButton}`}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.nav
            ref={mobileMenuRef}
            id="mobile-navigation"
            className={`mobile-menu ${styles.mobileMenu}`}
            aria-label="Mobile navigation"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {schoolData.navigation.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.25,
                  delay: shouldReduceMotion ? 0 : index * 0.04,
                  ease: 'easeOut',
                }}
              >
                <NavLink
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default SiteHeader
