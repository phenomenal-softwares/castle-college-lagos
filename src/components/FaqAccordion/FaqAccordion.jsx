import { useId, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import styles from './FaqAccordion.module.css'

function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)
  const accordionId = useId()

  return (
    <div className={styles.faqList}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `${accordionId}-panel-${index}`
        const buttonId = `${accordionId}-button-${index}`

        return (
          <section key={item.question} className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}>
            <h3 className={styles.question}>
              <button
                id={buttonId}
                type="button"
                className={styles.questionButton}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <FaChevronDown className={styles.arrow} aria-hidden="true" />
              </button>
            </h3>
            <div
              id={panelId}
              className={styles.answer}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              inert={!isOpen}
            >
              <div className={styles.answerContent}>
                <p>{item.answer}</p>
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default FaqAccordion
