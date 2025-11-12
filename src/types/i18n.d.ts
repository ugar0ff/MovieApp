declare module 'i18n-js' {
  type Translations = { [key: string]: string | Translations }

  const I18n: {
    translations: Record<string, Translations>
    fallbacks: boolean
    locale: string
    t: (key: string, options?: Record<string, unknown>) => string
  }

  export default I18n
}