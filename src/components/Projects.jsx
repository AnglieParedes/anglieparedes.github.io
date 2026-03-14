import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeUp from './FadeUp'
import styles from './Projects.module.css'

const categories = ['Todos', 'E-commerce', 'Sistema / Dev', 'Landing', 'Identidad corporativa', 'Contenido de RRSS']

const projects = [
  {
    num: '01', name: 'Techdent', cat: 'Sistema / Dev', highlight: true,
    type: 'E-commerce dental · WordPress + WooCommerce + PHP',
    tags: ['WordPress', 'Hosting', 'WooCommerce', 'PHP', 'Cotizaciones', 'Relbase', 'Elementor Pro', 'UX/UI'],
    bg: '#0d1200', url: 'https://techdent.cl',
    detail: 'Proyecto colaborativo en equipo. Mi participación: rediseño y desarrollo del home actual, integración al sistema de facturación Relbase, sistema completo de cotizaciones en PHP (formulario con flujo Clínica vs Mercado Público, almacenamiento interno y panel de gestión de leads), y sistema de etiqueta "Llega hoy" con cálculo de fecha de despacho en tiempo real.',
    mockup: { desktop: '/mockups/techdent-desktop.png', mobile: '/mockups/techdent-mobile.png' },
  },
  {
    num: '02', name: 'Isabel Aliaga', cat: 'Landing',
    type: 'Terapias psicológicas online · WordPress · Morestudio',
    tags: ['WordPress', 'Hosting', 'Elementor Pro', 'HTML', 'CSS', 'JavaScript'],
    bg: '#1a0d1a', url: 'https://isabelaliaga.cl',
    detail: 'Diseño y desarrollo completo de sitio web para psicóloga online. Desarrollado en WordPress con Elementor Pro, HTML, CSS, JavaScript y complementos adicionales. Enfocado en transmitir confianza, calidez y facilitar el contacto con potenciales pacientes.',
    mockup: { desktop: '/mockups/isabel-desktop.png', mobile: '/mockups/isabel-mobile.png' },
  },
  {
    num: '03', name: 'Dimet', cat: 'E-commerce',
    type: 'Sitio corporativo · WordPress · Morestudio',
    tags: ['WordPress', 'Hosting', 'Corporativo', 'Responsive'],
    bg: '#0d1218', url: 'https://dimet.morestudio.cl',
    detail: 'Desarrollo completo en WordPress para cliente de Morestudio. Pendiente migración a dominio propio.',
  },
  {
    num: '04', name: 'Hydrodimet', cat: 'E-commerce',
    type: 'Sitio corporativo · WordPress · Morestudio',
    tags: ['WordPress', 'Hosting', 'Corporativo', 'Diseño web'],
    bg: '#0d1520', url: 'https://hydrodimet.morestudio.cl',
    detail: 'Desarrollo completo en WordPress para cliente de Morestudio. Pendiente migración a dominio propio.',
  },
  {
    num: '05', name: 'Bynines', cat: 'E-commerce',
    type: 'Sitio web · WordPress · En desarrollo',
    tags: ['WordPress', 'Hosting', 'Elementor Pro', 'Diseño web', 'Responsive', 'UX/UI'],
    bg: '#18100d', url: null, wip: true,
    detail: 'Desarrollo completo a cargo propio: diseño, maquetación, pasarela de pago y configuración general en WordPress con Elementor Pro. El logo fue provisto por la cliente. Actualmente en desarrollo — próximamente en bynines.cl.',
  },
  {
    num: '06', name: 'West5', cat: 'E-commerce',
    type: 'Sitio web · WordPress · Morestudio',
    tags: ['WordPress', 'Hosting', 'Diseño web', 'Elementor'],
    bg: '#101a10', url: 'https://west5.morestudio.cl',
    detail: 'Desarrollo completo en WordPress para cliente de Morestudio. Pendiente migración a dominio propio.',
  },
  {
    num: '07', name: 'Opticallery — Landings', cat: 'Landing',
    type: 'Landings internas · WordPress · Diseño + desarrollo',
    tags: ['Landing page', 'WordPress', 'Hosting', 'Elementor Pro', 'UX/UI', 'WooCommerce'],
    bg: '#0a0a1a', url: 'https://opticallery.cl/product-category/lentes-aviador/',
    url2: 'https://opticallery.cl/product-category/lentes-deportivos/',
    url2Label: 'Lentes Deportivos →',
    urlLabel: 'Lentes Aviador →',
    detail: 'Diseño y desarrollo de landings internas para categorías de productos: lentes aviador y lentes deportivos. Enfoque en experiencia de usuario y conversión.',
    mockup: { desktop: '/mockups/opticallery-desktop.png', mobile: '/mockups/opticallery-mobile.png' },
  },
  {
    num: '08', name: 'BesPlus', cat: 'E-commerce',
    type: 'Diseño web · WordPress · Membresía',
    tags: ['WordPress', 'Hosting', 'Elementor Pro', 'Diseño web', 'UX/UI'],
    bg: '#1a1200', url: 'https://besplus.cl/membresia/',
    urlLabel: 'Ver página membresía →',
    detail: 'Proyecto en equipo. Mi participación: diseño y desarrollo completo de la página interna de Membresía, popup, cambios generales de diseño y maquetación de blogs.',
    mockup: { desktop: '/mockups/besplus-desktop.png', mobile: '/mockups/besplus-mobile.png' },
  },
  {
    num: '09', name: 'Gatis Shop', cat: 'E-commerce',
    type: 'Joyería Artesanal · Branding + Web + RRSS',
    tags: ['Branding', 'WordPress', 'Hosting', 'E-commerce', 'Social Media'],
    bg: '#1a0d0d', url: 'https://gatisshop.com',
    detail: 'Proyecto propio. Branding completo, packaging, web WordPress + WooCommerce y gestión de RRSS. +3.258 seguidores en Instagram.',
  },
  {
    num: '10', name: 'Belladona', cat: 'E-commerce',
    type: 'Plantas 3D · WooCommerce + Google Ads + Mailchimp',
    tags: ['WordPress', 'Hosting', 'WooCommerce', 'Google Ads', 'Email Marketing'],
    bg: '#0d1a0f', url: 'https://belladonahome.com',
    detail: 'Tienda online para empresa de impresión 3D de plantas decorativas con Elementor Pro, Google Ads y Mailchimp.',
  },
  {
    num: '11', name: 'Shop y Shop', cat: 'E-commerce',
    type: 'Accesorios Móviles · WooCommerce + Email Marketing',
    tags: ['WordPress', 'Hosting', 'Mercado Pago', 'Mailchimp'],
    bg: '#111', url: 'https://shopyshop.cl',
    detail: 'E-commerce de accesorios para smartphones con integración de Mercado Pago, WePay y estrategia de email marketing.',
  },
  {
    num: '12', name: 'Proservit', cat: 'E-commerce',
    type: 'Sitio corporativo · WordPress · Diseño + desarrollo',
    tags: ['WordPress', 'Hosting', 'Elementor Pro', 'Responsive', 'CSS'],
    bg: '#0d0d1a', url: 'https://proservit.cl',
    detail: 'Desarrollo completo del sitio web para empresa de servicios de construcción, instalación y reparación. Diseño, maquetación y configuración general en WordPress con Elementor Pro y CSS personalizado.',
    mockup: { desktop: '/mockups/proservit-desktop.png' },
  },
  {
    num: '13', name: 'AA Shopping', cat: 'E-commerce',
    type: 'Multitienda · Shopify + Pasarelas de pago',
    tags: ['Shopify', 'Integraciones', 'Flow', 'Pago Fácil', 'Mercado Pago'],
    bg: '#1a1200', url: 'https://aashopping.cl',
    detail: 'Tienda multirubro en Shopify. Mi participación: integración de pasarelas de pago Flow y Pago Fácil al sitio existente.',
  },
]

export default function Projects() {
  const [active, setActive] = useState('Todos')
  const [modal, setModal] = useState(null)

  const filtered = active === 'Todos' ? projects : projects.filter(p => p.cat === active)

  return (
    <section className={styles.projects} id="projects">
      <FadeUp>
        <div className={styles.secLabel}>03 — Proyectos</div>
        <div className={styles.headerRow}>
          <h2 className={styles.heading}>Trabajo<br />seleccionado.</h2>
          <span className={styles.count}>{filtered.length} proyectos</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.filters}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filter} ${active === cat ? styles.filterActive : ''}`}
              onClick={() => setActive(cat)}
            >{cat}</button>
          ))}
        </div>
      </FadeUp>

      <motion.div className={styles.grid} layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              key={p.num}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={`${styles.cardWrap} ${p.highlight ? styles.wide : ''}`}
            >
              <div
                className={`${styles.card} ${p.highlight ? styles.wideCard : ''}`}
                style={{ background: p.bg }}
                onClick={() => setModal(p)}
              >
                <div className={styles.bgLabel}>{p.name.toUpperCase()}</div>
                <div className={styles.hoverLayer} />
                {p.highlight && <span className={styles.featBadge}>Destacado ◆</span>}
                {p.wip && <span className={styles.wipBadge}>Próximamente</span>}
                <div className={styles.info}>
                  <span className={styles.num}>{p.num}</span>
                  <div className={styles.name}>{p.name}</div>
                  <div className={styles.type}>{p.type}</div>
                  <div className={styles.tags}>
                    {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                  </div>
                </div>
                <div className={styles.viewHint}>Ver detalle →</div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {modal && (
          <>
            <motion.div className={styles.overlay} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setModal(null)} />
            <motion.div className={styles.modalWrap} initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} exit={{opacity:0,y:20}} transition={{ease:[0.22,1,0.36,1],duration:0.4}}>
            <div className={styles.modal}>
              <button className={styles.close} onClick={() => setModal(null)}>✕</button>
              <div className={styles.modalNum}>{modal.num} — {modal.cat}</div>
              <h3 className={styles.modalName}>{modal.name} {modal.wip && <span className={styles.wipBadgeModal}>Próximamente</span>}</h3>
              <p className={styles.modalDetail}>{modal.detail}</p>
              <div className={styles.modalTags}>
                {modal.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
              {modal.mockup && (
                <div className={modal.mockup.mobile ? styles.mockupRow : styles.mockupRowSingle}>
                  <div className={styles.mockupDesktop}>
                    <span className={styles.mockupLabel}>Desktop</span>
                    <img src={modal.mockup.desktop} alt={modal.name + ' desktop'} className={styles.mockupImgDesktop} />
                  </div>
                  {modal.mockup.mobile && (
                    <div className={styles.mockupMobile}>
                      <span className={styles.mockupLabel}>Mobile</span>
                      <img src={modal.mockup.mobile} alt={modal.name + ' mobile'} className={styles.mockupImgMobile} />
                    </div>
                  )}
                </div>
              )}
              {modal.url && (
                <a href={modal.url} target="_blank" rel="noreferrer" className={styles.modalLink}>
                  Visitar sitio web →
                </a>
              )}
            </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
