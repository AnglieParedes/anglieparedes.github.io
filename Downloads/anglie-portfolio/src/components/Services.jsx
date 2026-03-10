import FadeUp from './FadeUp'
import styles from './Services.module.css'

const plans = [
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
]

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <FadeUp>
        <div className={styles.secLabel}>02 — Servicios</div>
        <h2 className={styles.heading}>Planes de<br />contenido RRSS.</h2>
        <div className={styles.divider} />
      </FadeUp>

      <div className={styles.grid}>
        {plans.map((plan, i) => (
          <FadeUp key={plan.name} delay={i * 0.12}>
            <div className={`${styles.card} ${plan.featured ? styles.featured : ''}`}>
              {plan.badge && <span className={styles.badge}>{plan.badge}</span>}
              <div className={styles.planName}>{plan.name}</div>
              <div className={styles.price}>{plan.price}</div>
              <div className={styles.period}>CLP mensuales</div>
              <div className={styles.cardDivider} />
              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f}><span className={styles.arrow}>→</span>{f}</li>
                ))}
              </ul>
              <a href="#contact" className={styles.planCta}>Consultar →</a>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
