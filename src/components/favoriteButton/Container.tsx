import React, { useCallback } from 'react'
import Component from './Component'
import type { Movie } from '@types'

type TProps = {
  movie: Movie
  isFavorite: boolean
  onToggleFavorite: (movie: Movie) => void
}

const Container = ({ movie, isFavorite, onToggleFavorite }: TProps) => {
  const handlePress = useCallback(() => onToggleFavorite(movie), [onToggleFavorite, movie])

  return <Component movie={movie} isFavorite={isFavorite} onToggleFavorite={handlePress} />
}

export default Container
