import React, { useState, useEffect, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Component } from './Component'
import { ROUTES } from '@constants'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { TMovieDetailScreenParams } from '../movieDetail'
import { useSearchMoviesQuery } from '@store/tmdbApi'
import type { Movie } from '@types'

export type TScreenParams = {
  [ROUTES.Search]: undefined
}

type TProps = NativeStackNavigationProp<
  TScreenParams & TMovieDetailScreenParams,
  keyof TScreenParams
>

export const Container = () => {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState<Movie[]>([])

  const navigation = useNavigation<TProps>()

  const { data, isLoading, isError, isFetching } = useSearchMoviesQuery(
    { query, page },
    { skip: !query },
  )

  useEffect(() => {
    if (data?.results) {
      setMovies(prev => {
        const map = new Map<number, Movie>()
        if (page !== 1) prev.forEach(m => map.set(m.id, m))
        data.results.forEach(m => map.set(m.id, m))
        return Array.from(map.values())
      })
    }
  }, [data, page])

  const handlePressMovie = useCallback(
    (id: number) => navigation.navigate(ROUTES.MovieDetail, { movieId: id }),
    [navigation],
  )

  const handleLoadMore = useCallback(() => {
    if (!isFetching && data && data.page < data.total_pages) {
      setPage(prev => prev + 1)
    }
  }, [isFetching, data])

  return (
    <Component
      query={query}
      setQuery={setQuery}
      movies={movies}
      isLoading={isLoading}
      isError={isError}
      onMoviePress={handlePressMovie}
      onEndReached={handleLoadMore}
      isFetching={isFetching}
    />
  )
}
