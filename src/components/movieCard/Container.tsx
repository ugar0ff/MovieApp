import React from 'react'
import Component from './Component'
import type { Movie } from '@types'
import { useFavorite } from '@hooks/useFavorite'

type TProps = {
  movie: Movie
  onPress: () => void
}

const Container = ({ movie, onPress }: TProps) => {
  const { isFavorite, toggleFavorite } = useFavorite(movie)

  return (
    <Component
      movie={movie}
      onPress={onPress}
      isFavorite={isFavorite}
      onToggleFavorite={toggleFavorite}
    />
  )
}

export default Container
