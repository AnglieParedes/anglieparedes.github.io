import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import logoBlack from '../assets/logo-black.png'
import styles from './Navbar.module.css'

const links = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#hero" className={styles.logo}>
        <img src={logoBlack} alt="Anglie Paredes" />
      </a>

      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" className={styles.cta}>Contacto</a>

      <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="menu">
        <span className={open ? styles.x1 : ''} />
        <span className={open ? styles.x2 : ''} />
      </button>
    </motion.nav>
  )
}
