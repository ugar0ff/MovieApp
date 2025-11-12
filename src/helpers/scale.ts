import { TARGET_DEVICE } from '@constants'
import { Dimensions } from 'react-native'

const excludedProps = new Set([
  'flex',
  'flexGrow',
  'scale',
  'opacity',
  'zIndex',
  'angle',
])

const getScaleCoefficient = () =>
  Math.min(Dimensions.get('window').width, Dimensions.get('window').height) /
  TARGET_DEVICE.width

const scaleValue = (
  value: number,
  coefficient = getScaleCoefficient()
): number => {
  return value * coefficient
}

export const scale = <T extends Record<string, unknown>>(
  object: T,
  coefficient = getScaleCoefficient()
): T => {
  return Object.entries(object).reduce<Record<string, unknown>>(
    (acc, [key, value]) => {
      let scaledValue: unknown = value

      if (Array.isArray(value)) {
        scaledValue = value.map((item) =>
          typeof item === 'number' ? scaleValue(item, coefficient) : scale(item as Record<string, unknown>, coefficient)
        )
      } else if (value && typeof value === 'object') {
        scaledValue = scale(value as Record<string, unknown>, coefficient)
      } else if (!excludedProps.has(key) && typeof value === 'number') {
        scaledValue = scaleValue(value, coefficient)
      }

      Object.assign(acc, { [key]: scaledValue })
      return acc
    },
    {} as Record<string, unknown>
  ) as T
}
