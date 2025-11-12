import React, { memo } from 'react'
import { FlatList, Text, TouchableOpacity, Image } from 'react-native'
import { useStyles } from './useStyles'
import type { Movie } from '@types'
import { URLS } from '@constants'

type TProps = {
  movies: Movie[]
  onPressMovie: (id: number) => void
}

const Component = ({ movies, onPressMovie }: TProps) => {
  const styles = useStyles()

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => onPressMovie(item.id)}>
          <Image source={{ uri: `${URLS.Image}${item.poster_path}` }} style={styles.poster} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.rating}>{item.rating}</Text>
        </TouchableOpacity>
      )}
    />
  )
}

export default memo(Component)
