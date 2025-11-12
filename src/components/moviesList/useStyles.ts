import { createUseStyles } from '@helpers/createUseStyles'

export const { useStyles } = createUseStyles(() => ({
  container: {
    paddingBottom: 16,
  },
  emptyContainer: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
  },
  indicator: {
    marginVertical: 20,
  },
}))
