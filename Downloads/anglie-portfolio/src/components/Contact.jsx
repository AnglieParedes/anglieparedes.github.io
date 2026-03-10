import { useState } from 'react'
import FadeUp from './FadeUp'
import styles from './Contact.module.css'

const contactItems = [
  { icon: '✉', label: 'Email', value: 'aeparedest@gmail.com', href: 'mailto:aeparedest@gmail.com' },
  { icon: '✉', label: 'Email alternativo', value: 'atparedes@icloud.com', href: 'mailto:atparedes@icloud.com' },
  { icon: '📱', label: 'WhatsApp', value: '+569 6753 1358', href: 'https://wa.me/56967531358' },
  { icon: 'in', label: 'LinkedIn', value: 'anglieparedes', href: 'https://linkedin.com/in/anglieparedes' },
  { icon: '📍', label: 'Ubicación', value: 'Santiago, Chile', href: null },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    // EmailJS integration — reemplaza los IDs cuando configures tu cuenta
    // import emailjs from '@emailjs/browser'
    // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
    await new Promise(r => setTimeout(r, 1200)) // simulación
    setSending(false)
    setSent(true)
    setForm({ name: '', email: '', service: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className={styles.contact} id="contact">
      <FadeUp>
        <div className={styles.secLabel}>06 — Contacto</div>
        <h2 className={styles.heading}>Trabajemos<br />juntos.</h2>
        <div className={styles.divider} />
      </FadeUp>

      <div className={styles.grid}>
        <FadeUp delay={0.1}>
          <p className={styles.intro}>
            ¿Tienes un proyecto en mente? Me encantaría escucharte.
            Disponible para proyectos freelance, colaboraciones y
            oportunidades full-time.
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
                <label className={styles.label}>Nombre</label>
                <input name="name" value={form.name} onChange={handleChange} className={styles.input} placeholder="Tu nombre" required />
              </div>
              <div className={styles.group}>
                <label className={styles.label}>Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} className={styles.input} placeholder="tu@email.com" required />
              </div>
            </div>
            <div className={styles.group}>
              <label className={styles.label}>Servicio de interés</label>
              <input name="service" value={form.service} onChange={handleChange} className={styles.input} placeholder="Branding, RRSS, Web, UX/UI..." />
            </div>
            <div className={styles.group}>
              <label className={styles.label}>Mensaje</label>
              <textarea name="message" value={form.message} onChange={handleChange} className={styles.textarea} placeholder="Cuéntame sobre tu proyecto..." required />
            </div>
            <button type="submit" className={`${styles.btn} ${sent ? styles.sent : ''}`} disabled={sending}>
              {sending ? 'Enviando...' : sent ? '✓ ¡Mensaje enviado!' : 'Enviar mensaje →'}
            </button>
          </form>
        </FadeUp>
      </div>
    </section>
  )
}
