import { I18n } from 'i18n-js'
import * as RNLocalize from 'react-native-localize'

import en from './translations/en.json'
import hi from './translations/hi.json'

const i18n = new I18n({ en, hi })
i18n.defaultLocale = 'en'

const locales = RNLocalize.getLocales()
i18n.locale = locales.length ? locales[0].languageCode : 'en'

export default i18n
