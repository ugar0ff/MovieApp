import { createUseStyles } from '@helpers/createUseStyles'

export const { useStyles } = createUseStyles(() => ({
  container: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#e6e6e6',
  },
  poster: {
    width: '100%',
    height: 200,
  },
}))
