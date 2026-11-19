import { useState } from 'react'
import emailjs from '@emailjs/browser'
import FadeUp from './FadeUp'
import { useLang, esValues } from '../i18n/LanguageContext'
import styles from './Contact.module.css'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  const f = t.form
  const contactItems = [
    { icon: '✉', label: 'Email', value: 'anglie.design@gmail.com', href: 'mailto:anglie.design@gmail.com' },
    { icon: '📱', label: 'WhatsApp', value: c.whatsappValue, href: 'https://wa.me/56967531358' },
    { icon: 'in', label: 'LinkedIn', value: 'anglieparedes', href: 'https://linkedin.com/in/anglieparedes' },
    { icon: '📍', label: c.locationLabel, value: c.locationValue, href: null },
  ]
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      await emailjs.send('service_v7gwsn9', 'template_mo6igye', {
        ...form,
        origin: 'Contacto — Formulario general',
      }, 'V1tGeCs7e_jyBeg3q')
      setSent(true)
      setForm({ name: '', email: '', service: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    } catch (err) {
      console.error(err)
      alert(f.error)
    } finally {
      setSending(false)
    }
  }

  return (
    <section className={styles.contact} id="contact">
      <FadeUp>
        <div className={styles.secLabel}>{c.label}</div>
        <h2 className={styles.heading}>{c.heading[0]}<br />{c.heading[1]}</h2>
        <div className={styles.divider} />
      </FadeUp>

      <div className={styles.grid}>
        <FadeUp delay={0.1}>
          <p className={styles.intro}>
            {c.intro}
          </p>
          <div className={styles.items}>
            {contactItems.map((item) => (
              <div key={item.label} className={styles.item}>
                <div className={styles.icon}>{item.icon}</div>
                <div>
                  <div className={styles.itemLabel}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} className={styles.itemVal}>{item.value}</a>
                    : <span className={styles.itemVal}>{item.value}</span>
                  }
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row2}>
              <div className={styles.group}>
                <label className={styles.label}>{f.name}</label>
                <input name="name" value={form.name} onChange={handleChange} className={styles.input} placeholder={f.namePlaceholder} required />
              </div>
              <div className={styles.group}>
                <label className={styles.label}>{f.email}</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} className={styles.input} placeholder={f.emailPlaceholder} required />
              </div>
            </div>
            <div className={styles.group}>
              <label className={styles.label}>{f.service}</label>
              <select name="service" value={form.service} onChange={handleChange} className={styles.select} required>
                <option value="" disabled>{f.selectService}</option>
                {f.serviceOptions.map((opt, i) => (
                  <option key={esValues.serviceOptions[i]} value={esValues.serviceOptions[i]}>{opt}</option>
                ))}
              </select>
            </div>
            <div className={styles.group}>
              <label className={styles.label}>{f.message}</label>
              <textarea name="message" value={form.message} onChange={handleChange} className={styles.textarea} placeholder={f.messagePlaceholder} required />
            </div>
            <button type="submit" className={`${styles.btn} ${sent ? styles.sent : ''}`} disabled={sending}>
              {sending ? f.sending : sent ? f.sentShort : f.submit}
            </button>
          </form>
        </FadeUp>
      </div>
    </section>
  )
}