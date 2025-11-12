import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react'
import { View, ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import { useGetPopularMoviesQuery } from '@store/tmdbApi'
import Component from './Component'
import { ROUTES } from '@constants'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { TMovieDetailScreenParams } from '../movieDetail'
import type { TSearchScreenParams } from '../search'
import { keyMap, useTranslation } from '@localization'
import type { Movie } from '@types'
import { SearchIcon } from 'native-base'
import { useStyles } from './useStyles'

export type TScreenParams = {
  [ROUTES.Movies]: undefined
}

type TProps = NativeStackNavigationProp<
  TScreenParams & TMovieDetailScreenParams & TSearchScreenParams,
  keyof TScreenParams
>

const Container = () => {
  const styles = useStyles()
  const navigation = useNavigation<TProps>()
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState<Movie[]>([])
  const { t } = useTranslation()

  const { data, isLoading, error, isFetching } = useGetPopularMoviesQuery(page)

  useEffect(() => {
    if (data?.results) {
      setMovies(prev => {
        const map = new Map<number, Movie>()
        if (page !== 1) prev.forEach(movie => map.set(movie.id, movie))
        data.results.forEach(movie => map.set(movie.id, movie))
        return Array.from(map.values())
      })
    }
  }, [data, page])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: t(keyMap.movies),
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 16 }}
          onPress={() => navigation.navigate(ROUTES.Search)}
        >
          <SearchIcon size={6} />
        </TouchableOpacity>
      ),
    })
  }, [navigation, t])

  const handlePressMovie = useCallback(
    (id: number) => navigation.navigate(ROUTES.MovieDetail, { movieId: id }),
    [navigation],
  )

  const handleLoadMore = useCallback(() => {
    if (!isFetching && data && data.page < data.total_pages) setPage(prev => prev + 1)
  }, [data, isFetching])

  if (isLoading && page === 1) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (error) {
    return <Text style={styles.error}>{t(keyMap.error_loading_movies)}</Text>
  }

  return (
    <Component
      movies={movies}
      onPressMovie={handlePressMovie}
      onEndReached={handleLoadMore}
      isFetching={isFetching}
    />
  )
}

export default Container
