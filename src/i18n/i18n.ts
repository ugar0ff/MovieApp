import * as RNLocalize from 'react-native-localize'
import en from './translations/en.json'
import hi from './translations/hi.json'

const I18n: any = require('i18n-js')

I18n.translations = { en, hi }
I18n.fallbacks = true
I18n.locale = RNLocalize.getLocales()[0].languageTag

export default I18n
