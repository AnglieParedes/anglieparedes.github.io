import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeUp from './FadeUp'
import styles from './Projects.module.css'

const categories = ['Todos', 'E-commerce', 'Sistema / Dev', 'Landing', 'Identidad & Branding', 'Contenido de RRSS']

const projects = [
  {
    num: '01', name: 'Techdent', cat: 'E-commerce', cat2: 'Sistema / Dev', highlight: true,
    type: 'E-commerce dental · WordPress + WooCommerce + PHP',
    tags: ['WordPress', 'Hosting', 'WooCommerce', 'PHP', 'Cotizaciones', 'Relbase', 'Elementor Pro', 'UX/UI'],
    bg: '#0d1200', url: 'https://techdent.cl',
    detail: 'Proyecto colaborativo en equipo. Mi participación: rediseño y desarrollo del home actual, integración al sistema de facturación Relbase, sistema completo de cotizaciones en PHP (formulario con flujo Clínica vs Mercado Público, almacenamiento interno y panel de gestión de leads), y sistema de etiqueta "Llega hoy" con cálculo de fecha de despacho en tiempo real.',
    mockup: { desktop: '/mockups/techdent-desktop.png', mobile: '/mockups/techdent-mobile.jpeg' },
  },
  {
    num: '02', name: 'Isabel Aliaga', cat: 'Landing',
    type: 'Terapias psicológicas online · WordPress · Morestudio',
    tags: ['WordPress', 'Hosting', 'Elementor Pro', 'HTML', 'CSS', 'JavaScript'],
    bg: '#1a0d1a', url: 'https://isabelaliaga.cl',
    detail: 'Diseño y desarrollo completo de sitio web para psicóloga online. Desarrollado en WordPress con Elementor Pro, HTML, CSS, JavaScript y complementos adicionales. Enfocado en transmitir confianza, calidez y facilitar el contacto con potenciales pacientes.',
    mockup: { desktop: '/mockups/isabel-desktop.png', mobile: '/mockups/isabel.mobile.jpeg' },
  },
  {
    num: '03', name: 'Dimet', cat: 'E-commerce', wip: true,
    type: 'E-commerce corporativo · WordPress · WooCommerce',
    tags: ['WordPress', 'Hosting', 'WooCommerce', 'Elementor Pro', 'SMTP', 'Diseño web', 'Responsive', 'Cotizaciones'],
    bg: '#0d1218', url: null,
    detail: 'Desarrollo completo para empresa industrial de alto rendimiento. Plataforma e-commerce con catálogo de productos, sistema de cotizaciones y diseño corporativo profesional. Desarrollado íntegramente con WordPress, Elementor Pro, WooCommerce y SMTP. Próximamente en dimet.cl.',
    mockup: { desktop: '/mockups/dimet-desktop.png', mobile: '/mockups/dimet-mobile.jpeg' },
  },
  {
    num: '04', name: 'Hydrodimet', cat: 'E-commerce', wip: true,
    type: 'E-commerce corporativo · WordPress · WooCommerce',
    tags: ['WordPress', 'Hosting', 'WooCommerce', 'Elementor Pro', 'SMTP', 'Email Marketing', 'Cotizaciones', 'Diseño web'],
    bg: '#0d1520', url: null,
    detail: 'Desarrollo completo para empresa industrial de gran envergadura. Plataforma e-commerce con sistema de cotizaciones, integración de WooCommerce, SMTP y campañas de correo marketing. Diseño corporativo profesional desarrollado íntegramente con WordPress y Elementor Pro. Próximamente en dominio propio.',
    mockup: { desktop: '/mockups/hydromec-desktop.png', mobile: '/mockups/hydromec-mobile.jpeg' },
  },
  {
    num: '05', name: 'Bynines', cat: 'E-commerce', wip: true,
    type: 'Sitio web · WordPress · En desarrollo',
    tags: ['WordPress', 'Hosting', 'Elementor Pro', 'Diseño web', 'Responsive', 'UX/UI'],
    bg: '#18100d', url: null,
    detail: 'Desarrollo completo a cargo propio: diseño, maquetación, pasarela de pago y configuración general en WordPress con Elementor Pro. El logo fue provisto por la cliente. Actualmente en desarrollo — próximamente en bynines.cl.',
  },
  {
    num: '06', name: 'West5', cat: 'E-commerce', wip: true,
    type: 'Suplementos y vitaminas · WordPress + WooCommerce · Morestudio',
    tags: ['WordPress', 'Hosting', 'WooCommerce', 'Elementor Pro', 'SMTP', 'Pasarela de pago', 'Integraciones', 'Diseño web', 'UX/UI'],
    bg: '#101a10', url: null,
    detail: 'Desarrollo completo de tienda online para marca de suplementos y vitaminas. Diseño UX/UI, maquetación en WordPress con Elementor Pro, configuración de WooCommerce, SMTP, pasarela de pago e integraciones varias. Próximamente en west5.cl.',
    mockup: { desktop: '/mockups/west5-desktop.png', mobile: '/mockups/west5-mobile.jpeg' },
  },
  {
    num: '07', name: 'Opticallery', cat: 'E-commerce', cat2: 'Landing', cat3: 'Sistema / Dev',
    type: 'Óptica · Landings + Checkout condicional · WordPress',
    tags: ['Landing page', 'WordPress', 'Hosting', 'Elementor Pro', 'PHP', 'WooCommerce', 'Checkout personalizado', 'Diseño web'],
    bg: '#0a0a1a', url: 'https://opticallery.cl/product-category/lentes-aviador/',
    url2: 'https://opticallery.cl/product-category/lentes-deportivos/',
    url2Label: 'Lentes Deportivos →',
    urlLabel: 'Lentes Aviador →',
    detail: 'Proyecto en equipo para óptica online. Mi participación: diseño y desarrollo de landings internas para categorías de productos (lentes aviador y lentes deportivos), enfocadas en experiencia de usuario y conversión. Además, desarrollo de un checkout condicional en PHP que adapta el flujo de pago y los campos del formulario según el tipo de producto seleccionado, optimizando la experiencia de compra, diseño y cambios varios.',
    mockup: { desktop: '/mockups/opticallery-desktop.png', mobile: '/mockups/opticallery-mobile.jpeg' },
  },
  {
    num: '08', name: 'BesPlus', cat: 'E-commerce',
    type: 'Salud y bienestar · WordPress · Membresía + Diseño web',
    tags: ['WordPress', 'Hosting', 'Elementor Pro', 'Diseño web', 'UX/UI', 'Membership'],
    bg: '#1a1200', url: 'https://besplus.cl/membresia/',
    urlLabel: 'Ver página membresía →',
    detail: 'Proyecto en equipo para plataforma de salud y bienestar. Mi participación: diseño y desarrollo completo de la página interna de Membresía con arquitectura clara de planes y beneficios, popup de captación, cambios en el servidor, cambios generales de diseño en el sitio y maquetación de artículos del blog con foco en legibilidad y conversión.',
    mockup: { desktop: '/mockups/besplus-desktop.png', mobile: '/mockups/besplus-mobile.jpeg' },
  },
  {
    num: '09', name: 'Gatis Shop', cat: 'E-commerce', cat2: 'Identidad & Branding', cat3: 'Contenido de RRSS', highlight: true,
    type: 'Joyería Artesanal · Proyecto propio · Branding + Web + RRSS',
    tags: ['WordPress', 'Hosting', 'WooCommerce', 'Elementor Pro', 'HTML', 'CSS', 'UX/UI', 'Branding', 'Identidad corporativa', 'Google Ads', 'Meta Ads', 'Email Marketing', 'Social Media', 'Integraciones', 'Facto'],
    bg: '#1a0d0d', url: null,
    detail: 'Proyecto propio y uno de los más completos de mi trayectoria. Desarrollo web completo en WordPress con Elementor Pro, HTML y CSS personalizado. Migración de hosting, diseño UX/UI, integración de pasarelas de pago, sistema de facturación Facto y SMTP. Identidad corporativa y branding desde cero: logo, packaging y copys. Estrategia digital completa: Google Ads, Meta Ads, campañas de email marketing y creación de contenido para Instagram. Identidad corporativa y marca registrada. Todos los derechos reservados ©',
    mockup: { desktop: '/mockups/gatisshop-desktop.png', mobile: '/mockups/gatisshop-mobile.jpg', mobileScroll: true },
    gallery: ['/mockups/logo-gatisshop.png', '/mockups/gatisshop-tarjetas.png', '/mockups/packing-gatishop.png', '/mockups/packing-gatishop2.png', '/mockups/packing-gatishop3.png'],
  },
  {
    num: '10', name: 'Belladona', cat: 'E-commerce',
    type: 'Plantas · WordPress + WooCommerce · Rediseño completo',
    tags: ['WordPress', 'Hosting', 'WooCommerce', 'Elementor Pro', 'Google Ads', 'Email Marketing', 'SEO', 'Integraciones'],
    bg: '#0d1a0f', url: 'https://belladonahome.com',
    detail: 'Migración de hosting, rediseño completo de la tienda y desarrollo de nuevas funcionalidades. Integración de pasarelas de pago, Mailchimp, Wordfence, Yoast SEO y Google Analytics. Todo desarrollado en WordPress con Elementor Pro.',
    mockup: { desktop: '/mockups/belladona-desktop.png', mobile: '/mockups/belladona-mobile.jpeg' },
  },
  {
    num: '11', name: 'Shop y Shop', cat: 'E-commerce',
    type: 'Accesorios móviles · WordPress + WooCommerce · Diseño completo',
    tags: ['WordPress', 'Hosting', 'WooCommerce', 'Elementor Pro', 'Mercado Pago', 'Mailchimp', 'Email Marketing'],
    bg: '#111', url: 'https://shopyshop.cl',
    detail: 'Diseño y desarrollo completo de tienda online de accesorios para smartphones. Maquetación en WordPress con Elementor Pro, configuración de WooCommerce, integración de pasarelas de pago Mercado Pago y WePay, y estrategia de email marketing con Mailchimp para fidelización de clientes.',
    mockup: { desktop: '/mockups/shop-y-shop-desktop.png', mobile: '/mockups/shopyshop-mobile1.png' },
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
  {
    num: '14', name: 'Remedycell', cat: 'E-commerce', cat2: 'Landing', cat3: 'Sistema / Dev',
    type: 'Suplementos · WordPress + WooCommerce · Morestudio',
    tags: ['WordPress', 'Hosting Kinsta', 'WooCommerce', 'Elementor Pro', 'PHP', 'SMTP', 'Email Marketing', 'Microsoft Clarity', 'Diseño web'],
    bg: '#0d1a15', url: 'https://remedycell.cl',
    detail: 'Proyecto colaborativo en equipo para marca de suplementos y bienestar celular. Mi participación: soporte y gestión del hosting en Kinsta, diseño y desarrollo de páginas de productos con foco en conversión, landings internas varias, configuración de checkout personalizado con PHP, integración de SMTP, campañas de email marketing, implementación de Microsoft Clarity para análisis de comportamiento de usuarios, cambios generales de diseño y mejoras de rendimiento.',
    mockup: { desktop: '/mockups/remedycell-desktop.png', mobile: '/mockups/remedycell-mobile.jpeg' },
  },
  {
    num: '15', name: 'Motel Curco', cat: 'Identidad & Branding', cat2: 'Contenido de RRSS',
    type: 'Rebranding · Identidad Corporativa · Contenido RRSS',
    tags: ['Branding', 'Diseño Gráfico', 'Logotipo', 'Nombre publicitario', 'Social Media', 'Contenido RRSS'],
    bg: '#1a1005',
    detail: 'Un proyecto que ha ido evolucionando y creciendo con el tiempo. Rediseño completo del logotipo de marca con una propuesta visual más moderna y coherente con la identidad del negocio. Desarrollo de nombre publicitario y sistema de branding aplicado a distintos formatos. Creación y gestión de contenido para redes sociales, construyendo una presencia digital consistente y atractiva.',
    gallery: ['/mockups/renovacion-logo-curco-01.jpg', '/mockups/renovacion-logo-curco-02.jpg', '/mockups/renovacion-logo-curco-04.jpg'],
  },
  {
    num: '16', name: 'La Nueva Vencedora', cat: 'Identidad & Branding', cat2: 'Contenido de RRSS',
    type: 'Refrescamiento de marca · Identidad · Contenido RRSS',
    tags: ['Branding', 'Diseño Gráfico', 'Etiquetas', 'Pendones', 'Social Media', 'Contenido RRSS', 'Identidad Visual'],
    bg: '#1a0510',
    detail: 'Refrescamiento completo de branding e identidad visual: nuevo sistema de marca más fresco, diseño de etiquetas para productos, pendones publicitarios y piezas gráficas variadas. Creación de contenido para redes sociales con una línea visual coherente y reconocible.',
    gallery: ['/mockups/logo-la-nueva-vencedora.png', '/mockups/pendon-nueva-vencedora-01.png', '/mockups/pendon-nueva-vencedora-02.png'],
  },
  {
    num: '18', name: 'Semot', cat: 'Identidad & Branding',
    type: 'Minería · Rebranding · Identidad Corporativa',
    tags: ['Branding', 'Rebranding', 'Identidad Corporativa', 'Logotipo', 'Paleta de colores', 'Diseño Gráfico'],
    bg: '#1a1200',
    detail: 'Refrescamiento de identidad corporativa y rebranding completo para Semot, empresa minera con más de 30 años de trayectoria en el sector. Un proyecto que requería equilibrar el peso y la historia de una marca consolidada con una propuesta visual moderna, sólida y profesional. Rediseño integral del logotipo con todas sus variantes de uso, definición de nueva paleta de colores corporativa y sistema de identidad aplicable a distintos formatos y soportes. Identidad corporativa y marca registrada. Todos los derechos reservados ©',
    gallery: ['/mockups/semot-logo-03.jpg', '/mockups/semot-logo-05.jpg', '/mockups/semot-logo-07.jpg'],
  },
  {
    num: '20', name: 'Clínica Dental Vitacura', cat: 'Identidad & Branding',
    type: 'Salud dental · Identidad Corporativa · Logotipo',
    tags: ['Branding', 'Identidad Corporativa', 'Logotipo', 'Paleta de colores', 'Diseño Gráfico'],
    bg: '#0a1520',
    detail: 'Diseño de identidad corporativa, desarrollo del logotipo en todas sus versiones y adaptaciones para distintos soportes, y definición de paleta de colores corporativa.',
    gallery: ['/mockups/logo-clinicadentalvitacura-16.png', '/mockups/logo-clinicadentalvitacura-17.png'],
  },
  {
    num: '21', name: 'Obainc Academy', cat: 'Identidad & Branding',
    type: 'Formación digital · Identidad Corporativa · Logotipo',
    tags: ['Branding', 'Identidad Corporativa', 'Logotipo', 'Diseño Gráfico'],
    bg: '#0a0d1a',
    detail: 'Diseño de identidad corporativa completa para OBainc Academy, plataforma de formación especializada en transformación digital, prácticas ágiles y gestión de productos. Desarrollo del logotipo con sus versiones en positivo y negativo, adaptado a la paleta de colores existente de la marca. Identidad corporativa y marca registrada. Todos los derechos reservados ©',
    gallery: ['/mockups/logo-academy-obainc1.png', '/mockups/logo-academy-obainc2.png'],
  },
  {
    num: '22', name: 'Obainc', cat: 'Contenido de RRSS', cat2: 'Identidad & Branding',
    type: 'Contenido RRSS · Gráficos web · Oct 2024 — Feb 2025',
    tags: ['Social Media', 'Contenido RRSS', 'Diseño Gráfico', 'Diseño web'],
    bg: '#0d0a1a',
    detail: 'Creación y diseño de contenido para redes sociales durante el período Oct 2024 — Feb 2025: piezas gráficas, stories, posts y material visual alineado con la identidad de marca. Diseño de gráficos y recursos visuales para sitio web. Estrategia visual coherente para mantener una presencia digital consistente y atractiva.',
    gallery: ['/mockups/obainc-contenido.jpg', '/mockups/obainc-contenido2.jpg', '/mockups/obainc-contenido3.png'],
  },
  {
    num: '23', name: 'Oleluz', cat: 'Contenido de RRSS',
    type: 'Eficiencia energética · Contenido RRSS · Oct 2024 — Feb 2025',
    tags: ['Social Media', 'Contenido RRSS', 'Diseño Gráfico', 'Instagram', 'Plantillas'],
    bg: '#0d1a10',
    detail: 'Creación y diseño de contenido para redes sociales durante el período Oct 2024 — Feb 2025: piezas gráficas, stories, posts y material visual alineado con la identidad de marca. Rediseño completo de las plantillas de contenido para Instagram, logrando una línea visual más moderna, coherente y reconocible. Diseño de gráficos y recursos visuales para sitio web. Estrategia visual coherente para mantener una presencia digital consistente y atractiva.',
    gallery: ['/mockups/oleluz-contenido1.png', '/mockups/oleluz-contenido2.png', '/mockups/oleluz-contenido3.png'],
  },
  {
    num: '24', name: 'Evolv Energy Drink', cat: 'Identidad & Branding', wip: true,
    type: 'Identidad corporativa · Bebida energética · Manual de marca',
    tags: ['Branding', 'Identidad Corporativa', 'Diseño de etiqueta', 'Manual de marca', 'Packaging', 'Logotipo'],
    bg: '#0a1a05',
    detail: 'Diseño de identidad corporativa completa para una nueva marca de bebidas energéticas con proyección de gran crecimiento. Creación del logotipo, sistema de marca y paleta visual que transmiten energía, modernidad y distinción. Diseño de etiqueta para el producto y elaboración del manual de marca corporativo con lineamientos de uso, tipografías, colores y aplicaciones. Identidad corporativa y marca registrada. Todos los derechos reservados ©',
  },
]

export default function Projects() {
  const [active, setActive] = useState('Todos')
  const [modal, setModal] = useState(null)
  const [mobileFullscreen, setMobileFullscreen] = useState(false)
  const [desktopFullscreen, setDesktopFullscreen] = useState(false)
  const [galleryFullscreen, setGalleryFullscreen] = useState(null)

  const filtered = active === 'Todos' ? projects : projects.filter(p => p.cat === active || p.cat2 === active || p.cat3 === active)

  const closeModal = () => {
    setModal(null)
    setMobileFullscreen(false)
    setDesktopFullscreen(false)
    setGalleryFullscreen(null)
  }

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
            <motion.div className={styles.overlay} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={closeModal} />
            <motion.div className={styles.modalWrap} initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} exit={{opacity:0,y:20}} transition={{ease:[0.22,1,0.36,1],duration:0.4}}>
            <div className={styles.modal}>
              <button className={styles.close} onClick={closeModal}>✕</button>
              <div className={styles.modalNum}>{modal.num} — {modal.cat}</div>
              <h3 className={styles.modalName}>{modal.name} {modal.wip && <span className={styles.wipBadgeModal}>Próximamente</span>}</h3>
              <p className={styles.modalDetail}>{modal.detail}</p>
              <div className={styles.modalTags}>
                {modal.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
              {modal.mockup && (
                <div className={modal.mockup.mobile ? styles.mockupRow : styles.mockupRowSingle}>
                  <div className={styles.mockupDesktop}>
                    <span className={styles.mockupLabel}>Desktop <span className={styles.clickHint}>· click para ampliar</span></span>
                    <img src={modal.mockup.desktop} alt={modal.name + ' desktop'} className={styles.mockupImgDesktop} onClick={() => setDesktopFullscreen(true)} style={{cursor:'pointer'}} />
                  </div>
                  {modal.mockup.mobile && (
                    <div className={styles.mockupMobile}>
                      <span className={styles.mockupLabel}>Mobile <span className={styles.clickHint}>· click para ampliar</span></span>
                      <div className={styles.iphoneFrame} onClick={() => setMobileFullscreen(true)}>
                        <div className={styles.iphoneNotch} />
                        <div className={styles.iphoneScreen}>
                          <img src={modal.mockup.mobile} alt={modal.name + ' mobile'} className={modal.mockup.mobileScroll ? styles.mobileScrollImg : styles.mobileStaticImg} />
                        </div>
                        <div className={styles.iphoneHome} />
                      </div>
                    </div>
                  )}
                </div>
              )}
              {modal.gallery && (
                <div className={styles.gallery} style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'0.75rem', marginTop:'1.5rem'}}>
                  {modal.gallery.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={modal.name + ' ' + (i + 1)}
                      className={styles.galleryImg}
                      onClick={() => setGalleryFullscreen(img)}
                      style={{cursor:'pointer', width:'100%', height:'160px', objectFit:'cover', borderRadius:'6px'}}
                    />
                  ))}
                </div>
              )}
              {mobileFullscreen && modal.mockup?.mobile && (
                <div className={styles.fullscreenOverlay} onClick={() => setMobileFullscreen(false)}>
                  <div className={styles.fullscreenIphone}>
                    <div className={styles.iphoneNotchLg} />
                    <div className={styles.fullscreenScreen}>
                      <img src={modal.mockup.mobile} alt="mobile fullscreen" className={styles.fullscreenImg} />
                    </div>
                    <div className={styles.iphoneHomeLg} />
                  </div>
                  <span className={styles.fullscreenClose}>✕ cerrar</span>
                </div>
              )}
              {desktopFullscreen && modal.mockup?.desktop && (
                <div className={styles.fullscreenOverlay} onClick={() => setDesktopFullscreen(false)}>
                  <div className={styles.fullscreenDesktop}>
                    <img src={modal.mockup.desktop} alt="desktop fullscreen" className={styles.fullscreenDesktopImg} />
                  </div>
                  <span className={styles.fullscreenClose}>✕ cerrar</span>
                </div>
              )}
              {galleryFullscreen && (
                <div className={styles.fullscreenOverlay} onClick={() => setGalleryFullscreen(null)}>
                  <img src={galleryFullscreen} alt="fullscreen" style={{maxWidth:'70%', maxHeight:'75vh', objectFit:'contain', borderRadius:'8px'}} />
                  <span className={styles.fullscreenClose}>✕ cerrar</span>
                </div>
              )}
              {modal.url && (
                <a href={modal.url} target="_blank" rel="noreferrer" className={styles.modalLink}>
                  {modal.urlLabel || 'Visitar sitio web →'}
                </a>
              )}
              {modal.url2 && (
                <a href={modal.url2} target="_blank" rel="noreferrer" className={styles.modalLink} style={{marginTop:'0.75rem'}}>
                  {modal.url2Label}
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
