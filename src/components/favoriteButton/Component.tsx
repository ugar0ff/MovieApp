import React, { memo } from 'react'
import { Button } from 'native-base'
import { useStyles } from './useStyles'
import type { Movie } from '@types'
import { keyMap, useTranslation } from '@localization'

type TProps = {
  movie: Movie
  isFavorite: boolean
  onToggleFavorite: (movie: Movie) => void
}

const Component = ({ movie, isFavorite, onToggleFavorite }: TProps) => {
  const styles = useStyles()
  const { t } = useTranslation()

  return (
    <Button style={styles.button} onPress={() => onToggleFavorite(movie)}>
      {isFavorite ? t(keyMap.remove_from_favorites) : t(keyMap.add_to_favorites)}
    </Button>
  )
}

export default memo(Component)
