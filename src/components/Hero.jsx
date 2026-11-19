import { motion } from 'framer-motion'
import logoBlack from '../assets/logo-black.webp'
import { useLang } from '../i18n/LanguageContext'
import styles from './Hero.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const { t } = useLang()
  const h = t.hero
  const tags = h.tags
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.left}>
        <motion.div className={styles.badge} {...fadeUp(0.2)}>
          <span className={styles.dot} />
          {h.badge}
        </motion.div>

        <motion.h1 {...fadeUp(0.35)}>
          Anglie<br />
          <span className={styles.accent}>Paredes</span>
        </motion.h1>

        <motion.p className={styles.sub} {...fadeUp(0.5)}>
          {h.sub1}{' '}{h.sub2}
        </motion.p>

        <motion.div className={styles.actions} {...fadeUp(0.65)}>
        <a href="/portafolio" className={styles.btnPrimary}>{h.projects}</a>
         <a href="https://wa.me/56967531358" target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>{h.whatsapp}</a>
        </motion.div>

        <motion.div className={styles.scrollHint} {...fadeUp(0.85)}>
          <span className={styles.scrollLine} />
          {h.scroll}
        </motion.div>
      </div>

      <div className={styles.right}>
        <motion.div
          className={styles.logoCircle}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.glow} />
          <img src={logoBlack} alt={h.logoAlt} className={styles.logoImg} width="300" height="300" />
        </motion.div>

        {tags.map((tag, i) => (
          <motion.span
            key={tag.label}
            className={`${styles.floatTag} ${styles[`ft${i}`]} ${tag.accent ? styles.floatTagAccent : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
          >
            {tag.label}
          </motion.span>
        ))}
      </div>
    </section>
  )
}
