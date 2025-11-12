import React from 'react'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useGetPopularMoviesQuery } from '@store/tmdbApi'
import Component from './Component'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ROUTES } from '@constants'
import type { TMovieDetailScreenParams } from '@screens/movieDetail'

export type TScreenParams = {
  [ROUTES.Movies]: undefined
}

type TProps = NativeStackNavigationProp<TScreenParams & TMovieDetailScreenParams, keyof TScreenParams>

const Container = () => {
  const navigation = useNavigation<TProps>()
  const { data, isLoading, error } = useGetPopularMoviesQuery()

  const handlePressMovie = (id: number) => {
    navigation.navigate(ROUTES.MovieDetail, { movieId: id })
  }

  if (isLoading) return <Text>Loading...</Text>
  if (error) return <Text>Error loading movies</Text>

  return <Component movies={data?.results ?? []} onPressMovie={handlePressMovie} />
}

export default Container
