import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function FadeUp({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView(0.08)
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
