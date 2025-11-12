import React from 'react'
import Component from './Component'
import type { Genre } from '@types'

type TProps = {
  genres: Genre[]
}

const Container = ({ genres }: TProps) => <Component genres={genres} />

export default Container
