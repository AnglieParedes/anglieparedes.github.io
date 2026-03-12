import FadeUp from './FadeUp'
import styles from './Education.module.css'

const items = [
  { ico: '🎓', deg: 'Técnico en Diseño Gráfico', school: 'Universidad Virtual Internacional', year: '2020 — 2022' },
  { ico: '🏆', deg: 'Certificación UX (3/7 en curso)', school: 'Google', year: 'En progreso' },
  { ico: '⚡', deg: 'Certificado en JavaScript', school: 'Coderhouse', year: '2024 — Online' },
  { ico: '📊', deg: 'Diplomado Finanzas Corporativas', school: 'Universidad Virtual Internacional', year: '2022' },
  { ico: '✏️', deg: 'Diplomado en Diseño Gráfico', school: 'Shaw Academy', year: '2020' },
  { ico: '📣', deg: 'Digital Marketing', school: 'Udemy', year: '2020' },
]

export default function Education() {
  return (
    <section className={styles.edu} id="education">
      <FadeUp>
        <div className={styles.secLabel}>05 — Formación</div>
        <h2 className={styles.heading}>Educación &<br />Certificaciones.</h2>
        <div className={styles.divider} />
      </FadeUp>
      <div className={styles.grid}>
        {items.map((item, i) => (
          <FadeUp key={i} delay={i * 0.08}>
            <div className={styles.card}>
              <span className={styles.ico}>{item.ico}</span>
              <div className={styles.deg}>{item.deg}</div>
              <div className={styles.school}>{item.school}</div>
              <div className={styles.year}>{item.year}</div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
