import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeUp from './FadeUp'
import styles from './Projects.module.css'

const categories = ['Todos', 'E-commerce', 'Corporativo', 'Sistema / Dev', 'Landing', 'Identidad & Branding']

const projects = [
  {
    num: '01', name: 'Techdent', cat: 'Sistema / Dev', highlight: true,
    type: 'E-commerce dental · WordPress + WooCommerce + PHP',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'Cotizaciones'],
    bg: '#0d1200', url: 'https://techdent.cl',
    detail: 'Desarrollo completo del e-commerce. Arquitectura de sistema de cotizaciones a medida en PHP: formulario con flujo de dos ramas (Clínica vs Mercado Público), almacenamiento interno en WordPress y panel personalizado para gestionar y responder cada lead.',
    mockup: { desktop: '/mockups/techdent-desktop.png', mobile: '/mockups/techdent-mobile.jpeg' },
  },
  {
    num: '02', name: 'Isabel Aliaga', cat: 'Landing',
    type: 'Terapias psicológicas online · WordPress · Morestudio',
    tags: ['WordPress', 'Elementor Pro', 'HTML', 'CSS', 'JavaScript'],
    bg: '#1a0d1a', url: 'https://isabelaliaga.cl',
    detail: 'Diseño y desarrollo completo de sitio web para psicóloga online. Desarrollado en WordPress con Elementor Pro, HTML, CSS, JavaScript y complementos adicionales. Enfocado en transmitir confianza, calidez y facilitar el contacto con potenciales pacientes.',
    mockup: { desktop: '/mockups/isabel-desktop.png', mobile: '/mockups/isabel.mobile.jpeg' },
  },
  {
    num: '03', name: 'Dimet', cat: 'Corporativo',
    type: 'Sitio corporativo · WordPress · Morestudio',
    tags: ['WordPress', 'Corporativo', 'Responsive'],
    bg: '#0d1218', url: 'https://dimet.morestudio.cl',
    detail: 'Desarrollo completo en WordPress para cliente de Morestudio. Pendiente migración a dominio propio.',
    mockup: { desktop: '/mockups/dimet-desktop.png', mobile: '/mockups/dimet-mobile.jpeg' },
  },
  {
    num: '04', name: 'Hydrodimet', cat: 'Corporativo',
    type: 'Sitio corporativo · WordPress · Morestudio',
    tags: ['WordPress', 'Corporativo', 'Diseño web'],
    bg: '#0d1520', url: 'https://hydrodimet.morestudio.cl',
    detail: 'Desarrollo completo en WordPress para cliente de Morestudio. Pendiente migración a dominio propio.',
    mockup: { desktop: '/mockups/hydromec-desktop.png', mobile: '/mockups/hydromec-mobile.jpeg' },
  },
  {
    num: '05', name: 'Bynines', cat: 'Corporativo',
    type: 'Sitio web · WordPress',
    tags: ['WordPress', 'Diseño web', 'Responsive'],
    bg: '#18100d', url: 'https://bynines.cl',
    detail: 'Desarrollo y diseño web completo en WordPress.',
  },
  {
    num: '06', name: 'West5', cat: 'Corporativo',
    type: 'Sitio web · WordPress · Morestudio',
    tags: ['WordPress', 'Diseño web', 'Elementor'],
    bg: '#101a10', url: 'https://west5.morestudio.cl',
    detail: 'Desarrollo completo en WordPress para cliente de Morestudio. Pendiente migración a dominio propio.',
    mockup: { desktop: '/mockups/west5-desktop.png', mobile: '/mockups/west5-mobile.jpeg' },
  },
  {
    num: '07', name: 'Opticallery — Landings', cat: 'Landing',
    type: 'Landings internas · WordPress · Diseño + desarrollo',
    tags: ['Landing page', 'WordPress', 'Elementor Pro', 'UX/UI', 'WooCommerce'],
    bg: '#0a0a1a', url: 'https://opticallery.cl/product-category/lentes-aviador/',
    detail: 'Diseño y desarrollo de landings internas para categorías de productos: lentes aviador y lentes deportivos. Enfoque en experiencia de usuario y conversión.',
    mockup: { desktop: '/mockups/opticallery-desktop.png', mobile: '/mockups/opticallery-mobile.jpeg' },
  },
  {
    num: '08', name: 'BesPlus — Blog', cat: 'Corporativo',
    type: 'Estrategia de contenidos · WordPress',
    tags: ['WordPress', 'Blog', 'Copy con IA', 'SEO'],
    bg: '#1a1200', url: 'https://besplus.cl',
    detail: 'Creación y gestión de blogs con estrategia de contenidos y copy asistido con IA para posicionamiento SEO orgánico.',
    mockup: { desktop: '/mockups/besplus-desktop.png', mobile: '/mockups/besplus-mobile.jpeg' },
  },
  {
    num: '09', name: 'Gatis Shop', cat: 'E-commerce',
    type: 'Joyería Artesanal · Branding + Web + RRSS',
    tags: ['Identidad & Branding', 'WordPress', 'E-commerce', 'Social Media'],
    bg: '#1a0d0d', url: 'https://gatisshop.com',
    detail: 'Proyecto propio. Branding completo, packaging, web WordPress + WooCommerce y gestión de RRSS. +3.258 seguidores en Instagram.',
    mockup: { desktop: '/mockups/gatisshop-desktop.png', mobile: '/mockups/gatisshop-mobile.jpg' },
    gallery: ['/mockups/logo-gatisshop.png', '/mockups/gatisshop-tarjetas.png', '/mockups/packing-gatishop.png', '/mockups/packing-gatishop2.png', '/mockups/packing-gatishop3.png'],
  },
  {
    num: '10', name: 'Belladona', cat: 'E-commerce',
    type: 'Plantas 3D · WooCommerce + Google Ads + Mailchimp',
    tags: ['WordPress', 'WooCommerce', 'Google Ads', 'Email Marketing'],
    bg: '#0d1a0f', url: 'https://belladonahome.com',
    detail: 'Tienda online para empresa de impresión 3D de plantas decorativas con Elementor Pro, Google Ads y Mailchimp.',
    mockup: { desktop: '/mockups/belladona-desktop.png', mobile: '/mockups/belladona-mobile.jpeg' },
  },
  {
    num: '11', name: 'Shop y Shop', cat: 'E-commerce',
    type: 'Accesorios Móviles · WooCommerce + Email Marketing',
    tags: ['WordPress', 'Mercado Pago', 'Mailchimp'],
    bg: '#111', url: 'https://shopyshop.cl',
    detail: 'E-commerce de accesorios para smartphones con integración de Mercado Pago, WePay y estrategia de email marketing.',
    mockup: { desktop: '/mockups/shop-y-shop-desktop.png', mobile: '/mockups/shopyshop-mobile1.png' },
  },
  {
    num: '12', name: 'Proservit', cat: 'Corporativo',
    type: 'Áreas Verdes · WordPress Corporativo',
    tags: ['WordPress', 'UX/UI', 'Responsive'],
    bg: '#0d0d1a', url: 'https://proservit.cl',
    detail: 'Sitio corporativo con portafolio de proyectos, servicios y formulario de contacto.',
    mockup: { desktop: '/mockups/proservit-desktop.png' },
  },
  {
    num: '13', name: 'AA Shopping', cat: 'E-commerce',
    type: 'Multitienda · Shopify + Pasarelas de pago',
    tags: ['Shopify', 'Flow', 'Pago Fácil'],
    bg: '#1a1200', url: 'https://aashopping.cl',
    detail: 'Tienda multirubro en Shopify con integración de Mercado Pago, Flow y Pago Fácil.',
  },
  {
    num: '14', name: 'Remedycell', cat: 'E-commerce',
    type: 'Suplementos · WordPress + WooCommerce',
    tags: ['WordPress', 'WooCommerce', 'Diseño web'],
    bg: '#0d1a15', url: 'https://remedycell.cl',
    detail: 'Desarrollo completo de tienda online para marca de suplementos y bienestar.',
    mockup: { desktop: '/mockups/remedycell-desktop.png', mobile: '/mockups/remedycell-mobile.jpeg' },
  },
  {
    num: '15', name: 'Motel Curco', cat: 'Identidad & Branding',
    type: 'Rebranding · Identidad Corporativa',
    tags: ['Identidad & Branding', 'Diseño Gráfico', 'Identidad Visual'],
    bg: '#1a1005',
    detail: 'Renovación completa de identidad visual para Motel Curco. Rediseño de logotipo y sistema de marca.',
    gallery: ['/mockups/renovacion-logo-curco-01.jpg', '/mockups/renovacion-logo-curco-02.jpg', '/mockups/renovacion-logo-curco-04.jpg'],
  },
  {
    num: '16', name: 'La Nueva Vencedora', cat: 'Identidad & Branding',
    type: 'Identidad Corporativa · Diseño Gráfico',
    tags: ['Identidad & Branding', 'Diseño Gráfico', 'Pendones'],
    bg: '#1a0510',
    detail: 'Diseño de identidad corporativa, logotipo y material gráfico para La Nueva Vencedora.',
    gallery: ['/mockups/logo-la-nueva-vencedora.png', '/mockups/pendon-nueva-vencedora-01.png', '/mockups/pendon-nueva-vencedora-02.png'],
  },
  {
    num: '17', name: 'Evolv Energy Drink', cat: 'Identidad & Branding',
    type: 'Identidad de Marca · Diseño Gráfico',
    tags: ['Identidad & Branding', 'Diseño Gráfico', 'Packaging'],
    bg: '#0a1a05',
    detail: 'Diseño de identidad visual para marca de bebida energética Evolv.',
    gallery: ['/mockups/logo-evolv.jpg'],
  },
]

export default function Projects() {
  const [active, setActive] = useState('Todos')
  const [modal, setModal] = useState(null)
  const [fullscreen, setFullscreen] = useState(null)

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
              <h3 className={styles.modalName}>{modal.name}</h3>
              <p className={styles.modalDetail}>{modal.detail}</p>
              <div className={styles.modalTags}>
                {modal.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
              {modal.mockup && (
                <div className={styles.mockupRow}>
                  {modal.mockup.desktop && (
                    <div className={styles.mockupDesktop} onClick={() => setFullscreen(modal.mockup.desktop)}>
                      <span className={styles.mockupLabel}>Desktop</span>
                      <img src={modal.mockup.desktop} alt={modal.name + ' desktop'} className={styles.mockupImgDesktop} />
                    </div>
                  )}
                  {modal.mockup.mobile && (
                    <div className={styles.mockupMobile}>
                      <span className={styles.mockupLabel}>Mobile</span>
                      <img src={modal.mockup.mobile} alt={modal.name + ' mobile'} className={styles.mockupImgMobile} />
                    </div>
                  )}
                </div>
              )}
              {modal.gallery && (
                <div className={styles.gallery}>
                  {modal.gallery.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={modal.name + ' ' + (i + 1)}
                      className={styles.galleryImg}
                      onClick={() => setFullscreen(img)}
                    />
                  ))}
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

      <AnimatePresence>
        {fullscreen && (
          <motion.div
            className={styles.fullscreenOverlay}
            initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            onClick={() => setFullscreen(null)}
          >
            <img src={fullscreen} alt="fullscreen" className={styles.fullscreenImg} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
