import FadeUp from './FadeUp'
import styles from './Experience.module.css'

const jobs = [
  { date: 'Jul 2025 — Presente', company: 'Morestudio', role: 'Desarrolladora Web', desc: 'Desarrollo web full WordPress: creación de sitios desde cero, diseño web, soporte y configuración de servidores, integración de plugins, copy asistido con IA, desarrollo de landing pages internas y formularios personalizados con PHP.', current: true },
  { date: 'Mar 2025 — Dic 2025', company: 'GDS Growth Digital Strategy', grouped: true, badge: '4 meses', current: false, roles: [ { role: 'Diseño Web', date: 'Jun 2025 — Dic 2025', desc: 'Diseño y desarrollo de sitios web en WordPress y Shopify, con implementación en HTML y CSS.', badge: '1 mes' }, { role: 'Diseñadora Gráfica Junior', date: 'Mar 2025 — May 2025', desc: 'Diseño gráfico digital · Piezas de comunicación · Identidad corporativa · Branding · Contenido para web y redes sociales.', badge: '3 meses' } ] },
  { date: 'Oct 2024 — Feb 2025', company: 'Catatumbo Solutions S.L.', role: 'Diseñadora Gráfica · Remoto España', desc: 'Comunicación visual, desarrollo de identidad corporativa y branding, creación de contenido para redes sociales y sitios web.', badge: '5 meses' },
  { date: 'May 2024 — Jun 2024', company: 'Asombroso Marketing Digital', role: 'Diseñadora Gráfica', desc: 'Creación de contenido para redes sociales, desarrollo de identidad corporativa y branding, análisis de datos, campañas en Google Ads, estrategia de marketing y gestión de crisis.', badge: '2 meses' },
  { date: 'Feb 2020 — Ene 2025', company: 'Gatis Shop', role: 'Fundadora & Directora Creativa', desc: 'Desarrollo de identidad corporativa y branding, packaging, desarrollo web en WordPress, e-commerce, importaciones y gestión de redes sociales. +3.200 seguidores.', badge: '5 años' },
  { date: 'Jun 2020 — Presente', company: 'Freelancer Independiente', role: 'Diseñadora Gráfica & Web', desc: 'Diseño y desarrollo web · Branding · Creación de contenido · E-commerce · Gestión de redes sociales · Ads', current: true },
]

export default function Experience() {
  return (
    <section className={styles.exp} id="experience">
      <FadeUp>
        <div className={styles.secLabel}>04 — Experiencia</div>
        <h2 className={styles.heading}>Trayectoria<br />profesional.</h2>
        <div className={styles.divider} />
      </FadeUp>
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
                        <div className={styles.roleItemHeader}>
                          <span className={styles.role}>{r.role}</span>
                          
                          
                        </div>
                        <div className={styles.desc}>{r.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <span className={`${styles.badge} ${styles.badgeHidden}`}>{j.badge}</span>
              </div>
            ) : (
              <div className={styles.row}>
                <div className={styles.date}>{j.date}</div>
                <div className={styles.content}>
                  <div className={styles.company}>{j.company}</div>
                  <div className={styles.role}>{j.role}</div>
                  <div className={styles.desc}>{j.desc}</div>
                </div>
                <span className={`${styles.badge} ${j.current ? styles.live : ''}`}>{j.current ? 'Actual' : j.badge}</span>
              </div>
            )}
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
