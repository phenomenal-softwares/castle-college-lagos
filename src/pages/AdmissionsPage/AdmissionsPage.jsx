import { useState } from 'react'
import { schoolData } from '../../data/schoolData'
import PageFrame from '../../components/PageFrame/PageFrame'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import FormField from '../../components/FormField/FormField'
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion'

import styles from './AdmissionsPage.module.css'

function AdmissionsPage() {
  const [form, setForm] = useState({ name: '', email: '', childClass: '', message: '' })
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Please enter your full name.'
    if (!form.email.includes('@')) nextErrors.email = 'Please enter a valid email address.'
    if (!form.childClass.trim()) nextErrors.childClass = 'Please choose a class or year group.'
    if (!form.message.trim() || form.message.trim().length < 12) nextErrors.message = 'Tell us a little more about your enquiry.'

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateForm()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSuccessMessage('')
      return
    }

    setErrors({})
    setSuccessMessage('This is a demonstration website, so this enquiry is only a simulated admissions request. No real school record is being submitted.')
    setForm({ name: '', email: '', childClass: '', message: '' })
  }

  return (
    <PageFrame className={styles.page}>
      <section className="page-banner banner-admissions">
        <div className="container">
          <p className="eyebrow">Admissions</p>
          <h1>We look forward to welcoming your family.</h1>
        </div>
      </section>

      <section className="content-section">
        <div className="container admissions-grid">
          <div>
            <SectionHeader eyebrow="How to apply" title="A family-first admissions process" />
            <div className="steps-list">
              <div className="mini-step">
                <span>1</span>
                <div>
                  <h3>Arrange a visit</h3>
                  <p>Schedule a campus tour and speak with the school team.</p>
                </div>
              </div>
              <div className="mini-step">
                <span>2</span>
                <div>
                  <h3>Complete enquiry form</h3>
                  <p>Share your child’s current level and your preferred year group.</p>
                </div>
              </div>
              <div className="mini-step">
                <span>3</span>
                <div>
                  <h3>Receive guidance</h3>
                  <p>We provide next steps and key dates for the 2026/2027 session.</p>
                </div>
              </div>
            </div>
          </div>

          <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
            <h3>Admissions enquiry</h3>
            <p className="demo-note">Demo form only — no real submission is processed.</p>
            <FormField
              label="Parent or guardian name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              error={errors.name}
            />
            <FormField
              label="Email address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              error={errors.email}
            />
            <FormField
              label="Preferred entry class"
              name="childClass"
              value={form.childClass}
              onChange={handleChange}
              placeholder="JSS 1, SS 1, or another class"
              error={errors.childClass}
            />
            <label className="field textarea-field">
              <span>Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your child’s needs and any questions you have."
              />
              {errors.message ? <small className="field-error">{errors.message}</small> : null}
            </label>
            <button type="submit" className="button button-primary">
              Submit demo enquiry
            </button>
            {successMessage ? <p className="success-message">{successMessage}</p> : null}
          </form>
        </div>
      </section>

      <section className="content-section muted-section">
        <div className={`container ${styles.faqContainer}`}>
          <SectionHeader
            eyebrow="Admissions FAQs"
            title="Answers to common application questions"
            text="Expand a question to learn more about visiting, entry years and the admissions process."
          />
          <FaqAccordion items={schoolData.admissionsFaqs} />
        </div>
      </section>
    </PageFrame>
  )
}

export default AdmissionsPage
