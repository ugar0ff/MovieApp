import { LIST_GAP } from '@constants'
import { createUseStyles } from '@helpers/createUseStyles'

export const { useStyles } = createUseStyles(() => ({
  container: {
    gap: LIST_GAP,
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
