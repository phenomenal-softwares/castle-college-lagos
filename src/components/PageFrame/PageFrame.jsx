import { motion, useReducedMotion } from 'motion/react'
import styles from './PageFrame.module.css'

function PageFrame({ children, className = '' }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={`${styles.pageFrame} page-frame ${className}`}
      initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : -12 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default PageFrame
