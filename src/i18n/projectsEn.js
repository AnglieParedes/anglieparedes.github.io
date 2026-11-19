// Traducción al inglés de los proyectos (Projects.jsx). Los datos en español viven en el componente;
// aquí se indexa por número de proyecto. Lo que no esté en estos mapas se muestra tal cual.

export const categoriesEn = {
  'Todos': 'All',
  'E-commerce': 'E-commerce',
  'Sistema / Dev': 'Systems / Dev',
  'Landing': 'Landing',
  'Identidad & Branding': 'Identity & Branding',
  'Contenido de RRSS': 'Social Media Content',
}

export const tagsEn = {
  'Plugin a medida': 'Custom plugin',
  'Integración Relbase': 'Relbase integration',
  'Cotizador B2B': 'B2B quote tool',
  'Validación RUT': 'RUT validation',
  'Cookies Ley chilena': 'Cookie consent (Chilean law)',
  'UX/UI mobile': 'Mobile UX/UI',
  'Diseño web': 'Web design',
  'Catálogo de productos': 'Product catalog',
  'Cotizaciones': 'Quotes',
  'Sucursales': 'Branch locations',
  'Catálogos técnicos PDF': 'Technical PDF catalogs',
  'Buscador de productos': 'Product search',
  'Mega menú': 'Mega menu',
  'Checkout optimizado': 'Optimized checkout',
  'Formulario mayoristas': 'Wholesale form',
  'Checkout personalizado': 'Custom checkout',
  'Membresía': 'Membership',
  'Rediseño de blog': 'Blog redesign',
  'Migración de contenido': 'Content migration',
  'Identidad corporativa': 'Corporate identity',
  'Integraciones': 'Integrations',
  'Programa de fidelización': 'Loyalty program',
  'Cupones y promociones': 'Coupons & promotions',
  'Carrito AJAX': 'AJAX cart',
  'Widget Elementor': 'Elementor widget',
  'Diseño Gráfico': 'Graphic Design',
  'Logotipo': 'Logo',
  'Nombre publicitario': 'Brand name',
  'Contenido RRSS': 'Social media content',
  'Etiquetas': 'Labels',
  'Pendones': 'Banners',
  'Identidad Visual': 'Visual Identity',
  'Identidad Corporativa': 'Corporate Identity',
  'Política de privacidad': 'Privacy policy',
  'Paleta de colores': 'Color palette',
  'Diseño de etiqueta': 'Label design',
  'Manual de marca': 'Brand guidelines',
  'Plantillas': 'Templates',
  'Campañas': 'Campaigns',
  'Código a medida': 'Custom code',
  'Buscador interno': 'Internal search',
  'Tabla de aranceles': 'Fee schedule',
  'Integración agenda online': 'Online booking integration',
  'Portal de resultados': 'Results portal',
  'Widgets Elementor a medida': 'Custom Elementor widgets',
  'Mapa interactivo': 'Interactive map',
  'Formulario B2B': 'B2B form',
  'Sitio corporativo': 'Corporate site',
  'Cotizador en línea': 'Online quote tool',
  'Sistema de reservas': 'Booking system',
  'Seguimiento de pedidos': 'Order tracking',
  'Formulario de contacto': 'Contact form',
}

export const projectsEn = {
  '01': {
    type: 'Dental e-commerce · WordPress + WooCommerce · Custom plugin',
    detail: 'Collaborative team project for an online store of dental supplies. My part: redesign and development of the home page, integration with the Relbase invoicing system, and a quote system for clinics and Mercado Público (Chile\'s public procurement platform), with a request management panel and a weekly email report. I built the dynamic "Arrives today" notice, which, based on the day and time, tells customers whether their order qualifies for same-day dispatch, with a countdown and alerts in the cart, checkout and catalog. I also developed a custom plugin that bundles the site\'s tailor-made features: a new template for blog posts (with table of contents, categories and related products), a product search by name, SKU, brand or category, a quote tool for out-of-stock products, spam-protected forms with RUT (Chilean tax ID) validation, a cookie notice and privacy policy compliant with Chilean law, and product page improvements such as a sticky buy bar on mobile. Everything designed to make buying and requesting quotes simpler, faster and safer.',
  },
  '02': {
    type: 'Online psychological therapy · WordPress · Morestudio',
    detail: 'Complete website design and development for an online psychologist. Built in WordPress with Elementor Pro, HTML, CSS, JavaScript and additional add-ons. Focused on conveying trust and warmth, and making it easy for potential patients to get in touch.',
  },
  '03': {
    type: 'Industrial supplies · WordPress + WooCommerce · Morestudio',
    detail: 'Complete redesign of the Dimet website, an industrial supplies distributor with over 30 years in Chile, done at Morestudio. I designed a corporate site with a catalog: a home page with solutions for every industrial need, such as electric motors, variable frequency drives and generators; featured brands and partners; the company\'s history and goals; and a form to request quotes or advice. I also organized the information for branches across Chile and the product catalog download. Built in WordPress with Elementor Pro, WooCommerce and SMTP. Coming soon at dimet.cl.',
  },
  '04': {
    type: 'Hygienic motors and gearboxes · WordPress + WooCommerce · Morestudio',
    detail: 'Complete development of the Hydromec website, an industrial company that distributes hygienic-design motors and gearboxes for the food industry, done at Morestudio. I designed a corporate site with a store: a home page with product categories and brand advantages, an online catalog organized by series, an international certifications page, and a library of downloadable technical catalogs separated by metric and imperial standards. In WordPress with Elementor Pro and WooCommerce, I set up the catalog, product search, quote system, SMTP email delivery and email marketing campaigns. Coming soon.',
  },
  '05': {
    type: 'Website · WordPress · Design + development',
    detail: 'Complete development handled on my own: design, layout, payment gateway and general setup in WordPress with Elementor Pro. The logo was provided by the client.',
  },
  '06': {
    type: 'Supplements and vitamins · WordPress + WooCommerce · Morestudio',
    detail: 'Complete development of the online store for West5 Nutrition, a Chilean supplements and vitamins brand backed by medical expertise, done at Morestudio. I designed the shopping experience from start to finish: a home page with a new-releases carousel, doctor-recommended products and a section to shop by need, such as sleep and stress, energy or heart health; clear product pages with dosage and days of supply; and a mega menu with collections and categories. In WordPress with Elementor Pro and WooCommerce, I set up a product search with instant results, a checkout optimized for buying in a few steps, payments with Webpay and Flow, and SMTP email delivery. I also created the wholesale page with a form for new distributors and the shipping, refunds and FAQ pages. Everything designed to make choosing the right supplement and buying it simple and reliable.',
  },
  '07': {
    type: 'Optical store · Landing pages + conditional checkout · WordPress',
    urlLabel: 'Aviator Glasses →',
    url2Label: 'Sports Glasses →',
    detail: 'Team project for an optical store. My part: design and development of internal landing pages for product categories (aviator and sports glasses), focused on user experience and conversion. I also built a conditional checkout in PHP that adapts the payment flow and form fields to the type of product selected, improving the buying experience, plus design work and assorted changes. I also redesigned and improved the cart, the search and the general product catalog page.',
  },
  '08': {
    type: 'Health and wellness · WordPress · Membership + Custom plugin',
    urlLabel: 'View membership page →',
    detail: 'Team project for a health and wellness platform. My part: design and development of the Membership page, with plans and benefits that are easy to compare and a pop-up to capture new customers, plus design improvements across the site. I also revamped the blog by building a custom plugin: I created a unique layout so every article looks tidy and is easy to read, with a table of contents to jump to each section, recommended articles and a great mobile reading experience. I moved the 75 existing articles to the new design without losing content or Google rankings. I also implemented a cookie notice and a privacy policy compliant with Chilean law, so the site only tracks visits when the user gives consent. Everything designed to make getting informed and subscribing simpler and more trustworthy.',
  },
  '09': {
    type: 'Handmade jewelry · Own project · Branding + Web + Social Media',
    detail: 'My own project and one of the most complete of my career. Full web development in WordPress with Elementor Pro, plus custom HTML and CSS. Hosting migration, UX/UI design, payment gateway integration, Facto invoicing system and SMTP. Corporate identity and branding from scratch: logo, packaging and copy. Complete digital strategy: Google Ads, Meta Ads, email marketing campaigns and Instagram content creation. Corporate identity and registered trademark. All rights reserved ©',
  },
  '10': {
    type: 'Plants · WordPress + WooCommerce · Complete redesign',
    detail: 'Hosting migration, complete store redesign and development of new features. Integration of payment gateways, Mailchimp, Wordfence, Yoast SEO and Google Analytics. All built in WordPress with Elementor Pro.',
  },
  '11': {
    type: 'Mobile accessories · WordPress + WooCommerce · Complete design',
    detail: 'Complete design and development of an online store for smartphone accessories. Layout in WordPress with Elementor Pro, WooCommerce setup, integration of the Mercado Pago and WePay payment gateways, and an email marketing strategy with Mailchimp for customer loyalty.',
  },
  '12': {
    type: 'Corporate website · WordPress · Design + development',
    detail: 'Complete website development for a construction, installation and repair services company. Design, layout and general setup in WordPress with Elementor Pro and custom CSS.',
  },
  '13': {
    type: 'Multi-category store · Shopify + Payment gateways',
    detail: 'Multi-category store on Shopify. My part: integrating the Flow and Pago Fácil payment gateways into the existing site.',
  },
  '14': {
    type: 'Supplements · WordPress + WooCommerce · Custom plugin',
    detail: 'Collaborative team project for a cellular health and supplements brand. My part: support and management of the Kinsta hosting, conversion-focused product pages, internal landing pages, SMTP, email marketing campaigns and Microsoft Clarity to understand how users browse. I also developed a custom plugin that gathers all of the site\'s custom code in one place, with an admin menu organized by area. It includes a loyalty program with a 15% discount and a per-customer tracking panel, coupon rules for returning customers, and promotions such as 2-for-1 shown by name in the cart and checkout. I redesigned the header as an Elementor widget, with a side menu for mobile, a custom search with instant results and a side cart that lets customers apply coupons and change quantities without reloading the page. I also replaced third-party plugins with lighter custom solutions, such as the WhatsApp button and the cookie notice, and added a sticky buy bar on the product page. Everything designed to make buying faster and the site easier to manage.',
  },
  '15': {
    type: 'Rebranding · Corporate Identity · Social media content',
    detail: 'A project that has evolved and grown over time. Complete redesign of the brand logo with a more modern visual proposal that is consistent with the business identity. Development of a brand name and a branding system applied across different formats. Creation and management of social media content, building a consistent and appealing digital presence.',
  },
  '16': {
    type: 'Brand refresh · Identity · Social media content',
    detail: 'Complete branding and visual identity refresh: a fresher new brand system, label design for products, advertising banners and a variety of graphic pieces. Social media content creation with a consistent, recognizable visual style.',
  },
  '17': {
    type: 'Marketing agency · Landing pages + Custom plugin · WordPress',
    urlLabel: 'Contact form landing →',
    url2Label: 'Book a call landing →',
    detail: 'Collaborative team project for a marketing agency. My part: design and development of two conversion landing pages in WordPress with Elementor Pro, one with a contact form and one for booking a call, plus designs for different sections of the site, hosting and SMTP. I also developed a custom cookie plugin with the brand\'s identity: a banner with three clear options, a panel to choose which cookies to accept and a button to change your choice at any time. The plugin blocks the Meta Pixel and measurement cookies until the visitor gives permission, deletes the cookies if consent is withdrawn and leaves the site ready for Google Consent Mode v2. I also built an Elementor widget for the privacy policy, written for a B2B agency under Chilean data protection law, with 14 sections, a table of contents that follows you as you read and editable company details. I tested it on desktop, tablet and mobile. Everything designed so the site complies with the law without losing its style.',
  },
  '19': {
    type: 'Strategic consulting · WordPress · Elementor Pro + PHP',
    detail: 'Complete website development for a consulting and strategic management company. Design, layout and development entirely in WordPress with Elementor Pro, PHP, HTML and CSS. Focused on conveying solidity and professionalism, and making it easy for potential clients to get in touch.',
  },
  '18': {
    type: 'Mining · Rebranding · Corporate Identity',
    detail: 'Corporate identity refresh and complete rebranding for Semot, a mining company with over 30 years in the industry. A project that required balancing the weight and history of an established brand with a modern, solid and professional visual proposal. Full logo redesign with all its usage variants, definition of a new corporate color palette and an identity system applicable to different formats and media. Corporate identity and registered trademark. All rights reserved ©',
  },
  '20': {
    type: 'Dental health · Corporate Identity · Logo',
    detail: 'Corporate identity design, development of the logo in all its versions and adaptations for different media, and definition of the corporate color palette.',
  },
  '21': {
    type: 'Digital training · Corporate Identity · Logo',
    detail: 'Complete corporate identity design for OBainc Academy, a training platform specializing in digital transformation, agile practices and product management. Development of the logo with its positive and negative versions, adapted to the brand\'s existing color palette. Corporate identity and registered trademark. All rights reserved ©',
  },
  '22': {
    type: 'Social media content · Web graphics · Oct 2024 — Feb 2025',
    detail: 'Creation and design of social media content during the period Oct 2024 — Feb 2025: graphic pieces, stories, posts and visual material aligned with the brand identity. Design of graphics and visual assets for the website. A consistent visual strategy to maintain a cohesive and appealing digital presence.',
  },
  '23': {
    type: 'Energy efficiency · Social media content · Oct 2024 — Feb 2025',
    detail: 'Creation and design of social media content during the period Oct 2024 — Feb 2025: graphic pieces, stories, posts and visual material aligned with the brand identity. Complete redesign of the Instagram content templates, achieving a more modern, consistent and recognizable visual style. Design of graphics and visual assets for the website. A consistent visual strategy to maintain a cohesive and appealing digital presence.',
  },
  '27': {
    type: 'Online insurance · Social media content · Mar 2025 — May 2025',
    detail: 'Creation and design of graphic content for social media during the period Mar 2025 — May 2025: graphic pieces, stories, posts, campaigns and visual material for Instagram, aligned with the identity of Bigmon, a Chilean platform that lets people sell car insurance online and earn extra income.',
  },
  '26': {
    type: 'Girls\' school · Social media content · Mar 2025 — May 2025',
    detail: 'Creation and design of Instagram content during the period Mar 2025 — May 2025: graphic pieces, stories, posts and visual material aligned with the identity of La Maisonnette, a girls\' school with over 90 years of history, focused on shaping leaders for the 21st century.',
  },
  '25': {
    type: 'Outdoor advertising · Social media content · Mar 2025 — May 2025',
    detail: 'Creation and design of social media content during the period Mar 2025 — May 2025: graphic pieces, stories, posts and visual material for Instagram and TikTok, aligned with the brand identity of OOH Publicidad, a company specializing in outdoor advertising with a presence on more than 15,000 sites across Chile.',
  },
  '24': {
    type: 'Corporate identity · Energy drink · Brand guidelines',
    detail: 'Complete corporate identity design for a new energy drink brand with strong growth potential. Creation of the logo, brand system and visual palette that convey energy, modernity and distinction. Label design for the product and development of the corporate brand guidelines with usage rules, typography, colors and applications. Corporate identity and registered trademark. All rights reserved ©',
  },
  '28': {
    type: 'Medical and imaging center · WordPress + custom code',
    detail: 'Complete design and development of the website for iMedica, a medical and imaging center in Providencia, done at Morestudio with internal review and approval. I designed the whole experience: a home page with shortcuts to book an appointment, view results, check prices and meet the professionals; pages for each service, such as ultrasound, X-ray, CT scan, consultations and home care; a directory of the medical team and a section on Fonasa and Isapre coverage (Chile\'s public and private health insurance). On the development side, I built an internal search for exams, services and doctors, a fee schedule with search by name or Fonasa code and filters by exam type, and the connection to the external booking and exam results systems. Everything designed so patients find what they need and book in a few steps.',
  },
  '29': {
    type: 'B2B digital health · WordPress + custom Elementor widgets',
    detail: 'Complete design and development of the website for Atrys Chile, a subsidiary of the Spanish group Atrys Health, specializing in telemedicine and telediagnosis for hospitals and clinics. Project built at Morestudio. I designed a clear B2B corporate site for a complex subject: a home page with services organized in tabs, testimonials from institutions and client logos; eight service pages, such as teleradiology, telecardiology and clinical laboratory, with figures, modalities and the workflow explained step by step; and technology, clients, about us and contact pages. On the development side, I created a set of custom Elementor widgets: a header with mega menu, country selector and search; an interactive map of Chile showing presence by region; a world map of the group; logo carousels and custom tabs; and contact cards with a form to request proposals. Everything designed so a healthcare institution quickly understands what Atrys offers and requests a proposal.',
  },
  '30': {
    type: 'Specialist auto repair shop · WordPress + WooCommerce · Custom plugin',
    detail: 'Collaborative team project for an independent shop specializing in Jeep, Dodge, Chrysler and RAM, which sells parts online and books services. My part: development of the site and of a custom plugin with Elementor widgets for the key parts of the purchase. I designed the header with a side cart, the product page with related products, the cart and a custom checkout. I built an online quote tool where the customer chooses a service and vehicle, sees an estimated price and books an appointment in three steps, connected to an internal booking system. I also developed a tracking page to check the status of a parts order or a shop appointment, a help center with search, the WhatsApp button and a cookie notice compliant with Chilean law. Everything designed to make quoting, buying and booking fast and clear on any device.',
  },
  '31': {
    type: 'Robotics and industrial engineering · WordPress + custom Elementor widgets · Morestudio',
    detail: 'Collaborative team project for Sandiman, a Chilean applied engineering company with over 20 years in industrial robotics, hydraulic lifting, pipe intervention and nanobubbles, done at Morestudio. My part: design and development of the entire site, except the product quote tool, which a teammate built. I created a custom plugin with Elementor widgets: a header with a mega menu for four business lines and a search with quick links; a home page with a solutions carousel and company figures; and a service page template used across more than 15 services, with what we solve, applications, technology, advantages, experience, work process and contact, plus breadcrumbs for orientation. I also designed the about us page with history, mission, team and branches, a contact form that lets visitors choose the service of interest, the privacy policy and a cookie notice compliant with Chilean law. Everything designed to organize a very broad technical offering so each client quickly reaches their solution. Coming soon at sandiman.cl.',
  },
}
