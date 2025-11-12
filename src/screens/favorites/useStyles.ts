import { createUseStyles } from '@helpers/createUseStyles'

export const { useStyles } = createUseStyles(() => ({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  item: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
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
  },
  empty: {
    flex: 1,
    textAlign: 'center',
    marginTop: 50,
  },
}))
