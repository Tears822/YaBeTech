import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { buildContent } from './buildContent'
import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY, LANGUAGES } from './languages'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_LOCALE
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    return LANGUAGES.some((lang) => lang.code === stored) ? stored : DEFAULT_LOCALE
  })

  const setLocale = (code) => {
    if (!LANGUAGES.some((lang) => lang.code === code)) return
    setLocaleState(code)
    window.localStorage.setItem(LOCALE_STORAGE_KEY, code)
  }

  const t = useMemo(() => buildContent(locale), [locale])

  useEffect(() => {
    document.documentElement.lang = locale === 'fr' ? 'fr' : locale === 'tl' ? 'tl' : 'en'
    document.title = t.meta.siteTitle
  }, [locale, t.meta.siteTitle])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      languages: LANGUAGES,
    }),
    [locale, t]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

/** Shorthand for translated site content. */
export function useContent() {
  return useLanguage().t
}
