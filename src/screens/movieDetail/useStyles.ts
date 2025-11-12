import { createUseStyles } from '@helpers/createUseStyles'

export const { useStyles } = createUseStyles(() => ({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  poster: {
    width: '100%',
    height: 300,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    marginBottom: 4,
  },
  releaseDate: {
    fontSize: 14,
    marginBottom: 8,
    color: '#666',
  },
  genresContainer: {
    marginBottom: 12,
  },
  genresTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  genresList: {
    fontSize: 14,
    color: '#444',
  },
  overview: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 16,
  },
}))
