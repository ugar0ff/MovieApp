import React, { memo } from 'react'
import { FlatList, Text, TouchableOpacity, Image } from 'react-native'
import { useStyles } from './useStyles'
import type { Movie } from '@types'
import Config from 'react-native-config'

type TProps = {
  movies: Movie[]
  onPressMovie: (id: number) => void
}

const Component = ({ movies, onPressMovie }: TProps) => {
  const styles = useStyles()

  if (movies.length === 0) return <Text style={styles.empty}>No favorites yet</Text>

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => onPressMovie(item.id)}>
          <Image source={{ uri: `${Config.TMDB_IMAGE}${item.poster_path}` }} style={styles.poster} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  )
}

export default memo(Component)
