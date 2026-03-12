import logoBlack from '../assets/logo-black.png'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#hero" className={styles.logo}>
        <img src={logoBlack} alt="AP" />
      </a>
      <div className={styles.copy}>© 2026 Anglie Paredes · Diseñadora Gráfica, Desarrollo web & UX/UI · Santiago, Chile</div>
      <div className={styles.links}>
        <a href="mailto:aeparedest@gmail.com">Email</a>
        <a href="https://linkedin.com/in/anglieparedes" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://wa.me/56967531358" target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </footer>
  )
}
