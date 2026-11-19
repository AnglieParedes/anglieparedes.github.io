import { useState } from 'react'
import emailjs from '@emailjs/browser'
import FadeUp from '../components/FadeUp'
import { useLang, esValues } from '../i18n/LanguageContext'
import styles from './Experiencia.module.css'

export default function Experiencia() {
  const { t } = useLang()
  const x = t.experience
  const f = t.form
  const jobs = x.jobs
  const [form, setForm] = useState({ name: '', company: '', email: '', contract: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      await emailjs.send('service_v7gwsn9', 'template_mo6igye', {
        ...form,
        origin: 'Experiencia — Oportunidad laboral',
      }, 'V1tGeCs7e_jyBeg3q')
      setSent(true)
      setForm({ name: '', company: '', email: '', contract: '', message: '' })
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
          <div className={styles.secLabel}>{x.label}</div>
          <h1 className={styles.heading}>
            {x.heading[0]}<br />
            <span className={styles.accent}>{x.heading[1]}</span>
          </h1>
        </FadeUp>
      </section>

      {/* TIMELINE */}
      <section className={styles.exp}>
        <div>
          {jobs.map((j, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              {j.grouped ? (
                <div className={styles.row}>
                  <div className={styles.date}>{j.date}</div>
                  <div className={styles.content}>
                    <div className={styles.company}>{j.company}</div>
                    <div className={styles.groupedRoles}>
                      {j.roles.map((r, ri) => (
                        <div key={ri} className={styles.roleItem}>
                          <div className={styles.role}>{r.role}</div>
                          <div className={styles.desc}>{r.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <span className={styles.badge}>{j.badge}</span>
                </div>
              ) : (
                <div className={styles.row}>
                  <div className={styles.date}>{j.date}</div>
                  <div className={styles.content}>
                    <div className={styles.company}>{j.company}</div>
                    <div className={styles.role}>{j.role}</div>
                    <div className={styles.desc}>{j.desc}</div>
                  </div>
                  <span className={`${styles.badge} ${j.current ? styles.live : ''}`}>
                    {j.current ? x.current : j.badge}
                  </span>
                </div>
              )}
            </FadeUp>
          ))}
        </div>
      </section>

      {/* FORMULARIO RECLUTADOR */}
      <section className={styles.recruiterSection}>
        <div className={styles.recruiterInner}>
          <FadeUp>
            <div className={styles.recruiterLabel}>{x.recruiterLabel}</div>
            <h2 className={styles.recruiterHeading}>
            {x.recruiterHeading[0]}<span className={styles.accent}>{x.recruiterHeading[1]}</span>
            </h2>
            <p className={styles.recruiterSub}>
              {x.recruiterSub}
            </p>

            {/* DISPONIBILIDAD */}
            <div className={styles.availRow}>
              <span className={styles.availDot} />
              <span className={styles.availText}>{x.avail}</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row2}>
                <div className={styles.group}>
                  <label className={styles.label}>{x.yourName}</label>
                  <input name="name" value={form.name} onChange={handleChange} className={styles.input} placeholder={x.namePlaceholder} required />
                </div>
                <div className={styles.group}>
                  <label className={styles.label}>{x.company}</label>
                  <input name="company" value={form.company} onChange={handleChange} className={styles.input} placeholder={x.companyPlaceholder} required />
                </div>
              </div>
              <div className={styles.row2}>
                <div className={styles.group}>
                  <label className={styles.label}>{x.corpEmail}</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} className={styles.input} placeholder={x.emailPlaceholder} required />
                </div>
                <div className={styles.group}>
                  <label className={styles.label}>{x.contractType}</label>
                  <select name="contract" value={form.contract} onChange={handleChange} className={styles.select} required>
                    <option value="" disabled>{x.selectOption}</option>
                    {x.contractOptions.map((opt, i) => (
                      <option key={esValues.contractOptions[i]} value={esValues.contractOptions[i]}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={styles.group}>
                <label className={styles.label}>{x.opportunity}</label>
                <textarea name="message" value={form.message} onChange={handleChange} className={styles.textarea} placeholder={x.messagePlaceholder} required />
              </div>
              <button type="submit" className={`${styles.btn} ${sent ? styles.sent : ''}`} disabled={sending}>
                {sending ? f.sending : sent ? f.sentLong : f.submit}
              </button>
            </form>

            <a href="https://wa.me/56967531358" target="_blank" rel="noopener noreferrer" className={styles.linkedinCard} style={{marginTop: '1rem', borderColor: '#25D366'}}>
              <span style={{fontSize: '1.5rem'}}>💬</span>
              <div>
                <div className={styles.linkedinTitle}>{x.whatsappTitle}</div>
                <div className={styles.linkedinSub}>{x.whatsappSub}</div>
              </div>
              <span className={styles.linkedinArrow}>→</span>
            </a>

            {/* LINKEDIN CARD */}
            <a href="https://linkedin.com/in/anglieparedes" target="_blank" rel="noopener noreferrer" className={styles.linkedinCard}>
              <span className={styles.linkedinIcon}>in</span>
              <div>
                <div className={styles.linkedinTitle}>{x.linkedinTitle}</div>
                <div className={styles.linkedinSub}>{x.linkedinSub}</div>
              </div>
              <span className={styles.linkedinArrow}>→</span>
            </a>
          </FadeUp>
        </div>
      </section>
    </>
  )
}