import styles from './Marquee.module.css'

const items = [
  'Diseño Gráfico','UX / UI','Branding','Web Design',
  'E-commerce','Social Media','WordPress','Identidad Corporativa',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            {i < doubled.length - 1 && <span className={styles.sep}>◆</span>}
          </span>
        ))}
      </div>
    </div>
  )
}
