import React, { memo } from 'react'
import { FlatList, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { useStyles } from './useStyles'
import type { Movie } from '@types'
import Config from 'react-native-config'

type TProps = {
  movies: Movie[]
  onPressMovie: (id: number) => void
  onEndReached: () => void
  isFetching: boolean
}

const Component = ({ movies, onPressMovie, onEndReached, isFetching }: TProps) => {
  const styles = useStyles()

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      style={styles.list}
      contentContainerStyle={styles.container}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.4}
      ListFooterComponent={
        isFetching ? (
          <ActivityIndicator style={{ marginVertical: 20 }} size="small" />
        ) : null
      }
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => onPressMovie(item.id)}>
          <Image source={{ uri: `${Config.TMDB_IMAGE}${item.poster_path}` }} style={styles.poster} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.rating}>⭐ {item.vote_average.toFixed(1)}</Text>
        </TouchableOpacity>
      )}
    />
  )
}


export default memo(Component)
