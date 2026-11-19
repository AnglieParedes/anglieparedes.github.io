import { useLang } from '../i18n/LanguageContext'
import styles from './Marquee.module.css'

export default function Marquee() {
  const { t } = useLang()
  const items = t.marquee
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
