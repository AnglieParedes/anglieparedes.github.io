import { Link } from 'react-router-dom'
import FadeUp from './FadeUp'
import { useLang } from '../i18n/LanguageContext'
import styles from './About.module.css'

export default function About() {
  const { t } = useLang()
  const a = t.about
  const { stats, skills } = a
  return (
    <section className={styles.about} id="about">
      <FadeUp>
        <div className={styles.secLabel}>{a.label}</div>
        <h2 className={styles.heading}>{a.heading[0]}<br />{a.heading[1]}</h2>
        <div className={styles.divider} />
      </FadeUp>

      <div className={styles.grid}>
        <FadeUp delay={0.1}>
          <div className={styles.statsRow}>
            {stats.map((s) => (
              <div key={s.l} className={styles.stat}>
                <span className={styles.statN}>{s.n}</span>
                <span className={styles.statL}>{s.l}</span>
              </div>
            ))}
          </div>
          <p>{a.p1}</p>
          <p>{a.p2.pre}<strong>{a.p2.strong}</strong>{a.p2.post}</p>
          <p>{a.p3}</p>
          <blockquote className={styles.quote}>
            {a.quote}
          </blockquote>
          <Link to="/experiencia" className={styles.btnMore}>
            {a.more}
          </Link>
        </FadeUp>

        <FadeUp delay={0.2}>
          {skills.map((group) => (
            <div key={group.cat} className={styles.skillGroup}>
              <div className={styles.skillCat}>{group.cat}</div>
              <div className={styles.skillTags}>
                {group.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  )
}