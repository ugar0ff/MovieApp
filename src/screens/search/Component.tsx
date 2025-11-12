import React from 'react'
import { View, TextInput, FlatList, Text, TouchableOpacity, ActivityIndicator, Image } from 'react-native'
import { styles } from './styles'
import { keyMap, useTranslation } from '@localization'
import type { Movie } from '@types'
import Config from 'react-native-config'

type TProps = {
  query: string
  setQuery: (query: string) => void
  movies: Movie[]
  isLoading: boolean
  isError: boolean
  onMoviePress: (id: number) => void
  onEndReached: () => void
  isFetching: boolean
}

export const Component: React.FC<TProps> = ({
  query,
  setQuery,
  movies,
  isLoading,
  isError,
  onMoviePress,
  onEndReached,
  isFetching,
}) => {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={t(keyMap.search_placeholder)}
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />

      {isLoading && <Text>{t(keyMap.loading)}</Text>}
      {isError && <Text>{t(keyMap.error_loading_movies)}</Text>}

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          isFetching ? <ActivityIndicator style={{ marginVertical: 20 }} size="small" /> : null
        }
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => onMoviePress(item.id)}>
            <Image source={{ uri: `${Config.TMDB_DB}${item.poster_path}` }} style={styles.poster} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.rating}>⭐ {item.vote_average.toFixed(1)}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
