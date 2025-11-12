import React from 'react'
import Component from './Component'
import type { Movie } from '@types'

type TProps = {
  movie: Movie
}

const Container = ({ movie }: TProps) => <Component movie={movie} />

export default Container
