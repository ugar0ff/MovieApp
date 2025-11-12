import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as RNLocalize from 'react-native-localize'
import Component from './Component'
import type { RootState, AppDispatch } from '@store'
import { setLanguage, type LanguageOption } from '@store/settingsSlice'
import type { ROUTES } from '@constants'
import { useTranslation } from '@localization'

const options = ['System', 'English', 'Hindi']

export type TScreenParams = {
  [ROUTES.Languages]: undefined
}

const Container = () => {
  const dispatch = useDispatch<AppDispatch>()
  const userLang = useSelector((state: RootState) => state.settings.language)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { changeLanguage } = useTranslation()

  useEffect(() => {
    if (userLang === 'en') setSelectedIndex(1)
    else if (userLang === 'hi') setSelectedIndex(2)
    else setSelectedIndex(0)
  }, [userLang])

  const handleSelect = (index: number) => {
    setSelectedIndex(index)
    let lang: LanguageOption = 'system'

    switch (index) {
      case 1:
        lang = 'en'
        changeLanguage('en')
        break
      case 2:
        lang = 'hi'
        changeLanguage('hi')
        break
      default:
        const systemLang = RNLocalize.getLocales()[0]?.languageCode || 'en'
        changeLanguage(systemLang)
        lang = 'system'
        break
    }

    dispatch(setLanguage(lang))
  }

  return <Component options={options} selectedIndex={selectedIndex} onSelect={handleSelect} />
}

export default Container
