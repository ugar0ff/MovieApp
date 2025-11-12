import { URLS } from '@constants'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Movie } from '@types'
import i18n from 'localization/i18n'
import Config from 'react-native-config'

type MoviesResponse = {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URLS.DB,
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query<MoviesResponse, number | void>({
      query: (page = 1) => `movie/popular?api_key=${Config.TMDB_API_KEY}&language=${i18n.locale}&page=${page}`, // TODO: add localization
    }),
    searchMovies: builder.query<MoviesResponse, { query: string; page: number }>({
      query: ({ query, page }) =>
        `search/movie?api_key=${Config.TMDB_API_KEY}&language=${i18n.locale}&query=${encodeURIComponent(
          query
        )}&page=${page}&include_adult=false`,
    }),
    getMovieDetails: builder.query<Movie, number>({
      query: (id) => `movie/${id}?api_key=${Config.TMDB_API_KEY}&language=${i18n.locale}`,
    }),
  }),
})

export const {
  useGetPopularMoviesQuery,
  useSearchMoviesQuery,
  useGetMovieDetailsQuery,
} = tmdbApi
