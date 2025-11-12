import React, { memo } from 'react'
import { ScrollView, Text, Image, Button, View } from 'react-native'
import { useStyles } from './useStyles'
import type { Movie } from '@types'
import { URLS } from '@constants'
import { keyMap, useTranslation } from '@localization'

type TProps = {
  movie: Movie
  isFavorite: boolean
  onToggleFavorite: (movie: Movie) => void
}

const Component = ({ movie, isFavorite, onToggleFavorite }: TProps) => {
  const styles = useStyles()
  const { t } = useTranslation()

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: `${URLS.Image}${movie.poster_path}` }} style={styles.poster} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.rating}>
        {t(keyMap.rating)}: {movie.vote_average.toFixed(1)}
      </Text>
      <Text style={styles.releaseDate}>
        {t(keyMap.release_date)}: {movie.release_date ?? t(keyMap.unknown)}
      </Text>
      {movie.genres && movie.genres.length > 0 && (
        <View style={styles.genresContainer}>
          <Text style={styles.genresTitle}>{t(keyMap.genres)}:</Text>
          <Text style={styles.genresList}>{movie.genres.map((g) => g.name).join(', ')}</Text>
        </View>
      )}
      <Text style={styles.overview}>{movie.overview}</Text>
      <Button
        title={isFavorite ? t(keyMap.remove_from_favorites) : t(keyMap.add_to_favorites)}
        onPress={() => onToggleFavorite(movie)}
      />
    </ScrollView>
  )
}

export default memo(Component)
