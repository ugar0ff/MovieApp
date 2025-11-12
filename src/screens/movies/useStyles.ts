import { createUseStyles } from '@helpers/createUseStyles'

export const { useStyles } = createUseStyles(() => ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchContainer: {
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  list: {
    flexGrow: 1,
  },
  item: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
  },
  poster: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  title: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingBottom: 4,
  },
  rating: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  empty: {
    flex: 1,
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#999',
  },
}))
