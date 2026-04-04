import { useState } from 'react'
import emailjs from '@emailjs/browser'
import FadeUp from '../components/FadeUp'
import styles from './Servicios.module.css'

const services = [
  {
    num: '01',
    name: 'Landing Page',
    desc: 'Páginas de aterrizaje diseñadas para convertir visitantes en clientes. Rápidas, atractivas y optimizadas.',
    tags: ['WordPress', 'Vercel', 'GitHub'],
    entregables: [],
  },
  {
    num: '02',
    name: 'E-commerce',
    desc: 'Tiendas online completas con pasarela de pagos, gestión de productos y experiencia de compra optimizada.',
    tags: ['WordPress', 'WooCommerce', 'Vercel', 'Shopify'],
    entregables: [],
  },
  {
    num: '03',
    name: 'Sitio Corporativo',
    desc: 'Presencia web profesional para empresas que quieren destacar, con diseño a medida y resultados reales.',
    tags: ['WordPress', 'Vercel', 'GitHub'],
    entregables: [],
  },
  {
    num: '04',
    name: 'Identidad & Branding',
    desc: 'Desarrollo de identidad corporativa, branding, rebranding y renovación de identidad corporativa. Tu marca con carácter y coherencia visual.',
    tags: [],
    entregables: ['PNG', 'JPG', 'SVG', 'PDF', 'Manual de marca', 'Manual corporativo'],
  },
  {
    num: '05',
    name: 'Publicidad Digital',
    desc: 'Creación, gestión y optimización de campañas publicitarias en Meta Ads (Facebook e Instagram) y Google Ads. Segmentación de audiencias, seguimiento de resultados y reportes mensuales para maximizar tu inversión.',
    tags: ['Meta Ads', 'Google Ads'],
    entregables: [],
  },
  {
    num: '06',
    name: 'Consultoría',
    desc: 'Asesoría estratégica en diseño de marca, identidad visual, desarrollo web y registro de marca. Te acompaño desde la idea hasta la ejecución: definición de naming, paleta de color, tipografía, manual de marca, manual corporativo y posicionamiento digital.',
    tags: [],
    entregables: [],
  },
]

const serviceOptions = [
    'Landing Page',
    'E-commerce',
    'Sitio Corporativo',
    'Identidad & Branding',
    'Consultoría',
    'Otro',
]

export default function Servicios() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      await emailjs.send('service_haeudti', 'template_mo6igye', form, 'V1tGeCs7e_jyBeg3q')
      setSent(true)
      setForm({ name: '', email: '', service: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    } catch (err) {
      console.error(err)
      alert('Error al enviar, intenta de nuevo.')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* HERO */}
      <section className={styles.pageHero}>
        <FadeUp>
          <div className={styles.secLabel}>02 — Servicios</div>
          <h1 className={styles.heading}>
            Mis<br />
            <span className={styles.accent}>Servicios.</span>
          </h1>
          <p className={styles.heroSub}>
            Soluciones digitales completas pensadas para marcas y emprendedores
            que quieren crecer con diseño estratégico y resultados reales.
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
            <div className={styles.contactLabel}>¿Listo para empezar?</div>
            <h2 className={styles.contactHeading}>
              Hablemos de<br />
              <span className={styles.accent}>tu proyecto.</span>
            </h2>
            <p className={styles.contactSub}>
              Cuéntame qué necesitas y te respondo en menos de 24 horas.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row2}>
                <div className={styles.group}>
                  <label className={styles.label}>Nombre</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div className={styles.group}>
                  <label className={styles.label}>Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div className={styles.group}>
                <label className={styles.label}>Servicio de interés</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={styles.select}
                  required
                >
                  <option value="" disabled>Selecciona un servicio...</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className={styles.group}>
                <label className={styles.label}>Mensaje</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                />
              </div>

              <button
                type="submit"
                className={`${styles.btn} ${sent ? styles.sent : ''}`}
                disabled={sending}
              >
                {sending ? 'Enviando...' : sent ? '✓ ¡Mensaje enviado!' : 'Enviar mensaje →'}
              </button>
            </form>
          </FadeUp>
        </div>
      </section>
    </>
  )
}