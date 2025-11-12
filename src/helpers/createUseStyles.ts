import { useMemo } from 'react'
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native'
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { scale } from './scale'

type TStyle = ImageStyle & TextStyle & ViewStyle

export const createUseStyles = <
  T extends (params: { insets: ReturnType<typeof useSafeAreaInsets> }) => Record<string, TStyle>,
>(
  getStyles: T,
) => ({
  useStyles: () => {
    const insets = useSafeAreaInsets()

    const styles = useMemo(() => StyleSheet.create(scale(getStyles({ insets }))), [insets])

    return styles as ReturnType<T>
  },
})
