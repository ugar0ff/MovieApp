import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '@store'
import { addFavorite, removeFavorite } from '@store/favoritesSlice'
import type { Movie } from '@types'

export const useFavorite = (movie?: Movie) => {
  const dispatch = useDispatch<AppDispatch>()
  const favorites = useSelector((state: RootState) => state.favorites.movies)

  const isFavorite = movie ? favorites.some(m => m.id === movie.id) : false

  const toggleFavorite = useCallback(() => {
    if (!movie) return

    if (isFavorite) {
      dispatch(removeFavorite(movie.id))
    } else {
      dispatch(addFavorite(movie))
    }
  }, [dispatch, isFavorite, movie])

  return { isFavorite, toggleFavorite }
}
