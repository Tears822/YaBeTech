import { useEffect, useId, useRef, useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'

export default function LanguageSelector({ className = '', compact = false }) {
  const { locale, setLocale, languages, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const listId = useId()

  const current = languages.find((lang) => lang.code === locale) ?? languages[0]

  useEffect(() => {
    const onDocumentClick = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', onDocumentClick)
    return () => document.removeEventListener('click', onDocumentClick)
  }, [])

  const selectLocale = (code) => {
    setLocale(code)
    setOpen(false)
  }

  return (
    <div className={`lang-select ${className}`.trim()} ref={rootRef}>
      <button
        type="button"
        className="lang-select__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={t.language.select}
        onClick={() => setOpen((value) => !value)}
      >
        <i className="fa-solid fa-globe" aria-hidden="true" />
        {!compact && <span className="lang-select__label">{current.label}</span>}
        <i className={`fa-solid fa-chevron-down lang-select__chevron${open ? ' is-open' : ''}`} aria-hidden="true" />
      </button>

      {open && (
        <ul className="lang-select__menu" id={listId} role="listbox" aria-label={t.language.label}>
          {languages.map((lang) => {
            const isActive = lang.code === locale
            return (
              <li key={lang.code} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  className={`lang-select__option${isActive ? ' is-active' : ''}`}
                  onClick={() => selectLocale(lang.code)}
                >
                  <span>{lang.label}</span>
                  {isActive && <i className="fa-solid fa-check" aria-hidden="true" />}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
