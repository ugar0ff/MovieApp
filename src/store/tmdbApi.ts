import { URLS } from '@constants'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Movie } from '@types'
import Config from 'react-native-config'

type MoviesResponse = {
  results: Movie[]
}

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URLS.DB,
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query<MoviesResponse, void>({
      query: () => `movie/popular?api_key=${Config.TMDB_API_KEY}&language=en-US&page=1`,
    }),
    searchMovies: builder.query<MoviesResponse, string>({
      query: (query) =>
        `search/movie?api_key=${Config.TMDB_API_KEY}&language=en-US&query=${encodeURIComponent(
          query
        )}&page=1&include_adult=false`,
    }),
    getMovieDetails: builder.query<Movie, number>({
      query: (id) => `movie/${id}?api_key=${Config.TMDB_API_KEY}&language=en-US`,
    }),
  }),
})

export const {
  useGetPopularMoviesQuery,
  useSearchMoviesQuery,
  useGetMovieDetailsQuery,
} = tmdbApi
