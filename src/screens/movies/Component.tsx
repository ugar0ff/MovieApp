import React, { memo, useCallback } from 'react'
import { MoviesList } from '@components/moviesList'
import type { Movie } from '@types'
import { keyMap, useTranslation } from '@localization'
import { useStyles } from './useStyles'

type Props = {
  movies: Movie[]
  onPressMovie: (id: number) => void
  onEndReached: () => void
  isFetching: boolean
}

const Component = ({ movies, onPressMovie, onEndReached, isFetching }: Props) => {
  const styles = useStyles()
  const { t } = useTranslation()
  const handlePressMovie = useCallback((id: number) => onPressMovie(id), [onPressMovie])

  return (
    <MoviesList
      movies={movies}
      onPressMovie={handlePressMovie}
      onEndReached={onEndReached}
      isFetching={isFetching}
      emptyMessage={t(keyMap.no_movies)}
      containerStyle={styles.container}
    />
  )
}

export default memo(Component)
