import React from 'react'
import Component from './Component'
import type { Movie } from '@types'
import type { StyleProp, ViewStyle } from 'react-native'

type TProps = {
  movies: Movie[]
  onPressMovie: (id: number) => void
  onEndReached: () => void
  isFetching: boolean
  emptyMessage?: string
  containerStyle?: StyleProp<ViewStyle>
}

const Container = (props: TProps) => <Component {...props} />

export default Container
