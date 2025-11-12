import i18n from 'localization/i18n'
import Config from 'react-native-config'

export const getPopularMoviesUrl = (page?: number): string => {
  return `movie/popular?api_key=${Config.TMDB_API_KEY}&language=${i18n.locale}&page=${page ?? 1}`
}

export const searchMoviesUrl = (query: string, page?: number): string => {
  return `search/movie?api_key=${Config.TMDB_API_KEY}&language=${i18n.locale}&query=${encodeURIComponent(
    query,
  )}&page=${page ?? 1}&include_adult=false`
}

export const getMovieDetailsUrl = (id: number): string => {
  return `movie/${id}?api_key=${Config.TMDB_API_KEY}&language=${i18n.locale}`
}
