import FadeUp from './FadeUp'
import { useLang } from '../i18n/LanguageContext'
import styles from './Education.module.css'

export default function Education() {
  const { t } = useLang()
  const e = t.education
  const items = e.items
  return (
    <section className={styles.edu} id="education">
      <FadeUp>
        <div className={styles.secLabel}>{e.label}</div>
        <h2 className={styles.heading}>{e.heading[0]}<br />{e.heading[1]}</h2>
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
