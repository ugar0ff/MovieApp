import 'i18n-js'

declare module 'i18n-js' {
  interface I18nStatic {
    translations: Record<string, any>
  }
}
