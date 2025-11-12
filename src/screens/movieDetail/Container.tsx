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

export type TScreenParams = {
  [ROUTES.MovieDetail]: { movieId: number }
}

type TRouteProp = RouteProp<TScreenParams, typeof ROUTES.MovieDetail>

const Container = () => {
  const route = useRoute<TRouteProp>()
  const { movieId } = route.params
  const dispatch = useDispatch<AppDispatch>()

  const { data, isLoading, error } = useGetMovieDetailsQuery(movieId)
  const favorites = useSelector((state: RootState) => state.favorites.movies)
  const isFavorite = favorites.some((m) => m.id === movieId)

  const handleToggleFavorite = (movie: Movie) => {
    if (isFavorite) dispatch(removeFavorite(movie.id))
    else dispatch(addFavorite(movie))
  }

  if (isLoading) return <Text>Loading...</Text>
  if (error || !data) return <Text>Error loading movie</Text>

  return <Component movie={data} isFavorite={isFavorite} onToggleFavorite={handleToggleFavorite} />
}

export default Container
