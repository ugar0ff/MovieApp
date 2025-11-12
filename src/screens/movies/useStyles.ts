import { createUseStyles } from '@helpers/createUseStyles'

export const { useStyles } = createUseStyles(() => ({
  container: {
    padding: 16,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: { 
    textAlign: 'center',
    marginTop: 40,
  },
}))
