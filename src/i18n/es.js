// Textos en español (idioma por defecto). Mantener la misma estructura que en.js
const es = {
  meta: {
    title: 'Anglie Paredes — Diseñadora Gráfica & UX/UI',
    description: 'Anglie Paredes — Diseño UX/UI y desarrollo web en WordPress y WooCommerce, con plugins y sistemas a medida. Santiago, Chile.',
    ogTitle: 'Anglie Paredes — Diseño UX/UI y desarrollo web',
    ogDescription: 'Tiendas online, sitios corporativos y plugins a medida en WordPress y WooCommerce. Mira mi portafolio.',
    ogLocale: 'es_CL',
  },

  lang: {
    switchLabel: 'Cambiar idioma / Switch language',
  },

  nav: {
    links: [
      { label: 'Sobre mí', href: '/' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'Experiencia', href: '/experiencia' },
      { label: 'Portafolio', href: '/portafolio' },
    ],
    cta: 'Contacto',
    menu: 'menu',
  },

  hero: {
    badge: 'Disponible para proyectos',
    sub1: 'Diseñadora Gráfica & UX/UI · Branding · Web · Social Media.',
    sub2: 'Creo experiencias digitales claras, estratégicas y con estilo.',
    projects: 'Ver proyectos',
    whatsapp: 'Escribir al Whatsapp',
    scroll: 'scroll',
    logoAlt: 'AP',
    tags: [
      { label: 'Branding' },
      { label: 'UX / UI', highlight: true },
      { label: 'WordPress' },
      { label: 'Social Media' },
      { label: 'Web Design', highlight: true },
      { label: 'Identidad Corporativa', accent: true },
    ],
  },

  marquee: [
    'Diseño Gráfico', 'UX / UI', 'Branding', 'Web Design',
    'E-commerce', 'Social Media', 'WordPress', 'Identidad Corporativa',
  ],

  about: {
    label: '01 — Sobre mí',
    heading: ['Diseño que', 'conecta.'],
    stats: [
      { n: '+5', l: 'Años exp.' },
      { n: '+30', l: 'Proyectos' },
      { n: '+20', l: 'Herramientas' },
      { n: 'A2', l: 'Inglés' },
    ],
    p1: 'Diseñadora gráfica especializada en Branding, UX/UI y desarrollo web, creando experiencias digitales que comunican, conectan y convierten — sin importar dónde estés.',
    p2: { pre: 'Actualmente trabajo como ', strong: 'Desarrolladora Web en MoreStudio', post: ', creando soluciones digitales para clientes en Chile y Latinoamérica.' },
    p3: 'Integro IA (Claude, ChatGPT) en mi flujo de trabajo para desarrollar, automatizar y entregar más rápido.',
    quote: '"Hagamos un mundo más sencillo por medio del diseño. Simple, lógico y con estilo."',
    more: 'Ver mi trayectoria completa →',
    skills: [
      {
        cat: 'Diseño & UX/UI',
        tags: ['Figma','Adobe XD','Illustrator','Photoshop','InDesign','After Effects','Premiere','Canva','Lightroom'],
      },
      {
        cat: 'Desarrollo Web',
        tags: ['WordPress','Elementor Pro','Shopify','HTML','CSS','JavaScript','WooCommerce','Cursor','VS Code'],
      },
      {
        cat: 'Flujo de Trabajo',
        tags: ['GitHub','Git','Node.js'],
      },
      {
        cat: 'Marketing & Analytics',
        tags: ['Google Analytics','Google Ads','Mailchimp','Metricool','Jira'],
      },
      {
        cat: 'IA Aplicada',
        tags: ['Claude','ChatGPT','Claude Code','Prompt engineering','Automatización de flujos','Desarrollo asistido por IA'],
      },
    ],
  },

  education: {
    label: '05 — Formación',
    heading: ['Educación &', 'Certificaciones.'],
    items: [
      { ico: '🎓', deg: 'Técnico en Diseño Gráfico', school: 'Universidad Virtual Internacional', year: '2020 — 2022' },
      { ico: '🏆', deg: 'Certificación UX (3/7 en curso)', school: 'Google', year: 'En progreso' },
      { ico: '⚡', deg: 'Certificado en JavaScript', school: 'Coderhouse', year: '2024 — Online' },
      { ico: '📊', deg: 'Diplomado Finanzas Corporativas', school: 'Universidad Virtual Internacional', year: '2022' },
      { ico: '✏️', deg: 'Diplomado en Diseño Gráfico', school: 'Shaw Academy', year: '2020' },
      { ico: '📣', deg: 'Digital Marketing', school: 'Udemy', year: '2020' },
    ],
  },

  footer: {
    logoAlt: 'AP',
    copy: '© 2026 Anglie Paredes · Diseñadora Gráfica, Desarrollo web & UX/UI · Santiago, Chile',
    email: 'Email',
  },

  // Los valores enviados por EmailJS siempre son los de es (ver serviceOptionValues)
  form: {
    serviceOptions: ['Landing Page', 'E-commerce', 'Sitio Corporativo', 'Identidad & Branding', 'Consultoría', 'Otro'],
    name: 'Nombre',
    email: 'Email',
    service: 'Servicio de interés',
    selectService: 'Selecciona un servicio...',
    message: 'Mensaje',
    namePlaceholder: 'Tu nombre',
    emailPlaceholder: 'tu@email.com',
    messagePlaceholder: 'Cuéntame sobre tu proyecto...',
    sending: 'Enviando...',
    sentShort: '✓ ¡Mensaje enviado!',
    sentLong: '✓ ¡Mensaje enviado! Te respondo pronto.',
    submit: 'Enviar mensaje →',
    error: 'Error al enviar, intenta de nuevo.',
  },

  contact: {
    label: '05 — Contacto',
    heading: ['Trabajemos', 'juntos.'],
    intro: '¿Tienes un proyecto en mente? Me encantaría escucharte. Disponible para proyectos freelance, colaboraciones y oportunidades full-time.',
    whatsappValue: 'Contactar aquí',
    locationLabel: 'Ubicación',
    locationValue: 'Santiago, Chile',
  },

  services: {
    label: '02 — Servicios',
    heading: ['Planes de', 'contenido RRSS.'],
    period: 'CLP mensuales',
    cta: 'Consultar →',
    plans: [
      {
        name: 'Plan Básico',
        price: '$150.000',
        featured: false,
        features: [
          '2 post + 1 reel semanal (Lun–Vie)',
          '2 Stories semanales + 1 de contingencia',
          'Material visual/gráfico para publicaciones',
          'Grilla de contenidos mensual',
          'Informe de métricas mensual',
        ],
      },
      {
        name: 'Plan Intermedio',
        price: '$350.000',
        featured: true,
        badge: 'Popular',
        features: [
          '3 post + 1 reel semanal (Lun–Vie)',
          '3 Stories semanales + 1 de contingencia',
          'Material visual/gráfico para publicaciones',
          'Grilla de contenidos mensual',
          'Informe de métricas mensual',
        ],
      },
      {
        name: 'Plan Full',
        price: '$500.000',
        featured: false,
        features: [
          '3 post + 2 reels semanales (Lun–Vie)',
          '4 Stories semanales (Lun–Dom) + contingencia',
          'Material visual/gráfico para publicaciones',
          'Campañas + fechas especiales',
          'Grilla de contenidos + informe de métricas',
        ],
      },
    ],
  },

  portfolio: {
    label: '04 — Portafolio',
    heading: ['Trabajo', 'seleccionado.'],
  },

  servicesPage: {
    label: '02 — Servicios',
    heading: ['Mis', 'Servicios.'],
    heroSub: 'Soluciones digitales completas pensadas para marcas y emprendedores que quieren crecer con diseño estratégico y resultados reales.',
    list: [
      {
        num: '01',
        name: 'Landing Page',
        desc: 'Páginas de aterrizaje diseñadas para convertir visitantes en clientes. Rápidas, atractivas y optimizadas.',
        tags: ['WordPress', 'Vercel', 'GitHub'],
        entregables: [],
      },
      {
        num: '02',
        name: 'E-commerce',
        desc: 'Tiendas online completas con pasarela de pagos, gestión de productos y experiencia de compra optimizada.',
        tags: ['WordPress', 'WooCommerce', 'Vercel', 'Shopify'],
        entregables: [],
      },
      {
        num: '03',
        name: 'Sitio Corporativo',
        desc: 'Presencia web profesional para empresas que quieren destacar, con diseño a medida y resultados reales.',
        tags: ['WordPress', 'Vercel', 'GitHub'],
        entregables: [],
      },
      {
        num: '04',
        name: 'Identidad & Branding',
        desc: 'Desarrollo de identidad corporativa, branding, rebranding y renovación de identidad corporativa. Tu marca con carácter y coherencia visual.',
        tags: [],
        entregables: ['PNG', 'JPG', 'SVG', 'PDF', 'Manual de marca', 'Manual corporativo'],
      },
      {
        num: '05',
        name: 'Publicidad Digital',
        desc: 'Creación, gestión y optimización de campañas publicitarias en Meta Ads (Facebook e Instagram) y Google Ads. Segmentación de audiencias, seguimiento de resultados y reportes mensuales para maximizar tu inversión.',
        tags: ['Meta Ads', 'Google Ads'],
        entregables: [],
      },
      {
        num: '06',
        name: 'Consultoría',
        desc: 'Asesoría estratégica en diseño de marca, identidad visual, desarrollo web y registro de marca. Te acompaño desde la idea hasta la ejecución: definición de naming, paleta de color, tipografía, manual de marca, manual corporativo y posicionamiento digital.',
        tags: [],
        entregables: [],
      },
    ],
    contactLabel: '¿Listo para empezar?',
    contactHeading: ['Hablemos de', 'tu proyecto.'],
    contactSub: 'Cuéntame qué necesitas y te respondo en menos de 24 horas.',
  },

  experience: {
    label: '03 — Experiencia',
    heading: ['Trayectoria', 'profesional.'],
    current: 'Actual',
    jobs: [
      { date: 'Jul 2025 — Presente', company: 'Morestudio', role: 'Desarrolladora Web', desc: 'Desarrollo web full WordPress: creación de sitios desde cero, diseño web, soporte y configuración de servidores, integración de plugins, copy asistido con IA, desarrollo de landing pages internas y formularios personalizados con PHP.', current: true },
      { date: 'Mar 2025 — Jun 2025', company: 'GDS Growth Digital Strategy', grouped: true, badge: '4 meses', roles: [ { role: 'Diseño Web', desc: 'Diseño y desarrollo de sitios web en WordPress y Shopify, con implementación en HTML y CSS.' }, { role: 'Diseñadora Gráfica Junior', desc: 'Diseño gráfico digital · Piezas de comunicación · Identidad corporativa · Branding · Contenido para web y redes sociales.' } ] },
      { date: 'Oct 2024 — Feb 2025', company: 'Catatumbo Solutions S.L.', role: 'Diseñadora Gráfica · Remoto España', desc: 'Comunicación visual, desarrollo de identidad corporativa y branding, creación de contenido para redes sociales y sitios web.', badge: '5 meses' },
      { date: 'May 2024 — Jun 2024', company: 'Asombroso Marketing Digital', role: 'Diseñadora Gráfica', desc: 'Creación de contenido para redes sociales, desarrollo de identidad corporativa y branding, análisis de datos, campañas en Google Ads, estrategia de marketing y gestión de crisis.', badge: '2 meses' },
      { date: 'Feb 2020 — Ene 2025', company: 'Gatis Shop', role: 'Fundadora & Directora Creativa', desc: 'Desarrollo de identidad corporativa y branding, packaging, desarrollo web en WordPress, e-commerce, importaciones y gestión de redes sociales. +3.200 seguidores.', badge: '5 años' },
      { date: 'Jun 2020 — Presente', company: 'Freelancer Independiente', role: 'Diseñadora Gráfica & Web', desc: 'Diseño y desarrollo web · Branding · Creación de contenido · E-commerce · Gestión de redes sociales · Ads', current: true },
    ],
    contractOptions: ['Full-time', 'Part-time', 'Freelance / Proyecto'],
    recruiterLabel: '¿Te interesa mi perfil?',
    recruiterHeading: ['Hablemos de ', 'una oportunidad.'],
    recruiterSub: 'Si buscas una diseñadora con visión estratégica, experiencia en UX/UI, desarrollo web y branding — estás en el lugar correcto. Cuéntame sobre la posición y con gusto conversamos.',
    avail: 'Disponible para nuevas oportunidades',
    yourName: 'Tu nombre',
    company: 'Empresa',
    corpEmail: 'Email corporativo',
    contractType: 'Tipo de contratación',
    selectOption: 'Selecciona una opción...',
    opportunity: 'Cuéntame sobre la oportunidad',
    namePlaceholder: 'Nombre completo',
    companyPlaceholder: 'Nombre de la empresa',
    emailPlaceholder: 'tu@empresa.com',
    messagePlaceholder: 'Describe el rol, el equipo, los desafíos del cargo...',
    whatsappTitle: '¿Prefieres WhatsApp?',
    whatsappSub: 'Escríbeme directamente y te respondo en minutos.',
    linkedinTitle: '¿Prefieres LinkedIn?',
    linkedinSub: 'Revisa mi perfil completo y envíame un mensaje directo.',
  },

  projects: {
    label: '03 — Proyectos',
    heading: ['Trabajo', 'seleccionado.'],
    count: 'proyectos',
    all: 'Todos',
    featured: 'Destacado ◆',
    soon: 'Próximamente',
    viewDetail: 'Ver detalle →',
    hoverDesktop: 'pasa el mouse · click para ampliar',
    hoverMobile: 'click para ampliar',
    close: '✕ cerrar',
    closeAria: 'Cerrar',
    visit: 'Visitar sitio web →',
  },
}

export default es
