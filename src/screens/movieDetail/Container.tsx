import React from 'react'
import { Text } from 'native-base'
import type { RouteProp } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import { useGetMovieDetailsQuery } from '@store/tmdbApi'
import Component from './Component'
import type { ROUTES } from '@constants'
import { keyMap, useTranslation } from '@localization'
import { useFavorite } from '@hooks/useFavorite'

export type TScreenParams = {
  [ROUTES.MovieDetail]: { movieId: number }
}

type TRouteProp = RouteProp<TScreenParams, typeof ROUTES.MovieDetail>

const Container = () => {
  const { t } = useTranslation()
  const route = useRoute<TRouteProp>()
  const { movieId } = route.params

  const { data: movie, isLoading, error } = useGetMovieDetailsQuery(movieId)
  const { isFavorite, toggleFavorite } = useFavorite(movie)

  if (isLoading) return <Text>{t(keyMap.loading)}</Text>
  if (error || !movie) return <Text>{t(keyMap.error_loading_movie)}</Text>

  return <Component movie={movie} isFavorite={isFavorite} onToggleFavorite={toggleFavorite} />
}

export default Container
