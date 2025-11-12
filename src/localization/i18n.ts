const I18n = require('i18n-js')
import * as RNLocalize from 'react-native-localize'

import en from './translations/en.json'
import hi from './translations/hi.json'

I18n.translations = { en, hi }
I18n.fallbacks = true

const locales = RNLocalize.getLocales()
if (locales.length > 0) {
  I18n.locale = locales[0].languageTag
}

export default I18n
