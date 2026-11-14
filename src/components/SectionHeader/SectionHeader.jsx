import { motion, useReducedMotion } from 'motion/react'
import styles from './SectionHeader.module.css'

function SectionHeader({ eyebrow, title, text }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={`${styles.sectionHeader} section-header`}
      initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: 'easeOut' }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="lede">{text}</p> : null}
    </motion.div>
  )
}

export default SectionHeader
