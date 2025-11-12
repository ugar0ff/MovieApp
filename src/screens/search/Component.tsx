import React, { memo, useCallback } from 'react'
import { View, Input, Text } from 'native-base'
import { MoviesList } from '@components/moviesList'
import type { Movie } from '@types'
import { keyMap, useTranslation } from '@localization'
import { useStyles } from './styles'

type TProps = {
  query: string
  setQuery: (query: string) => void
  movies: Movie[]
  isLoading: boolean
  isError: boolean
  onMoviePress: (id: number) => void
  onEndReached: () => void
  isFetching: boolean
}

export const Component = memo(
  ({
    query,
    setQuery,
    movies,
    isLoading,
    isError,
    onMoviePress,
    onEndReached,
    isFetching,
  }: TProps) => {
    const styles = useStyles()
    const { t } = useTranslation()

    const handlePressMovie = useCallback((id: number) => onMoviePress(id), [onMoviePress])

    return (
      <View style={styles.container}>
        <Input
          placeholder={t(keyMap.search_placeholder)}
          value={query}
          onChangeText={setQuery}
          style={styles.input}
        />

        {isLoading && <Text>{t(keyMap.loading)}</Text>}
        {isError && <Text>{t(keyMap.error_loading_movies)}</Text>}

        <MoviesList
          movies={movies}
          onPressMovie={handlePressMovie}
          onEndReached={onEndReached}
          isFetching={isFetching}
          emptyMessage={t(keyMap.no_movies)}
          containerStyle={styles.list}
        />
      </View>
    )
  },
)
