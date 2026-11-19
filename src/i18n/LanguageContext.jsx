import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react'
import es from './es'
import en from './en'

const dictionaries = { es, en }
const STORAGE_KEY = 'lang'

const getInitialLang = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'es' || saved === 'en') return saved
  } catch { /* localStorage no disponible */ }
  const nav = typeof navigator !== 'undefined' ? (navigator.language || '') : ''
  return nav.toLowerCase().startsWith('en') ? 'en' : 'es'
}

const setMeta = (selector, value) => {
  const el = document.querySelector(selector)
  if (el) el.setAttribute('content', value)
}

const LanguageContext = createContext({ lang: 'es', setLang: () => {}, t: es })

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang)
  const t = dictionaries[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    setMeta('meta[name="description"]', t.meta.description)
    setMeta('meta[property="og:title"]', t.meta.ogTitle)
    setMeta('meta[property="og:description"]', t.meta.ogDescription)
    setMeta('meta[property="og:locale"]', t.meta.ogLocale)
  }, [lang, t])

  const setLang = useCallback((next) => {
    if (next !== 'es' && next !== 'en') return
    setLangState(next)
    try { localStorage.setItem(STORAGE_KEY, next) } catch { /* ignorar */ }
  }, [])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => useContext(LanguageContext)

// Valores enviados por EmailJS: siempre en español, sin importar el idioma de la interfaz
export const esValues = { serviceOptions: es.form.serviceOptions, contractOptions: es.experience.contractOptions }
