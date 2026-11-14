import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import styles from './ScrollToTop.module.css'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 400)

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  function handleBackToTop() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, left: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return isVisible ? (
    <button
      type="button"
      className={styles.backToTop}
      aria-label="Back to top"
      onClick={handleBackToTop}
    >
      <FaArrowUp aria-hidden="true" />
    </button>
  ) : null
}

export default ScrollToTop
