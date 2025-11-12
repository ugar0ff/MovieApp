import React, { memo } from 'react'
import { VStack, Text } from 'native-base'
import { useStyles } from './useStyles'
import type { Genre } from '@types'
import { keyMap, useTranslation } from '@localization'

type TProps = {
  genres: Genre[]
}

const Component = ({ genres }: TProps) => {
  const styles = useStyles()
  const { t } = useTranslation()

  if (!genres || genres.length === 0) return null

  return (
    <VStack style={styles.container} space={1}>
      <Text fontSize="sm" bold>
        {t(keyMap.genres)}:
      </Text>
      <Text fontSize="sm" color="gray.700">
        {genres.map(g => g.name).join(', ')}
      </Text>
    </VStack>
  )
}

export default memo(Component)
