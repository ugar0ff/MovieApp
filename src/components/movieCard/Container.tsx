import React from 'react'
import Component from './Component'
import type { Movie } from '@types'

type TProps = {
  movie: Movie
  onPress: () => void
}

const Container = ({ movie, onPress }: TProps) => {

  return (
    <Component
      movie={movie}
      onPress={onPress}
    />
  )
}

export default Container
