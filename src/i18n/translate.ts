import { useState, useEffect } from 'react'
import I18n from './i18n'
import * as RNLocalize from 'react-native-localize'

export const useTranslation = () => {
  const [, setLocale] = useState(I18n.locale)

  useEffect(() => {
    const current = RNLocalize.getLocales()[0]?.languageTag
    if (current && current !== I18n.locale) {
      I18n.locale = current
      setLocale(current)
    }
  }, [])

  return I18n.t
}

export const changeLanguage = (code: string): void => {
  I18n.locale = code
}
