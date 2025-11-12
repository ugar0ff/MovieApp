import React, { memo } from 'react'
import { TouchableOpacity } from 'react-native'
import { Box, Text, Image } from 'native-base'
import { useStyles } from './useStyles'
import type { Movie } from '@types'
import Config from 'react-native-config'

type Props = {
  movie: Movie
  onPress: () => void
}

const Component = ({ movie, onPress }: Props) => {
  const styles = useStyles()
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: `${Config.TMDB_IMAGE}${movie.poster_path}` }}
        style={styles.poster}
      />
      <Box p={2}>
        <Text fontSize="md" bold>{movie.title}</Text>
        <Text fontSize="sm" color="gray.500">⭐ {movie.vote_average.toFixed(1)}</Text>
      </Box>
    </TouchableOpacity>
  )
}

export default memo(Component)
