import Experience from '../components/Experience'
import Education from '../components/Education'
import FadeUp from '../components/FadeUp'
import { useLang } from '../i18n/LanguageContext'
import styles from './SobreMi.module.css'

export default function SobreMi() {
  const { t } = useLang()
  const a = t.about
  const { stats } = a
  const skills = a.skills.slice(0, 4)
  return (
    <>
      {/* HERO DE PÁGINA */}
      <section className={styles.pageHero}>
        <FadeUp>
          <div className={styles.secLabel}>{a.label}</div>
          <h1 className={styles.heading}>{a.heading[0]}<br /><span className={styles.accent}>{a.heading[1]}</span></h1>
        </FadeUp>
      </section>

      {/* BIO + SKILLS */}
      <section className={styles.bio}>
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
            <blockquote className={styles.quote}>
              {a.quote}
            </blockquote>
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

      {/* EXPERIENCIA Y EDUCACIÓN — reutiliza tus componentes existentes */}
      <Experience />
      <Education />
    </>
  )
}