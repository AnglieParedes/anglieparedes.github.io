import { useEffect } from 'react'
import Projects from '../components/Projects'
import FadeUp from '../components/FadeUp'
import styles from './Portafolio.module.css'

export default function Portafolio() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <>
      <section className={styles.pageHero}>
        <FadeUp>
          <div className={styles.secLabel}>04 — Portafolio</div>
          <h1 className={styles.heading}>
            Trabajo<br />
            <span className={styles.accent}>seleccionado.</span>
          </h1>
        </FadeUp>
      </section>
      <Projects hideHeader />
    </>
  )
}