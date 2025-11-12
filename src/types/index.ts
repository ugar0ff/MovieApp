export type Genre = {
  id: number
  name: string
}

export type Movie = {
  id: number
  title: string
  poster_path: string
  overview: string
  release_date: string | null
  genres: Genre[]
  vote_average: number
  rating: number
}
