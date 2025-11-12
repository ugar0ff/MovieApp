import React, { memo } from 'react'
import { ScrollView, VStack } from 'native-base'
import type { Movie } from '@types'
import Config from 'react-native-config'
import { Poster } from '@components/poster'
import { MovieInfo } from '@components/movieInfo'
import { Genres } from '@components/genres'
import { FavoriteButton } from '@components/favoriteButton'

type TProps = {
  movie: Movie
  isFavorite: boolean
  onToggleFavorite: (movie: Movie) => void
}

const Component = ({ movie, isFavorite, onToggleFavorite }: TProps) => {

  return (
    <ScrollView px={4} py={3}>
      <VStack space={4}>
        <Poster uri={`${Config.TMDB_IMAGE}${movie.poster_path}`} />
        <MovieInfo movie={movie} />
        <Genres genres={movie.genres} />
        <FavoriteButton movie={movie} isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
      </VStack>
    </ScrollView>
  )
}

export default memo(Component)
