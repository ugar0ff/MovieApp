import { createUseStyles } from '@helpers/createUseStyles'

export const { useStyles } = createUseStyles(() => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  error: {
    textAlign: 'center',
  },
}))
