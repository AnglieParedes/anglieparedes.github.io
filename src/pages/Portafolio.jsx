import { useEffect } from 'react'
import Projects from '../components/Projects'
import FadeUp from '../components/FadeUp'
import { useLang } from '../i18n/LanguageContext'
import styles from './Portafolio.module.css'

export default function Portafolio() {
  const { t } = useLang()
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <section className={styles.pageHero}>
        <FadeUp>
          <div className={styles.secLabel}>{t.portfolio.label}</div>
          <h1 className={styles.heading}>
            {t.portfolio.heading[0]}<br />
            <span className={styles.accent}>{t.portfolio.heading[1]}</span>
          </h1>
        </FadeUp>
      </section>
      <Projects hideHeader />
    </>
  )
}