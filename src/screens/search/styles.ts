import { createUseStyles } from '@helpers/createUseStyles'

export const { useStyles } = createUseStyles(({ insets }) => ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 16,
    paddingHorizontal: 16,
    gap: 16,
  },
  input: {
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  list: {
    paddingBottom: insets.bottom + 16,
  },
}))
