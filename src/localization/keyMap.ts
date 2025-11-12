import translation from './translations/en.json'

type KeyMap = keyof typeof translation

export const keyMap: Record<KeyMap, KeyMap> = Object.keys(translation).reduce(
  (acc, key) => {
    acc[key as KeyMap] = key as KeyMap
    return acc
  },
  {} as Record<KeyMap, KeyMap>,
)
