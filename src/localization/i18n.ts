import { I18n } from 'i18n-js'
import * as RNLocalize from 'react-native-localize'

import en from './translations/en.json'
import hi from './translations/hi.json'
import { languagesList } from '@constants'

const i18n = new I18n({ en, hi })
const defaultLanguage = languagesList[0]
i18n.defaultLocale = defaultLanguage

const locales = RNLocalize.getLocales()
i18n.locale = locales.length && languagesList.includes(locales[0].languageCode) ? 
    locales[0].languageCode : defaultLanguage

export default i18n
