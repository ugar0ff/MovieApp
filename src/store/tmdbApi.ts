import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Movie } from '@types'
import Config from 'react-native-config'
import {
  getPopularMoviesUrl,
  searchMoviesUrl,
  getMovieDetailsUrl,
} from '@api/tmdbApi'

type MoviesResponse = {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.TMDB_DB,
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query<MoviesResponse, number | undefined>({
      query: (page) => getPopularMoviesUrl(page),
    }),
    searchMovies: builder.query<MoviesResponse, { query: string; page?: number }>({
      query: ({ query, page }) => searchMoviesUrl(query, page),
    }),
    getMovieDetails: builder.query<Movie, number>({
      query: (id) => getMovieDetailsUrl(id),
    }),
  }),
})

export const {
  useGetPopularMoviesQuery,
  useSearchMoviesQuery,
  useGetMovieDetailsQuery,
} = tmdbApi
