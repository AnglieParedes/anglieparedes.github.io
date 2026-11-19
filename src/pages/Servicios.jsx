import { useState } from 'react'
import emailjs from '@emailjs/browser'
import FadeUp from '../components/FadeUp'
import { useLang, esValues } from '../i18n/LanguageContext'
import styles from './Servicios.module.css'

export default function Servicios() {
  const { t } = useLang()
  const sp = t.servicesPage
  const f = t.form
  const services = sp.list
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
        origin: 'Servicios — Formulario de proyecto',
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
    <>
      {/* HERO */}
      <section className={styles.pageHero}>
        <FadeUp>
          <div className={styles.secLabel}>{sp.label}</div>
          <h1 className={styles.heading}>
            {sp.heading[0]}<br />
            <span className={styles.accent}>{sp.heading[1]}</span>
          </h1>
          <p className={styles.heroSub}>
            {sp.heroSub}
          </p>
        </FadeUp>
      </section>

      {/* LISTA DE SERVICIOS */}
      <section className={styles.servicesList}>
        {services.map((s, i) => (
          <FadeUp key={s.num} delay={i * 0.08}>
            <div className={styles.serviceRow}>
              <span className={styles.serviceNum}>{s.num}</span>
              <div className={styles.serviceInfo}>
                <h2 className={styles.serviceName}>{s.name}</h2>
                <p className={styles.serviceDesc}>{s.desc}</p>
              </div>
              <div className={styles.serviceTags}>
                {s.entregables.map((e) => (
                  <span key={e} className={styles.tag}>{e}</span>
                ))}
                {s.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </section>

      {/* FORMULARIO DESTACADO */}
      <section className={styles.contactSection}>
        <div className={styles.contactInner}>
          <FadeUp>
            <div className={styles.contactLabel}>{sp.contactLabel}</div>
            <h2 className={styles.contactHeading}>
              {sp.contactHeading[0]}<br />
              <span className={styles.accent}>{sp.contactHeading[1]}</span>
            </h2>
            <p className={styles.contactSub}>
              {sp.contactSub}
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row2}>
                <div className={styles.group}>
                  <label className={styles.label}>{f.name}</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder={f.namePlaceholder}
                    required
                  />
                </div>
                <div className={styles.group}>
                  <label className={styles.label}>{f.email}</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder={f.emailPlaceholder}
                    required
                  />
                </div>
              </div>

              <div className={styles.group}>
                <label className={styles.label}>{f.service}</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={styles.select}
                  required
                >
                  <option value="" disabled>{f.selectService}</option>
                  {f.serviceOptions.map((opt, i) => (
                    <option key={esValues.serviceOptions[i]} value={esValues.serviceOptions[i]}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className={styles.group}>
                <label className={styles.label}>{f.message}</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder={f.messagePlaceholder}
                  required
                />
              </div>

              <button
                type="submit"
                className={`${styles.btn} ${sent ? styles.sent : ''}`}
                disabled={sending}
              >
                {sending ? f.sending : sent ? f.sentShort : f.submit}
              </button>
            </form>
          </FadeUp>
        </div>
      </section>
    </>
  )
}