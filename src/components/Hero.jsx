import { motion } from 'framer-motion'
import logoBlack from '../assets/logo-black.webp'
import styles from './Hero.module.css'

const tags = [
  { label: 'Branding' },
  { label: 'UX / UI', highlight: true },
  { label: 'WordPress' },
  { label: 'Social Media' },
  { label: 'Web Design', highlight: true },
  { label: 'Identidad Corporativa', accent: true },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.left}>
        <motion.div className={styles.badge} {...fadeUp(0.2)}>
          <span className={styles.dot} />
          Disponible para proyectos
        </motion.div>

        <motion.h1 {...fadeUp(0.35)}>
          Anglie<br />
          <span className={styles.accent}>Paredes</span>
        </motion.h1>

        <motion.p className={styles.sub} {...fadeUp(0.5)}>
          Diseñadora Gráfica & UX/UI · Branding · Web · Social Media.
          Creo experiencias digitales claras, estratégicas y con estilo.
        </motion.p>

        <motion.div className={styles.actions} {...fadeUp(0.65)}>
        <a href="/portafolio" className={styles.btnPrimary}>Ver proyectos</a>
         <a href="https://wa.me/56967531358" target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>Escribir al Whatsapp</a>
        </motion.div>

        <motion.div className={styles.scrollHint} {...fadeUp(0.85)}>
          <span className={styles.scrollLine} />
          scroll
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
          <img src={logoBlack} alt="AP" className={styles.logoImg} />
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
