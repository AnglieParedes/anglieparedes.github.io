import FadeUp from './FadeUp'
import { useLang } from '../i18n/LanguageContext'
import styles from './Services.module.css'

export default function Services() {
  const { t } = useLang()
  const s = t.services
  const plans = s.plans
  return (
    <section className={styles.services} id="services">
      <FadeUp>
        <div className={styles.secLabel}>{s.label}</div>
        <h2 className={styles.heading}>{s.heading[0]}<br />{s.heading[1]}</h2>
        <div className={styles.divider} />
      </FadeUp>

      <div className={styles.grid}>
        {plans.map((plan, i) => (
          <FadeUp key={plan.name} delay={i * 0.12}>
            <div className={`${styles.card} ${plan.featured ? styles.featured : ''}`}>
              {plan.badge && <span className={styles.badge}>{plan.badge}</span>}
              <div className={styles.planName}>{plan.name}</div>
              <div className={styles.price}>{plan.price}</div>
              <div className={styles.period}>{s.period}</div>
              <div className={styles.cardDivider} />
              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f}><span className={styles.arrow}>→</span>{f}</li>
                ))}
              </ul>
              <a href="#contact" className={styles.planCta}>{s.cta}</a>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
