import { useState, useEffect } from 'react'
import type { AppStateStatus } from 'react-native'
import { AppState } from 'react-native'
import I18n from './i18n'

export const useTranslation = () => {
  const [, setLocale] = useState(I18n.locale)

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === 'active') {
        const current = Intl.DateTimeFormat().resolvedOptions().locale
        if (current && current !== I18n.locale) {
          I18n.locale = current
          setLocale(current)
        }
      }
    }

    const subscription = AppState.addEventListener('change', handleAppStateChange)

    return () => {
      subscription.remove()
    }
  }, [])

  return I18n.t
}

export const changeLanguage = (code: string): void => {
  I18n.locale = code
}
