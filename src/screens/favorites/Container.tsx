import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Component from './Component'
import type { RootState } from '@store'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ROUTES } from '@constants'
import type { TMovieDetailScreenParams } from '../movieDetail'

export type TScreenParams = {
  [ROUTES.Favorites]: undefined
}

type TProps = NativeStackNavigationProp<TScreenParams & TMovieDetailScreenParams, keyof TScreenParams>

const Container = () => {
  const navigation = useNavigation<TProps>()
  const movies = useSelector((state: RootState) => state.favorites.movies)

  const handlePressMovie = (id: number) => {
    navigation.navigate(ROUTES.MovieDetail, { movieId: id })
  }

  return <Component movies={movies} onPressMovie={handlePressMovie} />
}

export default Container
