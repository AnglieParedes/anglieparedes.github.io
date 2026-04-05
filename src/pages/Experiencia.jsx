import { useState } from 'react'
import emailjs from '@emailjs/browser'
import FadeUp from '../components/FadeUp'
import styles from './Experiencia.module.css'

const jobs = [
  { date: 'Jul 2025 — Presente', company: 'Morestudio', role: 'Desarrolladora Web', desc: 'Desarrollo web full WordPress: creación de sitios desde cero, diseño web, soporte y configuración de servidores, integración de plugins, copy asistido con IA, desarrollo de landing pages internas y formularios personalizados con PHP.', current: true },
  { date: 'Mar 2025 — Jun 2025', company: 'GDS Growth Digital Strategy', grouped: true, badge: '4 meses', roles: [ { role: 'Diseño Web', desc: 'Diseño y desarrollo de sitios web en WordPress y Shopify, con implementación en HTML y CSS.' }, { role: 'Diseñadora Gráfica Junior', desc: 'Diseño gráfico digital · Piezas de comunicación · Identidad corporativa · Branding · Contenido para web y redes sociales.' } ] },
  { date: 'Oct 2024 — Feb 2025', company: 'Catatumbo Solutions S.L.', role: 'Diseñadora Gráfica · Remoto España', desc: 'Comunicación visual, desarrollo de identidad corporativa y branding, creación de contenido para redes sociales y sitios web.', badge: '5 meses' },
  { date: 'May 2024 — Jun 2024', company: 'Asombroso Marketing Digital', role: 'Diseñadora Gráfica', desc: 'Creación de contenido para redes sociales, desarrollo de identidad corporativa y branding, análisis de datos, campañas en Google Ads, estrategia de marketing y gestión de crisis.', badge: '2 meses' },
  { date: 'Feb 2020 — Ene 2025', company: 'Gatis Shop', role: 'Fundadora & Directora Creativa', desc: 'Desarrollo de identidad corporativa y branding, packaging, desarrollo web en WordPress, e-commerce, importaciones y gestión de redes sociales. +3.200 seguidores.', badge: '5 años' },
  { date: 'Jun 2020 — Presente', company: 'Freelancer Independiente', role: 'Diseñadora Gráfica & Web', desc: 'Diseño y desarrollo web · Branding · Creación de contenido · E-commerce · Gestión de redes sociales · Ads', current: true },
]

const contractOptions = ['Full-time', 'Part-time', 'Freelance / Proyecto']

export default function Experiencia() {
  const [form, setForm] = useState({ name: '', company: '', email: '', contract: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      await emailjs.send('service_haeudti', 'template_mo6igye', {
        ...form,
        origin: 'Experiencia — Oportunidad laboral',
      }, 'V1tGeCs7e_jyBeg3q')
      setSent(true)
      setForm({ name: '', company: '', email: '', contract: '', message: '' })
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
          <div className={styles.secLabel}>03 — Experiencia</div>
          <h1 className={styles.heading}>
            Trayectoria<br />
            <span className={styles.accent}>profesional.</span>
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
                    {j.current ? 'Actual' : j.badge}
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
            <div className={styles.recruiterLabel}>¿Te interesa mi perfil?</div>
            <h2 className={styles.recruiterHeading}>
            Hablemos de <span className={styles.accent}>una oportunidad.</span>
            </h2>
            <p className={styles.recruiterSub}>
              Si buscas una diseñadora con visión estratégica, experiencia en UX/UI, 
              desarrollo web y branding — estás en el lugar correcto. 
              Cuéntame sobre la posición y con gusto conversamos.
            </p>

            {/* DISPONIBILIDAD */}
            <div className={styles.availRow}>
              <span className={styles.availDot} />
              <span className={styles.availText}>Disponible para nuevas oportunidades</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row2}>
                <div className={styles.group}>
                  <label className={styles.label}>Tu nombre</label>
                  <input name="name" value={form.name} onChange={handleChange} className={styles.input} placeholder="Nombre completo" required />
                </div>
                <div className={styles.group}>
                  <label className={styles.label}>Empresa</label>
                  <input name="company" value={form.company} onChange={handleChange} className={styles.input} placeholder="Nombre de la empresa" required />
                </div>
              </div>
              <div className={styles.row2}>
                <div className={styles.group}>
                  <label className={styles.label}>Email corporativo</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} className={styles.input} placeholder="tu@empresa.com" required />
                </div>
                <div className={styles.group}>
                  <label className={styles.label}>Tipo de contratación</label>
                  <select name="contract" value={form.contract} onChange={handleChange} className={styles.select} required>
                    <option value="" disabled>Selecciona una opción...</option>
                    {contractOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={styles.group}>
                <label className={styles.label}>Cuéntame sobre la oportunidad</label>
                <textarea name="message" value={form.message} onChange={handleChange} className={styles.textarea} placeholder="Describe el rol, el equipo, los desafíos del cargo..." required />
              </div>
              <button type="submit" className={`${styles.btn} ${sent ? styles.sent : ''}`} disabled={sending}>
                {sending ? 'Enviando...' : sent ? '✓ ¡Mensaje enviado! Te respondo pronto.' : 'Enviar mensaje →'}
              </button>
            </form>

            <a href="https://wa.me/56967531358" target="_blank" rel="noopener noreferrer" className={styles.linkedinCard} style={{marginTop: '1rem', borderColor: '#25D366'}}>
              <span style={{fontSize: '1.5rem'}}>💬</span>
              <div>
                <div className={styles.linkedinTitle}>¿Prefieres WhatsApp?</div>
                <div className={styles.linkedinSub}>Escríbeme directamente y te respondo en minutos.</div>
              </div>
              <span className={styles.linkedinArrow}>→</span>
            </a>

            {/* LINKEDIN CARD */}
            <a href="https://linkedin.com/in/anglieparedes" target="_blank" rel="noopener noreferrer" className={styles.linkedinCard}>
              <span className={styles.linkedinIcon}>in</span>
              <div>
                <div className={styles.linkedinTitle}>¿Prefieres LinkedIn?</div>
                <div className={styles.linkedinSub}>Revisa mi perfil completo y envíame un mensaje directo.</div>
              </div>
              <span className={styles.linkedinArrow}>→</span>
            </a>
          </FadeUp>
        </div>
      </section>
    </>
  )
}