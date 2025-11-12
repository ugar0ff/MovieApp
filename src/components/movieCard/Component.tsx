import React, { memo } from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, Image, VStack, HStack } from 'native-base'
import { useStyles } from './useStyles'
import type { Movie } from '@types'
import Config from 'react-native-config'
import { FavoriteButton } from '../favoriteButton'

type Props = {
  movie: Movie
  onPress: () => void
  isFavorite: boolean
  onToggleFavorite: (movie: Movie) => void
}

const Component = ({ movie, onPress, isFavorite, onToggleFavorite }: Props) => {
  const styles = useStyles()

  const imageUri = movie.poster_path
    ? { uri: `${Config.TMDB_IMAGE}${movie.poster_path}` }
    : require('../../assets/poster-placeholder.png')

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <HStack flex={1}>
        <Image source={imageUri} style={styles.poster} alt={movie.title} />
        <VStack flex={1} p={2} justifyContent="space-between">
          <Text fontSize="md" bold numberOfLines={2}>
            {movie.title}
          </Text>
          <Text fontSize="sm" color="gray.700">
            ⭐ {movie.vote_average.toFixed(1)}
          </Text>
          <FavoriteButton
            movie={movie}
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
        </VStack>
      </HStack>
    </TouchableOpacity>
  )
}

export default memo(Component)
