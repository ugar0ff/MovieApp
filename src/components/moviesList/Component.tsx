import React, { memo, useCallback, useMemo } from 'react'
import type { StyleProp, ViewStyle } from 'react-native'
import { FlatList } from 'react-native'
import { View, Text, Spinner } from 'native-base'
import { useStyles } from './useStyles'
import type { Movie } from '@types'
import { MovieCard } from '../movieCard'
import { keyMap } from '@localization'

type TProps = {
  movies: Movie[]
  onPressMovie: (id: number) => void
  onEndReached: () => void
  isFetching: boolean
  emptyMessage?: string
  containerStyle?: StyleProp<ViewStyle>
}

const Component = ({ movies, onPressMovie, onEndReached, isFetching, emptyMessage, containerStyle }: TProps) => {
  const styles = useStyles()

  const contentStyle = useMemo(() => [styles.container, containerStyle], [containerStyle])

  const renderEmpty = useMemo(() => {
    if (isFetching) return null
    return (
      <View style={styles.emptyContainer}>
        <Text>{emptyMessage ?? keyMap.no_movies}</Text>
      </View>
    )
  }, [isFetching, emptyMessage])

  const renderFooter = useMemo(() => (isFetching ? <Spinner style={styles.indicator} /> : null), [isFetching])

  const renderItem = useCallback(
    ({ item }: { item: Movie }) => <MovieCard movie={item} onPress={() => onPressMovie(item.id)} />,
    [onPressMovie]
  )

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={contentStyle}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.4}
      ListEmptyComponent={renderEmpty}
      ListFooterComponent={renderFooter}
      renderItem={renderItem}
    />
  )
}

export default memo(Component)
