import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useGetPopularMoviesQuery } from '@store/tmdbApi'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Component from './Component'
import { ROUTES } from '@constants'
import type { TMovieDetailScreenParams } from '../movieDetail'
import { keyMap, useTranslation } from '@localization'
import type { Movie } from '@types'
import { SearchIcon } from 'native-base'
import type { TSearchScreenParams } from '../search'

export type TScreenParams = {
  [ROUTES.Movies]: undefined
}

type TProps = NativeStackNavigationProp<TScreenParams & TMovieDetailScreenParams & TSearchScreenParams, keyof TScreenParams>

const Container = () => {
  const navigation = useNavigation<TProps>()
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState<Movie[]>([])
  const { t } = useTranslation()

  const { data, isLoading, error, isFetching } = useGetPopularMoviesQuery(page)

  useEffect(() => {
    if (data?.results) {
      setMovies((prev) => {
        const map = new Map<number, Movie>()

        if (page !== 1) {
          prev.forEach((movie) => map.set(movie.id, movie))
        }
        data.results.forEach((movie) => map.set(movie.id, movie))

        return Array.from(map.values())
      })
    }
  }, [data, page])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.Search)}
          style={{ marginRight: 16 }}
        >
          <SearchIcon name="search" size={6} />
        </TouchableOpacity>
      ),
      title: t(keyMap.movies),
    })
  }, [navigation, t])

  const handlePressMovie = useCallback(
    (id: number) => {
      navigation.navigate(ROUTES.MovieDetail, { movieId: id })
    },
    [navigation]
  )

  const handleLoadMore = useCallback(() => {
    if (!isFetching && data && data.page < data.total_pages) {
      setPage((prev) => prev + 1)
    }
  }, [isFetching, data])

  if (isLoading && page === 1) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (error) {
    return <Text style={{ textAlign: 'center', marginTop: 40 }}>{t(keyMap.error_loading_movies)}</Text>
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
