import { useState, useEffect } from 'react'
import i18n from './i18n'

export const useTranslation = () => {
  const [locale, setLocale] = useState(i18n.locale)

  useEffect(() => {
    i18n.locale = locale
  }, [locale])

  const t = (key: string, params?: Record<string, any>) => {
    return i18n.t ? i18n.t(key, params) : key
  }

  const changeLanguage = (code: string) => {
    i18n.locale = code
    setLocale(code)
  }

  return { t, locale, changeLanguage }
}
