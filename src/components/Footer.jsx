import logoBlack from '../assets/logo-black.webp'
import { useLang } from '../i18n/LanguageContext'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className={styles.footer}>
      <a href="#hero" className={styles.logo}>
        <img src={logoBlack} alt={t.footer.logoAlt} />
      </a>
      <div className={styles.copy}>{t.footer.copy}</div>
      <div className={styles.links}>
        <a href="mailto:anglie.design@gmail.com">{t.footer.email}</a>
        <a href="https://linkedin.com/in/anglieparedes" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://wa.me/56967531358" target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </footer>
  )
}
