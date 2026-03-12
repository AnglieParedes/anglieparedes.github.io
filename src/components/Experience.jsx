import FadeUp from './FadeUp'
import styles from './Experience.module.css'

const jobs = [
  { date: 'Jul 2025 — Presente', company: 'Morestudio', role: 'Desarrolladora Web', desc: 'Desarrollo web full WordPress: creación de sitios desde cero, soporte en servidores, diseño web, integración de plugins, copy con IA, landings internas y sistemas de formularios a medida con PHP.', current: true },
  { date: 'Jun 2025 — Presente', company: 'GDS Growth Digital Strategy', role: 'Diseñadora Web', desc: 'Diseño UX/UI y desarrollo web con WordPress, HTML, CSS y JavaScript para clientes en Chile.', current: true },
  { date: 'Mar 2025 — Jun 2025', company: 'GDS Growth Digital Strategy', role: 'Diseñadora Gráfica Junior', desc: 'Diseño gráfico para medios digitales, piezas de comunicación y branding de clientes.', badge: '4 meses' },
  { date: 'Oct 2024 — Feb 2025', company: 'Catatumbo Solutions S.L.', role: 'Diseñadora Gráfica · Remoto', desc: 'Comunicación visual y diseño gráfico para empresa española de soluciones integrales.', badge: '5 meses' },
  { date: 'May 2024 — Jun 2024', company: 'Asombroso Marketing Digital', role: 'Diseñadora Gráfica', desc: 'Diseño UX, análisis de datos, Google Ads, estrategia de marketing y gestión de crisis.', badge: '2 meses' },
  { date: 'Feb 2020 — Ene 2025', company: 'Gatis Shop', role: 'Fundadora & Directora Creativa', desc: 'Branding, e-commerce, importaciones, creación web y manejo de redes. +3.200 seguidores.', badge: '5 años' },
  { date: 'Jun 2020 — Presente', company: 'Freelancer Independiente', role: 'Diseñadora Gráfica & Web', desc: 'Branding, diseño web, e-commerce y RRSS para clientes en Chile, Venezuela y España.', current: true },
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
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
