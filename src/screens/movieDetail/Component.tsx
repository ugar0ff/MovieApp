import React, { memo } from 'react'
import { ScrollView, Text, Image, Button } from 'react-native'
import { useStyles } from './useStyles'
import type { Movie } from '@types'
import { URLS } from '@constants'

type TProps = {
  movie: Movie
  isFavorite: boolean
  onToggleFavorite: (movie: Movie) => void
}

const Component = ({ movie, isFavorite, onToggleFavorite }: TProps) => {
  const styles = useStyles()

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: `${URLS.Image}${movie.poster_path}` }}
        style={styles.poster}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.rating}>Rating: {movie.rating}</Text>
      <Button
        title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        onPress={() => onToggleFavorite(movie)}
      />
    </ScrollView>
  )
}

export default memo(Component)
