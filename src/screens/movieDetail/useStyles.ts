import { createUseStyles } from '@helpers/createUseStyles'

export const { useStyles } = createUseStyles(({ insets }) => ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: insets.bottom + 16,
  },
}))
