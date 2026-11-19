import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import logoBlack from '../assets/logo-black.webp'
import { useLang } from '../i18n/LanguageContext'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { lang, setLang, t } = useLang()
  const links = t.nav.links

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname === href
  }

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to="/" className={styles.logo}>
        <img src={logoBlack} alt="Anglie Paredes" />
      </Link>

      <ul className={`${styles.links} ${open ? styles.open : ''}`} style={{ backgroundColor: '#080808' }}>
        {links.map((l) => (
          <li key={l.href}>
            <Link
              to={l.href}
              onClick={() => setOpen(false)}
              className={isActive(l.href) ? styles.active : ''}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
      <div className={styles.lang} role="group" aria-label={t.lang.switchLabel}>
        {['es', 'en'].map((code) => (
          <button
            key={code}
            type="button"
            className={`${styles.langBtn} ${lang === code ? styles.langActive : ''}`}
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            lang={code}
          >
            {code.toUpperCase()}
          </button>
        ))}
      </div>

      <a href="/#contact" className={styles.cta}>{t.nav.cta}</a>
      </div>

      <button className={styles.burger} onClick={() => setOpen(!open)} aria-label={t.nav.menu}>
        <span className={open ? styles.x1 : ''} />
        <span className={open ? styles.x2 : ''} />
      </button>
    </motion.nav>
  )
}