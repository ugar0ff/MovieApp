import React from 'react'
import { Text } from 'react-native'
import type { RouteProp} from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import { useGetMovieDetailsQuery } from '@store/tmdbApi'
import { useDispatch, useSelector } from 'react-redux'
import Component from './Component'
import { addFavorite, removeFavorite } from '@store/favoritesSlice'
import type { AppDispatch, RootState } from '@store'
import type { ROUTES } from '@constants'
import type { Movie } from '@types'
import { keyMap, useTranslation } from '@localization'

export type TScreenParams = {
  [ROUTES.MovieDetail]: { movieId: number }
}

type TRouteProp = RouteProp<TScreenParams, typeof ROUTES.MovieDetail>

const Container = () => {
  const { t } = useTranslation()
  const route = useRoute<TRouteProp>()
  const { movieId } = route.params
  const dispatch = useDispatch<AppDispatch>()

  const { data: movie, isLoading, error } = useGetMovieDetailsQuery(movieId)
  const favorites = useSelector((state: RootState) => state.favorites.movies)
  const isFavorite = favorites.some((m) => m.id === movieId)

  const handleToggleFavorite = (movie: Movie) => {
    if (isFavorite) dispatch(removeFavorite(movie.id))
    else dispatch(addFavorite(movie))
  }

  if (isLoading) return <Text>{t(keyMap.loading)}</Text>
  if (error || !movie) return <Text>{t(keyMap.error_loading_movie)}</Text>

  return <Component movie={movie} isFavorite={isFavorite} onToggleFavorite={handleToggleFavorite} />
}

export default Container
