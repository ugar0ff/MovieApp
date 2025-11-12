import { createUseStyles } from '@helpers/createUseStyles'

export const { useStyles } = createUseStyles(({ insets }) => ({
  container: {
    padding: 16,
    paddingBottom: insets.bottom + 16,
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
