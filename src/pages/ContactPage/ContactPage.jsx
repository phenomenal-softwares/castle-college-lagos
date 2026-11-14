import { useState } from 'react'
import { schoolData } from '../../data/schoolData'
import PageFrame from '../../components/PageFrame/PageFrame'
import FormField from '../../components/FormField/FormField'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

import styles from './ContactPage.module.css'

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!form.email.includes('@')) nextErrors.email = 'Please enter a valid email address.'
    if (!form.message.trim() || form.message.trim().length < 12) nextErrors.message = 'Please add a short message.'

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
    setSuccessMessage('This is a demo website, so the message is not delivered to the school. It is only a simulated contact request.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <PageFrame className={styles.page}>
      <section className="page-banner banner-contact">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>We would love to hear from you.</h1>
        </div>
      </section>

      <section className="content-section">
        <div className="container contact-grid">
          <div className="contact-cards">
            <article className="info-card compact-card">
              <div className="icon-wrap">
                <FaMapMarkerAlt />
              </div>
              <h3>Address</h3>
              <p>{schoolData.address}</p>
            </article>
            <article className="info-card compact-card">
              <div className="icon-wrap">
                <FaPhoneAlt />
              </div>
              <h3>Call us</h3>
              <p>{schoolData.phone}</p>
            </article>
            <article className="info-card compact-card">
              <div className="icon-wrap">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <p>{schoolData.email}</p>
            </article>
          </div>

          <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
            <h3>Send a message</h3>
            <p className="demo-note">Demo contact form only.</p>
            <FormField
              label="Your name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              error={errors.name}
            />
            <FormField
              label="Your email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              error={errors.email}
            />
            <label className="field textarea-field">
              <span>Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help?"
              />
              {errors.message ? <small className="field-error">{errors.message}</small> : null}
            </label>
            <button type="submit" className="button button-primary">
              Send demo message
            </button>
            {successMessage ? <p className="success-message">{successMessage}</p> : null}
          </form>
        </div>
      </section>
    </PageFrame>
  )
}

export default ContactPage
