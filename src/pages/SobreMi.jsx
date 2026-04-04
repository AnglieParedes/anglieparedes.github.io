import Experience from '../components/Experience'
import Education from '../components/Education'
import FadeUp from '../components/FadeUp'
import styles from './SobreMi.module.css'

const stats = [
  { n: '+5', l: 'Años exp.' },
  { n: '+30', l: 'Proyectos' },
  { n: '+20', l: 'Herramientas' },
  { n: 'A2', l: 'Inglés' },
]

const skills = [
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
]

export default function SobreMi() {
  return (
    <>
      {/* HERO DE PÁGINA */}
      <section className={styles.pageHero}>
        <FadeUp>
          <div className={styles.secLabel}>01 — Sobre mí</div>
          <h1 className={styles.heading}>Diseño que<br /><span className={styles.accent}>conecta.</span></h1>
        </FadeUp>
      </section>

      {/* BIO + SKILLS */}
      <section className={styles.bio}>
        <div className={styles.grid}>
          <FadeUp delay={0.1}>
            <div className={styles.statsRow}>
              {stats.map((s) => (
                <div key={s.l} className={styles.stat}>
                  <span className={styles.statN}>{s.n}</span>
                  <span className={styles.statL}>{s.l}</span>
                </div>
              ))}
            </div>
            <p>Diseñadora gráfica especializada en Branding, UX/UI y desarrollo web, creando experiencias digitales que comunican, conectan y convierten — sin importar dónde estés.</p>
            <p>Actualmente trabajo como <strong>Desarrolladora Web en MoreStudio</strong>, creando soluciones digitales para clientes en Chile y Latinoamérica.</p>
            <blockquote className={styles.quote}>
              "Hagamos un mundo más sencillo por medio del diseño. Simple, lógico y con estilo."
            </blockquote>
          </FadeUp>

          <FadeUp delay={0.2}>
            {skills.map((group) => (
              <div key={group.cat} className={styles.skillGroup}>
                <div className={styles.skillCat}>{group.cat}</div>
                <div className={styles.skillTags}>
                  {group.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </FadeUp>
        </div>
      </section>

      {/* EXPERIENCIA Y EDUCACIÓN — reutiliza tus componentes existentes */}
      <Experience />
      <Education />
    </>
  )
}