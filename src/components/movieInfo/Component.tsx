import React, { memo } from 'react'
import { VStack, Text } from 'native-base'
import { useStyles } from './useStyles'
import type { Movie } from '@types'
import { keyMap, useTranslation } from '@localization'

type TProps = {
  movie: Movie
}

const Component = ({ movie }: TProps) => {
  const styles = useStyles()
  const { t } = useTranslation()

  return (
    <VStack space={3} style={styles.container}>
      <Text fontSize="2xl" bold>
        {movie.title}
      </Text>
      <Text fontSize="md">
        {t(keyMap.rating)}: {movie.vote_average.toFixed(1)}
      </Text>
      <Text fontSize="sm" color="gray.500">
        {t(keyMap.release_date)}: {movie.release_date ?? t(keyMap.unknown)}
      </Text>
      <Text fontSize="md" lineHeight={22}>
        {movie.overview}
      </Text>
    </VStack>
  )
}

export default memo(Component)
